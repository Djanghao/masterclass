# ✍ ✅ [JavaScript][PHP] BFS & DFS Approaches

**Author:** akunopaka
**Votes:** 17
**Link:** [https://leetcode.com/problems/clone-graph/solutions/3392084/](https://leetcode.com/problems/clone-graph/solutions/3392084/)

---

Here are two algorithms, BFS and DFS, for solving the deep copy (clone) of a graph in JavaScript and PHP.

#### DFS Approach for Cloning a Graph

This approach uses a Depth-First Search (DFS) algorithm to clone a graph. 
It first creates a new node and adds it to a visited map. 
Then it iterates over the node's neighbors, creating a new node for each one if it is not already in the visited map. 
Finally, it adds the new node to the neighbors of the new node. 

- *Time complexity* is $$O(V+E)$$ where V is the number of vertices and E is the number of edges in the graph, as the algorithm iterates over all the vertices and edges once. 
- *Space complexity* is $$O(V)$$, as the visited map contains at most V amount of nodes.


```javascript []
// DFS approach
var cloneGraph = function (node) {
    // DFS approach
    // 1. create a new node
    // 2. add the new node to the visited map
    // 3. for each neighbor of the node
    // 4.    if the neighbor is not in the visited map
    // 5.        create a new node
    // 6.        add the new node to the visited map
    // 7.    add the new node to the neighbors of the new node
    if (!node) return null;

    let dfs = (node, visited) => {
        if (visited.has(node)) return visited.get(node);
        let newNode = new Node(node.val);
        visited.set(node, newNode);
        for (let neighbor of node.neighbors) {
            newNode.neighbors.push(dfs(neighbor, visited));
        }
        return newNode;
    }
    return dfs(node, new Map());
}
```
```php []
// DFS Approach
class Solution
{
    function cloneGraph(?Node $node): ?Node {
        if ($node === null) return null;
        $visited = [];
        return $this->cloneGraphHelper($node, $visited);
    }

    function cloneGraphHelper(?Node $node, array &$visited): ?Node {
        if (isset($visited[$node->val])) {
            return $visited[$node->val];
        }
        $newNode = new Node($node->val);
        $visited[$node->val] = $newNode;
        foreach ($node->neighbors as $neighbor) {
            $newNode->neighbors[] = $this->cloneGraphHelper($neighbor, $visited);
        }
        return $newNode;
    }
}
```




#### BFS Approach to Cloning a Graph
This approach uses a Breadth-First Search (BFS) algorithm to clone a graph. 
The algorithm begins by creating a new node with the same value as the original node. 
It then adds the original node to a queue, and adds a mapping of the node to the new node to a visited map. 
It then loops through the queue, shifting off the first node in the queue each time. For each of the shifted node's neighbors, the algorithm checks to see if the neighbor has been visited. 
If it hasn't been, then a new node is created and added to the queue, and the neighbor is added to the visited map. 
Lastly, the new node's neighbors array is updated with the new mapped node. Once the queue is empty, the new node is returned.

- *Time complexity*: $$O(V + E)$$, where V is the number of nodes in the graph and E is the number of edges in the graph.
- *Space complexity*: $$O(V)$$, where V is the number of nodes in the graph. This is because the visited map and queue are both of size V.


```javascript []
// BFS approach
var cloneGraph = function (node) {
    // BFS approach
    // 1. create a new node
    // 2. add the new node to the queue
    // 3. add the new node to the visited map
    // 4. while the queue is not empty
    // 5.    get the first node from the queue
    // 6.    for each neighbor of the node
    // 7.        if the neighbor is not in the visited map
    // 8.            create a new node
    // 9.            add the new node to the queue
    // 10.           add the new node to the visited map
    // 11.       add the new node to the neighbors of the new node
    if (!node) return null;

    let newNode = new Node(node.val);
    let queue = [node];
    let visited = new Map();
    visited.set(node, newNode);

    while (queue.length > 0) {
        let currentNode = queue.shift();
        for (let neighbor of currentNode.neighbors) {
            if (!visited.has(neighbor)) {
                let newNeighbor = new Node(neighbor.val);
                queue.push(neighbor);
                visited.set(neighbor, newNeighbor);
            }
            visited.get(currentNode).neighbors.push(visited.get(neighbor));
        }
    }
    return newNode;
};
```
```php []
class Solution
{
    function cloneGraph(?Node $node): ?Node {
        if ($node === null) return null;
        $visited = [];
        $queue = new SplQueue();
        $queue->enqueue($node);
        $visited[$node->val] = new Node($node->val);
        while (!$queue->isEmpty()) {
            $current = $queue->dequeue();
            foreach ($current->neighbors as $neighbor) {
                if (!isset($visited[$neighbor->val])) {
                    $visited[$neighbor->val] = new Node($neighbor->val);
                    $queue->enqueue($neighbor);
                }
                $visited[$current->val]->neighbors[] = $visited[$neighbor->val];
            }
        }
        return $visited[$node->val];
    }
}
```








##### Thanks for reading! If you have any questions or suggestions, please leave a comment below. I would love to hear your thoughts! \uD83D\uDE0A
### **Please upvote if you found this post helpful! \uD83D\uDC4D**