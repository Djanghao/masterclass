# Javascript Easy Solution

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/solutions/4028631/](https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/solutions/4028631/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Approach:

- The function getProbability takes an array of integers representing the number of balls of each color.
- It initializes variables to keep track of counts for same and different distributions, as well as the total number of balls and colors.

The backtracking function backtrack is defined within getProbability to explore different distributions of balls.
The backtracking function recursively considers distributing balls of each color and checks if it results in a valid distribution.

The getCount function calculates the number of different arrangements for each half.
The getCombinationCount function calculates combinations using factorials.

The hasSameCount function checks if the left and right distributions have the same number of colors.
The main logic initializes variables and starts the backtracking process.

Finally, it returns the probability of having the same number of distinct balls in each box.





# Complexity
Time Complexity:

The time complexity of this solution is exponential due to the nature of the backtracking algorithm. In the worst case, the algorithm explores all possible distributions, resulting in a time complexity of O(2^n), where n is the number of colors.

Space Complexity:

The space complexity of this solution is O(n), where n is the number of colors. This is primarily due to the space used for recursion depth and the auxiliary space for storing color counts.

# Code
```
/**
 * @param {number[]} balls
 * @return {number}
 */
var getProbability = function(balls) {
    let sameCount = 0, diffCount = 0;  // Variables to track counts of same and different distributions
    let totalBalls = 0, numColors;  // Variables for total sum and number of colors
    let ballCounts;  // Array to store the input balls

    // Backtracking function
    function backtrack(index, count, colorCounts) {
        if (count === totalBalls / 2) {
            let secondPool = [];
            for (let i = 0; i < numColors; i++) {
                let count = i < colorCounts.length ? colorCounts[i] : 0;
                secondPool.push(ballCounts[i] - count);
            }
            let acc = getCount(colorCounts) * getCount(secondPool);

            if (hasSameCount(colorCounts)) sameCount += acc;
            else diffCount += acc;
            return;
        }

        if (index >= numColors) return;

        for (let i = 0; i <= ballCounts[index]; i++) {
            if (count + i > totalBalls / 2) break;
            let newCounts = colorCounts.concat(i);
            backtrack(index + 1, count + i, newCounts);
        }
    }

    // Function to count different arrangements for each half
    function getCount(colorCounts) {
        let result = 1, remaining = totalBalls / 2;
        for (let i = 0; i < colorCounts.length - 1; i++) {
            let count = colorCounts[i];
            if (count === 0) continue;
            result *= getCombinationCount(remaining, count);
            remaining -= count;
        }
        return result;
    }

    // Function to calculate combinations
    function getCombinationCount(remaining, count) {
        let result = 1, divisor = 1;
        for (let j = 1; j <= count; j++) {
            result *= (remaining + 1 - j);
            divisor *= j;
        }
        return result / divisor;
    }

    // Function to check if same number of colors
    function hasSameCount(colorCounts) {
        let leftCount = 0, rightCount = 0;
        for (let i = 0; i < numColors; i++) {
            let count = i < colorCounts.length ? colorCounts[i] : 0;
            if (ballCounts[i] - count > 0) rightCount++;
            if (count > 0) leftCount++;
        }
        return leftCount === rightCount;
    }

    // Main logic
    numColors = balls.length;
    for (let count of balls) totalBalls += count;
    ballCounts = balls;
    backtrack(0, 0, []);

    return sameCount / (sameCount + diffCount);
};

```