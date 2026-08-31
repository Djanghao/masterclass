# Count Smaller and Equal

**Author:** votrubac
**Votes:** 55
**Link:** [https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/1601648/](https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/1601648/)

---

We do not need to sort the array - we can just count elements `smaller` than the target.

The first index of the target (in the sorted array) will be `smaller`, then `smaller + 1`, and so on - depending on how many times the target appears in the array.

**C++**
```cpp
vector<int> targetIndices(vector<int>& nums, int target) {
    int smaller = count_if(begin(nums), end(nums), [&](int n){ return n < target; });
    int equal = count(begin(nums), end(nums), target);
    vector<int> res(equal);
    iota(begin(res), end(res), smaller);
    return res;
}
```