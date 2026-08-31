# Sliding window

**Author:** bxa
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/4062779/](https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/4062779/)

---

# Intuition
We want to squeeze the sliding window to be minimum width. While we squeezing it, every sliding window [i,j] means there are 

    nums.length - j

number of subarray that meet the condition.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int countGood(List<int> nums, int k) {
    HashMap<int, int> map = HashMap();
    var res = 0;
    var pairs = 0;
    var i = 0;
    for (int j = 0; j < nums.length; j++) {
      // new pairs contributed
      pairs += map[nums[j]] ?? 0;
      map[nums[j]] = (map[nums[j]] ?? 0) + 1;
      while (pairs >= k) {
        res += nums.length - j;
        map[nums[i]] = map[nums[i]]! - 1;
        pairs -= map[nums[i]]!;
        i++;
      }      
    }
    return res;
  }
}



```