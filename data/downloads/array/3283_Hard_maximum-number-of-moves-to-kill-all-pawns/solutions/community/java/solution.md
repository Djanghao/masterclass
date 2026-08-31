# ✅Beats 100% -08 Sept'24 Contest - Dynamic Programming- Explained in Detail

**Author:** millenium103
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-number-of-moves-to-kill-all-pawns/solutions/5753439/](https://leetcode.com/problems/maximum-number-of-moves-to-kill-all-pawns/solutions/5753439/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves a turn-based game with two players (Alice and Bob) who move a knight on a chessboard to capture pawns. Alice aims to maximize the total number of moves made, while Bob aims to minimize it. Given that both players play optimally, we need to find the maximum number of moves Alice can ensure.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Calculate Distances:** 
   - We first need to determine the number of moves it takes for the knight to reach each pawn from any given position. This can be calculated using Breadth-First Search (BFS) because the knight has specific move patterns and BFS is suitable for finding the shortest path in an unweighted grid.

2. **Dynamic Programming on Subsets:**
   - Use dynamic programming to solve the problem by considering all possible subsets of pawns and the state of the game at each subset. The state is defined by:
     - `k`: the current pawn being considered.
     - `curr`: the bitmask representing which pawns have been captured.
     - `flag`: whose turn it is (Alice or Bob).
   - The DP state `dp[k][curr]` represents the maximum (or minimum) number of moves from the state where the current pawn is `k` and the subset of captured pawns is `curr`.

3. **Implementation Details:**
   - **Distance Calculation (BFS):** Compute the shortest path from the knight's initial position to each pawn and between all pairs of pawns. This results in a distance matrix `d` where `d[i][j]` indicates the number of moves required to go from pawn `i` to pawn `j`.
   - **Dynamic Programming Recursion:** Implement the DP recursion to handle the turn-based nature of the game. Alice tries to maximize the total moves while Bob tries to minimize them.


# Complexity
- Time complexity: `O(N x 2^N)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(N x 2^N)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->



# Example Breakdown

Consider the example:
- `kx = 0, ky = 2, positions = [[1,1],[2,2],[3,3]]`

**Distance Calculation:**
   - Use BFS to compute distances from the knight to each pawn and between pawns. For instance:
     - Distance from `(0, 2)` to `(1, 1)` is 2 moves.
     - Distance from `(0, 2)` to `(2, 2)` is 2 moves.
     - Distance from `(0, 2)` to `(3, 3)` is 4 moves.
     - And so on...

**Dynamic Programming:**
   - Initialize the DP table with the calculated distances.
   - Recursively solve using the DP approach, alternating between Alice\u2019s and Bob\u2019s moves. 

### Summary

- **Initialization:** Use BFS to compute shortest distances.
- **DP Table:** Maintain and update the DP table based on current pawn and captured state.
- **Final Computation:** Use the DP table to determine the maximum number of moves Alice can ensure.

This approach effectively combines BFS for distance calculations and DP for optimal turn-based play analysis to achieve the desired solution.

# Code
```java []
class Solution {

    public int maxMoves(int kx, int ky, int[][] positions) {
        HashMap<List<Integer>, Integer> map = new HashMap<>();
        for (int i = 0; i < positions.length; i++) {
            map.put(List.of(positions[i][0], positions[i][1]), i);
        }
        int[][] d = new int[positions.length + 1][positions.length + 1];
        maxMoves(List.of(kx, ky), map, d[positions.length]);
        for (int i = 0; i < positions.length; i++) {
            maxMoves(List.of(positions[i][0], positions[i][1]), map, d[i]);
        }
        return maxMoves(positions.length, 0, d, true, new int[positions.length + 1][1 << positions.length]);
    }

    private void maxMoves(List<Integer> list, HashMap<List<Integer>, Integer> map, int[] d) {
        ArrayDeque<List<Integer>> deque = new ArrayDeque<>(List.of(list));
        HashSet<List<Integer>> set = new HashSet<>();
        for (int i = 0, c = d.length; c > 1; i++) {
            for (int j = deque.size(); j > 0; j--) {
                List<Integer> poll = deque.poll();
                if (!set.contains(poll)) {
                    set.add(poll);
                    if (map.containsKey(poll)) {
                        d[map.get(poll)] = i;
                        c--;
                    }
                    if (poll.get(0) >= 0 && poll.get(0) < 50 && poll.get(1) >= 0 && poll.get(1) < 50) {
                        for (int[] k : new int[][] { { -2, -1 }, { -2, 1 }, { -1, -2 }, { -1, 2 }, { 1, -2 }, { 1, 2 }, { 2, -1 }, { 2, 1 } }) {
                            deque.offer(List.of(poll.get(0) + k[0], poll.get(1) + k[1]));
                        }
                    }
                }
            }
        }
    }

    private int maxMoves(int k, int curr, int[][] d, boolean flag, int[][] dp) {
        if (curr + 1 == 1 << d.length - 1) {
            return 0;
        } else if (dp[k][curr] == 0) {
            dp[k][curr] = flag ? 0 : Integer.MAX_VALUE;
            for (int i = 0; i < d.length - 1; i++) {
                if ((1 << i & curr) == 0) {
                    int next = maxMoves(i, 1 << i | curr, d, !flag, dp) + d[k][i];
                    dp[k][curr] = flag ? Math.max(dp[k][curr], next) : Math.min(dp[k][curr], next);
                }
            }
        }
        return dp[k][curr];
    }
}
```
![upvote.png](./images/0.png)
