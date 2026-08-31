# c#, greedy solution

**Author:** bytchenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/2700113/](https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/2700113/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Add items to current subarray while it's possible

# Approach
<!-- Describe your approach to solving the problem. -->
Euclid algorithm for gcd, simple array scan

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n * log(n))

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
public class Solution {

    private static int Gcd(int a, int b) => a % b == 0 
        ? b
        : Gcd(b, a % b);
    
    public int MinimumSplits(int[] nums) {
        int gcd = nums[0];
        int result = 1;

        for (int i = 1; i < nums.Length; ++i) {
            gcd = Gcd(gcd, nums[i]);

            if (gcd == 1) {
                gcd = nums[i];

                result += 1;
            }
        }

        return result;
    }
}
```