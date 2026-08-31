# Two Maps

**Author:** votrubac
**Votes:** 45
**Link:** [https://leetcode.com/problems/design-memory-allocator/solutions/2899668/](https://leetcode.com/problems/design-memory-allocator/solutions/2899668/)

---

A brute-force solution (store `mID` in array and do full scans) is AC due to `n` constraitned to `1,000`.

It won't work for any practical memory size. 

Here, we track the available memory intervals in a sorted map `avail`, and allocated chunks in a hash map `alloc`.

Since `avail` is sorted, we go left-to-right to find the smallest index of a chunk with the requried size.

> We could use something like segment tree to find the smallest index faster.

When we free the memory, we join all chunks back into `avail`.

**C++**
```cpp
unordered_map<int, vector<pair<int, int>>> alloc;
map<int, int> avail;
Allocator(int n) { avail.insert({0, n}); }
int allocate(int size, int mID) {
    for (auto it = begin(avail); it != end(avail); ++it) {
        if (it->second >= size) {
            auto [i, i_sz] = *it;
            alloc[mID].push_back({i, size});
            avail.erase(it);
            if (i_sz > size) {
                avail.insert({i + size, i_sz - size});
            }
            return i;
        }
    }
    return -1;
}
int free(int mID) {
    int res = 0;
    if (auto it = alloc.find(mID); it != end(alloc)) {
        for (auto [i, sz] : it->second) {
            auto ita = avail.insert({i, sz}).first;
            if (ita != begin(avail)) {
                if (auto p = prev(ita); p->first + p->second == i) {
                    p->second += sz;
                    avail.erase(ita);
                    ita = p;
                }
            }
            if (next(ita) != end(avail)) {
                if (auto n = next(ita); i + sz == n->first) {
                    ita->second += n->second;
                    avail.erase(n);
                }
            }
            res += sz;
        }
        alloc.erase(it);
    }
    return res;
}
```