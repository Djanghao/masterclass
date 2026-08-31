# SUPER easy solution in C# O(n), using math. No dynamic programming!✅✅✅

**Author:** bogdanonline444
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotate-function/solutions/5435393/](https://leetcode.com/problems/rotate-function/solutions/5435393/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
F(j)=F(j-1)+sum-n\u22C5nums[n-j]
where n is the length of the array, and nums[n-j] is the element that "moves" from the end of the array to the beginning after rotation.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MaxRotateFunction(int[] nums) {
        int n = nums.Length;
        int sum = 0;
        int F = 0;

        for (int i = 0; i < n; i++) 
        {
            sum += nums[i];
            F += i * nums[i];
        }

        int res = F;

        for (int j = 1; j < n; j++) 
        {
            F += sum - n * nums[n - j];
            res = Math.Max(res, F);
        }

        return res;
    }
}
```
![89f26eaf70fa927a79d4793441425859.jpg](./images/0.jpeg)
