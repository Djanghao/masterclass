# Count Unique Numbers

**Author:** votrubac
**Votes:** 17
**Link:** [https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4109943/](https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4109943/)

---

**Python 3**
```python
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        st, i = set(), len(nums) - 1
        while len(st) < k:
            if nums[i] <= k:
                st.add(nums[i])
            i -= 1
        return len(nums) - i - 1
```

**C++**
```cpp    
int minOperations(vector<int>& nums, int k) {
    int cnt[51] = {}, i = nums.size() - 1;
    for (int found = 0; found < k; --i)
        if (nums[i] <= k)
            found += cnt[nums[i]]++ == 0;
    return nums.size() - i - 1;
}
```