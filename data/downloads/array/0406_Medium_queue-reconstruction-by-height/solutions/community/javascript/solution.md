# Concise Js solution

**Author:** Yushi_Lu
**Votes:** 28
**Link:** [https://leetcode.com/problems/queue-reconstruction-by-height/solutions/323115/](https://leetcode.com/problems/queue-reconstruction-by-height/solutions/323115/)

---

We can first sort the array by two rules:
* if two elelemts, a and b, a[0] == b[0], sort by its second array element in ascending order, i.e., sort by a[1] - b[1]
* if two elements, a and b, a[0] != b[0], sort by its first array ellement in descending order, i.e., sort by b[0] - a[0]
 
Thus, the sorting result for **[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]** would be:
**[ [ 7, 0 ], [ 7, 1 ],
[ 6, 1 ],
[ 5, 0 ], [ 5, 2 ],
[ 4, 4 ] ]**

Then for each element in the sorted array, we put it in the result according to its second array element, i.e., a[1], which is the position of its real position in the result array. In JavaScript, *splice* function is provided. 
```
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let res = []
    people.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : b[0] - a[0])
    people.forEach(val => {
        res.splice(val[1], 0, val)
    })
    return res
};
```