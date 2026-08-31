# 🔥 Bitmask 🔥 || Simple Fast and Easy || with Explanation 😈

**Author:** ayoubzulfiqar
**Votes:** 0
**Link:** [https://leetcode.com/problems/predict-the-winner/solutions/3827653/](https://leetcode.com/problems/predict-the-winner/solutions/3827653/)

---

# \uD83D\uDD25 Bit-Mask \uD83D\uDD25 || Simple Fast and Easy || with Explanation \uD83D\uDE08

## Code Explanation:
The given code is a Dart implementation of the "Predict the Winner" problem using a recursive approach with memoization (dynamic programming). The function `PredictTheWinner` takes an array of integers `arr` as input and returns a boolean value indicating whether the first player (Player 1) can predict a winning score or not. The function `solve` is a recursive helper function that calculates the score difference between Player 1 and Player 2 for all possible game plays and memoizes the results to avoid redundant computations.

## Intuition:
The problem can be approached as a game where two players take turns to pick an integer from the array. Each player aims to maximize their score. Player 1 wants to predict whether they can win or not. To do this, we can calculate the difference between Player 1's score and Player 2's score for all possible game plays. If the difference is greater than or equal to zero, Player 1 can predict a winning strategy.

## Approach:
1. The main function `PredictTheWinner` checks for base cases. If the length of the input array `arr` is less than or equal to 1, Player 1 wins by default as they can pick the only available integer.
2. The function `solve` uses memoization to store the results of subproblems. It takes four arguments:
   - `arr`: The input array of integers.
   - `curr`: A bitmask representing the current state of the game. Each bit at position i in the bitmask indicates whether the ith element of the array is picked (1) or not picked (0) by any player.
   - `dp`: An array used for memoization to store the results of subproblems. It keeps track of the maximum difference between Player 1's score and Player 2's score for each bitmask state `curr`.
   - `tar`: A bitmask representing the target state where all integers have been picked (all bits are 1).
3. Inside the `solve` function, we check if the result for the current bitmask `curr` has already been computed and stored in `dp`. If so, we return the cached result.
4. Otherwise, we initialize `max` to the minimum possible integer value (since the scores can be negative).
5. We use two loops to find the first and last unpicked integers in the array. We try each of these integers and recursively calculate the score difference when they are picked. We update `max` with the maximum score difference obtained from these choices.
6. Finally, we store the computed `max` value in the `dp` array for the current bitmask `curr` and return it.

## Time Complexity:
The time complexity of this solution is O(2^n), where n is the number of elements in the input array `arr`. This is because for each element in the array, we have two choices: either pick it or do not pick it. As a result, the number of possible game plays is 2^n.

## Space Complexity:
The space complexity of this solution is O(2^n) as well. The memoization array `dp` has a size of 2^n since it stores the results of subproblems for all possible bitmask states `curr`. Additionally, the recursion depth can go up to n, so the space required by the call stack is also O(n). Overall, the space complexity is dominated by the memoization array.
# Code
```dart
class Solution {
  bool PredictTheWinner(List<int> arr) {
    if (arr.length <= 1) return true;
    final List<int> dp = List.filled(1 << arr.length, 0);
    int tar = 0;
    for (int i = 0; i < arr.length; i++) tar += 1 << i;
    final int val = solve(arr, 0, dp, tar);
    return val >= 0;
  }

  int solve(List<int> arr, int current, List<int> dp, int tar) {
    if (current == tar) return 0; // all integers have been picked
    if (dp[current] != 0) return dp[current]; // cache
    int max = -2147483648; // equivalent to Integer.MIN_VALUE

    for (int i = 0; i < arr.length; i++) {
      // finding first unpicked integer
      if ((current & (1 << i)) == 0) {
        max = _max(max, arr[i] - solve(arr, (current | (1 << i)), dp, tar));
        break;
      }
    }

    for (int i = arr.length - 1; i >= 0; i--) {
      // finding last unpicked integer
      if ((current & (1 << i)) == 0) {
        max = _max(max, arr[i] - solve(arr, (current | (1 << i)), dp, tar));
        break;
      }
    }
    return dp[current] = max;
  }

  int _max(int a, int b) => a > b ? a : b;
}
```
## [GitHub](https://github.com/ayoubzulfiqar/leetcode)