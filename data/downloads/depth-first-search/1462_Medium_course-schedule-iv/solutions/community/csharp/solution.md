# C# Floyd-Warshall Algorithm Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/course-schedule-iv/solutions/5640982/](https://leetcode.com/problems/course-schedule-iv/solutions/5640982/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->We need to determine whether a given course is a prerequisite for another course. This is a classic problem that can be approached using graph theory, particularly with the help of the Floyd-Warshall algorithm for finding transitive closure in a directed graph.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Graph Representation:
//  *We represent the courses as a directed graph where an edge from node u to node v implies that course 
//  u is a prerequisite of course v.
//  *We use a 2D boolean array isPrerequisite where isPrerequisite[i, j] is true if course i is a 
//  prerequisite for course j.
//  Floyd-Warshall Algorithm:
//  *This algorithm helps in finding the transitive closure of a graph, which means it determines if 
//  there is a path from every node to every other node.
//  *For each pair (i, j), if there's an intermediate course k such that i is a prerequisite for k and k 
//  is a prerequisite for j, then i is a prerequisite for j.
//  Query Resolution:
//  *For each query, we simply check the isPrerequisite array to see if the course uj is a prerequisite
//  of course vj.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n^3), where 'n' is the number of courses.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n^2), due to the storage required for the 'isPrerequisite' matrix.
___

# Code
```
using System;
using System.Collections.Generic;

public class Solution {
    public IList<bool> CheckIfPrerequisite(int numCourses, int[][] prerequisites, int[][] queries) {
        // Create a 2D array to store reachability between courses
        bool[,] isPrerequisite = new bool[numCourses, numCourses];

        // Fill the direct prerequisites
        foreach (var prerequisite in prerequisites) {
            int u = prerequisite[0];
            int v = prerequisite[1];
            isPrerequisite[u, v] = true;
        }

        // Floyd-Warshall Algorithm to calculate transitive closure
        for (int k = 0; k < numCourses; k++) {
            for (int i = 0; i < numCourses; i++) {
                for (int j = 0; j < numCourses; j++) {
                    if (isPrerequisite[i, k] && isPrerequisite[k, j]) {
                        isPrerequisite[i, j] = true;
                    }
                }
            }
        }

        // Answer the queries
        List<bool> result = new List<bool>();
        foreach (var query in queries) {
            int u = query[0];
            int v = query[1];
            result.Add(isPrerequisite[u, v]);
        }

        return result;
    }
}
```