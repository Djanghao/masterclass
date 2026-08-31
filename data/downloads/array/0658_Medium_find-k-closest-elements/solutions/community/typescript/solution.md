# JS / TS Solutions with Explanation Comments - Binary Search

**Author:** muneebshoukat60
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-k-closest-elements/solutions/4262406/](https://leetcode.com/problems/find-k-closest-elements/solutions/4262406/)

---

# Approach
We can solve this problem efficiently with binary search. 

# Complexity
- Time complexity: **O(logN)**

Binary search reduces the search range by half in each step, leading to logarithmic time complexity.

- Space complexity **O(N)**:

The algorithm uses a constant amount of extra space for the pointers and variables, resulting in a space complexity that grows logarithmically with the input size.

# Code - JavaScript
```
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {

    // Let's use an example array [1, 2, 3, 4, 5] with k = 3 to explain the solution.

    let left = 0;

    // The right variable represents the maximum possible lower boundary.
    // In this case, right becomes 5 - 3, which is 2.
    // This means our search domain is from index 0 to index 2, allowing for possible values
    // like [1, 2, 3], [2, 3, 4], and [3, 4, 5].

    let right = arr.length - k;

    while(left < right){

        // Our binary search focuses only on the range from index 0 to 2.
        // So the possible mid values are 0 and 1, as 2 is excluded due to the loop condition.

        let mid = (left + right) >> 1;

        // The condition involving arr[mid + k] is interesting.
        // It's important to note that arr[mid + k] cannot exceed the array's length. Even if $mid is at its maximum,
        // the result will be 1 + 3, which is 4, the index of the last item in the array.
        // The condition seems reversed because it deals with absolute values,
        // ensuring that the number less than the target is closer than a number greater than the target.

        if(arr[mid] - x < x - arr[mid + k]){
            left = mid + 1;
        }else{
            right = mid;
        }
    }

    // We return the slice of the array that starts at the 'left' index and extends for 'k' elements.
    return arr.slice(left, left + k);
};
```

# Code - TypeScript
```
function findClosestElements(arr: number[], k: number, x: number): number[] {
    let left = 0;
    let right = arr.length - k;

    while(left < right){
        let mid = (left + right) >> 1;

        if(arr[mid] - x < x - arr[mid + k]){
            left = mid + 1;
        }else{
            right = mid;
        }
    }

    return arr.slice(left, left + k);
};

```
# Upvote

Please **upvote** if you find helpful.