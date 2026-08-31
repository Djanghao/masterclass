# Easy solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-changing-keys/solutions/5966370/](https://leetcode.com/problems/number-of-changing-keys/solutions/5966370/)

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
    public int CountKeyChanges(string s) {
        int res=0;
        char prev=s[0];
        for(int i=1;i<s.Length;i++)
        {
            if(Char.ToLower(prev)!=Char.ToLower(s[i]))
            {
                res++;
                prev=s[i];
            }
        }
        return res;
    }
}
```