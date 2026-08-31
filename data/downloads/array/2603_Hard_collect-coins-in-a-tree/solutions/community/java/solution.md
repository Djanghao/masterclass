# Easy | Bfs | Intuition explained | O(n) TC and SC | Trim | C++ | Java

**Author:** i_pranav
**Votes:** 78
**Link:** [https://leetcode.com/problems/collect-coins-in-a-tree/solutions/3343497/](https://leetcode.com/problems/collect-coins-in-a-tree/solutions/3343497/)

---

# Intuition
since we have to come back to the same point hence the starting point doesn't matter!we anyway would be going over all the edges. 
But do all the nodes matter? can we prune some of the edges and nodes to make the tree shorter and reduce the overall path? leaf nodes which don't have a coin are useless!
But do I need to traverse the remaining tree? No! let's say now in your tree all the leafs actually contain coins; you can gather these coins from the grandparent (parent of parent of the leaf) since the coins from nodes upto a distance 2 can be directly achieved.


# Approach
Since the non coin leaves are useless, let's prune them recursivey (delete the edge cononecting leaf to it's parent, if now the parent has only 1 edge connected then the parent also becomes a leaf, if the parent doesn't have a coin on it then it also is useleess so remove it).
Now in the remaining tree remove 2 nodes for each leaf (for the logic as stated in the intuition!)
Now in this entire process you must have deleted several edges. so you'll be left with some edges. the answer is the number of edges we are left with! 
NOTE-> since I considered a->b and b->a as 2 different edges hence I need to multiply it by 2 so as to imitate coming back to the origin node!

The code has been populated with several comments for convenience! 

# Complexity
- Time complexity: o(n)

- Space complexity: o(n)

# Code C++
```
class Solution {
    public:
    int collectTheCoins(vector<int>& coins, vector<vector<int>>& edges) {

        int n=coins.size();
        vector<set<int>> g(n);
        
        for(auto& e:edges)  g[e[0]].insert(e[1]),g[e[1]].insert(e[0]);
        queue<int> leaves;

        int totalEdges=edges.size()*2,deleted=0;
        // let's add the leaves which don't have any coins!
        
        for(int i=0;i<n;i++)    if(g[i].size()==1 && coins[i]==0)  leaves.push(i);

        while(leaves.size()){   // keep removing leaves with no coins!
            int leaf=leaves.front();
            leaves.pop();
            if(g[leaf].empty()) continue;// this not has no parent! [last node of the tree]

            int p=*g[leaf].begin();     // parent
            
            g[p].erase(leaf),deleted++;
            g[leaf].erase(p),deleted++;        // clear the entire mappings for it as it's useless now!
            
            if(g[p].size()==1 && coins[p]==0)   leaves.push(p); // if this now becomes a leaf with no coins. 
        }
        // now the leaves would be having the coin! 
        for(int i=0;i<n;i++)    if(g[i].size()==1)  leaves.push(i);
        // now I need to remove the leaf nodes and their immediate parents
        int step=2; //1 for parent and 1 for children
        while(step--){
            int sz=leaves.size();
            while(sz--){
                int leaf=leaves.front();
                leaves.pop();
                if(!g[leaf].size()) continue;// this not has no parent! [last node of the tree]
                
                int p=*g[leaf].begin();     // only parent would be there in leaf!
                
                g[p].erase(leaf),deleted++;
                g[leaf].erase(p),deleted++;

                if(g[p].size()==1)  leaves.push(p);
            
            }
        }
        
        return totalEdges-deleted;
    }
};
```

# Code Java
```
class Solution {
public int collectTheCoins(int[] coins, int[][] edges) {

    int n = edges.length;
    ArrayList<HashSet<Integer>> list = new ArrayList<>();
    Queue<Integer> q = new LinkedList<>();
    int totalEdges = 2*n;
    int deletedEdges = 0;

    for(int i=0;i<=n;i++){
        list.add(new HashSet<Integer>());
    }

    for(int i=0;i<n;i++){
        int a = edges[i][0];
        int b = edges[i][1];
        list.get(a).add(b);
        list.get(b).add(a);
    }

    for(int i=0;i<=n;i++){
        if(list.get(i).size()==1 && coins[i]==0){
            q.add(i);
        }
    }
    while(!q.isEmpty()){
        int cur = q.remove();
        if(list.get(cur).size()==0) continue;
        int p = list.get(cur).iterator().next();
        list.get(cur).remove(p);
        list.get(p).remove(cur);
        if(list.get(p).size()==1 && coins[p]==0){
            q.add(p);
        }
        deletedEdges += 2;
    }

    for(int i=0;i<=n;i++){
        if(list.get(i).size()==1){
            q.add(i);
        }
    }

    int size=2;
    while(size>0){
        size--;
        int qsize = q.size();
        while(qsize>0){
            qsize--;
            int cur = q.remove();
            if(list.get(cur).size()==0) continue;
            int p = list.get(cur).iterator().next();
            list.get(cur).remove(p);
            list.get(p).remove(cur);
            if(list.get(p).size()==1){
                q.add(p);
            }
            deletedEdges += 2;
        }
    }

    return totalEdges - deletedEdges;
}
}
```
