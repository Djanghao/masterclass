# GroupBy Typescript Solution O(n)

**Author:** oadster0728
**Votes:** 6
**Link:** [https://leetcode.com/problems/group-by/solutions/3407219/](https://leetcode.com/problems/group-by/solutions/3407219/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use an object to group the items by the groupBy function as the key.
# Approach
<!-- Describe your approach to solving the problem. -->
Create an object ```hash``` and then iterate each of the items and group them by the ```groupBy``` function.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 $$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
 $$O(n)$$
# Code
```
declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }
}

Array.prototype.groupBy = function(fn) {
    const hash = {}
    for (let item of this){
        const key = fn(item)
        hash[key] ||= []
        hash[key].push(item)
    }
    return hash
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
```