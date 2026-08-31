# Easy solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-arrangements/solutions/5920817/](https://leetcode.com/problems/prime-arrangements/solutions/5920817/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int NumPrimeArrangements(int n) {
        const int m = 1000000007;
        int[] p = new int[] { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101 };
        int pe = p.Count(x => x <= n);
        long res=1;
        for(int i=pe;i>=2;i--)
        {
            res*=i;
            res%=m;
        }
        for(int i=n-pe;i>=2;i--)
        {
            res*=i;
            res%=m;
        }
        return (int)res;

    }
}
```