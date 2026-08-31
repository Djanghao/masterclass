# Swift DFS

**Author:** liampronan
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/solutions/6099862/](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/solutions/6099862/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- see code comments. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func maxTargetNodes(_ edges1: [[Int]], _ edges2: [[Int]], _ k: Int) -> [Int] {
        var (adjList1, adjList2) = buildAdjLists(edges1, edges2)

        // build up res by summing all target nodes for each i 
        var res = Array(repeating: 0, count: adjList1.count) 
        for i in 0...edges1.count {
            var visited = Set<Int>()
            visited.insert(i)
            res[i] = dfs(adjList1, node: i, k: k, visited: &visited)
        }
        
        var counter2 = [Int: Int]()
        // for the 2nd tree, we're really only concerned with the max value 
        // also, we set k to k-1 since we will "use" an edge to connect tree2 to tree1  
        var maxVal = Int.min
        for i in 0...edges2.count {
            var visited = Set<Int>()
            visited.insert(i)
            counter2[i] = dfs(adjList2, node: i, k: k - 1, visited: &visited)
            maxVal = max(maxVal, counter2[i]!)
        }
        
        return res.map { $0 + maxVal }
    }



    func dfs(_ adjList: [Int: [Int]], node: Int, k: Int, visited: inout Set<Int>) -> Int {
        if k < 0  { return 0 }
        if k == 0  { return 1 }

        var sum = 0
        for neighbor in adjList[node, default: []] {
            guard !visited.contains(neighbor) else { continue }
            visited.insert(neighbor)
            sum += dfs(adjList, node: neighbor, k: k - 1, visited: &visited)    
        }

        return sum + 1
    }

    func buildAdjLists(_ edges1: [[Int]], _ edges2: [[Int]]) -> ([Int: [Int]], [Int: [Int]]) {
        var adjList1 = (0...edges1.count).reduce(into: [Int: [Int]]()) { acc, v in 
            acc[v] = []
        }
        var adjList2 = (0...edges2.count).reduce(into: [Int: [Int]]()) { acc, v in 
            acc[v] = []
        }

        for edge in edges1 {
            adjList1[edge[0]]!.append(edge[1])
            adjList1[edge[1]]!.append(edge[0])
        }
        for edge in edges2 {
            adjList2[edge[0]]!.append(edge[1])
            adjList2[edge[1]]!.append(edge[0])
        }
        return (adjList1, adjList2)
    }
}
```