# Easy JS solution to Further  Practice ES6 METHODS

**Author:** Sarah-2002
**Votes:** 11
**Link:** [https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/3355794/](https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/3355794/)

---

# Intuition
What do you need to know:
1. Pre - Order Traversal
2. Shift and Unshift Methods 
3. Push Method
4. Spread Operator
5. Basic Tree Traversal Logic

# Approach
- If the root is empty, the function returns an empty array.
- A queue data structure is initialized with root as its only element.
An empty array arr is also initialized.
- The while loop executes as long as the length of the queue is not zero.
- In each iteration, the first element of the queue is removed and assigned to node.
- The value of the node is then pushed into the arr.
- The children of node are then added to the front of the queue.
- Finally, the arr is returned containing the values of all nodes traversed in pre-order.

# Complexity
- Time complexity:
O(n)

- Space complexity:
o(n)

# Code
```
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    // pre order: Root\u27A1\uFE0F Left \u27A1\uFE0F Right //
    // base case //
    if(!root) return [];
    const queue =[root];
    const arr = [];
    
    while(queue.length){
        const node = queue.shift();
        arr.push(node.val);
        queue.unshift(...node.children);

    }
  return arr ;
};
```