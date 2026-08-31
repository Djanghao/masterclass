# JavaScript O(n) Just use an array

**Author:** ektegjetost
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-nodes-with-value-one/solutions/2723758/](https://leetcode.com/problems/number-of-nodes-with-value-one/solutions/2723758/)

---

It may be more efficient to juse use a map or something here, but an array works fine.

The key ideas here:
- It doesn't matter the order of which nodes get flipped when. For instance if our ancestor gets flipped to 1, then some descendent gets flipped to 0, that descendent and its children are now 0 and everything above is 1. Conversely if the descendent gets flipped first, it's now 1 and when its ancestor gets flipped, we find ourselves in the same scenario
- So we don't need to mark all the nodes, just keep track of the flips and propogate the value after each flip from the root down to the last leaf

The strategy:
-  We create an array representing our nodes
- For each query we'll flip the value in the array for that node.
- We'll run through the array, find the parent of the current node (they already told us how).
	- If the current node is a ```1```, we'll flip our parent's value and use that as our value
	- If the current node is a ```0```, we'll juse use our parents' value

```javascript
var numberOfNodes = function(n, queries) {
  const nodes = new Array(n + 1).fill(0);
  
  for (const node of queries) nodes[node] = 1 - nodes[node]; // easy way to flip 0/1 values
  
  let count = 0;
  for (let node = 1; node <= n; node += 1) {
    const parent = node >> 1;
    nodes[node] = nodes[node] === 1 ? 1 - nodes[parent] : nodes[parent];
    count += nodes[node];
  }
  
  return count;
};
```