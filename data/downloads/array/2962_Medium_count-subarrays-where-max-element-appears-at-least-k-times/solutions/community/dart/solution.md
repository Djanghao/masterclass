# dart easy solution

**Author:** 4khil_Raj
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4940255/](https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4940255/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(log n)

# Code
```
class Solution {
  int countSubarrays(List<int> nums, int k) {
    int count = 0;
    int max = nums.reduce((value, element) => value > element ? value : element);
    print(max);
    int current = 0;
    int i = 0;
    for (int j=0;j<nums.length;j++) {
      if (nums[j] == max) {
        current++;
      }
      while (current>= k) {
        count += nums.length-j;
        if (nums[i] == max) {
          current--;
        }
        i++;
      }
    }
    return count;
  }
}


```