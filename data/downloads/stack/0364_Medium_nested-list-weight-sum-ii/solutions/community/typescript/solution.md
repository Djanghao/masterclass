# Typescript BFS

**Author:** Jmcfad
**Votes:** 0
**Link:** [https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/2067911/](https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/2067911/)

---

```
function depthSumInverse(nestedList: NestedInteger[]): number {
    var queue = [];
    var level = 0;
    var sumOfInts = 0;
    var sumOfProducts = 0;
    
    for (var listItem of nestedList) {
        queue.push(listItem);
    }
    while (queue.length) {
        var size = queue.length;
        level++;
        for (var i=0; i<size; i++) {
            var currItem = queue.shift();
            //push neighbors if any
            if (!currItem.isInteger()) {
                for (var item of currItem.getList()) {
                    queue.push(item);
                }
            } else {
                sumOfInts += currItem.getInteger();
                sumOfProducts += currItem.getInteger()*level;
            }
        }
    }
    return (level + 1) * sumOfInts - sumOfProducts;
};
```