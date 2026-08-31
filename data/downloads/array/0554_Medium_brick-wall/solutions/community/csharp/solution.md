# C# dictionary

**Author:** Jyo238
**Votes:** 1
**Link:** [https://leetcode.com/problems/brick-wall/solutions/3763249/](https://leetcode.com/problems/brick-wall/solutions/3763249/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O (m*n + k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int LeastBricks(IList<IList<int>> wall) {
          Dictionary<int,int> dict = new ();
          foreach(var col in wall)
          {
              var sum = 0;
              //we don't consider the last brick
              for(var i = 0;i<col.Count-1;i++)
              {
                sum+=col[i];
                if(!dict.ContainsKey(sum))
                {
                    dict.Add(sum,0);
                }
                dict[sum]++;
              }
          }

        var res = wall.Count;
        foreach (var dic in dict) 
        {
            res = Math.Min(res, wall.Count - dic.Value);
        }
        return res;
    }
}
```