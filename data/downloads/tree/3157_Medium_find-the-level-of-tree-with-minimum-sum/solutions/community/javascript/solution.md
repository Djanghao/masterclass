# Level Order | BFS

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-level-of-tree-with-minimum-sum/solutions/6036933/](https://leetcode.com/problems/find-the-level-of-tree-with-minimum-sum/solutions/6036933/)

---

```javascript []
var minimumLevel = function (root) {
  if (!root) return 0;  // Edge case if the tree is empty

  let minSum = Infinity;
  let levelWithMinSum = 1;
  let level = 1;

  const queue = [root];  // Start with the root in the queue

  while (queue.length) {
    let sum = 0;
    let levelSize = queue.length;  // Number of nodes at the current level

    // Process all nodes at the current level
    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();
      sum += current.val;

      // Enqueue left and right children for the next level
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    // Check if the current level has the minimum sum
    if (sum < minSum) {
      minSum = sum;
      levelWithMinSum = level;  // Update the level with the minimum sum
    }

    // Move to the next level
    level++;
  }

  return levelWithMinSum;  // Return the level with the minimum sum
};

```