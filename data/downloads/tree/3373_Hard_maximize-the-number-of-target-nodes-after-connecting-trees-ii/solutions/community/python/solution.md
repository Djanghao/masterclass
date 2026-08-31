# Python - parity count with bfs

**Author:** Ante_
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/solutions/6101981/](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/solutions/6101981/)

---

```
class Solution:
    def get_biggest_count(self, t):
        count, seen, qu = Counter(), set(), deque([(0, 0)])
        while qu:
            node, p = qu.popleft()
            count[p] += 1
            seen.add(node)
            for to in t[node]:
                if to not in seen: qu.append((to, p^1))        
        return max(count.values())
    def make_tree(self, e):
        t = defaultdict(set)
        for a, b in e:
            t[a].add(b)
            t[b].add(a)        
        return t
    def maxTargetNodes(self, e1, e2):
        t = self.make_tree(e1)              
        max_count = self.get_biggest_count(self.make_tree(e2))
        count, seen, qu = Counter(), dict(), deque([(0,0)])      
        while qu:
            node, p = qu.popleft()
            seen[node] = p
            count[p] += 1
            for to in t[node]:
                if to not in seen:
                    qu.append((to, p^1))
        return [max_count + count[seen[i]] for i in range(max(t) + 1)]
```