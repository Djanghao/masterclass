# TypeScript explained O(NlogN) sort solution no extra space

**Author:** baraheyl
**Votes:** 1
**Link:** [https://leetcode.com/problems/points-that-intersect-with-cars/solutions/4389310/](https://leetcode.com/problems/points-that-intersect-with-cars/solutions/4389310/)

---

# Intuition
This is similar to merge intervals logic

# Approach
Explained in the code

# Complexity
- Time complexity:
O(NlogN)

- Space complexity:
O(1)

# Code
```
function numberOfPoints(nums: number[][]): number {
    /*
    eg: [ [ 2, 3 ], [ 3, 9 ], [ 4, 10 ], [ 5, 7 ] ]

    1. prevEndI = -1, counter = (3 - 2 + 1) as there is no intersection
    2. prevEndI = 3, counter += (9 - 3) as there is already a car on point 3
    3. prevEndI = 9, counter += (10 - 9) as intersection occurs and we have covered points from 3 to 9 

    4. prevEndI = 10, we do not count [5, 7] as this was covered in [4, 10]

    result is counter = 9
    */
    let counter = 0;
    // sort the intervals ascendingly
    nums.sort((a, b) => a[0] - b[0]);
    let prevEndI = -1;
    nums.forEach((array) => {
        const startI = array[0];
        const endI = array[1];
        // if no intersection we count endI - startI + 1
        if (prevEndI < startI) {
            counter += endI - startI + 1;
            // if there is an intersection we just count endI - prevEndI (we know that endI > prevEndI)
        } else if (endI > prevEndI && startI <= prevEndI) {
            counter += endI - prevEndI;
        }
        // Update the highest end interval so far
        if (endI > prevEndI) {
            prevEndI = endI;
        }
    })
    return counter;
};
```