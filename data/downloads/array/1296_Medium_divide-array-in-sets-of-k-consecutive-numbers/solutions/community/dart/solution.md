# Dart solution

**Author:** mohamedsameh92
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/5266325/](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/5266325/)

---



# Code
```
class Solution {
  bool isPossibleDivide(List<int> nums, int k) {
    if (nums.length % k != 0) {
        return false;
    }
    Map<int, int> countMap = {};

    for (int card in nums) {
        countMap.update(
        card,
        (value) => value+1,
        ifAbsent: () => 1,
        );
    }
    print(countMap);
    nums.sort();

    for (int i = 0; i < nums.length; i++) {
        
        if (countMap[nums[i]] == 0) {
            continue;
        }

        for (int j = 0; j < k; j++) {
            int currCard = nums[i] + j;

            if (countMap[currCard] == 0 || countMap[currCard] == null ) {
                return false;
            }

            countMap[currCard] = countMap[currCard]! - 1;
        }
    }

    return true;
  }
}
```