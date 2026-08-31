# JavaScript | two pointers

**Author:** Zhe1ka
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/2621250/](https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/2621250/)

---

```
function pivotArray(nums: number[], pivot: number): number[] {
    const result = new Array(nums.length);
    let beforeI = 0;
    let afterI = nums.length - 1;
    
    for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
        if (nums[i] < pivot) {
            result[beforeI] = nums[i];
            beforeI++;
        }
        
        if (nums[j] > pivot) {
            result[afterI] = nums[j];
            afterI--;
        }
    }
    
    for (let i = beforeI; i <= afterI; i++) {
        result[i] = pivot;
    }
    
    return result;
};