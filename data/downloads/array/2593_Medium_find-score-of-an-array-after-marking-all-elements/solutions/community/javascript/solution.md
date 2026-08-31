# JavaScript solution with sorting

**Author:** svolkovichs
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/3381039/](https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/3381039/)

---

# Intuition
We can do a simple simulation here.

# Approach
Map initial array to new one, consisting of pairs {val, index} where val is the value of element from orignal array and index is the index of element in initial array. Sort new array in increasing order, if `val1 == val2`, compare `idnex1` and `index2`. Iterate this array, if the current element is not marked, mark element, mark both element neighbours.

# Complexity
- Time complexity:
O(N*Log(N))

- Space complexity:
O(N)

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    let arr = nums.map((n, i) => ({val: n, index: i}));
    const marked = new Set();
    
    arr.sort((a, b) => {
        if (a.val === b.val){
            return a.index - b.index;
        }
        return a.val - b.val;
    });

    let res = 0;
    for(let n of arr) {
        if(!marked.has(n.index)){
            marked.add(n.index);
            marked.add(n.index-1);
            marked.add(n.index+1);
            res += n.val
        }
    }
    
    return res;
};
```