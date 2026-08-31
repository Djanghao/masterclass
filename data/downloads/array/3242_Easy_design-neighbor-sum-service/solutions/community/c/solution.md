# Concise, Concise

**Author:** votrubac
**Votes:** 18
**Link:** [https://leetcode.com/problems/design-neighbor-sum-service/solutions/5583622/](https://leetcode.com/problems/design-neighbor-sum-service/solutions/5583622/)

---

We add each number to the sum of corresponding adjacent (`suma`) and diagonal (`sumd`) elements.

We use directional arrays to enumerate adjacent (`adj`) and diagonal (`dia`) coordinates.

**C++**
```cpp
int suma[101] = {}, sumd[101] = {};
const int adj[5] = {0, 1, 0, -1, 0}, dia[5] = {1, 1, -1, -1, 1};
neighborSum(vector<vector<int>>& g) {
    auto add = [&](int i, int j, int val, int arr[]){
        if (min(i, j) >= 0 && max(i, j) < g.size())
            arr[g[i][j]] += val;
    };
    for (int i = 0; i < g.size(); ++i)
        for (int j = 0; j < g.size(); ++j)
            for (int d = 0; d < 4; ++d) {
                add(i + adj[d], j + adj[d + 1], g[i][j], suma);
                add(i + dia[d], j + dia[d + 1], g[i][j], sumd);
            }
}
int adjacentSum(int value) { return suma[value]; }    
int diagonalSum(int value) { return sumd[value]; }
```