# TypeScript/JavaScript Binary Search

**Author:** SigmaSum
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/1535809/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/1535809/)

---

Since we're dealing with a sorted array problem and the description explicitly tells us to solve in O(logn) time, we should immediately think of trying to use binary search. The trick is we need to modify binary search since in this case we're not looking for a specific target.

Knowing that modified binary search is a possible solution, we can use a small example such as [2,3,1] and see what information we can gain from the mid point. In this case, we see that the array has been rotated twice and the midpoint value is three. From this, we can see that if the midpoint is greater than the value at the rightPointer, then the array has been rotated with the minimum value somewhere to the right of the mid point. So we can update left to equal mid + 1, since we no longer want to consider the mid point and want to look on the right half of the array. If however we have the example [3, 1, 2], our mid point value is 1 which is less than the rightPointer, so the right side of the array is properly sorted and the mid point value is the minimum of the right side of the array, so we want to keep it in the solution space as a possible minimum value. Therefore we set the right equal to mid. When we break out of this loop, the left index will point to the minimum value. 
```
function findMin(nums: number[]): number {
    if(nums.length === 1){
        return nums[0];
    }
    
    let left = 0;
    let right = nums.length - 1;
    
    while(left < right){
        const mid = left + Math.floor((right - left) / 2);
        
        if(nums[mid] > nums[right]){
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    
    return nums[left];
};
```