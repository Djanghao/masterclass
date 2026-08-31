# C# two pointer

**Author:** reliancefresh
**Votes:** 3
**Link:** [https://leetcode.com/problems/most-profit-assigning-work/solutions/3872181/](https://leetcode.com/problems/most-profit-assigning-work/solutions/3872181/)

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
    public int MaxProfitAssignment(int[] difficulty, int[] profit, int[] worker) {
        Array.Sort(difficulty, profit);
        Array.Sort(worker);
        
        int i = 0, j = 0, maxpro = 0, res = 0;
        
        while(j < worker.Length)
        {
            if(i < difficulty.Length && difficulty[i] <= worker[j])
            {
                maxpro = Math.Max(maxpro, profit[i]);
                i++;
            }
            else
            {
                res += maxpro;
                j++;
            }
        }
        return res;
    }
}
```