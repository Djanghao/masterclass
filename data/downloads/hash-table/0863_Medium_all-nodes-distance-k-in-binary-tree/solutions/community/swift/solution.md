# 🚀 Swift | Graph | DFS | Time: O(n) | Space: O(n)

**Author:** alekseiwe
**Votes:** 2
**Link:** [https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/4436318/](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/4436318/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Convert tree into the `graph` by creating of `adjacency list`.
Iterate graph using `DFS`.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func distanceK(_ root: TreeNode?, _ target: TreeNode?, _ k: Int) -> [Int] {
        var res: [Int] = []
        guard let root = root, let target = target else { return res }
        var queue: [TreeNode] = [root]
        var adjacencyList: [Int: Set<Int>] = [:]
        
        while !queue.isEmpty {
            var currentLevel: [TreeNode] = []
            
            for i in 0 ..< queue.count {
                let node = queue[i]
                
                if let left = node.left {
                    currentLevel.append(left)
                    
                    if var vals = adjacencyList[node.val] {
                        vals.insert(left.val)
                        adjacencyList[node.val] = vals
                    } else {
                        adjacencyList[node.val] = .init([left.val])
                    }
                    
                    if var vals = adjacencyList[left.val] {
                        vals.insert(node.val)
                        adjacencyList[left.val] = vals
                    } else {
                        adjacencyList[left.val] = .init([node.val])
                    }
                }
                if let right = node.right {
                    currentLevel.append(right)
                    
                    if var vals = adjacencyList[node.val] {
                        vals.insert(right.val)
                        adjacencyList[node.val] = vals
                    } else {
                        adjacencyList[node.val] = .init([right.val])
                    }
                    
                    if var vals = adjacencyList[right.val] {
                        vals.insert(node.val)
                        adjacencyList[right.val] = vals
                    } else {
                        adjacencyList[right.val] = .init([node.val])
                    }
                }
            }
            
            queue = currentLevel
        }
        
        var visited: Set<Int> = .init([target.val])
        
        func dfs(_ node: Int, _ distance: Int) {
            if distance == k {
                res.append(node)
                return
            }
            
            let neighbors = adjacencyList[node] ?? []
            for neighbor in neighbors {
                guard !visited.contains(neighbor) else { continue }
                visited.insert(neighbor)
                dfs(neighbor, distance + 1)
            }
        }
        
        dfs(target.val, 0)
        
        return res
    }
}
```