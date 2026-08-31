# Swift

**Author:** ktoznet
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-genetic-difference-query/solutions/5341758/](https://leetcode.com/problems/maximum-genetic-difference-query/solutions/5341758/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    class TrieNode {
        var children: [TrieNode?] = Array(repeating: nil, count: 2)
        var count: Int = 0
    }
    
    class Trie {
        let root = TrieNode()
        
        func insert(_ num: Int) {
            var node = root
            for i in (0..<21).reversed() {
                let bit = (num >> i) & 1
                if node.children[bit] == nil {
                    node.children[bit] = TrieNode()
                }
                node = node.children[bit]!
                node.count += 1
            }
        }
        
        func remove(_ num: Int) {
            var node = root
            for i in (0..<21).reversed() {
                let bit = (num >> i) & 1
                if let child = node.children[bit] {
                    child.count -= 1
                    if child.count == 0 {
                        node.children[bit] = nil
                    }
                    node = child
                }
            }
        }
        
        func getMaxXOR(_ num: Int) -> Int {
            var node = root
            var maxXOR = 0
            for i in (0..<21).reversed() {
                let bit = (num >> i) & 1
                let oppositeBit = 1 - bit
                if let child = node.children[oppositeBit], child.count > 0 {
                    maxXOR |= (1 << i)
                    node = child
                } else if let child = node.children[bit] {
                    node = child
                }
            }
            return maxXOR
        }
    }
    
    func maxGeneticDifference(_ parents: [Int], _ queries: [[Int]]) -> [Int] {
        let n = parents.count
        var children = Array(repeating: [Int](), count: n)
        var root = -1
        
        for (child, parent) in parents.enumerated() {
            if parent == -1 {
                root = child
            } else {
                children[parent].append(child)
            }
        }
        
        var nodeQueries = Array(repeating: [(Int, Int)](), count: n)
        for (i, query) in queries.enumerated() {
            let node = query[0]
            let val = query[1]
            nodeQueries[node].append((val, i))
        }
        
        var result = Array(repeating: 0, count: queries.count)
        let trie = Trie()
        
        func dfs(_ node: Int) {
            trie.insert(node)
            
            for (val, idx) in nodeQueries[node] {
                result[idx] = trie.getMaxXOR(val)
            }
            
            for child in children[node] {
                dfs(child)
            }
            
            trie.remove(node)
        }
        
        dfs(root)
        
        return result
    }
}

```