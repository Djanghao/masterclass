# C++ | BFS & Maths | Dry run | Easy to Understand

**Author:** nidhiii_
**Votes:** 10
**Link:** [https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/3392913/](https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/3392913/)

---


This was fun to solve! Let's understand the problem and approach with an example.
<p align="center">
  <img src="https://assets.leetcode.com/users/images/4e5c2ddc-34d0-4f65-9e63-40344a91f4e6_1680938121.9421952.png" width="190px" />
</p>

```
edges: [0,1],[0,2],[1,3],[2,3]
patience: [0, 4, 1, 1], 
where patience[i] is the time that node i can spend idle without sending a message.
```
Now let's first find the minimum distance of each node from master server i.e. node 0.
``` 
distance=[0, 1, 1, 2], 
where distance[i] is the minimum distance of node i from node 0
```
- Now, the first message from each node will take `firstMsgReceive = 2*distance[i]` time to send & receive the signal back. 
- The number of extra messages that can be sent during that time is calculated as `numberofExtra = (firstMsgReceive-1)/patience[i]`, because no more resending will occur once the first reply is received.
- The last message is sent at `lastMsgSent = numberofExtra*patience[i]` time, because every message is sent after patience[i] time.
- The time when we receive the last message would be the sum of the time it took for the first message to come back and the time when last message was sent, i.e. `lastMsgReceive = lastMsgSent + firstMsgReceive`.
<!-- Describe your first thoughts on how to solve this problem. -->

```
For node 1, firstMsgReceive = distance[1]*2 = 1*2 = 2, 
            numberOfExtra = (2-1)/4 = 0, 
            lastMsgSent = 0*4 = 0, 
            lastMsgReceive = 0 + 2 = 2.

For node 2, firstMsgReceive = 1*2 = 2, 
            numberOfExtra = (2-1)/1 = 1, 
            lastMsgSent = 1*1 = 1, 
            lastMsgReceive = 1 + 2 = 3.

For node 3, firstMsgReceive = 2*2 = 4, 
            numberOfExtra = (4-1)/1 = 3, 
            lastMsgSent = 3*1 = 3, 
            lastMsgReceive = 3 + 4 = 7.
```
The maximum of these values is 7, so the idle time for this network is 8 time units.
# Complexity
- Time complexity: O(E+N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Space complexity: O(E+N)

where E is the number of edges and N is the number of nodes.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int networkBecomesIdle(vector<vector<int>>& edges, vector<int>& patience) {
        int n=patience.size();
        vector<vector<int>>adj(n); // adjacency matrix to store the graph
        vector<int>distance(n,-1);
        for(auto& edge:edges){
            adj[edge[0]].push_back(edge[1]);
            adj[edge[1]].push_back(edge[0]);
        }

        queue<int>q; // queue to perfrom bfs to calculate distance
        q.push(0);
        distance[0]=0;
        while(!q.empty()){
            int node=q.front();
            q.pop();
            for(auto& neighbor:adj[node]){
                if(distance[neighbor]==-1){
                    distance[neighbor]=distance[node]+1;
                    q.push(neighbor);
                }
            }
        }
        int idleTime=0;
        for(int i=1;i<n;++i){
            int firstMsgReceive=distance[i]*2; // time it takes for the first message to get back
            int numberOfExtra=(firstMsgReceive-1)/patience[i]; // number of extra messages that'll be sent
            int lastMsgSent=numberOfExtra*patience[i]; // time at which last message will be sent
            int lastMsgReceive=lastMsgSent+firstMsgReceive; // time at which we will receive reply for last message
            idleTime=max(idleTime,lastMsgReceive);
        }
        return idleTime+1; // idle time would be 1 second afterb we receive last message
    }
};
```