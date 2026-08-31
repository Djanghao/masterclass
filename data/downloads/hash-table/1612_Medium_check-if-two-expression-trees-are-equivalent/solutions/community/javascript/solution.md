# Javascript DFS solution

**Author:** WillHen
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-two-expression-trees-are-equivalent/solutions/2573110/](https://leetcode.com/problems/check-if-two-expression-trees-are-equivalent/solutions/2573110/)

---

```
/**
 * Definition for a binary tree node.
 * function Node(val, left, right) {
 *     this.val = (val===undefined ? " " : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {Node} root1
 * @param {Node} root2
 * @return {boolean}
 */
var checkEquivalence = function(root1, root2) {
    let counter = 1;
    
    let numberHash = {};
    
    let recurse = (node) => {
        if (!node.left && !node.right) {
            if (numberHash[node.val]) {
                return numberHash[node.val]
            } else {
                numberHash[node.val] = counter;
                counter+= 1;
                return numberHash[node.val];
            }
            
        }
        
        let left = recurse(node.left);
        let right = recurse(node.right);
        
        return left + right;
    }
    
    return recurse(root1) === recurse(root2);
    
};
```