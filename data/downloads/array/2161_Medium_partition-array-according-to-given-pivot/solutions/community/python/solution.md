# 4 Solutions

**Author:** votrubac
**Votes:** 22
**Link:** [https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/1747590/](https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/1747590/)

---

### 1. Stable Partition
**C++**
```c++
vector<int> pivotArray(vector<int>& n, int p) {
    stable_partition(stable_partition(begin(n), end(n), [&](int n){ return n < p; }), end(n), [&](int n){ return n == p; });
    return n;
}
```
### 2. 3 passes, 1 array
**Python 3**
```python
class Solution:
    def pivotArray(self, nums: List[int], p: int) -> List[int]:
        return [n for n in nums if n < p] + [n for n in nums if n == p] + [n for n in nums if n > p]
```

**C++**
```cpp
vector<int> pivotArray(vector<int>& n, int p) {
    vector<int> res;
    copy_if(begin(n), end(n), back_inserter(res), [&](int n){ return n < p; });
    copy_if(begin(n), end(n), back_inserter(res), [&](int n){ return n == p; });
    copy_if(begin(n), end(n), back_inserter(res), [&](int n){ return n > p; });
    return res;
}
```

### 3. 1.5 pass, 3 arrays
First pass is to populate 3 arrays. We also need another pass (0.5 elements in average) to merge those arrays.
**C++**
```cpp
vector<int> pivotArray(vector<int>& n, int p) {
    vector<int> res[3] = {};
    for (int n : n)
        res[n < p ? 0 : n == p ? 1 : 2].push_back(n);
    res[0].insert(end(res[0]), begin(res[1]), end(res[1]));
    res[0].insert(end(res[0]), begin(res[2]), end(res[2]));
    return res[0];
}
```
### 4. 2 passes, 1 array
Count numbers less than, and equal to the pivot. 

Those counts define positions where we insert numbers equal to the pivot (`eq`) and greater than the pivot (`hi`). The numbers smaller than the pivot (`lo`) are filled starting from `0`, obviously :)
**C++**
```cpp
vector<int> pivotArray(vector<int> &n, int p) {
	vector<int> res(n.size());
	  int lo = 0, eq = count_if(begin(n), end(n), [&](int n) { return n < p; }),
		  hi = eq + count(begin(n), end(n), p);
	  for (int n : n)
		res[n < p ? lo++ : n == p ? eq++ : hi++] = n;
	return res;
}
```