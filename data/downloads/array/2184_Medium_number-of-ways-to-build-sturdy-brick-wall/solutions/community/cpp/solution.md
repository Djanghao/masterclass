# DFS and Bottom-Up DP -- Detailed Explanation

**Author:** rahul-subramanian
**Votes:** 8
**Link:** [https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/solutions/5113080/](https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/solutions/5113080/)

---

# Intuition
For every valid row sequence, need to find all possible next row sequences (think graphs)

# Approach
1. Generate all possible valid sequences for a single row. (DFS)
2. For each valid sequence, find possible next row sequences and store in an adjacency list `(g[i] stores all sequences j that can be adjacent to sequence i)`. To find if two possible sequences can be adjacent, use two pointers and cumulative sum.
3. To count the number of possible sturdy walls, use a knapsack-like DP recurrence. 
```
// DP definition
f(i, j) = number of ways to build sturdy wall upto row i, 
such that the i'th row has sequence j

// bottom up recurrence
f(i, j) = sum(f(i - 1, k)) for all k in g[j] 

// base case
f(1, x) = 1 // height 1 can be achieved with no constraints

// final answer
sum(f(height, x)) for all x in valid sequences

```


# Time Complexity
 
```
M = number of bricks
W = width
H = height
N = number of valid sequences
```
1. Generating all single row sequences takes `O(2 ^ M)`
Since `M <= 10`, N would be <= 1024
2. Building the adjacency list takes `O(N * N * W)` (about 10^7)
3. Bottom up DP takes `O(H * N)` (about 10^5)


# Code
```
class Solution {
public:
    // store all valid sequences for single row
    vector<vector<int>> valid_seq;

    const int mod = (1e9 + 7);

    // generate all valid sequences for single row using DFS
    void generate_seq(int width, vector<int>& bricks, int i, vector<int>& seq) {
        if (i == width) {
            valid_seq.push_back(seq);
            return;
        }
        if (i > width) {
            return;
        }
        for (int brick : bricks) {
            seq.push_back(brick);
            generate_seq(width, bricks, i + brick, seq);
            seq.pop_back();
        }
    }

    // given two valid sequences, return true if they can be 
    // adjacent, false otherwise
    bool check(vector<int>& a, vector<int>& b, int width) {
        int sum_a = 0, sum_b = 0;
        int i = 0, j = 0;
        while (i < a.size() && j < b.size()) {
            if (sum_a <= sum_b) {
                sum_a += a[i++];
            } else {
                sum_b += b[j++];
            }
            if (sum_a == sum_b && sum_a < width) {
                return false;
            }
        }
        return true;
    }

    int buildWall(int height, int width, vector<int>& bricks) {
        vector<int> seq;
        generate_seq(width, bricks, 0, seq);     

        // build graph
        int n = valid_seq.size();
        vector<vector<int>> g(n);        
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                if (check(valid_seq[i], valid_seq[j], width)) {
                    g[i].push_back(j);
                }
            }
        }

        // bottom up DP
        vector<vector<int>> dp(height, vector<int> (n, 0));
        for (int i = 0; i < height; ++i) {
            for (int j = 0; j < n; ++j) {
                // base case = first row can be any row
                if (i == 0) {
                    dp[i][j] = 1;
                    continue;
                }
                // place all possible adjacent rows above me
                // sum all of the ways to place them
                for (int k : g[j]) {
                    dp[i][j] = (dp[i - 1][k] + dp[i][j]) % mod;
                }
            }
        }

        // final answer
        int ans = 0;
        for (int i = 0; i < n; ++i) {
            ans = (ans + dp[height - 1][i]) % mod;
        }
        return ans;
    }
};
```
**Kindly upvote if helpful**



