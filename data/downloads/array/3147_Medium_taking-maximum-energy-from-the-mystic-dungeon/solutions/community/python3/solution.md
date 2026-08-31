# Fastest (100%) || Easy to Understand || Iterative DP || Short & Concise

**Author:** gameboey
**Votes:** 38
**Link:** [https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/solutions/5145897/](https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/solutions/5145897/)

---




# Intuition
By iterating from the end of the sequence to the beginning, we can efficiently calculate the maximum energy starting from each magician.

# Approach

### Understanding the Problem:
- We are given a list of magicians, each with an energy attribute.
- The objective is to start from any magician and absorb energy while teleporting with `k` jumps until the end of the sequence.
- We want to maximize the total energy absorbed during this journey.

### Dynamic Programming Approach:
- We can solve this problem efficiently using dynamic programming.
- We initialize `dp` to all zeros initially.
- We iterate over the magicians in reverse order (from the last magician to the first).
- At each magician `i`, we calculate the maximum energy that can be obtained starting from `i` by adding the energy of magician `i` to the maximum energy that can be obtained starting from the magician `i + k`.
- We update the result `res` to the maximum energy obtained among all magicians and return.


### Dru - Run:
- Let's consider the example with `energy = [5, 2, -10, -5, 1]` and `k = 3`.
- We iterate over the magicians in reverse order:
  - At magician 4 (last magician), `dp[4] = energy[4] + (4 + 3 < 5 ? dp[4 + 3] : 0) = 1 + 0 = 1`.
  - At magician 3, `dp[3] = energy[3] + (3 + 3 < 5 ? dp[3 + 3] : 0) = -5 + 0 = -5`.
  - At magician 2, `dp[2] = energy[2] + (2 + 3 < 5 ? dp[2 + 3] : 0) = -10 + 0 = -10`.
  - At magician 1, `dp[1] = energy[1] + (1 + 3 < 5 ? dp[1 + 3] : 0) = 2 + 1 = 3`.
- The maximum energy that can be gained is 3, which is achieved by starting from magician 1.

# Complexity
- Time complexity: O(n)

- Space complexity: 0(n)

# Code
```C++ []
#pragma GCC optimize ("Ofast")
#pragma GCC target ("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx")
#pragma GCC optimize ("-ffloat-store")

class Solution {
public:
    int maximumEnergy(vector<int>& energy, int k) {
        ios_base::sync_with_stdio(0), cin.tie(0), cout.tie(0);
        int n = energy.size();
        vector<int> dp(n, 0);
        
        int res = INT_MIN;
        for (int i = n - 1; i >= 0; i--) {
            dp[i] = energy[i] + (i + k < n ? dp[i + k] : 0);

            if(dp[i] > res) {
                res = dp[i];
            }
        }
        
        return res;
    }
};
```
```java []
class Solution {
    public int maximumEnergy(int[] energy, int k) {
        int n = energy.length;
        int[] dp = new int[n];
        
        int res = Integer.MIN_VALUE;
        for (int i = n - 1; i >= 0; i--) {
            dp[i] = energy[i] + (i + k < n ? dp[i + k] : 0);
            res = Math.max(res, dp[i]);
        }
        
        return res;
    }
}
```
```python []
class Solution:        
    def maximumEnergy(self, energy: List[int], k: int) -> int:
        n = len(energy)   
        dp = [0] * n     
        
        res = float('-inf') 
        for i in range(n - 1, -1, -1) :   
            dp[i] = energy[i] + (dp[i + k] if i + k < n else 0) 
            res = max(res, dp[i]) 
            
        return res  

```
![jiraiya.jpeg](./images/0.jpeg)

