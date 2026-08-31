# Javascript, simple Binary Search

**Author:** JerryXue
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-repair-cars/solutions/4921954/](https://leetcode.com/problems/minimum-time-to-repair-cars/solutions/4921954/)

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
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
     ranks.sort((a,b) => a-b);
     let lo = 0;
     let high = cars*cars*ranks[0];
     let minTime;
     let total = 0;
     while(lo < high){
        minTime = Math.floor((lo + high)/2);
        total = 0; 
        for(let i=0; i<ranks.length; i++){
            total += Math.floor(Math.sqrt(Math.floor(minTime/ranks[i])));
        }
        if(total >= cars){
            high = minTime;
        }else{
            lo = minTime+1;
        }
     }
     return lo;
};
```