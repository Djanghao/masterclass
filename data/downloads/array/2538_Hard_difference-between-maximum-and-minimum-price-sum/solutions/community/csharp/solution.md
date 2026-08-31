# Graph traversal, C#

**Author:** user4435YF
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/solutions/3357145/](https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/solutions/3357145/)

---



# Complexity
- Time complexity:
$$O(n)$$ 
Every node gets visited exactly once during recursive solution.

- Space complexity:
$$O(n)$$ for graph connectivity and also $$O(n)$$ worst-case stack requirement

# Code
```
public class Solution {
    public long MaxOutput(int n, int[][] edges, int[] price) {
        var conn = new List<int>[n];
        for(int i = 0; i < n; i++)
            conn[i] = new List<int>();
        foreach(var v in edges)
        {
            conn[v[0]].Add(v[1]);
            conn[v[1]].Add(v[0]);
        }

        int best = 0;
        bool[] visited = new bool[n];

        //We are looking for the max sum of a path without counting one element at one end of the path
        //Approach: 
        //for every subtree of node, find its max sum and its max sum without last element
        //From these values, calculate maximum sum of path crossing this node
        //iteratively visit every node
        (int node, int sum, int sumWithoutLast) traverse(int node)
        {            
            visited[node] = true;
            var subtrees = new List<(int node, int sum, int sumWithoutLast)>();
            foreach(int c in conn[node])
            {                
                if(!visited[c])
                    subtrees.Add(traverse(c));
            }
            //leaf node
            if(subtrees.Count == 0)
                return (node, price[node], 0);

            //only one node, path starts or ends here
            if(subtrees.Count == 1)
            {
                best = Math.Max(best, subtrees[0].sumWithoutLast + price[node]);
                best = Math.Max(best, subtrees[0].sum);
                return (node, subtrees[0].sum + price[node], subtrees[0].sumWithoutLast + price[node]);
            }

            //>=2  child nodes, max sum path must be crossing this node
            subtrees.Sort((x, y) => y.sum.CompareTo(x.sum));
            var bySum1 = subtrees[0];
            var bySum2 = subtrees[1];
            subtrees.Sort((x, y) => y.sumWithoutLast.CompareTo(x.sumWithoutLast));
            var bySumWO1 = subtrees[0];
            var bySumWO2 = subtrees[1];
            if(bySum1.node != bySumWO1.node)
            {
                //best sum node and best sum without last node are different, therefore we may use the best node of both
                best = Math.Max(best, bySum1.sum + bySumWO1.sumWithoutLast + price[node]);
            }
            else
            {
                //best sum node and best sum without last node are equal
                //therefore we may use only one of them and must use the second best for the other one
                best = Math.Max(best, bySum1.sum + bySumWO2.sumWithoutLast + price[node]);
                best = Math.Max(best, bySum2.sum + bySumWO1.sumWithoutLast + price[node]);
            }
            return (node, bySum1.sum + price[node], bySumWO1.sumWithoutLast + price[node]);
        }

        traverse(0);
        return best;
    }
}
```