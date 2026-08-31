# Hashmap

**Author:** votrubac
**Votes:** 76
**Link:** [https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/1549265/](https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/1549265/)

---

**C++**
```cpp
string kthDistinct(vector<string>& arr, int k) {
    unordered_map<string, int> m;
    for (auto &s : arr)
        ++m[s];
    for (auto &s : arr)
        if (m[s] == 1 && --k == 0)
            return s;
    return "";
}
```