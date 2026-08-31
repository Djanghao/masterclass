# Easy solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-square-sum-triples/solutions/5952242/](https://leetcode.com/problems/count-square-sum-triples/solutions/5952242/)

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
    public int CountTriples(int n) {
        int count=0;
        for(int i=1;i<=n;i++)
        {
            for(int j=1;j<=n;j++)
            {
                for(int k=1;k<=n;k++)
                {
                    if((i*i)+(j*j)==(k*k))
                    {
                        count++;
                    }
                }
            }
        }
        return count;
    }
}
```