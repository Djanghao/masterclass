# [C++] DP approach | easiest solution and detailed explanation

**Author:** blue106
**Votes:** 31
**Link:** [https://leetcode.com/problems/sum-of-good-subsequences/solutions/6028899/](https://leetcode.com/problems/sum-of-good-subsequences/solutions/6028899/)

---


# Intuition:

Instead of checking all possible subsequences explicitly (which would be inefficient), we can use dynamic programming or a counting approach to calculate the number of good subsequences that can end with each number in the array.

# Approach:

#### Variables:
- **`cnt[i]`**: This variable tracks the number of good subsequences that end with the element `i`.
- **`sum[i]`**: This variable tracks the sum of all good subsequences that end with the element `i`.

#### Algorithm:
1. **Initialize `cnt` and `sum`**:
   - For each number `i` in `nums`, we need to consider how subsequences can be formed that end with `i`. We add the possible subsequences formed by adding `i` to subsequences that end with `i-1`, `i+1`, or just the subsequence `{i}` itself.
   
2. **Update `cnt` and `sum`**:
   - For each element `i` in `nums`, we update `cnt[i]` based on subsequences ending at `i-1` and `i+1` (since the difference between consecutive elements should be 1).
   - Similarly, `sum[i]` is updated by adding contributions from `i-1`, `i+1` subsequences and also considering the sum of the subsequences that end at `i`.

3. **Final Calculation**:
   - After processing all elements, we sum up all the values in `sum` to get the final result, which is the total sum of all good subsequences modulo \\( 10^9 + 7 \\).


### Example: `nums = [1, 2, 1]`

#### Step 1: Process the first element `1`
- `i = 1`
  - `cnt[1]` is updated by considering subsequences ending with `0`, `1`, and `2`. Since there's no subsequence yet, we initialize `cnt[1] = 1` (the subsequence `{1}` itself).
  - `sum[1]` is updated to reflect the subsequences that end with `1`. Since only `{1}` exists, `sum[1] = 1`.
  
  After processing `1`:
  - `cnt = {1: 1}`
  - `sum = {1: 1}`

#### Step 2: Process the second element `2`
- `i = 2`
  - `cnt[2]` is updated by considering subsequences ending with `1` (since `abs(2 - 1) = 1`), and `2`. `cnt[2]` is updated as:
    - `cnt[2] = cnt[1] + 1 = 1 + 1 = 2` (this accounts for `{2}` and `{1, 2}`).
  - `sum[2]` is updated by considering the sum of subsequences that end with `1` and `3`. `sum[2]` is updated as:
    - `sum[2] = sum[1] + 1 * cnt[1] = 1 + 1 * 1 = 2`.
  
  After processing `2`:
  - `cnt = {1: 1, 2: 2}`
  - `sum = {1: 1, 2: 2}`

#### Step 3: Process the third element `1`
- `i = 1`
  - `cnt[1]` is updated by considering subsequences ending with `0`, `1`, and `2`. Since the subsequences `{1}`, `{2, 1}`, and `{1, 2, 1}` are valid, we update `cnt[1]`:
    - `cnt[1] = cnt[2] + 1 = 2 + 1 = 3`.
  - `sum[1]` is updated by considering subsequences that end with `0`, `1`, and `2`:
    - `sum[1] = sum[2] + 1 * cnt[2] = 2 + 1 * 2 = 4`.
  
  After processing `1`:
  - `cnt = {1: 3, 2: 2}`
  - `sum = {1: 4, 2: 2}`

#### Final Step: Calculate the Total Sum
- The final step is to sum up all the values in `sum`, which gives us the sum of all good subsequences.
- `sum[1] + sum[2] = 4 + 2 = 6`

Thus, the result is `6`, which is the sum of all good subsequences.

#### Recap of the `cnt` and `sum` Maps:
- **`cnt[i]`**: Tracks how many good subsequences end with `i`.
- **`sum[i]`**: Tracks the sum of all good subsequences ending with `i`.

## Code Explanation:

```cpp
class Solution {
public:
    int mod = 1000000007;

    int sumOfGoodSubsequences(vector<int>& nums) {
        map<int, int> cnt, sum;
        
        // Loop through all numbers in the nums array
        for (int i : nums) {
            // Update cnt[i] by considering subsequences from i-1, i, and i+1
            cnt[i] += (cnt[i - 1] + cnt[i + 1] + 1) % mod;
            cnt[i] %= mod;
            
            // Update sum[i] by considering subsequences from i-1, i, and i+1
            sum[i] += (sum[i - 1] + sum[i + 1]) % mod;
            sum[i] %= mod;
            
            // Add the contribution of the subsequences that end at i
            sum[i] += (long long)(cnt[i - 1] + cnt[i + 1] + 1) % mod * i % mod;
            sum[i] %= mod;
        }
        
        // Calculate the final result by summing all the values in sum
        int res = 0;
        for (auto &p : sum) {
            res += p.second;
            res %= mod;
        }
        
        return res;
    }
};
```