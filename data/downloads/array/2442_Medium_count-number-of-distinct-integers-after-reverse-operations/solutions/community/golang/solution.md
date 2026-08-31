# No need of array modification. Medium (aka Easy) Question

**Author:** muhammadfarhankt
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/5050841/](https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/5050841/)

---

# Intuition
- To solve this problem, we can iterate through the given array of integers. For each integer, we reverse its digits and add both the original and reversed integers to a set. Finally, we return the size of the set, which represents the count of distinct integers in the final array.

# Approach
1. Initialize an empty set to store distinct integers.
2. Iterate through the given array of integers.
3. For each integer, add both the original integer and its reversed form to the set.
4. Return the size of the set as the count of distinct integers.

# Complexity
- Time complexity: O(n), where `\uD835\uDC5B` is the length of the input array. We iterate through the array once to process each integer.
- Space complexity:  O(n), the space used by the set to store distinct integers. In the worst case, all integers in the input array are distinct, resulting in a set of size `n`.

```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let set = new Set(nums);
    nums.forEach(num => {
        let reverseNum = parseInt(num.toString().split('').reverse().join(''));
        set.add(reverseNum);
    });
    return set.size;
};
```
```python []
class Solution(object):
    def countDistinctIntegers(self, nums):
        nums_set = set(nums)
        for num in nums:
            reverse_num = int(str(num)[::-1])
            nums_set.add(reverse_num)
        return len(nums_set)
```
```dart []
class Solution {
  int countDistinctIntegers(List<int> nums) {
    Set<int> distinctIntegers = Set<int>.from(nums);
    for (int num in nums) {
      int reverseNum = int.parse(num.toString().split('').reversed.join(''));
      distinctIntegers.add(reverseNum);
    }
    return distinctIntegers.length;
  }
}
```
```golang []
func countDistinctIntegers(nums []int) int {
    numsMap := make(map[int]bool, len(nums)*2)
    for i := 0; i < len(nums); i++ {
        numsMap[nums[i]] = true
        numsMap[reverse(nums[i])] = true
    }
    return len(numsMap)
}
func reverse(num int) int {
    rev := 0
    for num > 0 {
        rev = (rev * 10) + (num % 10)
        num /= 10
    }
    return rev
}
```
```java []
class Solution {
    public int countDistinctIntegers(int[] nums) {
        Set<Integer> distinctIntegers = new HashSet<>();
        for (int num : nums) {
            distinctIntegers.add(num);
            int reverseNum = Integer.parseInt(new StringBuilder().append(num).reverse().toString());
            distinctIntegers.add(reverseNum);
        }
        return distinctIntegers.size();
    }
}
```
```C++ []
class Solution {
public:
    int countDistinctIntegers(vector<int>& nums) {
        unordered_set<int> distinctIntegers;
        for (int num : nums) {
            distinctIntegers.insert(num);
            int reverseNum = 0, temp = num;
            while (temp > 0) {
                reverseNum = reverseNum * 10 + temp % 10;
                temp /= 10;
            }
            distinctIntegers.insert(reverseNum);
        }
        return distinctIntegers.size();
    }
};
```
``` C []
int countDistinctIntegers(int* nums, int numsSize) {
    int distinctIntegers[1000000] = {0};
    for (int i = 0; i < numsSize; ++i) {
        distinctIntegers[nums[i]] = 1;
        int reverseNum = 0, temp = nums[i];
        while (temp > 0) {
            reverseNum = reverseNum * 10 + temp % 10;
            temp /= 10;
        }
        distinctIntegers[reverseNum] = 1;
    }
    int count = 0;
    for (int i = 0; i < 1000000; ++i) {
        if (distinctIntegers[i] == 1) {
            count++;
        }
    }
    return count;
}
```