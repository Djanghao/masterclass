# c#, Dictionary

**Author:** bytchenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-divisible-triplet-sums/solutions/4403591/](https://leetcode.com/problems/number-of-divisible-triplet-sums/solutions/4403591/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Naive solution requires $$O(n^3)$$ operations; we can reduce time complexity to $$O(n^2)$$ with a help of dictionary

# Approach
<!-- Describe your approach to solving the problem. -->
We loop over `nums` for `left` and `right` indexes, while taking number of possible middle indexes from `dict`ionary.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
public class Solution {
  public int DivisibleTripletCount(int[] nums, int d) {
    int result = 0;

    for (int left = 0; left < nums.Length - 2; ++left) {
      var dict = new Dictionary<int, int>();

      for (int i = left + 1; i < nums.Length; ++i) 
        dict[nums[i] % d] = dict.TryGetValue(nums[i] % d, out int v) ? v + 1 : 1; 

      for (int right = nums.Length - 1; right > left; --right) {
        int rightValue = nums[right] % d; 

        dict[rightValue] -= 1;

        result += dict.TryGetValue((d - (rightValue + nums[left] % d) % d) % d, out int v) ? v : 0; 
      }
    }
        
    return result;    
  }
}
```