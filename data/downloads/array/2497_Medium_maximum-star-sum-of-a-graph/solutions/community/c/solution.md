# min-Heap [ Intuition ]

**Author:** Rowque
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/2897938/](https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/2897938/)

---

# Intuition 1:
 > A star graph is a subgraph of the given graph having a center node containing 0 or more neighbors.
   
  This line of question gives a intuition that any `node` can be a `star node`.
    
# Intuition 2:
>  star graph containing at most k edges.
    
This line states that we have to take atmost `k top value nodes` which are `positive` and directly connected to a node which is giving us hint of using a `heap`.
# Why we discard negative?? 
Because it will decrease the star sum of node which we don't want.
    
 **Combining Above Intuitions, we deduce following steps :**
    
   + We will make a graph where every node will have a `min-heap` to filter `<= top k largest` positive directly connected nodes.
   + We will also maintain a array where we will store sum of  top k positive neighbours corresponding to every node with the help of priority_queue 
   + By following the above two steps, we will have star sum for every node & we will simply return maximum value among all star sum of nodes.

# C++
     int maxStarSum(vector<int>& vals, vector<vector<int>>& edges, int k) {
        vector<int> sum = vals;
        vector<priority_queue<int, vector<int> , greater<int>>> G(vals.size());
        for(auto e : edges){
            int u = e[0], v = e[1];
            
            if(vals[v] > 0){
                G[u].push(vals[v]);
                sum[u] += vals[v];
				// Remove nodes and reduce sum if heap has > k nodes
                if(G[u].size() > k){
                    sum[u] -= G[u].top();
                    G[u].pop();
                }
            }
            
            if(vals[u] > 0){
                G[v].push(vals[u]);
                sum[v] += vals[u];
				// Remove nodes and reduce sum if heap has > k nodes
                if(G[v].size() > k){
                    sum[v] -= G[v].top();
                    G[v].pop();
                }
            }   
        }
        return *max_element(begin(sum), end(sum));
    }
> Time - O(nlogn)

> Space - O(n)