# Swift Solution with detailed explanation and dry run.

**Author:** aayushkumar20
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-all-possible-routes/solutions/3679944/](https://leetcode.com/problems/count-all-possible-routes/solutions/3679944/)

---

# Intuition
1. The code uses a dynamic programming approach to solve the problem.
2. The idea is to store the number of ways to reach each location with a given amount of fuel in a table.
3. The table is initialized to 0, and then the values are filled in one by one.
4. To fill in a value in the table, we consider all the possible ways to get to that location with the given amount of fuel.
5. For each possible way, we add the number of ways to get to the previous location with the remaining fuel.
6. The final answer is the value in the table at the finish location with the maximum amount of fuel.

# Approach
1. The dynamic programming table stores the number of ways to reach each location with a given amount of fuel.
2. The values in the table are filled in one by one, starting from the first location and ending at the finish location.
3. To fill in a value in the table, we consider all the possible ways to get to that location with the given amount of fuel.
4. For each possible way, we add the number of ways to get to the previous location with the remaining fuel.
5. The final answer is the value in the table at the finish location with the maximum amount of fuel.

# Dry Run
### Let's take the sample input as - {locations = [2,3,6,8,4], start = 1, finish = 3, fuel = 5}

```
Input: locations = [2,3,6,8,4], start = 1, finish = 3, fuel = 5

**Step 1:** Initialize the dp array.
```
dp = [[0] * len, ..., [0] * len]
```

**Step 2:** Initialize the dp[0][start] = 1.

```
dp[0][1] = 1
```

**Step 3:** Iterate over f from 1 to fuel.

```
f = 1
for to in 0..<len:
for from in 0..<len:
if from == to { continue }
let c = abs(locations[from] - locations[to])
if f < c { continue }
dp[f][to] += dp[f - c][from]
dp[f][to] %= mod
```

**Step 4:** Iterate over f from 0 to fuel and add dp[f][finish] to ans.

```
ans = 0
for f in 0...fuel:
ans += dp[f][finish]
ans %= mod
```

**Step 5:** Return ans.

```

#### Detailed steps.

1. The dp array is initialized as follows:
``````
              dp = [[0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0],
                    [0, 0, 0, 1, 0]]
``````

2. dp[0][1] = 1 because there is one possible route from start to finish if we have 0 fuel, which is the empty route.
3. For f = 1, we only consider the city 2 because it is the only city that is 1 unit away from city 1. Therefore, dp[1][2] = 1.
4. For f = 2, we consider the cities 2 and 3 because they are both 2 units away from city 1. Therefore, dp[2][2] = 1 and dp[2][3] = 1.
5. For f = 3, we consider the cities 2, 3, and 4 because they are all 3 units away from city 1. Therefore, dp[3][2] = 1, dp[3][3] = 1, and dp[3][4] = 1.
6. For f = 4, we consider the cities 2, 3, and 4 because they are all 4 units away from city 1. Therefore, dp[4][2] = 1, dp[4][3] = 1, and dp[4][4] = 1.
7. The total number of possible routes from start to finish is ans = 4.



# Complexity
- Time complexity: O(n^2 * fuel)
- Space complexity: O(n^2)

# Code
```
class Solution
{
    let mod = 1000000007
    func countRoutes(_ locations: [Int], _ start: Int, _ finish: Int, _ fuel: Int) -> Int
    {
        let len = locations.count
        var dp = [[Int]](repeating: [Int](repeating: 0, count: len), count: fuel + 1)
        dp[0][start] = 1
        for f in 1...fuel
        {
            for to in 0..<len
            {
                for from in 0..<len
                {
                    if from == to { continue }
                    let c = abs(locations[from] - locations[to])
                    if f < c { continue }
                    dp[f][to] += dp[f - c][from]
                    dp[f][to] %= mod
                }
            }
        }
        var ans = 0
        for f in 0...fuel
        {
            ans += dp[f][finish]
            ans %= mod
        }
        return ans
    }
}
```