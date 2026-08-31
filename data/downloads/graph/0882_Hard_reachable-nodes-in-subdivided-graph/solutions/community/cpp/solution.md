# Dijkstra + minheap with comments (clean code) | EASY UNDERSTANDING

**Author:** Naser_ali
**Votes:** 13
**Link:** [https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/3161083/](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/3161083/)

---

here we are firstly applying Dijkstra  algorithm inorder to calculate the minimum distance to reach other nodes from 0th node then checking for the moves.
class Solution {

     public:
	 
    int reachableNodes(vector<vector<int>>& edges, int maxMoves, int n) {
        vector< pair<int,int> > adj[n+1];
        for(auto it : edges){
            adj[it[0]].push_back({it[1],it[2] });
            adj[it[1]].push_back({it[0],it[2] });
        }
        //min heap
        priority_queue< pair<int,int> ,vector<pair<int,int>> ,greater<pair<int,int> > > pq;
        vector<int> dist(n+1,1e9);
        //dist node
        dist[0] =0;
        pq.push({0,0});
        //normal Djikstra algorithm
        while(!pq.empty()){
            auto top = pq.top();
            int dis = pq.top().first , node = pq.top().second;
            pq.pop();
            
            for(auto neigh : adj[node]){
                int adjnode = neigh.first;
                int edw = neigh.second;
                // +1 for the curr node
                if(dist[adjnode] > dis + edw+1){
                    dist[adjnode]= dis + edw+1;
                    pq.push({dist[adjnode],adjnode});
                }
            }
            
        }
        int ans =0;
        for(int i=0;i<n;i++){
            //the nodes which can be visted in max moves
            if(dist[i] <= maxMoves){
                ans++;
            }
        }
        
        // no process the remaining nodes
        
        for(int i=0;i<edges.size();i++){
            int src = edges[i][0],dest = edges[i][1], between = edges[i][2];
            //how many moves we are left from the src?(dist[src] -> the number of moves used(distance))
            int fromsrc = max(0, (maxMoves- dist[src]));
            //how many moves we are left from the dest?( here, dist[dest] -> the number of moves used(distance))
            int fromdest = max(0,( maxMoves- dist[dest]));
            //here we are avoiding overlapping
            ans += min(between, (fromsrc+fromdest));
        }
        return ans;
        
        
    }
};
upvote if found helpfull\uD83D\uDE01.