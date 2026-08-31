# O(n)

**Author:** tt_nk
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/4172705/](https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/4172705/)

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
```
public class Solution {
    public int CountHousePlacements(int n) {
        int mod = 1000000007;
        long a=1;long b=1;
        long c=a+b;
        for(int i=2;i<=n;i++){
           a=b;
           b=c;
           c=(a+b)%mod;
        }
        return (int)((c*c) % mod);
    }
}
```