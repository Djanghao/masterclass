# c#, direct computation

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-product-queries-of-powers/solutions/2707581/](https://leetcode.com/problems/range-product-queries-of-powers/solutions/2707581/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
we can precompute `powers` and then perform each query

# Approach
<!-- Describe your approach to solving the problem. -->
direct computation

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
public class Solution {
    public int[] ProductQueries(int n, int[][] queries) {
        List<int> powers = new();

        for (int i = 0; i <= 31; ++i)
            if ((n & (1 << i)) != 0)
                powers.Add(1 << i);

        int[] result = new int[queries.Length];

        for (int i = 0; i < result.Length; ++i) {
            int left = queries[i][0];
            int right = queries[i][1];

            long v = 1;

            for (int j = left; j <= right; ++j) 
                v = (v * powers[j]) % 1_000_000_007;
            
            result[i] = (int) v;
        }   

        return result; 
    }
}
```