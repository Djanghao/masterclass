# python3 explained

**Author:** saurabht462
**Votes:** 19
**Link:** [https://leetcode.com/problems/smallest-string-with-swaps/solutions/1452514/](https://leetcode.com/problems/smallest-string-with-swaps/solutions/1452514/)

---

```
class UnionFind:
    def __init__(self, size):
        self.root = [i for i in range(size)]
        self.rank = [1] * size
    def find(self, x):
        if x == self.root[x]:
            return x
        self.root[x] = self.find(self.root[x])
        return self.root[x]
    def union(self, x, y):
        rootX = self.find(x)
        rootY = self.find(y)
        if rootX != rootY:
            if self.rank[rootX] > self.rank[rootY]:
                self.root[rootY] = rootX
            elif self.rank[rootX] < self.rank[rootY]:
                self.root[rootX] = rootY
            else:
                self.root[rootY] = rootX
                self.rank[rootX] += 1
    def connected(self, x, y):
        return self.find(x) == self.find(y)

class Solution:
    def smallestStringWithSwaps(self, s: str, pairs: List[List[int]]):
        N=len(s)
        DSU=UnionFind(N)
        for x,y in pairs:
            DSU.union(x,y)
        parent=[DSU.find(i) for i in range(N)]
        dict=defaultdict(deque)
        for i in range(N):
            dict[parent[i]].append(s[i])
        for key in dict:
            dict[key]=deque(sorted(dict[key]))
        ans=""
        for i in range(N):
            dict_key=parent[i]
            ans+=dict[dict_key].popleft()
        return ans
    """
    hint---->any number of times.
    from these words we conclude that we can swap any numbers of time
 \xA0 \xA0so we will form union fromeach pair in \xA0pairs.
 \xA0 \xA0eg. s = "dcab", pairs = [[0,3],[1,2]]
 \xA0 \xA0there will be two union .
 \xA0 0:[0,3]
    1:[1,2]
 \xA0 \xA0so in one union we can swap any number of times,we will make unions using union-find .
    after union operation,parent array will look like this [0,1,1,0]
    after each union is formed we will make dictionary  where value will 
    store character values of indexes in every union [here there are two union with parent 0 and 1] and parent as keys.
    i have used dictionary of deque which i will explain below.
    from above example
    0:[d,b]  0->d ,3->b
    1:[c,a]  1->c,2->a
    after this we will sort each value in dictionary
    0:[b,d]
    1:[c,a]
    the reason of using deque is that after we iterate through parent array we have to get
    the first char in each values in dictionary of perticular union,so every time i will pop from
    left,which is also minimum of that group.
    """
