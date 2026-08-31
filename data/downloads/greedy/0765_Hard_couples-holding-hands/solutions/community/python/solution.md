# 765: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 10
**Link:** [https://leetcode.com/problems/couples-holding-hands/solutions/4204660/](https://leetcode.com/problems/couples-holding-hands/solutions/4204660/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
The solution uses the union-find data structure. Union-find helps in understanding the component or group to which an element belongs.

```
def minSwapsCouples(self, row: List[int]) -> int:
    ...
    n = len(row) // 2
    parent = [i for i in range(n)]
    ...
```

Here, n denotes the total number of couples. We initialize the parent list such that each person is its own parent (or representative). This represents that initially, everyone is in their individual group.

```
def find(x):
    if parent[x] != x:
        parent[x] = find(parent[x])
    return parent[x]
```

The find function returns the representative (or the leader) of the group to which x belongs. If x is not its own parent, we recursively find the parent of x.

```
def union(x, y):
    rootX = find(x)
    rootY = find(y)
    if rootX != rootY:
        parent[rootX] = rootY
```

The union function is responsible for merging two groups. We first find the leaders of the groups to which x and y belong. If they are different, we merge them by making rootX a child of rootY.

```
for i in range(0, len(row), 2):
    union(row[i] // 2, row[i+1] // 2)
```

Here, we iterate through the row in pairs. For every pair of persons, we union their groups. The operation row[i] // 2 maps a person to its couple number. For example, person 0 and 1 will map to couple 0, person 2 and 3 will map to couple 1, and so on.

```
count = sum([1 for i, x in enumerate(parent) if i == find(x)])
return n - count
```

After performing all the unions, we count how many persons are still their own representative. This indicates the number of couples correctly seated. Since there are n couples in total, the number of swaps required will be n - count.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution:
    def minSwapsCouples(self, row: List[int]) -> int:
        
        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]
        
        def union(x, y):
            rootX = find(x)
            rootY = find(y)
            if rootX != rootY:
                parent[rootX] = rootY

        n = len(row) // 2
        parent = [i for i in range(n)]
        
        for i in range(0, len(row), 2):
            union(row[i] // 2, row[i+1] // 2)
        
        count = sum([1 for i, x in enumerate(parent) if i == find(x)])
        return n - count

```