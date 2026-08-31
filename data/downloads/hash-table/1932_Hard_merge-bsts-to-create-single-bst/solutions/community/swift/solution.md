# Swift | BFS

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-bsts-to-create-single-bst/solutions/3115463/](https://leetcode.com/problems/merge-bsts-to-create-single-bst/solutions/3115463/)

---

**BFS Approach (accepted answer)**
```
class Solution {
    func canMerge(_ trees: [TreeNode?]) -> TreeNode? {
        var rootNodeLookup = [Int: TreeNode]()
        var childVals = Set<Int>()
        for tree in trees {
            guard let tree = tree else { continue }
            rootNodeLookup[tree.val] = tree
            if let left = tree.left, !childVals.insert(left.val).inserted {
                return nil // Fail: child val not unique
            }
            if let right = tree.right, !childVals.insert(right.val).inserted {
                return nil // Fail: child val not unique
            }
        }
        
        let potentialRoots = Set(rootNodeLookup.keys).subtracting(childVals)
        guard potentialRoots.count == 1 else { return nil } // Fail: not exactly one node is potential root

        let rootNode = rootNodeLookup[potentialRoots.first!]!
        var leaves = [(rootNode, Int.min, Int.max)]
        var count = 0
        
        while !leaves.isEmpty {
            let oldLeaves = leaves
            leaves = []
            for entry in oldLeaves {
                let (leaf, lowerBound, upperBound) = entry
                guard lowerBound...upperBound ~= leaf.val else { return nil }  // Fail: current leaf value creates invalid BST
                if let rootNode = rootNodeLookup[leaf.val] {
                    if let left = rootNode.left {
                        leaf.left = left
                        leaves.append((left, lowerBound, min(upperBound, leaf.val)))
                    }
                    if let right = rootNode.right {
                        leaf.right = right
                        leaves.append((right, max(lowerBound, leaf.val), upperBound))
                    }
                    count += 1
                }
            }
        }
        
        return count == trees.count ? rootNode : nil
    }
}
```