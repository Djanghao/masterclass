# Prefix Sum

**Author:** votrubac
**Votes:** 15
**Link:** [https://leetcode.com/problems/left-and-right-sum-differences/solutions/3231269/](https://leetcode.com/problems/left-and-right-sum-differences/solutions/3231269/)

---

**C++**
```cpp
vector<int> leftRigthDifference(vector<int>& nums) {
    vector<int> res, ps(nums.size() + 1);
    partial_sum(begin(nums), end(nums), begin(ps) + 1);
    for (int i = 0; i < nums.size(); ++i)
        res.push_back(abs(ps.back() - ps[i + 1] - ps[i]));
    return res;
}
```
## No Raw Loops Version
Here, we reuse the input array for prefix sum, and for the output. 
**C++**
```cpp
vector<int> leftRigthDifference(vector<int>& n) {
    int prev = 0;
    partial_sum(begin(n), end(n), begin(n));
    transform(begin(n), end(n), begin(n), [&](int val){
        return abs(n.back() - val - exchange(prev, val));
    });
    return n;
}
```