# JavaScript - TypeScript - breadth-first search (BFS)

**Author:** aramfilak
**Votes:** 3
**Link:** [https://leetcode.com/problems/deepest-leaves-sum/solutions/4982046/](https://leetcode.com/problems/deepest-leaves-sum/solutions/4982046/)

---

![Screenshot 2024-04-06 at 11.00.14.png](./images/0.png)


# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```javascript []
function deepestLeavesSum(root) {
  if (!root) {
    return 0;
  }
  
  let currentLevelSum = 0;
  let deepestLevelSum = 0;

  const nodes = [root];

  while (nodes.length > 0) {
    let length = nodes.length;
    for (let i = 0; i < length; i++) {
      const node = nodes[i];

      currentLevelSum += node.val;

      if (node.left) {
        nodes.push(node.left);
      }
      if (node.right) {
        nodes.push(node.right);
      }
    }

    deepestLevelSum = currentLevelSum;
    currentLevelSum = 0;
    nodes.splice(0, length)
 
  }

  return deepestLevelSum;
}
```
```typescript []
function deepestLeavesSum(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  
  let currentLevelSum = 0;
  let deepestLevelSum = 0;

  const nodes = [root];

  while (nodes.length > 0) {
    let length = nodes.length;
    for (let i = 0; i < length; i++) {
      const node = nodes[i];

      currentLevelSum += node.val;

      if (node.left) {
        nodes.push(node.left);
      }
      if (node.right) {
        nodes.push(node.right);
      }
    }

    deepestLevelSum = currentLevelSum;
    currentLevelSum = 0;
    nodes.splice(0, length)
 
  }

  return deepestLevelSum;
}
```
