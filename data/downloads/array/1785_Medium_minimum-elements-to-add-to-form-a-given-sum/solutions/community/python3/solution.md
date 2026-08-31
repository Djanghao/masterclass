# Python 3 | 1-liner | Explanation

**Author:** idontknoooo
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/1121048/](https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/1121048/)

---

### Explanation
- Find the absolute difference
- Add new numbers using `limit`, count how many numbers need to be added using `ceil`
### Implementation
```
class Solution:
    def minElements(self, nums: List[int], limit: int, goal: int) -> int:
        return math.ceil(abs(goal - sum(nums)) / limit)
```