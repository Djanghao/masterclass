# Simple JavaScript solution

**Author:** kai1805
**Votes:** 1
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4819764/](https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4819764/)

---

# Code
```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var binarySearch = function (arr, val) {
    let start = 0, 
        end = arr.length - 1,
        mid = Math.floor((start + end) / 2)
    while (start < end) {
        if (arr[mid] > val) {
            end = mid - 1    
        } else {
            start = mid + 1 
        }
        mid = Math.floor((start + end) / 2)
    }
    if (arr[start] <= val) {
        start++;
    }
    return [arr.length - start, start]
}

var resultArray = function(nums) {
     const arr1 = [nums[0]],
           arr2 = [nums[1]]
     let sortedArr1 = [nums[0]],
         sortedArr2 = [nums[1]]
     for (let i = 2; i < nums.length; i++) {
         const n = nums[i],
               [gc1, s1] = binarySearch(sortedArr1, n),
               [gc2, s2] = binarySearch(sortedArr2, n)
         if (gc1 > gc2) {
             arr1.push(n)
             sortedArr1.splice(s1, 0, n)
         } else if (gc2 > gc1) {
             arr2.push(n)
             sortedArr2.splice(s2, 0, n)
         } else if (arr2.length < arr1.length){
             arr2.push(n)
             sortedArr2.splice(s2, 0, n)
         } else {
             arr1.push(n)
             sortedArr1.splice(s1, 0, n)
         }
     }
    return [...arr1, ...arr2]
};
```