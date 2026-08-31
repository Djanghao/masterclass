# Python 3 | Manhattan Distance, Math | Explanation

**Author:** idontknoooo
**Votes:** 1
**Link:** [https://leetcode.com/problems/escape-the-ghosts/solutions/1477363/](https://leetcode.com/problems/escape-the-ghosts/solutions/1477363/)

---

### Explanation
- Since `ghosts` can **stay still**, this question becomes much easier. 
- The best strategy for `ghosts` to intercept player is to racing the shortest distance to the `target` and wait there
- Thus, from a player's perspective, we just need to make sure we can reach to `target` at least 1 step faster than any `ghosts`
	- Note: If player and `ghosts` use same number of steps to reach to `target`, then it is considered as a failure.
### Implementation
```
class Solution:
    def escapeGhosts(self, ghosts: List[List[int]], target: List[int]) -> bool:
        t_x, t_y = target
        m_x, m_y = abs(t_x), abs(t_y)
        for x, y in ghosts:
            manhattan = abs(t_x - x) + abs(t_y - y)
            if manhattan <= m_x + m_y:
                return False
        return True
```