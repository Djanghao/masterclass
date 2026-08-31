# Simple small solution

**Author:** momojojjo
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/3619738/](https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/3619738/)

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
    public long MatrixSumQueries(int n, int[][] queries) {
        
        var rows = new HashSet<int>();
        var columns = new HashSet<int>();
        long sum = 0;

        for(int i = queries.Length - 1; i >= 0; i--)
        {
            var isRow = queries[i][0] == 0;
            var isColumn = queries[i][0] == 1;
            var index = queries[i][1];
            var val =  queries[i][2];

            if(isRow && !rows.Contains(index))
            {
                sum += (n - columns.Count) * val;
                rows.Add(index);
            }
            else if(isColumn && !columns.Contains(index))
            {
                sum +=  (n - rows.Count) * val;
                columns.Add(index);
            }
        }

        return sum;
    }
}
```