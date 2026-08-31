# [Python3] Path compression (Clean code, beats 99%)

**Author:** SPark9625
**Votes:** 18
**Link:** [https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/1206574/](https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/1206574/)

---

```python
class Solution:
    def numOfMinutes(self, n: int, headID: int, manager: List[int], informTime: List[int]) -> int:
        def find(i):
            if manager[i] != -1:
                informTime[i] += find(manager[i])
                manager[i] = -1
            return informTime[i]
        return max(map(find, range(n)))
```

The idea is, for each node, find out the total time it takes until the node has reached out to its subordinates (starting from the root node). For example, if a path looks like: `[root, ..., i, (i's subordinate), ...]` and we called the function `find(i)` then we would like to know `time(root -> ... -> i's subordinate)`.

But traversing the tree every time would be inefficient; In order to make this more efficient, we traverse the path from the `i`th node only once, and compress the path along the way, just like in union-find.

Once we understand what the `find` function does, all that's remaining is to call it for every node and take the maximum.

Time complexity: `O(n * a(n)) =(close to)= O(n)`, where `a()` is the Ackermann function.