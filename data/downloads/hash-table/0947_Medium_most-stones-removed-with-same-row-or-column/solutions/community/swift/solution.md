# Optimal Solution

**Author:** dawoodaamir99
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/5707572/](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/5707572/)

---

# Intuition
The problem involves removing stones from a 2D grid. A stone can be removed if it shares the same row or column as another stone. The objective is to find the maximum number of stones that can be removed, leaving as few stones as possible such that no stone shares a row or column with any other stone.

# Approach
To solve this, we can use the Union-Find (Disjoint Set Union) data structure. The idea is to treat each stone as a node in a graph where there is an edge between two nodes if they share a row or a column. The problem then reduces to finding the number of connected components in this graph.

Steps in the Solution:
Union-Find Initialization:

We use a dictionary parent to track the parent of each node in the Union-Find structure.
The find function is used to find the root of a node, with path compression to optimize future queries.
The union function connects two nodes by linking their roots.
Union Operation:

For each stone, we treat its row index and column index as nodes and union them.
We add an offset of 100000 to column indices to prevent collisions with row indices, ensuring they are treated as distinct entities in the Union-Find structure.
Counting Unique Components:

After union operations, we determine the number of connected components by counting the unique roots of the stones' row indices.
Calculate Result:

The number of stones that can be removed is given by the total number of stones minus the number of unique components (unique roots).
Example Walkthrough:
Consider the example stones = [[0,0],[2,2],[10000,2]].

The first stone at [0, 0] connects row 0 and column 0 + 100000.
The second stone at [2, 2] connects row 2 and column 2 + 100000.
The third stone at [10000, 2] connects row 10000 and column 2 + 100000.
In this case, the connected components are [0], [2], and [10000], so only one stone can be removed (result = 3 - 2 = 1).

This Union-Find approach ensures efficient calculation of the number of removable stones, handling up to 1000 stones with the constraints provided.

# Complexity
- Time complexity:
O(n\u22C5\u03B1(n)), which is effectively close to O(n) in practice.

- Space complexity:
O(n)

# Code
```swift []
class Solution {
    func removeStones(_ stones: [[Int]]) -> Int {
        var parent = [Int: Int]()
        
        func find(_ x: Int) -> Int {
            if parent[x] == nil {
                parent[x] = x
            }
            if parent[x] != x {
                parent[x] = find(parent[x]!)
            }
            return parent[x]!
        }
        
        func union(_ x: Int, _ y: Int) {
            let rootX = find(x)
            let rootY = find(y)
            if rootX != rootY {
                parent[rootX] = rootY
            }
        }
        
        for stone in stones {
            // Union row index with column index using a large offset
            union(stone[0], stone[1] + 100000)
        }
        
        var uniqueRoots = Set<Int>()
        for stone in stones {
            uniqueRoots.insert(find(stone[0]))
        }
        
        return stones.count - uniqueRoots.count
    }
}

```