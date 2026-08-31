# Brute force!

**Author:** Highdee_ai
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-fair-integer/solutions/5845365/](https://leetcode.com/problems/closest-fair-integer/solutions/5845365/)

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
```javascript []
/**
 * @param {number} n
 * @return {number}
 */
var closestFair = function(n) {
    let len = n.toString().length
    const evens = ['0', '2', '4', '6', '8'] 
    let number = n
 
    
    while(true){
        if(len % 2 != 0){
            number = parseInt(String(1).padEnd(len+1, "0"))
        }
        len =  number.toString().length
        let evenCount = number.toString().split("").filter((e)=> evens.includes(e)).length
        
        if(evenCount == (len/2)){
            return number;
        }

        if(evenCount < (len/2)){

        }
         
        number += 1; 
    }

};
```