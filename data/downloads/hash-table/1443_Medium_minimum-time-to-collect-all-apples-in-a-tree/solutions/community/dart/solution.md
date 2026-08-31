# DFS solution using dart

**Author:** MohamedElrashidy
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/solutions/3036235/](https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/solutions/3036235/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First I need to determine when there is no more apples in this Path so there is no need to move through, then make dfs on all valid paths to calculate time 
# Approach
<!-- Describe your approach to solving the problem. -->
I constructed a graph and determine the parent of each node using dfs ,then I make dfs from each apple and mark nodes I path through,then I make normal dfs if the next node is not determined I stop as there is no more apples in this path, ans is added 2 for each new edge on for go forward and one for going back
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n);
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
class Solution {
  List<List<int>> reverseDirectedGraph=[];
  List<List<int>> undirectedGraph=[];
  List<bool> isThereApple=[];

  void recordPath(int parent)
  {
    if(isThereApple[parent]==true)
      return ;
    isThereApple[parent]=true;
    if(parent==0)
      return;
    if(reverseDirectedGraph[parent].length>0)
      recordPath(reverseDirectedGraph[parent][0]);
  }

  int dfs(parent,grandparent)
  { int ans=0;
  undirectedGraph[parent].forEach((child) {
    // print(child);
    if(child!=grandparent&&isThereApple[child]==true)
      ans+=dfs(child,parent)+2;
  });
  return ans;

  }
  void findParent(parent,grandparent)
  {
    reverseDirectedGraph[parent].add(grandparent);
    undirectedGraph[parent].forEach((child) {
      // print(child);
      if(child!=grandparent)
        findParent(child, parent);
    });
    
  }
  int minTime(int n, List<List<int>> edges, List<bool> hasApple) {

    reverseDirectedGraph=List.generate(n+1, (index) => []);
    undirectedGraph=List.generate(n+1, (index) => []);
    isThereApple=List.generate(n+1, (index) => false);


    int numberOfEdges=edges.length;
    for(int i=0;i<numberOfEdges;i++)
    {
    //  reverseDirectedGraph[edges[i][1]].add(edges[i][0]);
      undirectedGraph[edges[i][0]].add(edges[i][1]);
      undirectedGraph[edges[i][1]].add(edges[i][0]);

    }
    findParent(0,-1);
    for(int i=0;i<n;i++)
    {
      if(hasApple[i]==true)
      {
        recordPath(i);
      }
    }

    return dfs(0,-1);
  }
}

```