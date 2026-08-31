# DFS

**Author:** votrubac
**Votes:** 41
**Link:** [https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/2831660/](https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/2831660/)

---

This is an interesting problem.

We do DFS from the capital, tracking the current `depth`.

After we reach a leaf, we go back to the capital, adding `riders`.

Once a car is full (`riders == seats`), we add `depth` liters to the result - this is how many liters that car needs to reach the capital.

If a car is not full, we drive remaining riders (`riders % seats`) one city closer to the capital, consuming one liter of fuel.

**C++**
```cpp
long long dfs(int i, int prev, int depth, int seats, vector<vector<int>>& al, long long &res) {
    long long riders = 1;
    for (int j : al[i])
        if (j != prev)
            riders += dfs(j, i, depth + 1, seats, al, res);
    if (depth == 0)
        return res;
    res += (riders / seats) * depth + (riders % seats ? 1 : 0);
    return riders % seats;
}
long long minimumFuelCost(vector<vector<int>>& roads, int seats) {
    vector<vector<int>> al(roads.size() + 1);
    for (auto &r : roads) {
        al[r[0]].push_back(r[1]);
        al[r[1]].push_back(r[0]);
    }
    long long res = 0;
    return dfs(0, -1, 0, seats, al, res);
}
```