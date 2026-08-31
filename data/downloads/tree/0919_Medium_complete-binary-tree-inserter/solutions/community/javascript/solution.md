# Simple BFS

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/complete-binary-tree-inserter/solutions/6126044/](https://leetcode.com/problems/complete-binary-tree-inserter/solutions/6126044/)

---

**Simple Dry Run:**
We want to go level by level as the complete binary tree is filled from left to right.
I used BFS to get nodes for further insertion
      
```plaintext                              
Take input : [1, 2]  | len = 2   
  
Tree:          
                              1
                             /
                            2

insert(3)

newNode = 3

nodes =  [1, 2, 3]  | len  = 3
childIndex = len - 1 = 3 - 1 = 2
parent = nodes[(2-1)/2] = 0

Check if childIndex is even/odd:

if childIndex is even:
       parent.right = 3

New Tree:                          1
                                  / \\
                                 2   3
--------------------------------------------------------------------
insert(4)

newNode = 4

nodes =  [1, 2, 3, 4]  | len  = 4
childIndex = len - 1 = 4 - 1 = 3
parent = nodes[(3-1)/2] = 2

Check if childIndex is even/odd:

if childIndex is odd:
       parent.left = 3

New Tree:                          1
                                  / \\
                                 2   3
                                /
                               3

get_root = nodes[0] = [1, 2, 3, 4]
```

----


```javascript []
class CBTInserter {
  constructor(root) {
    this.nodes = [];
    this.#bfs(root) //Get starting nodes in array
  }

  #bfs = (root) => {
    const queue = [root];
    while (queue.length) {
      const node = queue.shift();
      this.nodes.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  insert(val) {
    const newNode = new TreeNode(val);
    this.nodes.push(newNode);

    // New node's index is length - 1
    const childIndex = this.nodes.length - 1;
    // Parent index is floor((i-1)/2)
    //const parentIndex = Math.floor((childIndex - 1) / 2);
    const parent = this.nodes[Math.floor((childIndex - 1) / 2)];

    // Add as left or right child based on index
    if (childIndex % 2 === 1) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

    return parent.val;
  }

  get_root() {
    return this.nodes[0];
  }
}
```