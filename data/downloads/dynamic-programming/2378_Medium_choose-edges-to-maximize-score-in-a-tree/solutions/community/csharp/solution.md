# C# | Rush in 30 minutes | Java -> C# | DFS

**Author:** jianminchen
**Votes:** 0
**Link:** [https://leetcode.com/problems/choose-edges-to-maximize-score-in-a-tree/solutions/4232658/](https://leetcode.com/problems/choose-edges-to-maximize-score-in-a-tree/solutions/4232658/)

---

Oct. 31, 2023
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It is a challenge algorithm. I like to spend 30 minutes to convert Java code to C# code, and understand how to solve this problem using C# and DFS algorithm. 

# Approach
<!-- Describe your approach to solving the problem. -->
I like to spend 30 minutes to learn how to write a working solution. Based on solution written in Java
https://leetcode.com/problems/choose-edges-to-maximize-score-in-a-tree/solutions/2718139/java-time-o-n-space-o-h-dp-dfs/

**DFS**
Search the entire tree, and visit node by node, and for every node, two values are calculated, and the best score can be calcuated in the end. 

value1
First value: Max score we can get if we do not consider any edge connecting this node to its children. So max score can only come from its children

value2
Second value: max score if we consider one edge, lets say, node -> ch_3 with weight $w$
How do we calculate this max score? 

My goal is to understand time complexity is linear, and also use DFS algorithm to calculate the maximum score. I will come back later for detail - how to do calculation. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N), N is total number of nodes in the tree. 
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
The following C# code passes online judge. 

```
public class Solution {
    public long MaxScore(int[][] edges)
        {
            int n = edges.Length;

            // I came cross index-out-of-range error
            // Java -> C#
            var graph = new List<int[]>[n];

            for(int i = 0; i < n;i++)
            {
                graph[i] = new List<int[]>();
            }
        
            int root = 0;

            for (int i = 0; i < n; i++)
            {
                if (edges[i][0] != -1)
                {
                    graph[edges[i][0]].Add(new int[] { i, edges[i][1] });
                }
            }
        
            long[] result = runDFS(graph, root);
            return Math.Max(result[0], result[1]);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="graph"></param>
        /// <param name="node"></param>
        /// <returns></returns>
        private long[] runDFS(List<int[]>[] graph, int node){
            var result = new long[2];
        
            foreach(var nei in graph[node])
            {
                var neiResult = runDFS(graph, nei[0]);

                var tmp = Math.Max(neiResult[0], neiResult[1]);

                result[0] += tmp;
                result[1] = Math.Max(result[1], nei[1] + neiResult[0] - tmp); 
            }
        
            result[1] += result[0];

            return result;
        }
}
```