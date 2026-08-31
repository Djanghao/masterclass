# c# solution

**Author:** Pachisi
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-skyline-problem/solutions/3273756/](https://leetcode.com/problems/the-skyline-problem/solutions/3273756/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
- O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public IList<IList<int>> GetSkyline(int[][] buildings) {
        HashSet<int> set = new();
        foreach(var building in buildings){
            set.Add(building[0]);
            set.Add(building[1]);
        }

        var res = new List<IList<int>>();

        foreach(var x in set.OrderBy(x=>x))
            Console.WriteLine(x);

        int max = 0; 
        foreach(var pos in set.OrderBy(x=>x)){
            max = 0;
            foreach(var building in buildings){
                if(pos >= building[0] && pos < building[1]){
                    max = Math.Max(max, building[2]);
                }
            }

            if(res.Count == 0 || res.Last()[1] != max){
                res.Add(new int[]{pos, max});
            }
        }
            
        return res;
    }
}
```