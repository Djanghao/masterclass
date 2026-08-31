# Count subarrays with zero XOR

**Author:** votrubac
**Votes:** 38
**Link:** [https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/3286256/](https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/3286256/)

---



Bits in a beautiful subarray should appear even number of times. 
    
Therefore, XOR of elements of a beautiful subarray should be zero.
    
Counting subarrays with a specific XOR in O(n) is a classic problem (you can find it by the name).

**Python 3**
```python
class Solution:
    def beautifulSubarrays(self, nums: List[int]) -> int:
        cnt = Counter({0: 1})
        for val in accumulate(nums, operator.xor):
            cnt[val] += 1
        return sum(v * (v - 1) // 2 for v in cnt.values())
```

**C++**
```cpp
long long beautifulSubarrays(vector<int>& nums) {
    unordered_map<int, int> cnt{{0, 1}};
    partial_sum(begin(nums), end(nums), begin(nums), bit_xor<>());
    return accumulate(begin(nums), end(nums), 0LL, [&](long long s, int n){ return s + cnt[n]++; });
}