# TypeScript || DP || T/S: 95% / 95%

**Author:** Dumopolis
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-tourist-can-earn/solutions/6074935/](https://leetcode.com/problems/maximum-points-tourist-can-earn/solutions/6074935/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
When approaching this problem, I thought of using dynamic programming to maximize the score based on the number of days and the available cities. The goal was to decide for each day whether to stay in the same city or travel to a different city, optimizing the total score. The challenge is to find a balance between staying and traveling while considering previous decisions for an optimal solution.

# Approach
<!-- Describe your approach to solving the problem. -->
I utilized dynamic programming (DP) to track the maximum score at each city for each day. The `dp` table holds the maximum score for each day and city, allowing us to make optimal choices for staying or traveling.

For the first day, I simply assigned the maximum score for staying or traveling to each city.
For subsequent days, I combined the score for staying in the current city with the maximum score from the previous day, while also considering travel options from all other cities.
At the end, the maximum score across all cities on the last day will be the final result.
# Complexity
- Time complexity:  $$O(k \xD7 n^2)$$
We iterate through each day (k), and for each day, we loop through each city (n) and compare it with all other cities (n), making this an $$O(n^2)$$ operation for each day.

- Space complexity:  $$O(k \xD7 n)$$
We store the scores for each day and city in the dp table, which requires space proportional to the product of the number of days (k) and the number of cities (n).

<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function maxScore(n: number, k: number, stayScore: number[][], travelScore: number[][]): number {

    const dp = Array.from({ length: k }, () => Array(n).fill(0));

    for (let day = 0; day < k; day++) {
        for (let currCity = 0; currCity < n; currCity++) {
            let maxPoints
            if (day === 0) {
                maxPoints = stayScore[day][currCity]
                for (let prevCity = 0; prevCity < n; prevCity++) {
                    const travelPoints = travelScore[prevCity][currCity];
                    maxPoints = Math.max(maxPoints, travelPoints);
                }
            } else {
                maxPoints = stayScore[day][currCity] + dp[day - 1][currCity];
                for (let prevCity = 0; prevCity < n; prevCity++) {
                    const travelPoints = travelScore[prevCity][currCity];
                    maxPoints = Math.max(maxPoints, dp[day - 1][prevCity] + travelPoints);

                }
            }


            dp[day][currCity] = maxPoints;
        }
    }

    return Math.max(...dp[k - 1]);
};
```

This approach efficiently calculates the maximum score while considering both staying and traveling options for each city and day.