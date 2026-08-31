# Typescript beats 99%

**Author:** JosephJostack
**Votes:** 2
**Link:** [https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/3443959/](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/3443959/)

---

# Intuition
The tree being a BST is a red herring. You don't need to exploit this property for the optimal solution

# Approach
Use a hashmap to store visited nodes

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
function findTarget(root: TreeNode | null, k: number): boolean {
  // Trivial and guard
  if (!root || k == undefined) return false;

  // store visited numbers
  let digitMap = new Map();

  // DFS
  let traverse = (node: TreeNode) => {
    if (!node) return false;

    let curVal = node.val;
    let reqd = k - curVal;

    if (digitMap.has(reqd)) {
      return true;
    } else {
      digitMap.set(curVal, 1);

      return traverse(node.left) || traverse(node.right);
    }
  }

  return traverse(root);
};
```