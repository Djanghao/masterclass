# Quick and Easy Solution Beginner friendly

**Author:** shamnad_skr
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-multiples/solutions/5791508/](https://leetcode.com/problems/sum-multiples/solutions/5791508/)

---

# Intuition
The problem asks for the sum of all numbers in the range [1, n] that are divisible by 3, 5, or 7. My first thought is to iterate through all numbers from 1 to n, checking if they are divisible by any of these numbers. If they are, we add them to a running sum.

# Approach
1. Initialize a variable sum to store the cumulative sum of all numbers divisible by 3, 5, or 7.

2. Loop through each integer from 1 to n.

3. For each integer, check if it is divisible by 3, 5, or 7 using the modulus operator (%).

4. If a number is divisible by any of these values, add it to the sum.

5. Return the total sum after the loop completes.

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function sumOfMultiples(n: number): number {

let sum : number   = 0;

    for(let i =1 ; i<=n ; i++){

        if(i%3 == 0 || i%5 == 0 || i%7 == 0){
            sum += i;
        }
    }

    return sum;
};
```