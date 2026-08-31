# Javascript - Greedy solution

**Author:** Rohit_Techie
**Votes:** 1
**Link:** [https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/3010239/](https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/3010239/)

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
 * @param {number[]} weight
 * @return {number}
 */
var maxNumberOfApples = function(weight) {
    //Sort the apples by weight in ascending order
    weight.sort((a,b) => a - b);
    let maxWeight = 5000, count = 0, counter = 0;
    while(maxWeight > 0 && counter < weight.length) {
        if(weight[counter] > maxWeight) break;
        maxWeight -= weight[counter];
        counter += 1;
        count += 1;
    }
    
    return count;
};
```