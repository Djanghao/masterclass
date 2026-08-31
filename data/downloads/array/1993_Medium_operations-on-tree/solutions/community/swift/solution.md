# Swift - 100% runtime, 100% memory. Explanation.

**Author:** playability
**Votes:** 0
**Link:** [https://leetcode.com/problems/operations-on-tree/solutions/4304255/](https://leetcode.com/problems/operations-on-tree/solutions/4304255/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
After reading through the requirements, the intuition sugggests that the main task at hand is define the internal data structure(s) that would make listed operations as efficient as possible. 

Two questions are:
1. How do we store the graph representation?
2. How do we store the `isLocked` status of a node `num` by `user`?

Thinking about **(1)**, we can do one of these:
 * Graph representation (e.g. `Node` class)
 * Same an the input (`parent: [Int]`)

Graph representation would give us `O(N)` time complexity to construct the graph from the input. Thus, it has to be beneficial for the rest of the operations. For example we can keep the state of the `locked by user` inside the node. But then, `lock()` and `unlock()`  are implemented with DFS that takes `O(N)` time, while `upgrade()` intuitivelly is a combination of `O(N)` operations (e.g. "is the node locked?", "unlock all descendants"). The gut feeling is that sure, we might optimize on that, but it smells. 

Let's explore the alternative: `parent: [Int]`. We just copy the input array. And we need and additional table to store `locked by user`. Interesting observations here:

 * node # is essenctially an index in the 'parent' array

 ```
parent:       [-1, 0, 0, 1, 1, 2, 2]
node #          0  1  2  3  4  5  6 
```

 * graph representation is sort of unusual, and since  `upgrade()` is the most sophisticated operation, certain considerations have to be made to implement all its pre-conditions and sub-operations.

To store `locked by user` we can use a table like this: 
```

locked node  | userID
------------------------
4            |  2
2            |  6
6            |  1
5            |  6
```
This gives us `O(1)` to both `lock()` and `unlock()` operations.
The `locked node` will always have unique values, since the node can only be locked once, while `userID` column allows for duplicates, as the same user can lock multiple nodes.

With  `parent: [Int]` graph representation, it feels like the best we can do for `upgrade()` is `O(N)`, as we need to search for locked ancestors and descendants.

# Approach
<!-- Describe your approach to solving the problem. -->

Let's declare
```
private var lockTable: [Int: Int] // node : user
```
`lock()` and `unlock()` basically follows the requirements and operates on the `lockTable`. 

For `upgrade()` there are couple of helper functions. We briefly describe the idea behind each:
 * `isLockedAncestor()` we traverse the the tree up throught the parent reference. This is efficient as possible, as we basically need to go thought the entire height of the tree in worst case.
 * `lockedDescendants()` traversing from the parent **to** children feels like a complicated task given the tree representation, so we do another way around. Let's just figure out all the locked nodes and find if these nodes are descendants of the give node by moving up. This potentially is also inefficient as `n-1` nodes in the tree might be locked, and the upgrade node is the root. Discuss with the interviewer about pros and cons. 
 * `unlockAll()` once you know all the locked descendants it is just `O(k)` to unlock them, where `k` is number of locked descendants. 


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
* `lock()` - `O(1)`
* `unlock()` - `O(1)`
* `unlockAll()` - `O(N)`
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
* `O(N)`

# Code
```
class LockingTree {

    private var lockTable: [Int: Int] // node : user
    private var parent: [Int]

    init(_ parent: [Int]) {
        self.lockTable = [:]
        self.parent = parent
    }
    
    func lock(_ num: Int, _ user: Int) -> Bool {
        if num > parent.count - 1 {
            // node is not in the tree
            return false
        }

        if let _ = lockTable[num] {
            // node is locked
            return false
        }
        lockTable[num] = user
        return true
    }
    
    func unlock(_ num: Int, _ user: Int) -> Bool {
        if num > parent.count - 1 {
            // node is not in the tree
            return false
        }

        if let lockedUser = lockTable[num], lockedUser == user {
            // unlock node, locked by the same user before
            lockTable[num] = nil 
            return true
        }
        return false
    }
    
    func upgrade(_ num: Int, _ user: Int) -> Bool {
        if num > parent.count - 1 {
            // node is not in the tree
            return false
        }

        if lockTable[num] != nil {
            // node is locked
            return false
        }

        // Check if any locked ancestors -> false is any
        if isLockedAncestor(of: num) {
            return false
        }

        // Check if any locked descendants -> false if none
        let desc = lockedDescendants(of: num)
        if desc.isEmpty {
            return false
        }

        // If possible - unlock the descendants
        unlockAll(desc, user)
        // Lock the node
        lock(num, user)
        return true
    }

/*
   4    - ancestor of node 9
    \\
     9  - node 9 
*/
    private func isLockedAncestor(of node: Int) -> Bool {
        var nextAncestor = node
        while nextAncestor >= 0 {
            nextAncestor = self.parent[nextAncestor]
            if lockTable[nextAncestor] != nil {
                // node is locked
                return true
            }
        }
        return false
    }
/*
   4    - node 4
    \\
     9  - descendant of node 4
*/
    private func lockedDescendants(of node: Int) -> [Int] {
        var descendants = [Int]()
        for (targetNode, _) in lockTable {
            if isNode(node, ancestorOf: targetNode) {
                descendants.append(targetNode)
            }
        }

        return descendants
    }

    private func isNode(_ nodeA: Int, ancestorOf targetNode: Int) -> Bool {
        var nextAncestor = targetNode
        while nextAncestor >= 0 {
            nextAncestor = self.parent[nextAncestor]
            if nextAncestor == nodeA {
                // found that 'nodeA' is an ancestor of 'targetNode'
                return true
            }
        }
        return false
    }

    private func unlockAll(_ nodes: [Int], _ user: Int) {
        for node in nodes {
             lockTable[node] = nil
        }
    }
}
```