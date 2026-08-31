# [C++] 3 Methods | BFS | Bellman Ford | Dijksrta | No TLE

**Author:** isha_070_
**Votes:** 57
**Link:** [https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/1532900/](https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/1532900/)

---

**Method 1: Dijkstra's Algorithm**

Space Complexity: ```O(e * k)```
Time Complexity: ```O(e * k) * (log(e * k))```
(Priority queue will store at max ```(e * k)``` values which will happen when the destinaton cannot be reached in ```k``` stops. To push a value it will take ```log(e * k)```)
(```e``` represent number of edges or size of ```flights``` vector)

```
class Solution {
public:
    int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {
        vector<vector<pair<int, int>>> graph(n);
        for(auto e : flights) {
            graph[e[0]].push_back({e[1], e[2]});
        }
        priority_queue<vector<int>, vector<vector<int>>, greater<vector<int>>> pq;
        // {dist_from_src_node, node, number_of_stops_from_src_node}
        pq.push({0, src, 0});
        
        vector<int> stops(n, INT_MAX);
        // number of stops to reach indexth node with least possible price from src node
        // as it will be calculated once the pq.top() equals to indexth node
        
        // pq.top() will always store least cost among the pq elements so if already stop is calculated
        // and if that is greater than the cstop that means already we have a path with cheaper cost
        // as well as with less or equal number of stops
        
        while(!pq.empty()) {
            auto temp=pq.top();
            int cdist=temp[0];
            int cnode=temp[1];
            int cstop=temp[2];
            pq.pop();
            
            if(cstop>stops[cnode] || cstop>k+1)
                continue;
            
            stops[cnode]=cstop;
            if(cnode==dst) {
                return cdist;
            }
            
            for(auto a : graph[cnode]) {
                pq.push({cdist+a.second, a.first, cstop+1});
            }
        }
        return -1;
    }
};
```

**Method 2: BFS**

Space Complexity: ```O(e * k) + O(n)```
Time Complexity: ```O(e * k)```
(Queue will store at max ```(e * k)``` values for the same reason and pushing or popping requires ```O(1)```)

```
class Solution {
public:
    int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {
        vector<vector<pair<int, int>>> graph(n);
        for(auto e : flights) {
            graph[e[0]].push_back({e[1], e[2]});
        }
        int ans=INT_MAX;
        vector<int> dist(n, INT_MAX);
        queue<pair<int, int>> q;
        q.push({src, 0});
        int stops=0;
        while(stops<=k && !q.empty()) {
            int sz=q.size();
            while(sz--) {
                int cnode=q.front().first;
                int cdist=q.front().second;
                q.pop();
                if(cdist>dist[cnode]) continue;
                dist[cnode]=cdist;
                for(auto e : graph[cnode]) {
                    if(e.second+cdist>ans) continue;
                    if(e.first==dst) ans=min(ans, e.second+cdist);
                    q.push({e.first, e.second+cdist});
                }
            }
            stops++;
        }
        if(ans==INT_MAX)
            return -1;
        return ans;
    }
};
```

**Method 3: Bellman Ford**

Space Complexity: ```O(n)```
Time Complexity: ```O(e * k)```
(It simply makes the use of a ```dist``` vector. We run a loop ```k``` times and each time we traverse all the edges)

```
class Solution {
public:
    int findCheapestPrice(int n, vector<vector<int>>& edges, int src, int dst, int k) {
        vector<int> dist(n, INT_MAX);
        dist[src]=0;
        for(int i=0; i<=k; i++) {
            vector<int> temp(n);
            copy(dist.begin(), dist.end(), temp.begin());
            for(auto e : edges) {
                if(dist[e[0]]==INT_MAX)
                    continue;
                if(temp[e[1]]>dist[e[0]]+e[2])
                    temp[e[1]]=dist[e[0]]+e[2];
            }
            copy(temp.begin(), temp.end(), dist.begin());
        }
        if(dist[dst]==INT_MAX)
            return -1;
        return dist[dst];
    }
};
```

*PLease upvote if you find this helpful* :)
*Feel free to comment in case of any doubt*