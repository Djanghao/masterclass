# Python🔥Java🔥C++🔥Simple Solution🔥Easy to Understand

**Author:** techwired8
**Votes:** 27
**Link:** [https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3521561/](https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3521561/)

---

**!! BIG ANNOUNCEMENT !!**
I am currently Giving away my premium content well-structured assignments and study materials to clear interviews at top companies related to computer science and data science to my current Subscribers. Next assignment will be shared tomorrow.  **DON'T FORGET** to Subscribe

# Search \uD83D\uDC49 `Tech Wired Leetcode` to Subscribe

# or

# Click the Link in my Profile

# Approach:

The given problem can be solved using dynamic programming. The basic idea is to consider all possible pairs of numbers in the given array and calculate their gcd. Then, we can use a bitmask to represent all possible subsets of indices and use dynamic programming to calculate the maximum score for each subset.

To calculate the maximum score for a given subset of indices, we can iterate over all possible pairs of indices in the subset and calculate their gcd. We can then add the product of this gcd and half the number of indices in the subset to the maximum score for the subset obtained by removing these indices from the original subset.

The maximum score for the original subset can then be obtained by considering all possible subsets of indices and choosing the one with the maximum score.

# Intuition:

The problem requires us to maximize a score that is calculated based on the gcd of pairs of numbers in the given array. We can observe that if we fix a pair of indices, the gcd of the corresponding pair of numbers will be the same for all subsets that contain these indices. Therefore, we can precompute the gcd of all pairs of numbers in the array and use it to calculate the score for each subset.

We can also observe that if we remove a pair of indices from a subset, the resulting subset will have an even number of indices. This is because the total number of indices in the original subset is even, and removing a pair of indices will reduce this number by 2. Therefore, we can iterate over all possible even-sized subsets of indices and use dynamic programming to calculate the maximum score for each subset.






```Python []
class Solution:
    def maxScore(self, nums: List[int]) -> int:
        n = len(nums)
        
       
        gcd_matrix = [[0] * n for _ in range(n)]
        for i in range(n):
            for j in range(i+1, n):
                gcd_matrix[i][j] = gcd_matrix[j][i] = gcd(nums[i], nums[j])
        
      
        dp = [0] * (1 << n)
        
        
        for state in range(1, 1 << n):
          
            cnt = bin(state).count('1')
            
           
            if cnt % 2 == 1:
                continue
            
            
            for i in range(n):
                if not (state & (1 << i)):
                    continue
                for j in range(i+1, n):
                    if not (state & (1 << j)):
                        continue
                    nextState = state ^ (1 << i) ^ (1 << j)
                    dp[state] = max(dp[state], dp[nextState] + cnt // 2 * gcd_matrix[i][j])
        
        return dp[(1 << n) - 1]

```
```Java []
class Solution {
    public int maxScore(int[] nums) {
        int n = nums.length;
        
        
        int[][] gcdMatrix = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                gcdMatrix[i][j] = gcdMatrix[j][i] = gcd(nums[i], nums[j]);
            }
        }
        
       
        int[] dp = new int[1 << n];
        
        
        for (int state = 1; state < (1 << n); state++) {
            
            int cnt = Integer.bitCount(state);
            
            
            if (cnt % 2 == 1) {
                continue;
            }
            
            
            for (int i = 0; i < n; i++) {
                if ((state & (1 << i)) == 0) {
                    continue;
                }
                for (int j = i + 1; j < n; j++) {
                    if ((state & (1 << j)) == 0) {
                        continue;
                    }
                    int nextState = state ^ (1 << i) ^ (1 << j);
                    dp[state] = Math.max(dp[state], dp[nextState] + cnt / 2 * gcdMatrix[i][j]);
                }
            }
        }
        
        return dp[(1 << n) - 1];
    }
    
    private int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }
}

```
```C++ []
class Solution {
public:
    int maxScore(vector<int>& nums) {
        int n = nums.size();
        
        
        vector<vector<int>> gcdMatrix(n, vector<int>(n));
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                gcdMatrix[i][j] = gcdMatrix[j][i] = gcd(nums[i], nums[j]);
            }
        }
        
        
        vector<int> dp(1 << n);
        
        
        for (int state = 1; state < (1 << n); state++) {
            
            int cnt = __builtin_popcount(state);
            
            
            if (cnt % 2 == 1) {
                continue;
            }
            
            
            for (int i = 0; i < n; i++) {
                if ((state & (1 << i)) == 0) {
                    continue;
                }
                for (int j = i + 1; j < n; j++) {
                    if ((state & (1 << j)) == 0) {
                        continue;
                    }
                    int nextState = state ^ (1 << i) ^ (1 << j);
                    dp[state] = max(dp[state], dp[nextState] + cnt / 2 * gcdMatrix[i][j]);
                }
            }
        }
        
        return dp[(1 << n) - 1];
    }
    
    int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }
};

```
# An Upvote will be encouraging \uD83D\uDC4D