# Stack Solution (with step by step explanation)

**Author:** alekseyvy
**Votes:** 5
**Link:** [https://leetcode.com/problems/asteroid-collision/solutions/4223921/](https://leetcode.com/problems/asteroid-collision/solutions/4223921/)

---

# Intuition
we use stack to solve this problem
# Approach
we create stack to hold astroids and to check if astroids are fly towards each other, if true then we calculate will both astroids be destroyed if they mass are equals, or bigger one remains, we push remaining one into stack, at the end we return remaining asteroids
# Complexity
- Time complexity:
O(n) -> we iterate only once on each asteroid
- Space complexity:
O(n) -> we use stack to store remaining asteroids
# Code
```
function asteroidCollision(asteroids: number[]): number[] {
    // declare stack
    const stack: number[] = [];
    // iterate over asteroids
    for(let i = 0; i < asteroids.length; i++) {
        // get current asteroid
        let remain = asteroids[i]
        // while stack are not empty and current asteroid fly to left and top asteroid from stack are fly to the right:
        while(stack.length > 0 && remain < 0 && stack[stack.length - 1] > 0) {
            // we get asteroid from stack
            const asteroid = stack.pop()
            // we check if collision will destroy both asteroids
            if((asteroid + remain) === 0) remain = 0;
            // if false we set bigger one as remaing 
            else remain = asteroid + remain > 0 ? asteroid : remain
        }
        // if remaining asteroid are not destroyed i.e. equals 0 then we push it to stack
        if(remain) stack.push(remain)
    }
    // return remaining asteroids
    return stack;
};
```