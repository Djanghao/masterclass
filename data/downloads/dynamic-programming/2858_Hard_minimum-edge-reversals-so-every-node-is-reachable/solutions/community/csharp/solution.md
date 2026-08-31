# O(n): DFS and Rerooting

**Author:** thisNameIsOriginal
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/solutions/4062624/](https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/solutions/4062624/)

---

# Approach/Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Let's say we have found out the answer for a node 'x' by assuming its the root. Now, we want to find the answer for its child 'k'. 

Lets dissect the answer we found for 'x':
1. It contains all the reverses required in the subtree of 'k'.
2. It contains all the reverses required in the subtree of children other than 'k'.
3. It contains the reverses required JUST between 'x' and its immediate children, including 'k'.

Lets now dissect the answer for 'k':
1. It contains all the reverses required in its subtree. 
2. It contains the reverse required to reach from 'k' to 'x'.
3. It contains the reverses required to reach all nodes under other children of 'x'

Point 1 and 3 are already part of the answer we calculated for parent. We just need to adjust the reverse, if required, to go from 'k' to 'x'. Either the answer of 'x' contains a reversed edge between 'x' and 'k' in that case we will subtract 1 from the answer since, we don't need that reverse edge because we can go from 'k' to 'x' in its original direction. We add 1 in the opposite case.

Okay, lets just make sure we know how to calculate for 'x':
- We create an undirected array out of the edges but make a note of all original directions.
- To calculate for 'x', we recursively call in a DFS fashion, it's children to find edge reversals required in their subtrees.
- For each child, We add '1' if there is no edge from 'x' to that child.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
public class Solution {
    Dictionary<int,List<int>> g;
    HashSet<(int,int)> original;
    int[] answer;
    
    private int DFS(int curr, int p) {
        int ans = 0;
        foreach(var next in g[curr]) {
            if (next == p) continue;
            // Add 1 if we going against the original direction
            ans+=DFS(next,curr) + (original.Contains((curr,next)) ? 0 : 1);
        }
        return ans;
    }
    
    private void Reroot(int curr, int p) {
        // Adjust for the direction of edge between curr and parent.
        answer[curr] = answer[p] + (original.Contains((curr,p)) ? -1 : 1);
        foreach(var next in g[curr]) {
            if (next == p) continue;
            Reroot(next,curr);
        }
    }
    
    public int[] MinEdgeReversals(int n, int[][] edges) {
        answer = new int[n];
        original = new();
        g = new();
        
        foreach(var edge in edges) {
            original.Add((edge[0], edge[1]));
            if (!g.ContainsKey(edge[0])) g.Add(edge[0], new());
            if (!g.ContainsKey(edge[1])) g.Add(edge[1], new());
            g[edge[0]].Add(edge[1]);
            g[edge[1]].Add(edge[0]);
        }
        
        answer[0] = DFS(0,-1);
        foreach(var next in g[0]) {
            Reroot(next,0);
        }
        return answer;
    }
}
```