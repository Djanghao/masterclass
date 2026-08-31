# Simple solution for Element Appearing More Than 25% In Sorted Array

**Author:** klim9d61
**Votes:** 3
**Link:** [https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4392194/](https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4392194/)

---

# Approach
One more simple solution without using Hash Map or Binary Search.

# Code
```
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const oneQuarter = arr.length / 4;
    let count = 0;

    if(arr.length === 1) {
        return arr[0];
    }

    for(let i=0; i < arr.length; i++) {
        count++;

        if(count > oneQuarter) {
            return arr[i];
        } else if(arr[i] !== arr[i+1]) {
            count = 0;
        }
    }

    return -1;
};
```