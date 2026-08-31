# Easy and beginner friendly || solution by Navyendhu Menon

**Author:** navyendhummenon
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/5386379/](https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/5386379/)

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
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {

    let sum =0

    for (let i=0 ; i<nums.length ; i++){
        if (nums.length % (i+1)==0){
          
          sum += nums[i]*nums[i]
           
        }
    }

   return sum
    
};
```