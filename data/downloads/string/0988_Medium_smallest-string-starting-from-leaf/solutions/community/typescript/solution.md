# Easy DFS in Typescript

**Author:** codeknight03
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/5038214/](https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/5038214/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to parse the tree while keeping the a stack of characters of node.val ( converted to character) in order to be able to check which ones is the smallest.

# Approach
<!-- Describe your approach to solving the problem. -->
- Use a stack (using a string itself) to keep track of the values traveresed so far. 
- Add the current value to stack. 
- if leaf node check if the stack is less than the current smallest string ( Direct compare works because strings are lexigraphically compared in Ts/Js)

# Complexity
- Time complexity: O(n.n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: O(n.n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
```
function smallestFromLeaf(root: TreeNode | null): string {
    if (!root) return "";

    let resString = "";
    let register = "";

    function inOrderTraversal(node: TreeNode | null) {
        if (!node) return;

        register = String.fromCharCode(node.val + 97) + register;

        //leaf node 
        if (!node.left && !node.right) {
            resString = resString > register || resString === "" ?  register: resString;
        }

        //non-leaf node  
        node.left && inOrderTraversal(node.left);
        node.right && inOrderTraversal(node.right);

        register = register.slice(1);
        return;

    }

    inOrderTraversal(root);
    return resString;
};

```