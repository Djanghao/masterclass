# ✅  2 Simplest TypeScript Solutions (Union Set) (DFS)

**Author:** mlajkim
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/2895679/](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/2895679/)

---

# Code (Union Find Set)
- Explanation
    - Define each union set with given edge
        - They are all initially singlestons
    - Then run an algorithm to group them up
        - Make sure they are grouped to the highest number
```
function countComponents(n: number, edges: number[][]): number {
    // \u2705 1 <= n <= 2000
    // \u2705 1 <= edges.length <= 5000
    // \u2705 edges[i].length == 2
    // \\U0001f440 0 <= ai <= bi < n
    // \\U0001f440 OR, "0 <= ai < bi < n", with given constraint "ai != bi"
    // \u2705 ai != bi
    // \u2705 There are no repeated edges.

    // \\U0001f7e0 O(N)
    // the negative one represents "Indepdent Node"
    const nums = Array(n).fill(-1)

    // \\U0001f534 O(log N)
    const find = (i: number) => {
        // gets the independent node edge
        if (nums[i] === -1) return i
        return find(nums[i])
    }
    
    // \\U0001f534 O(N)
    edges.forEach(([a, b]) => {
        const x = find(a)
        const y = find(b)

        if (x !== y) nums[x] = y
    })

    // \\U0001f534 O(N)
    return nums.filter(num => num === -1).length

};
```

# Code (DFS)
- Explanation
    - Define the relationship between nodes in a map
    - Loop until every node is empty in a map
        - Once you visit the place, make sure you remember
        - After you reach to the end of the search, delete the node
```
function countComponents(n: number, edges: number[][]): number {
    // \u2705 1 <= n <= 2000
    // \u2705 1 <= edges.length <= 5000
    // \u2705 edges[i].length == 2
    // \\U0001f440 0 <= ai <= bi < n
    // \u2705 ai != bi
    // \u2705 There are no repeated edges.
    if (n === 0) return 0
    
    const map = new Map<number, number[]>() // \\U0001f7e0 O(N ^ 2)
    const visited: number[] = [] // \\U0001f7e0 O(N) //  Required to avoid looping each other
    let connectedComponentsCount: number = 0

    // \\U0001f534 O(N)
    edges.forEach(([a, b]) => {
        // push bidirectional map relationship for each edge
        map.set(a, [...(map.get(a) || []), b])
        map.set(b, [...(map.get(b) || []), a])
    })

    const dfs = (nodeId: number) => {
        if (visited.includes(nodeId)) return
        visited.push(nodeId)
        
        const got = map.get(nodeId)
        if (got === undefined) return

        got.forEach(eachId => dfs(eachId))
        map.delete(nodeId)
    }

    // \\U0001f534 O(log N)
    while (map.size > 0) {
        connectedComponentsCount++

        // const firstKey = map.keys().next().value
        dfs(map.keys().next().value)
    }
    // const independentNode: number = n - visited.length
    return connectedComponentsCount + n - visited.length
};
```


# Thank you! \uD83D\uDE0A
Upvote if you like. \uD83D\uDC4D
Let me know if you have any questions. \uD83D\uDE4F

# Help! \uD83E\uDD72
If you think my code might perform slow or inefficiently, let me know!