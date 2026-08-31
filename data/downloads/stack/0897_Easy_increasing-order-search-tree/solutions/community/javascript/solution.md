# Javascript - 2 solutions

**Author:** achandel
**Votes:** 8
**Link:** [https://leetcode.com/problems/increasing-order-search-tree/solutions/653847/](https://leetcode.com/problems/increasing-order-search-tree/solutions/653847/)

---

**Recursive:**
```
var increasingBST = function(root) {
    let newRoot = null, newTree = null;
    
    const helper = (node) => {
        if(!node) return;
		// left
        helper(node.left);
		
		// read/visit
        // while reading/visiting the node update newRoot/newTree
        if(!newRoot) {
            newRoot = newTree = node;
        } else {
            newTree.right = node;
            newTree = newTree.right;
            // set left to null to avoid duplication & to create skewed tree
            node.left = null;
        }
		
		// right
        helper(node.right);
    }
    
    helper(root);
    return newRoot;
};
```
**Iterative:**
```
var increasingBST = function(root) {
    if(!root) return null;
    let stack = [], newRoot = null, newTree = null;
    
    while(root){
        // left
        while(root){
            stack.push(root);
            root = root.left;
        }
        while(stack.length > 0){
            // read/visit
            let node = stack.pop();
            if(!newRoot){
                newRoot = newTree = node;
            } else {
                newTree.right = node;
                newTree = newTree.right;
            }
            node.left = null;
            // right
            if(node.right){
                root = node.right;
                break;
            }
        }
    }
    return newRoot;
}
```