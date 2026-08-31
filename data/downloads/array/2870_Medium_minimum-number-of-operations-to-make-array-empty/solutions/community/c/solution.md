# Lonely Element

**Author:** votrubac
**Votes:** 80
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4109932/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4109932/)

---


     
Let `cnt` be the count of elements with a specific value.
    
We cannot make an array empty if there is an element with `cnt == 1`.
    
Otherwise, we can remove all elements with the same value in `cnt / 3` operations, `+ 1` operation if there is a remainder (`cnt % 3 > 0`).
        
Why is that?      
- If the remainder is `2`, we first delete 2 elements (1 operations)
  - then we delete remaining triplets (`cnt / 3` operations)
- If the remainder is `1` we first delete 4 elements (2 operations)
  - then, we delete remaining triplets (`(cnt - 4) / 3` or `cnt / 3 - 1` operations)
        
In both these cases, we need `cnt / 3 + 1` operations.

**Python 3**
```python
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        cnt = Counter(nums)
        if min(cnt.values()) == 1:
            return -1
        return sum(c // 3 + (c % 3 > 0) for c in cnt.values())     
```

**C++**
```cpp
int minOperations(vector<int>& nums) {
    unordered_map<int, int> m;
    for (int n : nums)
        ++m[n];
    int res = 0;
    for (auto [_, cnt] : m) {
        if (cnt == 1)
            return -1;
        res += cnt / 3 + (cnt % 3 > 0);
    }
    return res;
}
```