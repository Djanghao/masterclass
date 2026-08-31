# One Liner (count_if)

**Author:** votrubac
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5353294/](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5353294/)

---

We need one operation (increment or decrement) if a number if not divisible by `3`.

**Python**
```python
class Solution:
    minimumOperations = lambda _, nums : sum(1 for n in nums if n % 3)
```
**C++**
```cpp
int minimumOperations(vector<int>& nums) {
    return count_if(begin(nums), end(nums), [](int n){ return n % 3; });
}
```