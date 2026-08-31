# Go left and then go right

**Author:** vokasik
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii/solutions/5806411/](https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii/solutions/5806411/)

---

```
class Solution:
    def toArray(self, node: 'Optional[Node]') -> List[int]:
        while node.prev: # find the first node
            node = node.prev
        res = []
        while node: # extract values to the result
            res.append(node.val)
            node = node.next
        return res
```
Or we can use a `deque()` and do it in `one pass`.