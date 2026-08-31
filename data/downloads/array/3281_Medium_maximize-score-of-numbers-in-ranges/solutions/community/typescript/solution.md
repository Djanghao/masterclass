# 100% fast solution in javascript

**Author:** santoshyadav979439
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/solutions/5761408/](https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/solutions/5761408/)

---

# Intuition and Approach

https://medium.com/javascript-in-plain-english/3281-maximize-score-of-numbers-in-ranges-728bc7759a48

# Code
```javascript []
/**
 * @param {number[]} start
 * @param {number} d
 * @return {number}
 */
var maxPossibleScore = function (start, d) {
    // Sort the start array to handle intervals in increasing order
    start.sort((a, b) => a - b);

    // Function to check if a given score is achievable
    function canAchieveScore(score) {
        let lastChosen = start[0]; // Start by picking the largest number from the first interval

        for (let i = 1; i < start.length; i++) {
            // We need to choose a number from interval [start[i], start[i] + d]
            // Such that it is at least `score` away from lastChosen
            if (lastChosen + score <= start[i] + d) {
                lastChosen = Math.max(lastChosen + score, start[i]); // Choose the valid number
            } else {
                return false; // If it's not possible to maintain the score, return false
            }
        }

        return true; // If we successfully pick numbers from all intervals, return true
    }

    // Binary search to find the maximum possible score
    let left = 0;
    let right = Math.max(...start) + d;

    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2); // Check for the middle score

        if (canAchieveScore(mid)) {
            left = mid; // If it's possible to achieve this score, try for a larger one
        } else {
            right = mid - 1; // Otherwise, try a smaller score
        }
    }

    return left; // The maximum possible score
}


```