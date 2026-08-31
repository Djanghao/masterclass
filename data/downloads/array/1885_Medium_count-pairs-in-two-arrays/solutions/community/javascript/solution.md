# Simple Algebra + 2 pointer approach (with explanation)

**Author:** sushmitha1227
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/5098370/](https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/5098370/)

---

# Intuition
The main part of solution involves transforming problem condition to a simpler one.

1. Given condition `nums1[i] + nums1[j] > nums2[i] + nums2[j]` can be transformed to
=> `(nums1[i] - nums2[i]) > -(nums1[j] - nums2[j])`
=> `[ (nums1[i] - nums2[i]) + (nums1[j] - nums2[j]) ] > 0`

2. Hence generate a `nums1-nums2` difference array
3. Sort the array in ascending order.
4. Use 2 Pointer approach to count valid pairs.
    - Initialize `start` and `end` pointing to begnning and end of the sorted diffrence array.
    - if `(diffArr[start]+diffArr[end]) > 0`, it means any element between `start` and `end` will also be greater than 0. So `count+=end-start`.
    - if `(diffArr[start]+diffArr[end])` <0, increment start pointer, because if adding smallest to biggest is still less than 0, we need to move to next smallest number.


# Complexity
- Time complexity: O(nlogn)

- Space complexity: O(n)
# Code
```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var countPairs = function(nums1, nums2) {
    let count=0;

    // from algerbra we can deduce that
    // [ (nums1[i]-nums2[i])-(nums1[j]-nums2[j]) ] > 0
    
    // Calculate nums1-nums2 arr
    let diffArr=nums1.map((item,index)=>item-nums2[index])

    // Sort
    diffArr.sort((a,b)=>a-b)

    // 2 pointer approach
    let start=0,end=nums1.length-1;

    while(start<end){
        if((diffArr[start]+diffArr[end])>0){
            count+=end-start;
            end--;
        }else{
            start++;
        }
    }
    return count;
};
```