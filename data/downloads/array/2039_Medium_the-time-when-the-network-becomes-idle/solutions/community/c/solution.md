# BFS + Maths [C++] Explanation

**Author:** suraj013
**Votes:** 86
**Link:** [https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/1524181/](https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/1524181/)

---

* we will find single source shortest path using bfs for every data server.
* now we have a time array which states min. time to travel from data server to master server.
*  total time travel for a message will be time[node]*2.
*  now we find the number of messages a data server will send before first message arrives back.
*  we will find last time(lastOutTime) a message was sent.
*  idle time for current data server will be lastOutTime + time[currentDataServer] + 1 for a message.

```
class Solution {
public:
    int networkBecomesIdle(vector<vector<int>>& edges, vector<int>& patience) {
        int n = patience.size();
        vector <vector <int>> graph(n);
        vector <int> time(n, -1);
        
        for(auto x: edges) { // create adjacency list
            graph[x[0]].push_back(x[1]);
            graph[x[1]].push_back(x[0]);
        }
        
        queue <int> q;
        q.push(0);
        time[0] = 0;
        while(q.size()) {
            int node = q.front();
            q.pop();
            
            for(auto child: graph[node]) {
                if(time[child] == -1) { // if not visited.
                    time[child] = time[node] + 1; // calc time for child node
                    q.push(child);
                }
            }
        }
        
        int res = 0;
        for(int i = 1; i<n; i++) {
            int extraPayload = (time[i]*2 - 1)/patience[i]; 
			// extra number of payload before the first message arrive back to data server.
			// since a data server can only send a message before first message arrives back."
			// and first message arrives at time[i]*2. so "(time[i]*2-1)"
			
            int lastOut = extraPayload * patience[i]; // find the last time when a data server sends a message
            int lastIn = lastOut + time[i]*2; // this is the result for current data server
			
            res = max(res, lastIn);
        }
		
		// at "res" time the last message has arrived at one of the data servers.
		// so at res+1 no message will be passing between servers.
		
        return res+1;
    }
};
```
T.C: O(E+n)
S.C: O(E+n)
where E is number of edges and
n is number of nodes.