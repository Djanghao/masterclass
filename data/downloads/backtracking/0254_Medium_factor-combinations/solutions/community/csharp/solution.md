# C# solution - sqrt(N)

**Author:** gogol1anonly
**Votes:** 0
**Link:** [https://leetcode.com/problems/factor-combinations/solutions/5994760/](https://leetcode.com/problems/factor-combinations/solutions/5994760/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
Sqrt(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    IList<IList<int>> result;
    public IList<IList<int>> GetFactors(int n) {
        result = new List<IList<int>>();
        if(n>3) {
            DFSFactors(n , n, new List<int>(), 2);
        }
        return result;
    }

    private void DFSFactors(int n, int remaining, List<int> factors, int last) {
        // if remaining is 1 then complete
        if(remaining == 1) {
            // add to result
            result.Add(new List<int>(factors));
            return;
        }

        for(int i=last; i<=Math.Sqrt(remaining); i++) {
            if(remaining % i == 0) {
                List<int> facts = new List<int>(factors);
                facts.Add(i); 
                DFSFactors(n, remaining/i, facts , i);
            }
        }

        if(remaining >= last && remaining != n) {
            List<int> facts = new List<int>(factors);
            facts.Add(remaining); 
            DFSFactors(n,1,facts,remaining);
        }
    }
}
```