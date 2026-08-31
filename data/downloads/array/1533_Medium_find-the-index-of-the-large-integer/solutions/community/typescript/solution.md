# only need patience

**Author:** jaikechen2018
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/5298141/](https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/5298141/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * class ArrayReader {
 *     // Compares the sum of arr[l..r] with the sum of arr[x..y] 
 *     // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 *     // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 *     // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 *     compareSub(l: number, r: number, x: number, y: number): number { };
 *
 *     // Returns the length of the array
 *     length(): number { };
 * };
 */

function getIndex(reader: ArrayReader): number {
    let length = reader.length()
    let [l, r] = [0, length -1]
    while(l <= r){
        if (l + 1 == r) {
            let res = reader.compareSub(l, l, r, r)
            if (res == 1){
                return l    
            } else {
                return r
            }
        } else if (l + 2 == r){
            let res = reader.compareSub(l, l, r, r)
            if (res == 0){
                return l + 1
            }else if (res == 1){
                return l
            }else {
                return r
            }
        }

        let m = Math.floor((l+r) / 2)
        if ((r - l + 1) % 2 == 0){
            let res = reader.compareSub(l,m, m +1, r)
            if (res > 0 ){
                r  = m
            }else {
                l = m + 1
            }
        }else {
            let res = reader.compareSub(l, m -1, m+ 1, r)
            if (res == 0){
                return m
            }else if (res > 0){
                r = m -1
            }else {
                l = m + 1
            }
        }
    }
    return -1
};
```