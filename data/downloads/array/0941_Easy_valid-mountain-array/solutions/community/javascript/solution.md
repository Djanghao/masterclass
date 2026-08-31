# [JS] O(n) solution with two pointers + explanation + test cases

**Author:** wintryleo
**Votes:** 18
**Link:** [https://leetcode.com/problems/valid-mountain-array/solutions/1009285/](https://leetcode.com/problems/valid-mountain-array/solutions/1009285/)

---

```
/**
 * @param {number[]} arr
 * @return {boolean}
 */
/*
Test cases:
1. all increasing
2. all decreasing
3. arr length < 3
4. arr containing duplicates
5. arr not containing duplicates
6. zig-zag mountain
7. all equal
*/

// TC = O(n)
var validMountainArray = function(arr) {
    // 2 pointers - one will move from left to right and other will move from right to left
	// so that both meet at the peak point
    let left = 0,
        right = arr.length - 1;
    
	// condition: while either of the pointer is able to move
    while(arr[left] < arr[left + 1] || arr[right] < arr[right - 1]) {
        if(arr[left] < arr[left + 1]) {
            ++left;
        }
        if(arr[right] < arr[right - 1]) {
            --right;
        }
    }
	// if left and right pointer does not meet at the peak - array contains equal integers or zig-zag pattern
	// OR all integers are in ascending order
	// OR all integers are in descending order
    if(left !== right || left === arr.length - 1 || right === 0) {
        return false;
    }
    return true;
};
```