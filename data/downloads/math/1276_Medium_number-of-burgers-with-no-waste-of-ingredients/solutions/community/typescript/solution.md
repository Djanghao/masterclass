# With adding variable

**Author:** ggarpir
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/5359375/](https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/5359375/)

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
function numOfBurgers(tomatoSlices: number, cheeseSlices: number): number[] {
    
    let burgers : number[] = [0,0];
 
        if(tomatoSlices % 2 === 0){
        
            let countsmallburgers : number = tomatoSlices /2;
            burgers[0] = countsmallburgers  - cheeseSlices;
            burgers[1] = cheeseSlices - burgers[0];
            tomatoSlices = 0;
            cheeseSlices= 0;
        }
        else{
            return [];
        }
        
       
        burgers [0] >= 0 && burgers[1] >= 0? " " : burgers =  [];
        return burgers;
};
```