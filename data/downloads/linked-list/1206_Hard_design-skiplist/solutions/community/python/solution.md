# simple solution with dynamic levels + references

**Author:** zlobspb
**Votes:** 22
**Link:** [https://leetcode.com/problems/design-skiplist/solutions/1082053/](https://leetcode.com/problems/design-skiplist/solutions/1082053/)

---

Info that helped me to solve this problem:
- https://leetcode.com/problems/design-skiplist/discuss/698146/Things-that-helped-me-solve-this-problem
- https://cw.fel.cvut.cz/old/_media/courses/a4b36acm/maraton2015skiplist.pdf
- https://cglab.ca/~morin/teaching/5408/refs/p90b.pdf

Following implementation is pretty straightforward. It is possible to cut lines amount here and there but I left it this way so it would be easier to quickly understand how it works.

```
import random


class ListNode:
    __slots__ = ('val', 'next', 'down')

    def __init__(self, val):
        self.val = val
        self.next = None
        self.down = None


class Skiplist:
    def __init__(self):
        # sentinel nodes to keep code simple
        node = ListNode(float('-inf'))
        node.next = ListNode(float('inf'))
        self.levels = [node]

    def search(self, target: int) -> bool:
        level = self.levels[-1]
        while level:
            node = level
            while node.next.val < target:
                node = node.next
            if node.next.val == target:
                return True
            level = node.down
        return False

    def add(self, num: int) -> None:
        stack = []
        level = self.levels[-1]
        while level:
            node = level
            while node.next.val < num:
                node = node.next
            stack.append(node)
            level = node.down

        heads = True
        down = None
        while stack and heads:
            prev = stack.pop()
            node = ListNode(num)
            node.next = prev.next
            node.down = down
            prev.next = node
            down = node
            # flip a coin to stop or continue with the next level
            heads = random.randint(0, 1)

        # add a new level if we got to the top with heads
        if not stack and heads:
            node = ListNode(float('-inf'))
            node.next = ListNode(num)
            node.down = self.levels[-1]
            node.next.next = ListNode(float('inf'))
            node.next.down = down
            self.levels.append(node)

    def erase(self, num: int) -> bool:
        stack = []
        level = self.levels[-1]
        while level:
            node = level
            while node.next.val < num:
                node = node.next
            if node.next.val == num:
                stack.append(node)
            level = node.down

        if not stack:
            return False

        for node in stack:
            node.next = node.next.next

        # remove the top level if it's empty
        while len(self.levels) > 1 and self.levels[-1].next.next is None:
            self.levels.pop()

        return True

```