# Easy⚡O(1)🗿simple solution💡with step by step procedure with

**Author:** shamnad_skr
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-boomerang/solutions/6089258/](https://leetcode.com/problems/valid-boomerang/solutions/6089258/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function isBoomerang(points: number[][]): boolean {


    //destructuring for readability
    const [x1 , y1] = points[0];
    const [x2 , y2] = points[1];
    const [x3 , y3] = points[2];

    //if any of piont is same return false

    if( (x1 === x2 && y1 === y2) ||
        (x2 === x3 && y2 === y3) ||
        (x3 === x1 && y3 === y1)  ){

            return false ;
        }

    //checking for its in same line or not 

    if( (y2 - y1) * (x3 - x2) === (y3 - y2) * (x2-x1) ){
        return false;
    }

    return true;

    
};
```