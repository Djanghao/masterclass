# TypeScript / JavaScript Simple DFS

**Author:** SigmaSum
**Votes:** 7
**Link:** [https://leetcode.com/problems/clone-graph/solutions/1883572/](https://leetcode.com/problems/clone-graph/solutions/1883572/)

---

When encountering a graph problem you can usually solve it with a traversal algorithm like DFS or BFS.

A recursive DFS solution is usually simpler to code and what we use here. When traversing through graphs, we need to make sure we use a visited set or hash table to make sure we don't enter an infinite loop revisiting nodes. We use a hash table here since we want to return the cloned node which we already visited. 

Perform a DFS where we return the cloned node if it's already visited. Else, create a copy of the current node and mark it as visited. We still need to clone its neighbors, so iterate though the list of neighbors, cloning each one and adding it to the current copy's neighbors list. 

```
function cloneGraph(node: Node | null): Node | null {
    const visited = new Map<Node, Node>();
    return clone(node, visited);
};

function clone(node: Node | null, visited: Map<Node, Node>): Node | null {
    if(node === null){
        return node;
    }

    if(visited.has(node)){
        return visited.get(node);
    }

    const copy = new Node(node.val);
    visited.set(node, copy);

    for(const neighbor of node.neighbors){
        copy.neighbors.push(clone(neighbor, visited));
    }
    
    return copy;
}
```