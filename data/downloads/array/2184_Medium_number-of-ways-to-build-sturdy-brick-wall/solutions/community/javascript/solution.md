# JavaScript DP Solution

**Author:** lilongxue
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/solutions/5638620/](https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/solutions/5638620/)

---

# Intuition
Each row is a node. When two rows can be adjacent, their corresponding rows are connected.
# Approach
1. Sort the bricks.
2. Get all states of a row can be. A row is a set representing the seams of a row of bricks.
3. Wrap the rows into nodes.
4. Connect the each pair of nodes (including self-to-self) if their corresponding rows can be adjacent.
5. Use DP to go through the graph and get the result.
# Complexity
- Time complexity:
Not Sure
- Space complexity:
Not Sure
# Code
```
/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} bricks
 * @return {number}
 */
var buildWall = function(height, width, bricks) {
    bricks.sort((a, b) => a - b)

    // each row is a set, represents a row of seams
    function getAllRows(fromIndex) {
        const rmg = width - fromIndex
        if (rmg === 0)
            return [ new Set() ]

        const result = []
        for (const brick of bricks) {
            if (brick > width - fromIndex)
                break
            
            const subresult = getAllRows(fromIndex + brick)
            for (const suboutcome of subresult) {
                const outcome = new Set(suboutcome)

                const here = brick + fromIndex
                if (here !== width) outcome.add(here)

                result.push(outcome)
            }
        }
        
        return result
    }


    const rows = getAllRows(0)
    const len = rows.length
    function Node(val) {
        this.val = val
        this.row = rows[val]
        this.neighs = []
    }
    const nodeTable = new Array(len)
    for (const i of nodeTable.keys())
        nodeTable[i] = new Node(i)

    // whether two rows of bricks can be adjacent
    function canBeAdjacent(nodeA, nodeB) {
        const rowA = nodeA.row, rowB = nodeB.row
        for (const a of rowA) {
            if (rowB.has(a))
                return false
        }

        return true
    }

    // when two nodes have rows that can be adjacent, the nodes are connected
    for (let i = 0; i < len; i++) {
        const nodeA = nodeTable[i]
        for (let j = i; j < len; j++) {
            const nodeB = nodeTable[j]
            if (canBeAdjacent(nodeA, nodeB)) {
                nodeA.neighs.push(nodeB)
                if (j !== i)
                    nodeB.neighs.push(nodeA)
            }
        }
    }


    const modMe = 10 ** 9 + 7
    const table = new Array(len)
    for (const i of table.keys())
        table[i] = []

    // fromIndex: index of the from node
    // rmg: height remaining (not yet built)
    function dp(fromIndex, rmg) {
        if (rmg === 0)  return 1
        
        const existing = table[fromIndex][rmg]
        if (existing !== undefined) return existing

        let result = 0
        const node = nodeTable[fromIndex]
        const nextRmg = rmg - 1
        for (const neigh of node.neighs) {
            const outcome = dp(neigh.val, nextRmg)
            result = (result + outcome) % modMe
        }

        return table[fromIndex][rmg] = result
    }


    let result = 0
    // for each from node, we must use height - 1,
    // because the from row has already been built
    const heightMinus1 = height - 1
    for (const i of nodeTable.keys()) {
        const outcome = dp(i, heightMinus1)
        result = (result + outcome) % modMe
    }
    // another approach is to add a new node, representing
    // the ground, having no seams, and connected to every 
    // other node. we can start from the ground.


    return result
};
```