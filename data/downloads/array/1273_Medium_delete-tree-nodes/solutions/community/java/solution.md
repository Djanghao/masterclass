# [JAVA] DFS

**Author:** bo29
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-tree-nodes/solutions/1627971/](https://leetcode.com/problems/delete-tree-nodes/solutions/1627971/)

---

```
class Solution {
    Map<Integer, Set<Integer>> graph = new HashMap<>();
    int[] v;
    int n;
    int[] p;
    public int deleteTreeNodes(int nodes, int[] parent, int[] value) {
        v = value;
        n = nodes;
        p = parent;
        for(int i=0;i<nodes;i++){
            graph.put(i, new HashSet<>());
        }
        
        for(int i=0;i<parent.length;i++){
            if(parent[i]==-1) continue;
            graph.get(parent[i]).add(i);
        }
        
        int[] res = helper(0);
        return n;
    }
    
    // { sumOfChildrenValue, numRecursiveChildren }
    private int[] helper(int node){
        int[] res= new int[]{0,0};
        for(var child : graph.get(node)){
            int[] r=helper(child);
            res[0]+=r[0];
            res[1]+=r[1];
        }

        if(res[0]+v[node]==0) {
            n-=(res[1]+1);
            return new int[]{0, 0};
        }
        
        return new int[]{res[0]+v[node], res[1]+1};
    }
}
```