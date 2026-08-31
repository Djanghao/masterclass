# C# concise topological sort | 142ms 97%

**Author:** Legon2k
**Votes:** 4
**Link:** [https://leetcode.com/problems/course-schedule-ii/solutions/3177608/](https://leetcode.com/problems/course-schedule-ii/solutions/3177608/)

---

# Code
```
public class Solution {
    public int[] FindOrder(int numCourses, int[][] prerequisites) {
        var degree = new int [numCourses];

        var parentToChildren = prerequisites.ToLookup(
                p => p[1], 
                c => { degree[c[0]]++; return c[0]; });

        var bfs = new List<int>(numCourses);

        for (int i = 0; i < numCourses; ++i) 
            if (degree[i] == 0) bfs.Add(i);

        for (int i = 0; i < bfs.Count; ++i)
        {
            foreach (var j in parentToChildren[bfs[i]])
            {
                if (--degree[j] == 0) 
                    bfs.Add(j);
            }
        }

        return bfs.Count == numCourses ? bfs.ToArray() : new int[0];
    }
}
```