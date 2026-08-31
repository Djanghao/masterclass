# Index Array

**Author:** votrubac
**Votes:** 19
**Link:** [https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/3312018/](https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/3312018/)

---

Index array is a common and important technique. 

It allows you to iterate the number array in the sorted order, without changing the position of elements in the number array.

Note that the sort compare function needs to compare indexes if values are the same. In C++, we can use `stable_sort` to do just that internally.

**C++**
```cpp    
long long findScore(vector<int>& n) {
    long long score = 0, sz = n.size();
    vector<int> id(sz);
    iota(begin(id), end(id), 0);
    stable_sort(begin(id), end(id), [&](int i, int j){ return n[i] < n[j]; });
    for (int i : id)
        if (n[i]) {
            score += n[i];
            n[i] = n[min((int)sz - 1, i + 1)] = n[max(0, i - 1)] = 0;            
        }
    return score;
}
```