# Brute-Force

**Author:** votrubac
**Votes:** 57
**Link:** [https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/solutions/1238660/](https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/solutions/1238660/)

---

I was thinking that we need some clever implementation here, but I did not see it. Therefore I went with a brute-force, and tested it agains 100 x 100 grid.

It looks like the actual OJ constraint is 50 x 50. And, brute-force was like 16 ms on that grid:
> expected 'grid' to have 1 <= size <= 50 but got 100

I think that the complexity of this problem is in handling rhombi corectly? 

We can improve the runtime here by computing each rhombus sum in O(1). For that, we will need to compute prefix sums for each `\\` and `/` diagonals.This feels tedious and straightforward, so I'll pass.

```cpp
vector<int> getBiggestThree(vector<vector<int>>& g) {
    set<int> s;
    for (int i = 0; i < g.size(); ++i)
        for (int j = 0; j < g[0].size(); ++j)
            for (int sz = 0; i + sz < g.size() && i - sz >= 0 && j + 2 * sz < g[0].size(); ++sz) {
                int x = i, y = j, r_sum = 0;
                do r_sum += g[x++][y++]; while (x < i + sz);
                if (sz > 0) {
                    do r_sum += g[x--][y++]; while (y < j + 2 * sz);
                    do r_sum += g[x--][y--]; while (x > i - sz);
                    do r_sum += g[x++][y--]; while (x < i);
                }
                s.insert(r_sum);
                if (s.size() > 3)
                    s.erase(begin(s));                
            }
    return vector<int>(rbegin(s), rend(s));
}
```