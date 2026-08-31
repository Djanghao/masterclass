# Beats 100% (Runtime) Beats 20% (Memory) of all Typescript

**Author:** gowth6m
**Votes:** 0
**Link:** [https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/4254102/](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/4254102/)

---

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
function verifyPreorder(preorder: number[]): boolean {

    if (!preorder || preorder.length <= 0) return false;

    const stack = [];
    let lastPopped = Number.NEGATIVE_INFINITY;

    for (let node of preorder) {

        // 1. if 'lastPopped' > 'node' --> NOT BST
        if (lastPopped > node) {
            return false;
        }

        // 2. bubble up 'node' to where its parent is larger than x or parent = null 
        while (stack[stack.length - 1] < node && stack.length !== 0) {
            lastPopped = stack.pop();
        }
        stack.push(node);
    }

    return true;
};



```