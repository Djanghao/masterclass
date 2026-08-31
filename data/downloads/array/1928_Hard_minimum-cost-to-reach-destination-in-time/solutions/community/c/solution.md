# Modified Dijkstra's

**Author:** votrubac
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/1329036/](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/1329036/)

---

We run Dijkstra, and for each node we track the sorted list of `{fee, time}`. This allows us to prune costly paths that do not save us time.
 
I initially did not use the min heap for the queue, and got TLE. 

**C++**
```cpp
int minCost(int maxTime, vector<vector<int>>& edges, vector<int>& fees) {
    vector<set<array<int, 2>>> state(fees.size()); // city: {fee, time}
    vector<vector<array<int, 2>>> al(fees.size()); // city i : {city j, time}
    for (auto &e : edges) {
        al[e[0]].push_back({e[1], e[2]});
        al[e[1]].push_back({e[0], e[2]});
    }
    priority_queue<array<int, 3>, vector<array<int, 3>>, greater<array<int, 3>>> q;
    q.push({fees[0], 0, 0}); // {fee, time, city}
    while(!q.empty()) {
        auto [fee, time, city] = q.top(); q.pop();
        if (city == fees.size() - 1)
            return fee;
        for (auto [city1, time1] : al[city]) {
            if (time + time1 <= maxTime) {
                auto it = state[city1].upper_bound({fee + fees[city1], time + time1});
                if (it == begin(state[city1]) || (*prev(it))[1] > time + time1) {
                    state[city1].insert({fee + fees[city1], time + time1});
                    q.push({fee + fees[city1], time + time1, city1 });
                }
            }
        }
    }
    return -1;
}
```