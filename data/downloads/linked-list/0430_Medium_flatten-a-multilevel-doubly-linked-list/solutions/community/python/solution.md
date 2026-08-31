# python recursive and iterative

**Author:** maxwellNorah
**Votes:** 30
**Link:** [https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/269758/](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/269758/)

---

Recursive:
```
class Solution:
    def flatten(self, head: 'Node') -> 'Node':
        if not head: return None
        def travel(node):
            while node:
                q = node.next
                if not q: tail = node
                if node.child:
                    node.next = node.child
                    node.child.prev = node
                    t = travel(node.child)
                    if q:
                        q.prev = t
                    t.next= q
                    node.child = None
                node = node.next
            return tail
        travel(head)
        return head
```

DFS with stack:
```
class Solution:
    def flatten(self, head: 'Node') -> 'Node':
        if not head: return None
        stack = [head]; p = None
        while stack:
            r = stack.pop()
            if p:
                p.next,r.prev = r,p
            p = r
            if r.next:
                stack.append(r.next)
            if r.child:
                stack.append(r.child)
                r.child = None
        return head
```