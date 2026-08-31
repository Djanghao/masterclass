# Python | Sort + DSU, detailed explanation

**Author:** zoo30215
**Votes:** 33
**Link:** [https://leetcode.com/problems/find-all-people-with-secret/solutions/1599808/](https://leetcode.com/problems/find-all-people-with-secret/solutions/1599808/)

---

**Key Observation:**
At every timestamp, the connections between people will form several disjoint sets.

For example,
```
meetings = [[0, 1, 1], [1, 2, 1], [3, 4, 1], [1, 5, 1],
            [1, 5, 2], [2, 6, 2]]
```
will form the groups like below:
```
time = 1, groups = [{0, 1, 2, 5}, {3, 4}]
time = 2, groups = [{1, 5}, {2, 6}]
```

So we collect the connections and sorted them with its timestamp as key.
```python
time2meets = defaultdict(list)
for x, y, t in meetings:
    time2meets[t].append((x, y))
time2meets = sorted(time2meets.items())
```

---
**Update as time goes on:**

Let ```curr_know``` represents the set of people who have known the secret now.
Then at every timestamp, all of the members of a certain group may know the secret if there exists a member who is already in ```curr_know```.

```python
curr_know = set([0, firstPerson])

for time, meets in time2meets:
    # construct groups at this timestamp
    uf = UnionFind()
    for x, y in meets:
        uf.union(x, y)

    # finding the group members
    groups = defaultdict(set)
    for idx in uf.parents:
        groups[uf.find_parent(idx)].add(idx)
        
    # if a member of group is in curr_know, 
    # update curr_know with all the members of this group 
    for group in groups.values():
        if group & curr_know:
            curr_know.update(group)
```
---
**Complexity Analysis:**

Let `N` be the number of peoples, `M` be the number of meetings.

* **Time Complexity:**
    * Sorting the timestamp of meetings takes at most `O(M log M)` time (or if you use bucket sort it will take `O(T)` where `T = 10 ** 5`  ).
    * Merging all meetings takes `O(M)` times:
        * Suppose there are `K` people attending a meeting at a certain timestamp:
            * The union part takes `O(K)` times if we implement DSU with path compression and union by rank.
            * Finding the group members takes `O(K)` times.
            * Updating the group members takes `O(K)` times.
        * Since `sum(K) = M * 2`, this part takes `O(M)` times.
    * Total time complexity is `O(M log M)`, irrelevant to `N` if we use hash table to maintain `parents` and `ranks` in DSU.

* **Space Complexity: `O(M + N)`**

---

**Complete code:**
```python
class Solution:
    def findAllPeople(self, n: int, meetings: List[List[int]], firstPerson: int) -> List[int]:
        
        class UnionFind:
            def __init__(self):
                self.parents = {}
                self.ranks = {}
                
            def insert(self, x):
                if x not in self.parents:
                    self.parents[x] = x
                    self.ranks[x] = 0
                
            def find_parent(self, x):
                if self.parents[x] != x:
                    self.parents[x] = self.find_parent(self.parents[x])
                return self.parents[x]
            
            def union(self, x, y):
                self.insert(x)
                self.insert(y)
                x, y = self.find_parent(x), self.find_parent(y)
                if x == y:
                    return 
                if self.ranks[x] > self.ranks[y]:
                    self.parents[y] = x
                else:
                    self.parents[x] = y
                    if self.ranks[x] == self.ranks[y]:
                        self.ranks[y] += 1
            
        time2meets = defaultdict(list)
        for x, y, t in meetings:
            time2meets[t].append((x, y))
        time2meets = sorted(time2meets.items())
 
        curr_know = set([0, firstPerson])

        for time, meets in time2meets:
            uf = UnionFind()
            for x, y in meets:
                uf.union(x, y)
            
            groups = defaultdict(set)
            for idx in uf.parents:
                groups[uf.find_parent(idx)].add(idx)
            
            for group in groups.values():
                if group & curr_know:
                    curr_know.update(group)

        return list(curr_know)
```
        
