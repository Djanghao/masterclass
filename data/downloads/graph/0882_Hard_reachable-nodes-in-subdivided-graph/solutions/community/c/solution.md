# ✅Djikstra + Min Heap explained with intuition for beginners!

**Author:** nehap_
**Votes:** 50
**Link:** [https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/1459518/](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/1459518/)

---

**Intuition:**
* Since we have nodes in between, and want to calculate the reachable ones.
The first thing that comes to mind is how many nodes we can actually reach?
We know, edges=nodes+1
So now if we take 0->1 with 10 nodes in between
We can deduce that distance from 0 to 1 is 11.
* Using this, we can initially calculate the minimum distance to reach each node from source , assuming the nodes in between as weights => **Djikstra Algorithm**
* Once calculated minimum distance to reach each node, simply check if this distance<=maxMoves allowed

* Now comes the tricky part - How to check how many nodes in between can be visited?
* Count the number of nodes reachable on edge e from e[0] and from e[1] 
using Extra Distance left=maxMoves-Dist covered by e[1] or e[0]

 

		class Solution {
		public:
		int reachableNodes(vector<vector<int>>& edges, int maxMoves, int n) {
		const int INF = 1e8;
		vector<vector<pair<int,int>> g(n);
		for(auto i: edges){
		g[i[0]].push_back({i[1],i[2]});
		g[i[1]].push_back({i[0],i[2]});
		}
		
        priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>> > pq;
        pq.push({0, 0}); //distance,node
        vector<int> d(n, INF);
        d[0] = 0;
        
        while(!pq.empty()){
             int dist = pq.top().first;
             int node = pq.top().second;
             pq.pop();
             //if(d[u.second]!=u.first) continue;
             for(auto it:g[node]){
                 if(d[it.first]>dist+it.second+1)  //since number of edges=nodes in between+1
                 {
                     d[it.first]=dist+it.second+1;
                     pq.push({d[it.first], it.first});
                 }
             }
        }
        //now we have minimum distances to reach each node, so check how many reachable with minMoves
        int ans = 0;
        for(int i = 0; i < n; ++i) { // add 1 for nodes that can be visited
            if(d[i] <= maxMoves) 
              ans++;   
         } 
        

        /*
        Now add for intermediate newly added nodes
        Eg. 0->1 and 10 in between
    
        Visitable from 0 -> maxMoves-(dist/moves already covered by 0 (from source)) 
        Visitable from 1 -> maxMoves-(dist/moves already covered by 1 (from source))
        
        To calculate Extra nodes I can visit we follow above
        */
        for(auto i : edges) {
		    int src=i[0],dest=i[1], between=i[2];
            int x = max(0, (maxMoves - d[src])); // nodes visited using edge e[0]->e[1]
            int y = max(0, (maxMoves - d[dest])); // nodes visited using edge e[1]->e[0]
            ans += min(between, x + y); //minimum to avoid overlapping in counting
        }
        return ans;
    }
    }
};