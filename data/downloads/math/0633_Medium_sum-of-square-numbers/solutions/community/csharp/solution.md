# C# Solution for Sum of Square Numbers Problem

**Author:** Aman_Raj_Sinha
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-square-numbers/solutions/5329015/](https://leetcode.com/problems/sum-of-square-numbers/solutions/5329015/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1.	Iterate through possible values of  a : From 0 to  \\sqrt{c} .
2.	Calculate  a^2 : For each  a , calculate  a^2 .
3.	Check if  b  is a perfect square: Calculate  b^2 = c - a^2  and check if  b^2  is a perfect square.

# Approach
<!-- Describe your approach to solving the problem. -->
\u2022	Iteration: Iterate through all possible values of  a  from 0 to  sqrt{c} .
\u2022	Perfect Square Check: For each  a , compute  b^2 = c - a^2  and check if  b^2  is a perfect square using the IsPerfectSquare function.
\u2022	Binary Search for Perfect Square: The IsPerfectSquare function checks if a number is a perfect square using binary search, which is efficient.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	The time complexity is  O(sqrt{c} log c)  because for each  a , we perform a binary search to check if  b^2  is a perfect square.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	The space complexity remains  O(1)  as we are using a constant amount of extra space for variables.

# Code
```
public class Solution {
    public bool JudgeSquareSum(int c) {
        if (c < 0) {
            return false;
        }
        
        for (long a = 0; a * a <= c; a++) {
            long aSquare = a * a;
            long bSquare = c - aSquare;
            if (IsPerfectSquare(bSquare)) {
                return true;
            }
        }
        
        return false;
    }
    private bool IsPerfectSquare(long num) {
        long left = 0;
        long right = num;
        while (left <= right) {
            long mid = left + (right - left) / 2;
            long midSquare = mid * mid;
            if (midSquare == num) {
                return true;
            } else if (midSquare < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false;
    }
}
```