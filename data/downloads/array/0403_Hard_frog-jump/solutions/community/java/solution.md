# DP || Beginners Friendly || Easy to understand || C++ || Java || Python

**Author:** shivam-727
**Votes:** 65
**Link:** [https://leetcode.com/problems/frog-jump/solutions/3965107/](https://leetcode.com/problems/frog-jump/solutions/3965107/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Explore options of jump that frog can make.

`for detailed explanation you can refer to my youtube channel` 

[ Video in Hindi click here](https://youtube.com/@LetsCodeTogether72/videos)

or link in my profile.Here,you can find any solution in playlists monthwise from june 2023 with detailed explanation.i upload daily leetcode solution video with short and precise explanation.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Dynamic Programming with Memoization:**
   - Create a map `m` to store the index of each stone.
   - Initialize a 2D memoization array `dp` with -1.
   - Define a recursive function `solve(i, k)` that checks if the frog can reach the last stone starting from stone `i` with jump distance `k`.
   - If the function result is already memoized in `dp[i][k]`, return it.
   - Try three jump distances: `k`, `k-1`, and `k+1`, and see if the frog can reach a stone with these jump distances.
   - Memoize the result and return `true` if the frog can reach the last stone from the current position.
   
2. **Main Function:**
   - If the second stone's position is not one unit ahead of the first stone, return `false`.
   - Populate the map `m` with stone positions and indices.
   - Call the `solve` function starting from the second stone with jump distance 1.
   - Return the result of the `solve` function as the answer.

# Complexity
- Time complexity:$$O(n*n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n*n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    unordered_map<int, int> m;
    int dp[2000][2000];

    int solve(int i, int k, vector<int>& stones) {
        if (i == stones.size() - 1) {
            return true;
        }
        
        if (dp[i][k] != -1) {
            return dp[i][k];
        }

        bool k0 = false;
        bool kp = false;
        bool k1 = false;

        if (m.find(stones[i] + k) != m.end()) {
            k0 = solve(m[stones[i] + k], k, stones);
        }
        if (k > 1 && m.find(stones[i] + k - 1) != m.end()) {
            kp = solve(m[stones[i] + k - 1], k - 1, stones);
        }
        if (m.find(stones[i] + k + 1) != m.end()) {
            k1 = solve(m[stones[i] + k + 1], k + 1, stones);
        }

        dp[i][k] = k0 || kp || k1;
        return dp[i][k];
    }

    bool canCross(vector<int>& stones) {
        if (stones[1] - stones[0] != 1) {
            return false;
        }

        for (int i = 0; i < stones.size(); i++) {
            m[stones[i]] = i;
        }
        
        memset(dp, -1, sizeof(dp));

        return solve(1, 1, stones);
    }
};

```
```java []

class Solution {
    HashMap<Integer, Integer> m = new HashMap<>();
    int[][] dp;

    boolean solve(int i, int k, int[] stones) {
        if (i == stones.length - 1) {
            return true;
        }

        if (dp[i][k] != -1) {
            return dp[i][k] == 1;
        }

        boolean k0 = false, kp = false, k1 = false;

        if (m.containsKey(stones[i] + k)) {
            k0 = solve(m.get(stones[i] + k), k, stones);
        }
        if (k > 1 && m.containsKey(stones[i] + k - 1)) {
            kp = solve(m.get(stones[i] + k - 1), k - 1, stones);
        }
        if (m.containsKey(stones[i] + k + 1)) {
            k1 = solve(m.get(stones[i] + k + 1), k + 1, stones);
        }

        dp[i][k] = (k0 || kp || k1) ? 1 : 0;
        return dp[i][k] == 1;
    }

    public boolean canCross(int[] stones) {
        if (stones[1] - stones[0] != 1) {
            return false;
        }

        for (int i = 0; i < stones.length; i++) {
            m.put(stones[i], i);
        }

        dp = new int[stones.length][stones.length];
        for (int[] row : dp) {
            Arrays.fill(row, -1);
        }

        return solve(1, 1, stones);
    }
}

```
```python []
class Solution:
    def canCross(self, stones: List[int]) -> bool:
        m = {}  # stone positions to indices
        n = len(stones)
        dp = [[-1] * n for _ in range(n)]

        def solve(i, k):
            if i == n - 1:
                return True

            if dp[i][k] != -1:
                return dp[i][k] == 1

            k0, kp, k1 = False, False, False

            if stones[i] + k in m:
                k0 = solve(m[stones[i] + k], k)
            if k > 1 and stones[i] + k - 1 in m:
                kp = solve(m[stones[i] + k - 1], k - 1)
            if stones[i] + k + 1 in m:
                k1 = solve(m[stones[i] + k + 1], k + 1)

            dp[i][k] = 1 if k0 or kp or k1 else 0
            return dp[i][k] == 1

        if stones[1] - stones[0] != 1:
            return False

        for i in range(n):
            m[stones[i]] = i

        return solve(1, 1)

```

