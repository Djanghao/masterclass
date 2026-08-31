# JavaScript | Simple Breadth First Traversal | O(N)

**Author:** kloctm
**Votes:** 5
**Link:** [https://leetcode.com/problems/binary-tree-vertical-order-traversal/solutions/1623886/](https://leetcode.com/problems/binary-tree-vertical-order-traversal/solutions/1623886/)

---

```js
function verticalOrder(root) {
    // return and empty array if the root doesn't exist
    if(!root) return [];
    // setup the queue and result arrays
	// the queue will consist of the node and the column it's at
    const queue = [[root, 0]], result = [];
    // declare a min to track where the smallest column is
	// I set this to 1, so the origin (column 0) gets processed correctly
    let min = 1;
    // process the queue until it's empty
    while(queue.length) {
        // get the node and column from the queue
        const [node, column] = queue.shift();
        // push the left and right nodes and their columns if they exist
        if(node.left) queue.push([node.left, column - 1]);
        if(node.right) queue.push([node.right, column + 1]);
        // if the column is less than the min so far, add it to the front of the result
        if(column < min) result.unshift([node.val]), min = column;
        // if the column is greater than the max so far, add it to the back of the result
        else if(column - min > result.length - 1) result.push([node.val]);
        // otherwise add the value to the list already at that column
        else result[column - min].push(node.val);
    }
    // all done
    return result;
}
```
Note: using an array as a queue in JavaScript isn't the best. Creating a queue out of a linked list would be better, but this keeps it simple.