# 🔥💯 C# 💯🔥

**Author:** sultanalif533
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/5608090/](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/5608090/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(QlogQ + MNlogMN)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    static int[,] ways = {{0,1},{0,-1},{1,0},{-1,0}};
    public int[] MaxPoints(int[][] grid, int[] queries) {
        int[] ans = new int[queries.Length];
        Dictionary<int, List<int>> map = new Dictionary<int, List<int>>();
        for(int i=0;i<queries.Length;i++)
        {
            if(!map.ContainsKey(queries[i])) map.Add(queries[i], new List<int>());
            map[queries[i]].Add(i);
        }
        Array.Sort(queries);
        PriorityQueue<(int,int),int> q = new PriorityQueue<(int,int),int>();
        q.Enqueue((0,0),0);
        bool[,] vis = new bool[grid.Length,grid[0].Length];
        vis[0,0] = true;
        int p = 0;
        for(int i=0;i<queries.Length;i++)
        {
            while(q.Count>0)
            {
                var (x,y) = q.Peek();
                if(grid[x][y]>=queries[i]) break;
                p++;
                q.Dequeue();
                for(int j=0;j<4;j++)
                {
                    int dx = x + ways[j,0];
                    int dy = y + ways[j,1];
                    if(dx<0||dx>=grid.Length||dy<0||dy>=grid[0].Length||vis[dx,dy]) continue;
                    vis[dx,dy] = true;
                    q.Enqueue((dx,dy),grid[dx][dy]);
                }
            }
            ans[map[queries[i]][0]] = p;
            map[queries[i]].RemoveAt(0);
        }
        return ans;
    }
}
```