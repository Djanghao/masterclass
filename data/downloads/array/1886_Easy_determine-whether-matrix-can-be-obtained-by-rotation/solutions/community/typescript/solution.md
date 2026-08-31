# Very Simple Solution - Beginner Friendly - Javascript/Typescript

**Author:** BearScript
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/4966410/](https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/4966410/)

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
function findRotation(mat: number[][], target: number[][]): boolean {

    if (matIsEqual(mat, target)) {
        return true;
    }

    // ---------
    const rotated90 = rotate90Deg(mat);

    if (matIsEqual(rotated90, target)) {
        return true;
    }

    // ---------
    const rotated180 = rotate90Deg(rotated90);

    if (matIsEqual(rotated180, target)) {
        return true;
    }

    // ---------
    const rotated270 = rotate90Deg(rotated180);

    if (matIsEqual(rotated270, target)) {
        return true;
    }

    // None are equal
    return false;
};



// Rotating 90 degrees forward
function rotate90Deg(mat: number[][]): number[][] {

    const newMat = [];

    for (let i = 0; i < mat.length; i++) {

        newMat.push([]);

    }

    for (let i = 0; i < mat.length; i++) {

        for (let j = 0; j < mat[0].length; j++) {
            // Add the items at the beginning of the array
            newMat[j].unshift(mat[i][j]);
        }

    }

    return newMat;

}

// Just check if both are equal
function matIsEqual(mat: number[][], target: number[][]): boolean {

    for (let i = 0; i < mat.length; i++) {

        if (!target[i]) return false;

        for (let j = 0; j < mat[i].length; j++) {

            if (mat[i][j] !== target[i][j]) {
                return false;
            }

        }

    }

    return true;

}
```