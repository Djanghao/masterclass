# [Javascript] BFS & Cycle Counting Explained

**Author:** anna-hcj
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/2810374/](https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/2810374/)

---

**Solution: BFS & Cycle Counting**

BFS level-by-level and get minimum swaps for the node values at each level.

How to calculate the minimum swaps to sort an array:
  1. Get the index of each number in its sorted position (store in a hashmap `indexes`)
  2. For each `nums[i]`, store the number we need to swap with to place `nums[i]` in its sorted position (store in a hashmap `next`)
  3. Find the size of each cycle.
  4. Get the total sum of each (`cycle size - 1`).

Why sum of (`cycle size - 1`) is correct:
*   If cycle size = `1`, we don't need any swaps.
*   If cycle size = `2`, we only need 1 swap.
*   If cycle size = `3`, we need 2 swaps.

  --- **Main Proof** ---
*   Starting from the smallest number in the cycle, swap each `nums[i]` (where `nums[i]` is in the cycle) into its sorted position.
*   Since the number is now in the correct position, it is no longer in the cycle and this leaves us with a cycle of size (`n - 1`), where `n = the previous size of the cycle`.
	*   The edge from `nums[i]` -> correct position is now replaced with a new edge coming from the number we swapped with.

`n = number of nodes in the tree`
Time Complexity: `O(n log(n))` 1581ms
Space Complexity: `O(n)` 129MB
```
var minimumOperations = function(root) {
  let queue = [root], ans = 0;
  while (queue.length)  {
    let next = [];
    ans += minSwaps(queue.map(node => node.val));
    while (queue.length) {
      let node = queue.shift();
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    queue = next;
  } 
  return ans;
};

function minSwaps(nums) {
  let sorted = [...nums].sort((a, b) => a - b);
  let indexes = sorted.reduce((memo, num, idx) => {
    memo[num] = idx;
    return memo;
  }, {});

  let next = {};
  for (let num of nums) {
    next[num] = nums[indexes[num]];
  }

  let seen = new Set(), ans = 0;
  for (let num of nums) {
    let cycleSize = 0, node = num;
    while (!seen.has(node)) {
      seen.add(node);
      node = next[node];
      cycleSize++;
    }
    ans += Math.max(0, cycleSize - 1);
  }
  return ans;
}
```