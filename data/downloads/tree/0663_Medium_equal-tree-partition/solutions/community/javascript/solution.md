# Javascript Solution, DFS + Map

**Author:** ShoneWang
**Votes:** 1
**Link:** [https://leetcode.com/problems/equal-tree-partition/solutions/1436153/](https://leetcode.com/problems/equal-tree-partition/solutions/1436153/)

---

The idea is that to collect all tree node's total value(including all its children nodes), and then, if one of the node's total value equal (root's total value)/2, that means the tree has equal partition.

code as below:
```
var checkEqualTree = function(root) {
    const getSum = (root, map) => {
        if (root === null) {
            return 0;
        }
        
        let sum = root.val + getSum(root.left, map) + getSum(root.right, map);
        map.set(sum, true);
        
        return sum;
    }
    
    const map = new Map();
    let rootSum = root.val + getSum(root.left, map) + getSum(root.right, map);
    
    return rootSum % 2 === 0 && map.has(rootSum / 2);
};
	```