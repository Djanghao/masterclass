# JavaScript: building the tree

**Author:** lilongxue
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subtree-of-the-same-color/solutions/5077943/](https://leetcode.com/problems/maximum-subtree-of-the-same-color/solutions/5077943/)

---

# Intuition
Build the tree
# Approach
Build the graph, then build the tree
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
/**
 * @param {number[][]} edges
 * @param {number[]} colors
 * @return {number}
 */
var maximumSubtreeSize = function(edges, colors) {
    function Node(val, color) {
        this.val = val
        this.color = color
        this.neighs = new Set()
        this.visited = false
        this.children = new Set()
    }
    Node.table = new Array(colors.length)
    for (const [val, color] of colors.entries())
        Node.table[val] = new Node(val, color)


    for (const [from, to] of edges) {
        const fromNode = Node.table[from], toNode = Node.table[to]
        fromNode.neighs.add(toNode)
        toNode.neighs.add(fromNode)
    }
    

    const visited = new Set()
    const root = Node.table[0]
    function visit(node) {
        node.visited = true
        for (const neigh of node.neighs) {
            if (!neigh.visited) {
                node.children.add(neigh)
                visit(neigh)
            }
        }
    }
    visit(root)


    let result = 1
    function getSize(node) {
        const { color, children } = node
        let outcome = 1
        for (const child of children) {
            const subresult = getSize(child)
            const [subcolor, subsize] = subresult
            if (subcolor !== color) outcome -= Infinity

            outcome += subsize
        }

        result = Math.max(result, outcome)
        return [color, outcome]
    }
    getSize(root)


    return result
};
```