# C# Dynamic Programming Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/5636357/](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/5636357/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->o solve the problem of counting the number of ways to paint the grid, we can break down the solution by observing the patterns in smaller grids and using dynamic programming to build up the solution for larger grids.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Initialization: For n = 1, there are 6 ways to paint the grid that ends in type A and 6 ways to paint 
//  it that ends in type B.
//  Dynamic Programming: We use the derived recurrence relations to compute the number of ways to paint 
//  the grid for n > 1.
//  Modulo Operation: Since the result can be large, we take the results modulo 10^9 + 7 as required.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n), because the loop runs 'n' times, and each iteration involves a few arithmetic operations that take constant time.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1), because we only use a constant amount of extra space.
___

# Code
```
public class Solution {
    public int NumOfWays(int n) {
        long mod = 1000000007;

        long a = 6; // initial count for type A when n = 1
        long b = 6; // initial count for type B when n = 1

        for (int i = 2; i <= n; i++) {
            long newA = (2 * a + 2 * b) % mod;
            long newB = (2 * a + 3 * b) % mod;

            a = newA;
            b = newB;
        }

        return (int)((a + b) % mod);
    }
}
```