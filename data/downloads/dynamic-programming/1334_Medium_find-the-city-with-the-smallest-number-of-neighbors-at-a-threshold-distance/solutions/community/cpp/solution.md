# [C++] Dijkstra Solution With Explanation

**Author:** simran_1
**Votes:** 87
**Link:** [https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/1217258/](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/1217258/)

---

Idea-
1. First, we need to make the adjacency list for the graph which contains for each city the city to which it is connected, and the edge weight of that edge. 
2. Now, we have to run Dijkstra\u2019s algorithm for each city to find the distance of all other cities to it.
3. Now, for each city, we have to calculate the reachable cities within the threshold. We can use the vector of pairs for the same, where the 1st element denotes the number of reachable cities to a particular city and the 2nd element represents the number of that city (that is used to break the tie). 
4. Sort the vector of pairs in a way that the 1st element of the vector will contain the desired output, and the second of the 1st element is the required city number. 


class Solution {
public:
    
    vector<pair<int,int>> adj[105];
    vector<pair<int,int>> ans;
   
    bool static cmp(const pair<int,int> p1 ,const pair<int,int> p2)
    {
        if(p1.first != p2.first)
            return p1.first < p2.first;
        
        return p1.second > p2.second;
    }
    
    void dijkstra(int src, int n, int distanceThreshold)
    {
        priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>> > pq;
        vector<int> distance(n + 1, INT_MAX);
        
        distance[src] = 0;
        pq.push({0,src});
        
        while(! pq.empty())
        {
            int prev = pq.top().second;
            int prevDist = pq.top().first;
            pq.pop();
            
            for(auto it : adj[prev])
            {
                int next = it.first;
                int nextDist = it.second;
                if(distance[next] > distance[prev] + nextDist)
                {
                    distance[next] = distance[prev] + nextDist;
                    pq.push({distance[next], next});
                }
            }
        }
        
        int cnt = 0;
        for(int i=0;i<n;i++)
        {
            if(i != src && distance[i] <= distanceThreshold)
                cnt++;
        }
        
        ans.push_back({cnt,src});
        
    }
    
    
    int findTheCity(int n, vector<vector<int>>& edges, int distanceThreshold) {
        
        for(int i=0;i<edges.size();i++)
        {
            int u = edges[i][0], v = edges[i][1], w = edges[i][2];   
            adj[u].push_back({v,w});
            adj[v].push_back({u,w});
        }
        
        for(int i=0;i<n;i++)
        {
            dijkstra(i, n, distanceThreshold);
        }
        
        sort(ans.begin(),ans.end(),cmp);
        
        return ans[0].second;
        
    }
};