# TypeScript / JavaScript - Easy to understand solution

**Author:** benard_kong
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solutions/3398905/](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solutions/3398905/)

---

This is a long read, but I hope I have broken it up into digestible pieces so that it is easy to understand.\r
\r
# Intuition\r
This problem can be split into 2 main questions:\r
1. Is the graph a valid Directed Acyclic Graph (DAG)?\r
2. What is the longest color set?\r
\r
As such, our approach will solve these two problems separately. If the question to #1 is false, then we always return -1.\r
\r
For #2, we will need to consider that a node can have multiple children but also have multiple parents. Here is an example, where each node and its color are represented thusly: `1a` where `1` is the node, and `a` is the color.\r
\r
```\r
                    0a\r
                 /      \\\r
                1b      4b\r
                |       |\r
                2a      5a\r
                |       |\r
                3a      6b\r
                  \\    /\r
                    7a\r
```\r
In the example above, there are two paths to consider for the color set `a` at node `0`, left and right. We know that the left path will give us a higher number for color set `a`, and the right path will give us a higher number for color set `b`. Thus, at each node, we will need to compare all the children's respective color sets. That is, node `0` needs to compare `1`'s `a` with `4`'s `a`, then compare `1`'s `b` with `4`'s `b`, and so on; then `0` will finally add its own color which results in the following color set at node `0`:\r
```typescript\r
Node 0: {\r
  a: 4, // 3 from left branch + 0's a\r
  b: 2, // From the right branch\r
}\r
```\r
\r
#### Problem\r
One question is, how do we know where the start of the graph is? The answer to that is there is no specific start to the graph, nor will we ever know if there is one. However, Topological Sort is perfect for these kinds of DAG problems, since we can memoize the answer at each node. This allows us to choose any random node and memoize the answer to that node, then move to another random node. If another random node's children happen to be a previously traversed node, we have memoized so we do not need to re-traverse and re-calculate. The result will still be a time complexity of O(V + E). Thus, we will be using topological sort to answer both questions above.\r
\r
# Approach\r
As mentioned above, we will separate the question into two main parts. However, before doing that, we need an Adjacency List so we can easily traverse our graph. That will be our very first step before tackling the other two problems.\r
\r
### Step 1: Create adjacency list - output == `graph`\r
This step is quite basic. Just loop through the edges and create a hashmap of nodes to arrays of children. The output of this step will take the following shape:\r
```typescript\r
{\r
  [node: number]: number[]\r
}\r
```\r
\r
Here is an example output:\r
Example Graph 1<a id="example-graph-1"></a>\r
```typescript\r
{\r
  0: [],\r
  1: [2, 3],\r
  2: [3],\r
  3: [4, 5],\r
  4: [5],\r
  5: [],\r
}\r
```\r
\r
### Step 2: Is it a valid DAG?\r
In this step, we use topological sort to determine whether the graph is a valid DAG. As an overview, topological sort means to pick any node and traverse the graph and "remember" the output of that traversal. For example, in our [Example Graph 1](#user-content-example-graph-1) above, we could pick node 4 first and determine that from node 4, the graph is valid, while memoizing for node 4 & 5. Then we can choose node 3, which goes to both node 4 & 5, which we have memoized to be valid. Therefore node 3 is also valid; we memoize that and continue choosing a random node after.\r
\r
###### Steps Overview of Step 2\r
1. Loop through all nodes in `graph` (they are the keys in `graph`)\r
2. At each node, ask the question ["is the graph a valid DAG from this node?"](#user-content-is-valid-graph-dfs-approach)\r
  - If not (a cycle has been found) return `-1` right away\r
  - If it is, continue the loop\r
\r
###### Steps for "is the graph a valid DAG from this node?"<a id="is-valid-graph-dfs-approach"></a>\r
This step uses DFS to traverse the graph. \r
- Have a permanent memoized `nodeValidMemo` which stores information about whether the graph starting from `node` is a valid DAG. This is _not necessary_, but speeds up our traversals.\r
- Have a "temporary" memoized `traversed` which stores information about whether our current run has seen a specific node before. This is _strictly necessary_, as this will determine if there is a cycle. __It is important to use backtracking on this cache!__\r
- Base cases:\r
  - If traversed, there is a cycle; return false.\r
  - If `nodeValidMemo[node] == true`, then we have traversed `node` before and determined it is a valid DAG starting from `node`. Do not bother traversing any futher; return true.\r
\r
1. Set `traversed[node]` to true\r
2. Loop through children of current node\r
3. At each child, recurse\r
  - If a cycle is found within the child, then this node is also invalid. Break out of the loop and stop all traversals. (We need to return `-1`)\r
4. If we've traversed all children, backtrack `traversed[node]` and set `nodeValidMemo[node]`\r
\r
### Step 3: What is the longest color set?\r
If Step 2 has passed, then we need not worry about cycles at this point. Pundits will point out that we could technically do this step at step 2, but as this only multiples the complexity by a factor of 2, the time and space complexity remain the same, but it is much easier to solve Step 2 & Step 3 separately. Thus, we will solve them separately in this solution.\r
\r
Step 3 will similarly use topological sort to determine what the longest set at each node is. We can choose a random node, determine what the longest set was at this node, and record it in a memo. If we choose an upstream node later on and find this node again, we will simply use this node's memo instead of traversing again.\r
\r
Each node contains the following information: the longest length of each color starting from this node, as well as the longest color set starting from this node.\r
\r
The object will have the following shape:<a id="node-colors-graph-shape"></a>\r
```typescript\r
interface ColorsGraph {\r
  [color: string]: number; // color is a single letter\r
  longest: number; // Represents the longest color set at this node. This is to prevent us from looping another 26 times.\r
}\r
\r
interface NodeColorsGraph {\r
  [node: number]: ColorsGraph\r
}\r
```\r
\r
Example object 2:<a id="example-object-2"></a>\r
```\r
{\r
  3: {\r
    a: 3,\r
    b: 1,\r
    c: 1,\r
    longest: 3,\r
  },\r
  4: {\r
    a: 1,\r
    b: 2,\r
    c: 5,\r
    longest: 5,\r
  }\r
}\r
```\r
\r
###### Steps\r
1. Loop through all nodes in `graph` (they are the keys in `graph`)\r
2. At each node, call the recursive function that traverses the node.\r
3. After all nodes have been traversed, return the memoized `longest` color set\r
\r
###### Within recursive function<a id="find-longest-color-set"></a>\r
1. Base case == no children (do not need to account for this)\r
2. Base case == found a memoized set of colors (we've traversed this node before)\r
3. Loop through children and recursively call function starting at each child\r
4. After each child returns a [ColorsGraph](#user-content-node-colors-graph-shape), compare it to every other child's color graph and get the longest of each. For example, if we use [Example Object 2](#user-content-example-object-2) above, and node 3 & 4 were both children of node 2, then node 2 would use `a == 5` from node 3, and `b == 2` from node 4, and `c == 5` from node 4. This is because we want to take the longest color set, regardless of the branch taken, and pass it up stream in case node 2 is a child of any other nodes.\r
5. After looping through children, add this node's color to the color graph we were building from step 4.\r
6. Update the longest color set\r
7. Return the `ColorsGraph` of this node.\r
\r
# Complexity\r
V = number of nodes (vertices)\r
E = number of edges\r
- Time complexity:\r
  - Step 1: O(E)\r
  - Step 2: O(V + E)\r
  - Step 3: O(26V + E)\r
  - All together = O(E + V + E + 26V + E) -> O(27V + 3E) -> O(V + E)\r
\r
- Space complexity:\r
  - Step 1: O(V + E)\r
  - Step 2: O(3V)\r
  - Step 3: O(26V)\r
  - All together = O(V + E + 3V + 26V) -> O(30V + E) -> O(V + E)\r
\r
# Code\r
### Step 1: Create adjacency list\r
```typescript\r
interface AdjList {\r
    [node: number]: number[];\r
}\r
\r
function createAdjList(edges: number[][]): AdjList {\r
    const graph: AdjList = {};\r
    for (let [node1, node2] of edges) {\r
        if (graph[node1] == null) {\r
            graph[node1] = [];\r
        }\r
        if (graph[node2] == null) {\r
            graph[node2] = [];\r
        }\r
\r
        graph[node1].push(node2);\r
    }\r
\r
    return graph;\r
}\r
```\r
\r
### Step 2: [Validate is DAG](#user-content-is-valid-graph-dfs-approach)\r
```typescript\r
function isValidGraph(\r
    graph: AdjList,\r
    node: number,\r
    traversed: { [node: number]: boolean },\r
    nodeValidMemo: { [node: number]: boolean },\r
): boolean {\r
    if (traversed[node]) {\r
        return false;\r
    }\r
    if (nodeValidMemo[node]) {\r
        return true;\r
    }\r
\r
    traversed[node] = true;\r
    const neighbors = graph[node];\r
    let isValid = true;\r
    for (const neighbor of neighbors) {\r
        const _isValid = isValidGraph(graph, neighbor, traversed, nodeValidMemo);\r
        if (!_isValid) {\r
            isValid = false;\r
            break;\r
        }\r
    }\r
\r
    traversed[node] = false;\r
    nodeValidMemo[node] = true;\r
\r
    return isValid;\r
}\r
```\r
\r
### Step 3: [Get longest color set at each node](#user-content-find-longest-color-set)\r
```typescript\r
interface ColorsGraph {\r
    [color: string]: number;\r
    longest: number;\r
}\r
\r
interface NodeColorsGraph {\r
    [node: number]: ColorsGraph;\r
}\r
\r
function combineColorGraphs(\r
    node1ColorGraph: ColorsGraph,\r
    node2ColorGraph: ColorsGraph,\r
): void {\r
    for (const color of Object.keys(node2ColorGraph)) {\r
        if (node1ColorGraph[color] == null) {\r
            node1ColorGraph[color] = 0;\r
        }\r
        if (node2ColorGraph[color] > node1ColorGraph[color]) {\r
            node1ColorGraph[color] = node2ColorGraph[color];\r
        }\r
    }\r
}\r
\r
function findLongestColors(\r
    colors: string,\r
    graph: AdjList,\r
    node: number,\r
    nodeColorsGraph: NodeColorsGraph,\r
    trueLongest: { longest: number },\r
): ColorsGraph {\r
    if (nodeColorsGraph[node] != null) {\r
        // This node's been traversed before, return memoized info\r
        return nodeColorsGraph[node];\r
    }\r
\r
    const currentNodeColorGraph = { longest: 0 };\r
    nodeColorsGraph[node] = currentNodeColorGraph;\r
\r
    // Recursively get the ColorsGraph of each child\r
    for (const neighbor of graph[node]) {\r
        const neighborColorsGraph = findLongestColors(colors, graph, neighbor, nodeColorsGraph, trueLongest);\r
\r
        // Compare all children's with each other\r
        combineColorGraphs(currentNodeColorGraph, neighborColorsGraph);\r
    }\r
\r
    // Add this node's color to `currentNodeColorGraph`\r
    const color = colors[node];\r
    if (currentNodeColorGraph[color] == null) {\r
        currentNodeColorGraph[color] = 0;\r
    }\r
    currentNodeColorGraph[color]++;\r
\r
    // Memoize the longest\r
    for (const _color of Object.keys(currentNodeColorGraph)) {\r
        if (_color === "longest") {\r
            continue;\r
        }\r
        if (currentNodeColorGraph[_color] > currentNodeColorGraph.longest) {\r
            currentNodeColorGraph.longest = currentNodeColorGraph[_color];\r
            if (trueLongest.longest < currentNodeColorGraph.longest) {\r
                trueLongest.longest = currentNodeColorGraph.longest\r
            }\r
        }\r
    }\r
\r
    return currentNodeColorGraph;\r
}\r
```\r
\r
\r
### All steps combined\r
```typescript\r
function largestPathValue(colors: string, edges: number[][]): number {\r
    // Step 1: Create adjacency list\r
    const graph = createAdjList(edges);\r
\r
    // Step 2: Verify the graph is a valid directed acyclic graph (DAG)\r
    const nodes = Object.keys(graph);\r
    const nodeValidMemo = {};\r
    for (const node of nodes) {\r
        const isValid = isValidGraph(graph, Number(node), {}, nodeValidMemo);\r
        if (!isValid) {\r
            return -1;\r
        }\r
    }\r
\r
    // Step 3: Find the longest colors in the DAG at each node\r
    const nodeColorsGraph = {};\r
    // `trueLongest` is not strictly necessary, but helps prevent us to loop one more time to make comparisons of all colors in all nodes\r
    const trueLongest = { longest: 1 }\r
    for (const node of nodes) {\r
        findLongestColors(\r
            colors,\r
            graph,\r
            Number(node),\r
            nodeColorsGraph,\r
            trueLongest\r
        );\r
    }\r
\r
    return trueLongest.longest;\r
}\r
```