# Set

**Author:** votrubac
**Votes:** 24
**Link:** [https://leetcode.com/problems/relocate-marbles/solutions/3737120/](https://leetcode.com/problems/relocate-marbles/solutions/3737120/)

---

Since we need to move all marbles, it is as simple of erasing from and inserting to position.

We use set to dedup.

We can also use a hashset and sort in the end.

**Python 3**
```python
class Solution:
    def relocateMarbles(self, nums: List[int], moveFrom: List[int], moveTo: List[int]) -> List[int]:
        s = set(nums)
        for f, t in zip(moveFrom, moveTo):
            s.remove(f)
            s.add(t)
        return sorted(s)
```

**C++**
```cpp
vector<int> relocateMarbles(vector<int>& nums, vector<int>& moveFrom, vector<int>& moveTo) {
    set<int> s(begin(nums), end(nums));
    for (int i = 0; i < moveFrom.size(); ++i) {
        s.erase(s.find(moveFrom[i]));
        s.insert(moveTo[i]);
    }
    return vector<int>(begin(s), end(s));
}
```