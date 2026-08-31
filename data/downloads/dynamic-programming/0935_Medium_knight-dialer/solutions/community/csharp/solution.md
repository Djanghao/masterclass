# C# Solution for Knight Dialer Problem

**Author:** Aman_Raj_Sinha
**Votes:** 5
**Link:** [https://leetcode.com/problems/knight-dialer/solutions/4333827/](https://leetcode.com/problems/knight-dialer/solutions/4333827/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this approach is to use recursion to explore the knight\u2019s movements starting from each numeric cell. We keep track of the remaining moves and memoize the counts to avoid redundant calculations, ultimately accumulating the total count of ways to dial a number of length n.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Define the possible movements for each numeric cell in the phone pad.
2.	Implement a recursive function RecursiveCountWays that calculates the count of ways to dial a number of length n starting from a particular numeric cell.
3.	Use memoization with a dictionary (memo) to store already calculated counts for a specific combination of remaining moves and current numeric cell.
4.	Iterate through each numeric cell (0 to 9) and accumulate the counts of ways to dial a number of length n starting from that cell.
5.	Return the total count of ways modulo 10^9 + 7.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this approach depends on the number of distinct states the algorithm encounters. In this case, there are 10 numeric cells, and for each cell, there can be n possible remaining moves. Considering memoization, the time complexity can be expressed as O(n * 10), where n is the input length of the phone number.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is mainly attributed to the memoization dictionary (memo). It utilizes space proportional to the number of distinct states encountered during the recursion, which can be O(n * 10) in the worst case. Additionally, other space used is negligible, making the overall space complexity O(n * 10).

# Code
```
public class Solution {
    public int KnightDialer(int n) {
        int MOD = 1000000007;
        
        // Define the possible movements for each numeric cell
        int[][] moves = new int[][]{
            new int[]{4, 6},    // 0
            new int[]{6, 8},    // 1
            new int[]{7, 9},    // 2
            new int[]{4, 8},    // 3
            new int[]{3, 9, 0}, // 4
            new int[]{},        // 5
            new int[]{1, 7, 0}, // 6
            new int[]{2, 6},    // 7
            new int[]{1, 3},    // 8
            new int[]{2, 4}     // 9
        };
        
        // Initialize memoization dictionary to store calculated results
        Dictionary<(int, int), int> memo = new Dictionary<(int, int), int>();
        
        int totalCount = 0;
        
        // Loop through each numeric cell as the starting point
        for (int i = 0; i < 10; i++) {
            totalCount = (totalCount + RecursiveCountWays(n - 1, i, moves, memo, MOD)) % MOD;
        }
        
        return totalCount;
    }

    private int RecursiveCountWays(int remainingMoves, int currentNum, int[][] moves, Dictionary<(int, int), int> memo, int MOD) {
        if (remainingMoves == 0) return 1;
        
        if (memo.ContainsKey((remainingMoves, currentNum))) {
            return memo[(remainingMoves, currentNum)];
        }
        
        int totalCount = 0;
        
        foreach (int nextNum in moves[currentNum]) {
            totalCount = (totalCount + RecursiveCountWays(remainingMoves - 1, nextNum, moves, memo, MOD)) % MOD;
        }
        
        memo[(remainingMoves, currentNum)] = totalCount;
        return totalCount;
    }
}
```