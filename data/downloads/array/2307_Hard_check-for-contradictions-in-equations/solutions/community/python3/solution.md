# [Python3][Beats 93.22%] Fast, Clean Solution using Union Find

**Author:** tasyj
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/3582655/](https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/3582655/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Since this question involves a graph like data (eg: `a/b` -> `a` node is connected with `b` node and this relationship has a value), I used union find here. Union Find allows detecting if there is a connection already made between these two values very easily.

# Approach
<!-- Describe your approach to solving the problem. -->
I had to make a few adjustmants in the typical union find data structure such as using a dict instead of using an array (because we initially don't know how many distinct values will be there)
> Will add a proper description in a few days
# Complexity
Regarding the time complexity we call union operation and find operation for all the edges in the graph. You can refer to the [disjoint set explore card](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3880/), for more info related to the time complexity,

> V: Number of distinct variables in the equation
> E: Length of the array 
 
- Time complexity: $$O(Elog(V))$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Space complexity: $$O(V)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class UnionFind:
    def __init__(self):
        self.root = {}
        self.value = {}
    
    def _add(self, key):
        self.root[key] = key
        self.value[key] = 1

    def find(self, key):
        if key not in self.root: self._add(key)

        if self.root[key] != key:
            self.root[key], val = self.find(self.root[key])
            self.value[key] *= val

        return self.root[key], self.value[key] 
        
    def union(self, x, y, value):
        (rootx, valx), (rooty, valy) = self.find(x), self.find(y)
        
        self.root[rootx] = rooty
        self.value[rootx] *= (value*valy)/valx

         
class Solution:
    def checkContradictions(self, equations: List[List[str]], values: List[float]) -> bool:
        # We can use union find to solve this. It is a slight diviation from union find where we keep the values
        uf = UnionFind()
        
        for (x, y), value in zip(equations, values):
            # if keys are not there add them and union
            rootx, valx = uf.find(x)
            rooty, valy = uf.find(y)

            if rootx == rooty:
                if abs((valx/valy )- value) > 0.00001: return True # we have detected a detected a contradiction
            else:
                uf.union(x, y, value)

        return False # no contradictions detected

```