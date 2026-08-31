# Detailed Explanation of approach & Code - 100% beats

**Author:** muhammadfarhankt
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5580921/](https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5580921/)

---

# Summary
- The problem requires determining how many players win based on their ball-picking pattern. The key insight is that a player wins if they have picked more balls of any single color than their index. By counting the frequency of each color picked by each player, we can easily check if a player meets the winning condition.

# Approach
1. Initialization: Create a 2D array where the rows represent players and the columns represent the count of each color (0-10) picked by the player.
2. Counting: Iterate through the given picks and update the 2D array to reflect the number of each color picked by each player.
3. Winning Check: For each player, check if any color count exceeds their index. If it does, the player wins.
4. Result: Count the number of players who meet the winning condition.

# Complexity
- Time complexity: O(m+n\xD7c), where m is the length of the pick array, n is the number of players, and c is the number of colors (which is a constant 11).

- Space complexity:  O(n\xD7c), where n is the number of players and c is the number of colors (11), for storing the color counts for each player.

# Code

```Java []
class Solution {
    public int winningPlayerCount(int n, int[][] pick) {
        // Step 1: Create a 2D array to count colors picked by each player
        int[][] colorCounts = new int[n][11];

        // Step 2: Update the color counts based on the picks
        for (int[] p : pick) {
            int player = p[0], color = p[1];
            colorCounts[player][color]++;
        }

        // Step 3: Count the number of winning players
        int count = 0;
        for (int i = 0; i < n; i++) {
            for (int val : colorCounts[i]) {
                if (val > i) {
                    count++;
                    break;
                }
            }
        }

        return count;
    }
}
```
```C++ []
class Solution {
public:
    int winningPlayerCount(int n, vector<vector<int>>& pick) {
        // Step 1: Create a 2D array to count colors picked by each player
        vector<vector<int>> colorCounts(n, vector<int>(11, 0));

        // Step 2: Update the color counts based on the picks
        for (const auto& p : pick) {
            int player = p[0], color = p[1];
            colorCounts[player][color]++;
        }

        // Step 3: Count the number of winning players
        int count = 0;
        for (int i = 0; i < n; ++i) {
            for (int val : colorCounts[i]) {
                if (val > i) {
                    count++;
                    break;
                }
            }
        }

        return count;
    }
};
```
```Python []
from typing import List

class Solution:
    def winningPlayerCount(self, n: int, pick: List[List[int]]) -> int:
        # Step 1: Create a 2D list to count colors picked by each player
        color_counts = [[0] * 11 for _ in range(n)]

        # Step 2: Update the color counts based on the picks
        for player, color in pick:
            color_counts[player][color] += 1

        # Step 3: Count the number of winning players
        count = 0
        for i in range(n):
            if any(val > i for val in color_counts[i]):
                count += 1

        return count
```
```Javascript []
/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function(n, pick) {
    // Step 1: Create a 2D array to count colors picked by each player
    const colorCounts = Array.from({ length: n }, () => Array(11).fill(0));

    // Step 2: Update the color counts based on the picks
    for (const [player, color] of pick) {
        colorCounts[player][color]++;
    }

    // Step 3: Count the number of winning players
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (colorCounts[i].some(val => val > i)) {
            count++;
        }
    }

    return count;
};
```
```Dart []
class Solution {
  int winningPlayerCount(int n, List<List<int>> pick) {
    // Step 1: Create a 2D list to count colors picked by each player
    List<List<int>> colorCounts = List.generate(n, (_) => List.filled(11, 0));

    // Step 2: Update the color counts based on the picks
    for (List<int> p in pick) {
      int player = p[0], color = p[1];
      colorCounts[player][color]++;
    }

    // Step 3: Count the number of winning players
    int count = 0;
    for (int i = 0; i < n; i++) {
      if (colorCounts[i].any((val) => val > i)) {
        count++;
      }
    }

    return count;
  }
}
```
```Golang []
func winningPlayerCount(n int, pick [][]int) int {
    // Step 1: Create a 2D slice to count colors picked by each player
    colorCounts := make([][]int, n)
    for i := range colorCounts {
        colorCounts[i] = make([]int, 11)
    }

    // Step 2: Update the color counts based on the picks
    for _, play := range pick {
        player, color := play[0], play[1]
        colorCounts[player][color]++
    }

    // Step 3: Count the number of winning players
    count := 0
    for i := 0; i < n; i++ {
        for _, val := range colorCounts[i] {
            if val > i {
                count++
                break
            }
        }
    }

    return count
}
```