# Kotlin HashMap solution | O(n)

**Author:** jeppeman
**Votes:** 0
**Link:** [https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/3307349/](https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/3307349/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. Declare a hashmap that will store key-value-pairs between the original nodes and their copy counterparts.
2. Recursively process the original tree, for each node:
    i) Check the map if a copy has already been created, if not, create a shallow copy of the node and add it to the map.
    ii) Check if the random node exists on the current node, if so, repeat step i) for the random node
    iii) Recursively repeat for left and right of the current node

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n), where n is the number of nodes in the tree.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n), where n is the number of nodes in the tree.

# Code
```
class Solution {
    fun copyRandomBinaryTree(root: Node?): NodeCopy? {
        if (root == null) return null

        val copies = mutableMapOf<Node, NodeCopy>()

        fun Node?.deepCopy(): NodeCopy? {
            if (this == null) return null
            if (this in copies) return copies[this]!!

            val copy = shallowCopy()
            copies[this] = copy
            
            copy.random = random.deepCopy()
            copy.left = left.deepCopy()
            copy.right = right.deepCopy()

            return copy
        }

        return root.deepCopy()
    }

    fun Node.shallowCopy(): NodeCopy = NodeCopy(`val`)
}
```