# Make heap

**Author:** votrubac
**Votes:** 21
**Link:** [https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/3143755/](https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/3143755/)

---

We use array heap functions here for the efficiency. 

It also allows us to sum the remaining numbers directly (no need to pop them).

Therefore, the time complexity is O(n + k log n).

Note that, if `k` is very large, we can exit when the top of the heap becomes `1`.

**C++**
```cpp
long long pickGifts(vector<int>& g, int k) {
    make_heap(begin(g), end(g));
    while(k--) {
        pop_heap(begin(g), end(g));
        g.back() = sqrt(g.back());
        push_heap(begin(g), end(g));
    }
    return accumulate(begin(g), end(g), 0LL);
}
```