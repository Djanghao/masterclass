# Beats 97.14% | Easy Javascript Solution with Full Explanation

**Author:** chetannada
**Votes:** 0
**Link:** [https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/5322440/](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/5322440/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$ where n is the number of elements in the input array 'time'. This is because we iterate through the 'time' array only once in a single for loop.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$ as we are using a fixed-size array of length 60 to store the count of remainders. The space used does not depend on the size of the input array 'time'.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function numPairsDivisibleBy60(time: number[]): number {

    // initialize count to 0
    let count: number = 0;

    // initialize new array of length 60 and fill with 0
    let arr: number[] = new Array(60).fill(0);

    // run for of loop for time
    for (let value of time) {

        // here we have to check (num1 + num2) % 60 = 0 or
        // (60 - num1 % 60) % 60 = num2 % 60
        // so wer are using second equation to solve this problem in O(n) time
        // add value of (60 - value % 60) % 60 in array arr and add in count
        count += arr[(60 - value % 60) % 60];

        // increment value % 60 value in arr
        arr[value % 60]++;
    }

    // return count
    return count;
};
```