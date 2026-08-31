# ✅6 lines of most optimized code | explained in details | TC - O(log n), SC - O(1)

**Author:** SumitPokhriyal
**Votes:** 2
**Link:** [https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/3812385/](https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/3812385/)

---

# Intuition
The problem asks to find the peak index in a mountain array. A mountain array is an array that increases from some starting point and then decreases after reaching the peak element.

# Approach
The approach to solving this problem is to use binary search to find the peak element. We start with the indices i and j representing the leftmost and rightmost elements of the array, respectively. We use binary search to find the mid element and check its neighbors to determine if it is the peak. If the mid element is less than its right neighbor, it means the peak is on the right side of the mid element, so we update i to be mid + 1. If the mid element is less than its left neighbor, it means the peak is on the left side of the mid element, so we update j to be mid - 1. If the mid element is not less than either its left or right neighbors, it means it is the peak, and we return the index mid.

# Complexity
- Time complexity: The time complexity is O(log n) because we perform binary search on the array.
- Space complexity: The space complexity is O(1) as we only use a few extra variables to store indices.

# Code
```
function peakIndexInMountainArray(arr: number[]): number {
    let i = 0, j = arr.length - 1;
    while( i <= j ){
        let mid = Math.floor(i + (j - i)/2);
        if( arr[mid] < arr[mid + 1])i = mid + 1;
        else if( arr[mid] < arr[mid - 1])j = mid - 1;
        else return mid;
    }  
};
```