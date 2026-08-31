# Map and Set (No Segment Tree)

**Author:** votrubac
**Votes:** 4
**Link:** [https://leetcode.com/problems/alternating-groups-iii/solutions/5759366/](https://leetcode.com/problems/alternating-groups-iii/solutions/5759366/)

---

The idea is not that hard, but the implementation was very tricky for me.

## Counter Map
We count how many groups of each size we have in a map `cnt`.

Say our map contains 3 groups of size 4 and 2 groups of size 5. If we want to count groups with size 4:
- We search for, then iterate through groups of size 4 and larger.
- We add 3 groups (count of groups of size 4).
- Then we add 2 * (5 - 4 + 1) = 4 groups.
	- This is because a group of size 5 includes 2 groups of size 4.

How many different group sizes can we have in `cnt`? If there is just one group of each size, the answer is `sqrt(n)`.
> Group sizes form an arithmetic progression from `3` to `m`, and `m * (m + 1) / 2 <= n`.  So `m` is `~sqrt(n)`.

## Breaks Set
We store indices between two alternating groups in a set `breaks`. 

We can store either first or second index of two tiles with the same color. 
> In the implementation below, we store the first index; it seems to simplify the code a bit.

As we change the color of a tile, we need to add and remove some "breaks".

When we add or remove a break, we determine the size of old and new groups, and update the counter `cnt`.

This was particularly difficult to implement; to simplify, the code below handles cases when we have zero, one and two breaks separately.

**C++**
```cpp
void add(int d, map<int, int> &cnt, int n) {
    d = d < 0 ? d + n : d;
    if (d > 2)
        ++cnt[d];
}
void erase(int d, map<int, int> &cnt, int n) {
    d = d < 0 ? d + n : d;
    if (d > 2)
        if (auto it = cnt.find(d); --it->second == 0)
            cnt.erase(it);
}
void insert(int i, set<int> &breaks, map<int, int> &cnt, int n) {
    if (breaks.empty())
        cnt = map<int, int>{{n, 1}};
    else if (breaks.size() == 1) {
        int j = *begin(breaks);
        cnt = map<int, int>{{abs(i - j), 1}};
        ++cnt[n - abs(i - j)];            
    }
    else {
        auto it3 = breaks.upper_bound(i);
        if (it3 == end(breaks))
            it3 = begin(breaks);
        auto it1 = it3 == begin(breaks) ? prev(end(breaks)) : prev(it3);
        erase(*it3 - *it1, cnt, n);
        add(*it3 - i, cnt, n);
        add(i - *it1, cnt, n);
    }
    breaks.insert(i);
}
void erase(int i, set<int> &breaks, map<int, int> &cnt, int n) {
    auto it2 = breaks.find(i);
    if (breaks.size() == 1)
        cnt = map<int, int>{{2 * n, 1}};
    else if (breaks.size() == 2)
        cnt = map<int, int>{{n, 1}};
    else {
        auto it1 = it2 == begin(breaks) ? prev(end(breaks)) : prev(it2);
        auto it3 = next(it2) == end(breaks) ? begin(breaks) : next(it2);
        erase(*it2 - *it1, cnt, n);
        erase(*it3 - *it2, cnt, n);
        add(*it3 - *it1, cnt, n);
    }
    breaks.erase(it2);
}
vector<int> numberOfAlternatingGroups(vector<int>& colors, vector<vector<int>>& queries) {
    int n = colors.size();    
    set<int> breaks;
    map<int, int> cnt = {{2 * n, 1}};         
    for (int i = 0; i < n; ++i)
        if (colors[i] == colors[(i + 1) % n])
            insert(i, breaks, cnt, n);
    vector<int> res;
    for (const auto &q : queries) {
        if (q[0] == 1) {
            int count = 0;
            for (auto it = cnt.lower_bound(q[1]); it != end(cnt); ++it)
                count += it->second * (it->first - q[1] + 1);
            res.push_back(min(n, count));
        }
        else if (colors[q[1]] != q[2]) {
            auto it = breaks.lower_bound(q[1]);
            if (it != end(breaks) && *it == q[1])
                erase(*it, breaks, cnt, n);
            else
                insert(q[1], breaks, cnt, n);
            int pi = (q[1] == 0 ? n : q[1]) - 1;
            if (colors[q[1]] != colors[pi])
                insert(pi, breaks, cnt, n);
            else
                erase(pi, breaks, cnt, n);
            colors[q[1]] = q[2];
        }          
    }
    return res;
}
```