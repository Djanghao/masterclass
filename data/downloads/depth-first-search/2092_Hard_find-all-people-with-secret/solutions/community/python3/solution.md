# [Python3] BFS or DFS by group

**Author:** ye15
**Votes:** 46
**Link:** [https://leetcode.com/problems/find-all-people-with-secret/solutions/1599870/](https://leetcode.com/problems/find-all-people-with-secret/solutions/1599870/)

---

Pleaes check out this [commit](https://github.com/gaosanyong/leetcode/commit/b3dd8d234940d5e4afc6a22cc8fc1f4a2e69dd3d) for solutions of weekly 269.

```
class Solution:
    def findAllPeople(self, n: int, meetings: List[List[int]], firstPerson: int) -> List[int]:
        can = {0, firstPerson}
        for _, grp in groupby(sorted(meetings, key=lambda x: x[2]), key=lambda x: x[2]): 
            queue = set()
            graph = defaultdict(list)
            for x, y, _ in grp: 
                graph[x].append(y)
                graph[y].append(x)
                if x in can: queue.add(x)
                if y in can: queue.add(y)
                    
            queue = deque(queue)
            while queue: 
                x = queue.popleft()
                for y in graph[x]: 
                    if y not in can: 
                        can.add(y)
                        queue.append(y)
        return can
```

or 
```
class Solution:
    def findAllPeople(self, n: int, meetings: List[List[int]], firstPerson: int) -> List[int]:
        can = {0, firstPerson}
        for _, grp in groupby(sorted(meetings, key=lambda x: x[2]), key=lambda x: x[2]): 
            stack = set()
            graph = defaultdict(list)
            for x, y, _ in grp: 
                graph[x].append(y)
                graph[y].append(x)
                if x in can: stack.add(x)
                if y in can: stack.add(y)
                    
            stack = list(stack)
            while stack: 
                x = stack.pop()
                for y in graph[x]: 
                    if y not in can: 
                        can.add(y)
                        stack.append(y)
        return can
```

Adding union-find implementation inspired by @lzl124631x's post.
```
class UnionFind:

	def __init__(self, n: int):
		self.parent = list(range(n))
		self.rank = [1] * n

	def find(self, p: int) -> int:
		"""Find with path compression"""
		if p != self.parent[p]:
			self.parent[p] = self.find(self.parent[p])
		return self.parent[p]

	def union(self, p: int, q: int) -> bool:
		"""Union with rank"""
		prt, qrt = self.find(p), self.find(q)
		if prt == qrt: return False
		if self.rank[prt] > self.rank[qrt]: prt, qrt = qrt, prt 
		self.parent[prt] = qrt
		self.rank[qrt] += self.rank[prt]
		return True


class Solution:
    def findAllPeople(self, n: int, meetings: List[List[int]], firstPerson: int) -> List[int]:
        uf = UnionFind(n)
        uf.union(0, firstPerson)
        for _, grp in groupby(sorted(meetings, key=lambda x: x[2]), key=lambda x: x[2]): 
            seen = set()
            for x, y, _ in grp: 
                seen.add(x)
                seen.add(y)
                uf.union(x, y)
            for x in seen: 
                if uf.find(x) != uf.find(0): uf.parent[x] = x # reset 
        return [x for x in range(n) if uf.find(x) == uf.find(0)]
```