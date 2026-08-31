# 💡JavaScript BFS & DFS Solution

**Author:** AminiCK
**Votes:** 44
**Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/420632/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/420632/)

---

#### The Idea - BFS
1. BFS using queue
2. as we are shifing node, connect it to the next in queue
``` javascript
var connectBFS = function(root) {
    if (root == null) return root;
    let queue = [root];
    while(queue.length!=0) {
        let next = [];
        while(queue.length!=0) {
            let node = queue.shift();
            node.next = queue[0]||null;
            if (node.left!=null) {
                next.push(node.left);
                next.push(node.right);
            }
        }
        queue = next;
    }
    return root;
};
```
#### The Idea - DFS
1. pre order scan 
2. set child nodes arrangement before resursion
``` javascript
var connect = function(root) {
    if (root == null || root.left == null) return root;
    root.left.next = root.right;
    root.right.next = root.next ? root.next.left:null;
    connect(root.left);
    connect(root.right);
    return root;
}
```