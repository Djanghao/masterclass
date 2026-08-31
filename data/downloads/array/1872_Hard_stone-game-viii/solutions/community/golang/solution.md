# Go Solution

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-viii/solutions/4700521/](https://leetcode.com/problems/stone-game-viii/solutions/4700521/)

---

# Intuition
Alice and Bob take turns playing a game, with Alice starting first.

There are n stones arranged in a row. On each player's turn, while the number of stones is more than one, they will do the following:

Choose an integer x > 1, and remove the leftmost x stones from the row.
Add the sum of the removed stones' values to the player's score.
Place a new stone, whose value is equal to that sum, on the left side of the row.
The game stops when only one stone is left in the row.

The score difference between Alice and Bob is (Alice's score - Bob's score). Alice's goal is to maximize the score difference, and Bob's goal is the minimize the score difference.

Given an integer array stones of length n where stones[i] represents the value of the ith stone from the left, return the score difference between Alice and Bob if they both play optimally.

# Approach
1. **Calculate Total Sum**: First, the program calculates the total sum of all the stones. This sum represents the total score difference if all the stones were removed.
2. **Iterative Calculation of Maximum Difference**: Starting from the end of the array of stones, the program iterates through the stones in reverse order. At each step, it updates the maximum difference as the maximum of the current maximum difference and the difference between the current sum (excluding the current stone) and the current maximum difference.
3. **Return Maximum Difference**: After iterating through all the stones, the program returns the final maximum difference.

# Complexity

- **Time complexity**: The time complexity of the algorithm is O(n), where n is the number of stones. This is because the algorithm iterates through the stones once to calculate the total sum and then iterates through them again to calculate the maximum difference.

- **Space complexity**: The space complexity is O(1) as the algorithm only uses a constant amount of extra space regardless of the input size.


# Code
```
func stoneGameVIII(stones []int) int {
    n := len(stones)
    sum := 0
    for i := 0; i < n; i++ {
        sum += stones[i]
    }

    max := sum
    for i := n - 1; i >= 2; i-- {
        sum -= stones[i]
        max = Max(max, sum-max)
    }
    return max
}

func Max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

```