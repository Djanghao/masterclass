# Map/Hash Table Solution in TS/JS

**Author:** soccermaganti
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/4253995/](https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/4253995/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Precalculated all the squared values and getting their frequencies. Then using two pointers iterated through both arrays checking for type 1 and type 2 and added the frequency count to the result value. If it returned undefined, it doesn't exist in the map. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$


- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
function numTriplets(nums1: number[], nums2: number[]): number {
    //type1
    const map1 = new Map();
    nums1.forEach(key => {
        let squared = Math.pow(key,2);
        if (!map1.has(squared)){
            map1.set(squared,1);
        } else {
            map1.set(squared, map1.get(squared) + 1);
        }
    });
    //type 2
    const map2 = new Map();
    nums2.forEach(key => {
        let squared = Math.pow(key,2);
        if (!map2.has(squared)){
            map2.set(squared,1);
        } else {
            map2.set(squared, map2.get(squared) + 1);
        }
    });
    
    let count = 0;
    for (let i = 0; i < nums1.length; i++){
        for (let j = 0; j < nums1.length; j++){
            if (i < j){
                let value = nums1[i] * nums1[j];
                if (map2.get(value) != undefined){
                    count += map2.get(value);
                }
            }
        }
    }

    for (let i = 0; i < nums2.length; i++){
        for (let j = 0; j < nums2.length; j++){
            if (i < j){
                let value = nums2[i] * nums2[j];
                if (map1.get(value) != undefined){
                    count += map1.get(value);
                }
            }
        }
    }
    return count;
};
```