# One line code || 100% easy || No time taken || 0sec

**Author:** sadanandsidhu
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/solutions/3368464/](https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/solutions/3368464/)

---

# Intuition
![upvote.png](./images/0.png)
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
// TC : O(nodes*nodes)
// SC : O(nodes)

class Solution {
    private ArrayList<Integer> tree[];
    private int val[];
    private int minScore;
    
    public int minimumScore(int[] nums, int[][] edges) {
        val = nums;
        int nodes = nums.length;
        int len = edges.length;
        tree = new ArrayList[nodes];
        
        for(int node =0;node<nodes;node++) tree[node] = new ArrayList();
        for(int edge[] : edges){
            int node1 = edge[0];
            int node2 = edge[1];
            tree[node1].add(node2);
            tree[node2].add(node1);
        }
        
        minScore = Integer.MAX_VALUE;
        
        for(int idx =0;idx<len;idx++){
            int node1 = edges[idx][0];
            int node2 = edges[idx][1];
            
            int xor1 = dfs(node1,node2);
            int xor2 = dfs(node2,node1);
            
            dfs(node1,node2,xor1,xor2);
            dfs(node2,node1,xor2,xor1);
        }
        
        return minScore;
    }
    
    private int dfs(int parent,int node,int compXor1,int treeXor){
        int childXor = 0;
        
        for(int child : tree[node]){
            if(child!=parent){
                 int currChildXor = dfs(node,child,compXor1,treeXor);
                 int compXor2 = currChildXor;
                 int compXor3 = treeXor^compXor2;
                
                 int maxXor = Math.max(compXor1,Math.max(compXor2,compXor3));
                 int minXor = Math.min(compXor1,Math.min(compXor2,compXor3));

                 minScore = Math.min(minScore,maxXor-minXor);
                 childXor^=currChildXor;
            }
        }
        
        return childXor^val[node];
    }
    
    private int dfs(int node,int parent){
        int xor = val[node];
        
        for(int child : tree[node]){
            if(child!=parent) xor^=dfs(child,node);
        }
        
        return xor;
    }
}
```