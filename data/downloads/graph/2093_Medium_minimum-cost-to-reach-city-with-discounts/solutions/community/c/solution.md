# 2D Dijkstra

**Author:** votrubac
**Votes:** 14
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/1611698/](https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/1611698/)

---

I think that this question should be Hard; the solution idea is not that easy, and the implementation is quite complex.

Per Dijkstra, we use min heap to explore shortest (or cheapest) paths first, and track the best result so far for each node for pruning.

Discounts add another dimension - the cost of reaching city `j` is different based on how many discounts have we used so far. So, from a node `i`, we travel to node `j` without using a discount, and with a discount (if we still have some left).

**C++**
I also tried to compare discounts in `cmp` (so if cost is the same, pick a route with more discounts), but the runtime got worse.

```cpp
int minimumCost(int n, vector<vector<int>>& highways, int discounts) {    
    vector<vector<pair<int, int>>> hs(n);
    for (auto &h : highways) {
        hs[h[0]].push_back({h[1], h[2]});
        hs[h[1]].push_back({h[0], h[2]});
    }
    vector<vector<int>> costs(n, vector<int>(discounts + 1, INT_MAX));
    auto cmp = [](const array<int, 3> &a, const array<int, 3> &b) { return a[0] > b[0]; };
    priority_queue<array<int, 3>, vector<array<int, 3>>, decltype(cmp)> pq(cmp);
    pq.push({0, discounts, 0});
    while(!pq.empty() && pq.top()[2] != n - 1) {
        auto [cost, disc, i] = pq.top(); pq.pop();
        for (auto [j, toll] : hs[i]) {
            if (costs[j][disc] > cost + toll) {
                costs[j][disc] = cost + toll;
                pq.push({costs[j][disc], disc, j});
            }
            if (disc > 0 && costs[j][disc - 1] > cost + toll / 2) {
                costs[j][disc - 1] = cost + toll / 2;
                pq.push({costs[j][disc - 1], disc - 1, j});
            }
        }
    }
    return pq.empty() ? -1 : *min_element(begin(costs[n - 1]), end(costs[n - 1]));
}
```