# Two Deques

**Author:** votrubac
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-total-area-occupied-by-pistons/solutions/5742487/](https://leetcode.com/problems/maximum-total-area-occupied-by-pistons/solutions/5742487/)

---

We put pistons into either `up` or `down` deque, based on the initial direction.

Then, we simulate the time `t`. When a piston reaches top or the bottom, we move it to antoher deque.

That way, when we increment `t`, we know how much area we gain (number of pistons going up), and how much we lose.

**C++**
Note that we simulate deques using a `vector`, as it is 2x faster than using a `deque`.
```cpp
long long maxArea(int height, vector<int>& pos, string dir) {
    vector<int> down, up;
    long long res = 0, cur = accumulate(begin(pos), end(pos), 0LL), total = pos.size() * height;
    for (int i = 0; i < pos.size(); ++i)
        if (dir[i] == 'D')
            down.push_back(pos[i]);
        else
            up.push_back(height - pos[i]);
    sort(begin(down), end(down));
    sort(begin(up), end(up));
    for (int t = 0, i = 0, j = 0; t < height; ++t) {
        while (i < down.size() && down[i] == t)
            up.push_back(down[i++] + height);
        while (j < up.size() && up[j] == t)
            down.push_back(up[j++] + height);
        cur += up.size() - j - (down.size() - i);
        res = max({res, cur, total - cur});
    }
    return res;
}
```