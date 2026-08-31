# C# & Python 3 Solutions | Dictionary | DFS

**Author:** Nick_Bykon
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/3039554/](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/3039554/)

---

# Approach
In this approach, we traverse from the root nodes to the leaf node and count the number of characters using DFS. 
We don\u2019t need to create counts array and iterate over it in every call. Instead, we can store single array for all calls, which has counts of visited labels for all time. Then, the answer for some node is the difference between this label visits count before and after handling this node. Thanks to **@8symbols**.

**If you like it, please upvote. Thanks**

![\u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435.png](./images/0.png)


# Code - C#
```
public class Solution {
    public int[] CountSubTrees(int n, int[][] edges, string labels) {
        int[] answer = new int[n];
        Dictionary<char, int> counts = new();
        Dictionary<int,List<int>> tree = BuildTree(edges);
        void DFS(int node, int parent) {
            if(!counts.ContainsKey(labels[node]))
                counts.Add(labels[node], 0);

            int previous = counts[labels[node]];
            counts[labels[node]]++;

            foreach (int child in tree[node])
                if (child != parent) DFS(child, node);
            
            answer[node] = counts[labels[node]] - previous;
        }
        DFS(0, -1);
        return answer;
    }

    public Dictionary<int,List<int>> BuildTree(int[][] edges){
        Dictionary<int,List<int>> tree = new();
        foreach(var edge in edges){
            int a = edge[0], b = edge[1];
            if(!tree.ContainsKey(a)) tree.Add(a,new List<int>());
            if(!tree.ContainsKey(b)) tree.Add(b, new List<int>());
            tree[a].Add(b);
            tree[b].Add(a);
        }
        return tree;
    }
}
```
![\u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435.png](./images/1.png)

# Code - Python 3
```
class Solution:
    def countSubTrees(self, n: int, edges: List[List[int]], labels: str) -> List[int]:
        graph = [[] for _ in range(n)]
        for a, b in edges:
            graph[a].append(b)
            graph[b].append(a)
            
        counts = {}
        answer = [0] * n
        
        def dfs(node, parent):
            if labels[node] not in counts:
                counts[labels[node]] = 0

            previous = counts[labels[node]]
            counts[labels[node]] += 1
            
            for child in graph[node]:
                if child != parent:
                    dfs(child, node)
                    
            answer[node] = counts[labels[node]] - previous
        
        dfs(0, -1)
        return answer
```