# Easy Typescript Solution using Dynamic Programming with Full Explanation

**Author:** chetannada
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5655787/](https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5655787/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$ where n is the length of the energyDrinkA array. This is because we are iterating through the array once to calculate the maximum energy boost.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ because we are using two arrays of length n (dpA and dpB) to store the maximum energy boost at each index.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maxEnergyBoost(energyDrinkA: number[], energyDrinkB: number[]): number {

    // initialize n as length of energyDrinkA
    let n: number = energyDrinkA.length;

    // initialize dpA and dpB array with n elements with value 0
    let dpA: number[] = new Array(n).fill(0);
    let dpB: number[] = new Array(n).fill(0);

    // update 0th element of dpA with 0th element of energyDrinkA
    dpA[0] = energyDrinkA[0];

    // update 0th element of dpB with 0th element of energyDrinkB
    dpB[0] = energyDrinkB[0];

    // run for loop from index 1 to n
    for (let i = 1; i < n; i++) {

        // update ith element of dpA with maximum value between sum of previous element of dpA and current element of energyDrinkA with previous element of dpB
        dpA[i] = Math.max(dpA[i - 1] + energyDrinkA[i], dpB[i - 1]);

        // update ith element of dpB with maximum value between sum of previous element of dpB and current element of energyDrinkB with previous element of dpA
        dpB[i] = Math.max(dpB[i - 1] + energyDrinkB[i], dpA[i - 1]);

    }

    // return maximum value between dpA[n-1] and dpB[n-1]
    return Math.max(dpA[n - 1], dpB[n - 1]);
};
```