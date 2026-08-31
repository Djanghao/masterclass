# Sort and Swap

**Author:** votrubac
**Votes:** 17
**Link:** [https://leetcode.com/problems/minimum-number-game/solutions/4449727/](https://leetcode.com/problems/minimum-number-game/solutions/4449727/)

---

**Python 3**
```python
class Solution:
    def numberGame(self, nums: List[int]) -> List[int]:
        it = iter(sorted(nums))
        return reduce(concat, [(b, a) for a, b in zip(it, it)])
```
**C++**
```cpp
vector<int> numberGame(vector<int>& nums) {
    sort(begin(nums), end(nums));
    for (int i = 0; i < nums.size(); i += 2)
        swap(nums[i], nums[i + 1]);
    return nums;
}
```