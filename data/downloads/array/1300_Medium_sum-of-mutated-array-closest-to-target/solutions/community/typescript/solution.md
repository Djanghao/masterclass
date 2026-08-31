# Typescript Solution Commented

**Author:** earayad
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/2786633/](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/2786633/)

---

# Intuition
It wasn't very intuitive. It took me like an hour to end up with a solution. After 30mins of trying different techniques, I decided to evaluate this problem as a function to optimize because we have a target and a variable to find.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
I defined variables to formulate an objective function:
- m: variable that we are looking for
- changes: number of variables in the array that are bigger than "m"
- restSum: sum of the variables of the array that are less or equal to "m"
- target: target variable used to evaluate "m"

Objective function: (changes * m) + restSum <= target

In each loop I calculate a new "m" to see if the number of changes available decreases or not. In case where the number of changes decrease, then I calculate a new "m" otherwise I procede to evaluate the end result of my equation.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$ / $$O(n^2)$$

The loops to get the best "m" nevers gonna be equal to the length of the array so it cannot be O(n^2) but it can be close to it in the worst cases. If I'm wrong please let me know.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
# Results
- 132 ms / 44.6mb

# Code
```
function findBestValue(arr: number[], target: number): number {
    // Using Least Common Multiple as basis
    let m = Math.floor(target/arr.length)
    let changes = 0
    
    while(true){
        // Define and clear variables
        let prevChanges = changes
        let restSum = 0
        let totalSum = 0
        changes = 0

        // Calculate number of possible changes, restSum and totalSum
        for(let i = 0; i< arr.length; i++) {
            // if m > arr[i], means that arr[i] can be changed by m
            if(arr[i] > m) {
                changes++
            } else {
                // if cannot be changed, then I accumulate the number
                restSum += arr[i]
            }
            // totalSum is only used when there is only one change available
            totalSum += arr[i]
        }

        // If there aren't changes available return the biggest number of the array
        if(changes === 0) {
            return Math.max(...arr)
        }

        // If there is only one change available
        if(changes === 1) {
            let x = target - restSum
            let y = totalSum - restSum
            if(x > y) return y
            return x
        }

        // If the number of changes available is the same with the prevChanges, 
        //then I it means that m is a candidate.
        if(prevChanges === changes) {
            // Because m is calculated with a division and I use only the integer, there is a 
            // posibility that the value was closer to the next integer, so I try both cases.
            let result1 = Math.abs((m * changes) + restSum - target)
            let result2 = Math.abs(((m+1) * changes) + restSum - target)

            return result2 >= result1 ? m : m + 1
        }

        // update the value to minimize the result
        m = Math.floor((target - restSum)/changes)
    }
};
```