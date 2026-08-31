# JavaScript 7-line solution

**Author:** minato_yukina
**Votes:** 10
**Link:** [https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/1427725/](https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/1427725/)

---

The problem is pretty similar to this problem:
`Given a string of brackets which only consists of a single type of brackets, determine if it is balanced or not. A balanced string of brackets means the total number of open brackets is equal to the total number of close brackets, and while traversing the string from left to right, the number of open brackets is always greater than or equal to the number of close brackets.`
At first, we have an empty slot, we can put a number or a `#` to it:
- Adding a number means removing an empty slot & creating 2 more empty slots, left & right child of the node we just added
- Adding a `#` just means removing an empty slot, because a NULL value prevents us from creating more nodes in a branch

While traversing the tree, if there are no more empty slots at some point, the input is not a correct preorder traversal serialization of a binary tree.
After traversing the whole given input, the input is correct if there are no empty slots.
```
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    let balance = 1
    for(const node of preorder.split(','))
        if (balance > 0)
            if (node === '#') --balance
            else ++balance
        else return false
    return balance < 1
}
```