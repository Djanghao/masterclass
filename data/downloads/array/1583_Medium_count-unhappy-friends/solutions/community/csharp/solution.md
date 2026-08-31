# Count Unhappy Friends

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-unhappy-friends/solutions/5486775/](https://leetcode.com/problems/count-unhappy-friends/solutions/5486775/)

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
    public int UnhappyFriends(int n, int[][] preferences, int[][] pairs) {
        
        int[,] rank = new int[n,n];
        
        for(int i=0; i<n; i++)
        {
            int[] pref = preferences[i];
            for(int j=0; j<pref.Length; j++)
            {
                rank[i,pref[j]] = j+1;
            }
        }
        HashSet<int> uh = new ();
        for(int i=0; i<pairs.Length; i++)
        {
            int f1 = pairs[i][0];
            int f2 = pairs[i][1];
            for(int j=0; j<pairs.Length; j++)
            {
                if (i == j)
                {
                    continue;
                }
                int f3 = pairs[j][0];
                int f4 = pairs[j][1];
                if (rank[f1,f3] < rank[f1,f2] && rank[f3,f1] < rank[f3,f4])
                {
                    uh.Add(f1);
                }
                if (rank[f1,f4] < rank[f1,f2] && rank[f4,f1] < rank[f4,f3])
                {
                    uh.Add(f1);
                }
                if (rank[f2,f3] < rank[f2,f1] && rank[f3,f2] < rank[f3,f4])
                {
                    uh.Add(f2);
                }
                if (rank[f2,f4]< rank[f2,f1] && rank[f4,f2] < rank[f4,f3])
                {
                    uh.Add(f2);
                }
            }
        }
        return uh.Count;
    }
}
```