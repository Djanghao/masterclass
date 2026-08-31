# Recursion + Memoization || Beginner friendly Explanation

**Author:** BihaniManan
**Votes:** 19
**Link:** [https://leetcode.com/problems/count-the-number-of-winning-sequences/solutions/5905607/](https://leetcode.com/problems/count-the-number-of-winning-sequences/solutions/5905607/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
**Increase**/ **decrease**/ **Eat 5 star** (do nothing) for **Bob**.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Base Case: If curr reaches the size of s, it checks if Bob\u2019s score is positive. If yes, it returns 1 (indicating a winning sequence), otherwise it returns 0.
2. Memoization Check: If the current state has already been computed, it retrieves the stored result to avoid redundant calculations.
Recursive Calls: Depending on Alice's current creature (s[curr]), it makes recursive calls for each possible move Bob can make, updating the score according to the rules of the game:
3. 
 - If Alice summons F:
Bob can summon F (prev == 0): No points awarded.
Bob can summon W (prev == 1): Bob gets 1 point (Bob wins).
Bob can summon E (prev == 2): Bob loses 1 point.

- If Alice summons W:
Bob can summon F: Bob loses 1 point.
Bob can summon W: No points awarded.
Bob can summon E: Bob gets 1 point (Bob wins).
- If Alice summons E:
Bob can summon F: Bob gets 1 point (Bob wins).
Bob can summon W: Bob loses 1 point.
Bob can summon E: No points awarded.
4. After calculating the counts for all possible moves, it stores the result in the DP table for that state.
5. Count Winning Sequences Function:
This function initializes the DP table to -1 (indicating uncomputed states).
It calls the recursive function for all possible starting creatures (0 for F, 1 for W, 2 for E).
6. Finally, it returns half of the total count of winning sequences modulo MOD. This division by 2 accounts for the fact that sequences may be counted in both orders (e.g., Bob could summon first or second).

## Why division by 2?
When analyzing a dynamic programming (DP) problem like this, where both players' moves are considered, over-counting can happen due to how recursive states are explored.

**Bob's First Move is Independent:**
In each game round, Bob can summon any creature, and his moves only depend on the previous round's creature. Because the game starts with no prior restrictions on Bob's choice of creature, there might be over-counting of the distinct sequences Bob can use to beat Alice. Therefor we begin the recursion by considering all three creatures as Bob's possible first move, leading to tripling the count in some cases.

**Symmetry in Bob's Moves:**
Bob's strategy can sometimes be symmetric. For example, if Alice plays a certain sequence like FW, and Bob can win by playing WE, there might be symmetric moves in future rounds that effectively count the same winning sequence twice through different paths of recursion. This symmetry happens because the DP table doesn't inherently differentiate between the sequences that are logically identical from different points in recursion.

**Example to Illustrate Over-counting:**
Let\u2019s assume Alice has the sequence FW (Fire, Water), and Bob's possible sequences to win are WE (Water, Earth).

The recursion could count both WE when Bob starts by summoning Water in round 1, and also count the same sequence WE when Bob starts by summoning Water but arrives at the same state through different transition paths.
Similarly, if Bob had the freedom to start with any creature, both valid sequences might be counted twice due to transitions in rounds 2 and 3.
In this case, dividing by 2 helps because it cancels out the double-counting caused by exploring multiple symmetric or equivalent paths.

# Complexity
- Time complexity: O(3 * n * 2001)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(3 * n * 2001)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    int MOD = 1e9 + 7;
    int dp[3][1001][2001];

    long long solveMem(string &s, int prev, int curr, long long bob) {
        if (curr >= s.size()) {
            return bob > 0 ? 1 : 0;
        }

        if (dp[prev][curr][bob + 1000] != -1) 
            return dp[prev][curr][bob + 1000];

        long long f = 0, w = 0, e = 0;
        if (s[curr] == 'F') {
            if (prev != 0) 
                f = solveMem(s, 0, curr + 1, bob) % MOD % MOD;
            if (prev != 1) 
                w = solveMem(s, 1, curr + 1, bob + 1) % MOD;
            if (prev != 2)
                e = solveMem(s, 2, curr + 1, bob - 1) % MOD;
        } 
        else if (s[curr] == 'W') {
            if (prev != 0) 
                f = solveMem(s, 0, curr + 1, bob - 1)% MOD;
            if (prev != 1) 
                w = solveMem(s, 1, curr + 1, bob) % MOD;
            if (prev != 2) 
                e = solveMem(s, 2, curr + 1, bob + 1) % MOD;
        } 
        else { 
            if (prev != 0) 
                f = solveMem(s, 0, curr + 1, bob + 1) % MOD;
            if (prev != 1) 
                w = solveMem(s, 1, curr + 1, bob - 1)% MOD;
            if (prev != 2) 
                e = solveMem(s, 2, curr + 1, bob) % MOD;
        }
        
        return dp[prev][curr][bob + 1000] = (f + w + e);
    }

    int countWinningSequences(string s) {
        long long ans = 0;
        int n = s.size();
        memset(dp, -1, sizeof(dp));

        ans = (solveMem(s, 0, 0, 0) + solveMem(s, 1, 0, 0) + solveMem(s, 2, 0, 0));
        
        return (ans / 2) % MOD;
    }
};
```