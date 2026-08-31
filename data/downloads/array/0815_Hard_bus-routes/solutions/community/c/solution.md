# C++ BFS solution with comments

**Author:** khushiprerak
**Votes:** 47
**Link:** [https://leetcode.com/problems/bus-routes/solutions/676804/](https://leetcode.com/problems/bus-routes/solutions/676804/)

---

Here we are considering the ***Bus Stops*** as nodes for BFS. 
```
class Solution {
public:
    int numBusesToDestination(vector<vector<int>>& routes, int S, int T) {
        int n = routes.size(); // n is the total number of buses available
        if(S == T || n == 0) return 0;
        unordered_map<int,vector<int>> bus_stops; // to store the list of buses that we can board from a particular stop
        for(int i=0;i<n;i++){
            for(int j=0;j<routes[i].size();j++){
                int cur_stop = routes[i][j];
                int cur_bus = i;
                bus_stops[cur_stop].push_back(cur_bus); // from cur_stop, bus no. i can be boarded
            }
        }
        return helper(routes,bus_stops,S,T);
    }
    
    int helper(vector<vector<int>>& routes, unordered_map<int,vector<int>>& bus_stops, int src, int dest) {
        if(src == dest) return 0;
        unordered_map<int,bool> vis_stops; // to keep track of all the bus stops visited
        for(auto itr=bus_stops.begin();itr!=bus_stops.end();itr++){
            vis_stops[itr->first]=false; // initially no stops are visited
        }
        vector<bool> vis_bus(routes.size(), false); // to keep track of all the buses boarded
        queue<pair<int,int>> q; // for storing the bus stop and the count of buses boarded
        q.push({src,0});
        vis_stops[src] = true;
        while(!q.empty()){
            auto front = q.front();
            q.pop();
            int cur_stop = front.first;
            int count = front.second;
            if(cur_stop == dest) return count;
            vector<int> bus_options = bus_stops[cur_stop]; // list of buses that can be boarded 
            for(int i=0;i<bus_options.size();i++){
                int cur_bus = bus_options[i];
                if(vis_bus[cur_bus]) continue; 
                else {
                    vector<int> next_stops = routes[cur_bus]; // stops of bus boarded
                    for(int j=0;j<next_stops.size();j++){
                        int next_stop = next_stops[j];
                        if(vis_stops[next_stop]) continue;
                        else{
                            q.push({next_stop, count+1});
                            vis_stops[next_stop] = true;
                        }
                    }
                    vis_bus[cur_bus] = true;
                }
            }
        }
        return -1; // dest not available.
    }
};
```
