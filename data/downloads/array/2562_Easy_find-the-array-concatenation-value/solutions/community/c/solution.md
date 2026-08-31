# Pow and Log

**Author:** votrubac
**Votes:** 44
**Link:** [https://leetcode.com/problems/find-the-array-concatenation-value/solutions/3174246/](https://leetcode.com/problems/find-the-array-concatenation-value/solutions/3174246/)

---

We use `pow` and `log10` to avoid string conversion.

## One-Liner
One-liner for my functional frieds. For those who are yet to embrace this, see the raw loops version below. 

**C++**
```cpp
long long findTheArrayConcVal(vector<int>& n) {
    return transform_reduce(begin(n), begin(n) + n.size() / 2, rbegin(n), 0LL, plus{}, [](int l, int r){
        return l * pow(10, (int)log10(r) + 1);}) 
        + accumulate(begin(n) + n.size() / 2, end(n), 0LL);
} 
```

## Raw Loops
**C++**
```cpp
long long findTheArrayConcVal(vector<int>& nums) {
    long long res = 0, sz = nums.size();
    for (int i = 0, j = sz - 1; i <= j; ++i, --j)
        if (i < j)
            res += nums[i] * pow(10, (int)log10(nums[j]) + 1) + nums[j];
        else
            res += nums[i];
    return res;
}
```