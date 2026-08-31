# TypeScript: beat 95% percent! O(n+m)

**Author:** CarlosDanielS3
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/4299780/](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/4299780/)

---

# Approach
Key value approach with ma.

In the nums1 array just add all the items into the map.

In the nums2 array, check if the key already exists, if exists then override de value with the sum of the current value and nums2 value.
If not exists, just add into the map.

# Complexity
- Time complexity:
O(n+m)

- Space complexity:
O(n+m)

# Code
```
function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    const arrMap = new Map()

    for(let index = 0; index < nums1.length; index++){
        arrMap.set(nums1[index][0], nums1[index][1])
    }
   for(let index = 0; index < nums2.length; index++){
       const arrMapValue = arrMap.get(nums2[index][0])
        if (arrMapValue){
            arrMap.set(nums2[index][0], arrMapValue + nums2[index][1])
        }else{
            arrMap.set(nums2[index][0], nums2[index][1])
        }
    }

    return Array.from(arrMap).sort((a,b) => a[0] - b[0])

};
```