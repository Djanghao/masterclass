# Easy Solution using map in Dart (map is HashMap in Java)

**Author:** leotran9x
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-unique-number/solutions/4342781/](https://leetcode.com/problems/largest-unique-number/solutions/4342781/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
HashMap
# Approach
<!-- Describe your approach to solving the problem. -->
We'll need to create a map that match each number and its frequency.
Then we iterate through each key-value pair in map and find the max number.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
class Solution {
  int largestUniqueNumber(List<int> nums) {
    Map<int, int> map = {};
    for(int n in nums){
        map[n] = (map[n] ?? 0) + 1;
    }
    int result = -1;
    map.forEach((key, val){
        if(val == 1){
            result = max(result, key);
        }
    });
    return result;
  }
}
```