# Sentinels

**Author:** votrubac
**Votes:** 56
**Link:** [https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/2039740/](https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/2039740/)

---

We add two sentinel values `{bottom - 1, top + 1}` to the special floors array, and then sort that array.

Then, we just go and track the maximum gap between two special floors.

**C++**
```cpp
int maxConsecutive(int bottom, int top, vector<int>& special) {
    int res = 0;
    special.insert(end(special), {bottom - 1, top + 1});
    sort(begin(special), end(special));
    for (int i = 1; i < special.size(); ++i)
        res = max(res, special[i] - special[i - 1] - 1);
    return res;
}
```

Using `adjacent_difference`.

```cpp
int maxConsecutive(int bottom, int top, vector<int>& s) {
    s.insert(end(s), {bottom - 1, top + 1});
    sort(begin(s), end(s));
    adjacent_difference(begin(s), end(s), begin(s));
    return *max_element(begin(s) + 1, end(s)) - 1;
}
```