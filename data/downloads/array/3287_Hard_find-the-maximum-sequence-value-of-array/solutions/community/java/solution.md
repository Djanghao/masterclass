# ✅Detailed explanation🔥beats 100%🔥C++🔥Java🔥Python3🔥

**Author:** aijcoder
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/solutions/5786700/](https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/solutions/5786700/)

---

### Problem Restatement

You need to find the maximum value of any subsequence of `nums` with size `2 * k`. The value of such a sequence is defined as:

\\[ \	ext{Value} = ( \	ext{OR of first } k \	ext{ elements} ) \	ext{ XOR } ( \	ext{OR of last } k \	ext{ elements} ) \\]

### Approach Overview

1. **Dynamic Programming (DP) with Bitmasking**:
   - Use bitmasking to track which elements can form the OR results for any given bitmask.
   - Use DP to compute the minimum number of elements required to achieve each bitmask.

2. **Tracking Valid Sequences**:
   - Use arrays to store the first and last valid positions for sequences that meet the condition for OR and XOR calculations.

### Detailed Explanation

#### 1. **Initialization and Definitions**

- **Variables**:
  - `pre[130]` and `suf[130]`: Arrays to store the first and last indices where a subsequence of length `2 * k` can achieve a specific OR value.
  - `dp[128]`: Array where `dp[mask]` holds the minimum number of elements needed to achieve `mask`.
  - `cnt[128]`: Array to count occurrences of each mask.

#### 2. **Processing the Array (Forward Pass)**

- **Update DP Table**:
  - For each element `A[i]` in `nums`, update the `dp` table:
    ```cpp
    for (int mask = 0; mask < 128; ++mask) {
        dp[mask | A[i]] = min(dp[mask | A[i]], 1 + dp[mask]);
    }
    ```
    This means if `dp[mask]` is the minimum number of elements needed to achieve `mask`, then to achieve `mask | A[i]`, you need one more element, i.e., `1 + dp[mask]`.

- **Count Valid Masks**:
  - For each `mask`, if `A[i]` is a valid submask of `mask`, increment `cnt[mask]`.
    ```cpp
    if (isSubMask(A[i], mask)) cnt[mask]++;
    ```

- **Update `pre` Array**:
  - If `dp[mask] <= k` and `cnt[mask] >= k`, then store the current index `i` as the first index for this mask if it hasn't been set yet.
    ```cpp
    if (dp[mask] <= k && cnt[mask] >= k && pre[mask] == -1) {
        pre[mask] = i;
    }
    ```

#### 3. **Processing the Array (Backward Pass)**

- **Reset DP and Count Arrays**:
  - Reinitialize `dp` and `cnt` arrays for the backward pass.
    ```cpp
    dp.assign(128, 1e9);
    cnt.assign(128, 0);
    ```

- **Backward Update DP Table**:
  - Similar to the forward pass, but iterate from the end of the array.
    ```cpp
    for (int mask = 0; mask < 128; ++mask) {
        dp[mask | A[i]] = min(dp[mask | A[i]], 1 + dp[mask]);
    }
    ```

- **Count Valid Masks**:
  - Count occurrences for each mask in the backward pass.
    ```cpp
    if (isSubMask(A[i], mask)) cnt[mask]++;
    ```

- **Update `suf` Array**:
  - Store the index `i` as the last index for the mask if it hasn't been set yet.
    ```cpp
    if (dp[mask] <= k && cnt[mask] >= k && suf[mask] == -1) {
        suf[mask] = i;
    }
    ```

#### 4. **Finding the Maximum Value**

- **Iterate Over Possible Masks**:
  - Compute the XOR value for each combination of `l` and `r`, where `r = mask ^ l`.
    ```cpp
    for (int mask = 127; mask >= 0; --mask) {
        for (int l = 127; l >= 0; --l) {
            int r = mask ^ l;
            if (pre[l] == -1 || suf[r] == -1) continue;
            if (pre[l] < suf[r]) {
                return mask;
            }
        }
    }
    ```

- **Return Result**:
  - The maximum value found during the iteration is returned.

### Code
``` C++ []
bool isSubMask(int a,int b){
    return (a | b) == b;
}
class Solution {
public:
    int maxValue(vector<int>& A, int k) {
            int n = A.size();
    vector<int> pre(130, -1), suf(130, -1);
    vector<int> dp(128, 1e9), cnt(128, 0);

    for(int i = 0; i < n; ++i){
        dp[A[i]] = 1;
        for(int mask = 0; mask < 128; ++mask){
            dp[mask | A[i]] = min(dp[mask | A[i]], 1 + dp[mask]);
            if(isSubMask(A[i], mask)) cnt[mask]++;
        }

        for(int mask = 0; mask < 128; ++mask){
            if(dp[mask] <= k && cnt[mask] >= k && pre[mask] == -1){
                pre[mask] = i;
            }
        }
    }

    dp.assign(128, 1e9); cnt.assign(128, 0);
    for(int i = n - 1; i >= 0; --i){
        dp[A[i]] = 1;
        for(int mask = 0; mask < 128; ++mask){
            dp[mask | A[i]] = min(dp[mask | A[i]], 1 + dp[mask]);
            if(isSubMask(A[i], mask)) cnt[mask]++;
        }

        for(int mask = 0; mask < 128; ++mask){
            if(dp[mask] <= k && cnt[mask] >= k && suf[mask] == -1){
                suf[mask] = i;
            }
        }
    }
    int ans = 0;
    for(int mask = 127; mask >= 0; --mask){
        for(int l = 127; l >= 0; --l){
            int r = mask ^ l;
            if(pre[l] == -1 || suf[r] == -1) continue;
            if(pre[l] < suf[r]){
                return mask;
            }
        }
    }
    return 0;

    }
};

```
``` Python3 []
class Solution:
    def maxValue(self, nums: List[int], k: int) -> int:
        n = len(nums)
        
        def get_possible(a):
            t1 = {(0, 0)}
            d = defaultdict(lambda: -1)
            for i, x in enumerate(a):
                t2 = set()
                for taken, val in t1:
                    if taken < k:
                        t2.add((taken + 1, val | x))
                        if taken + 1 == k and val | x not in d:
                            d[val | x] = i + 1
                t1.update(t2)
            return d
        
        a = get_possible(nums)
        b = get_possible(nums[::-1])
        ans = -float('inf')
        
        for v1, x in a.items():
            for v2, y in b.items():
                if x + y <= n:
                    ans = max(ans, v1 ^ v2)
        
        return ans

```
``` Java []
class Solution {
    private static final int MAX = 128;

    public int maxValue(int[] nums, int k) {
        boolean[][] dp = new boolean[nums.length][MAX];
        
        boolean[][] isMet = new boolean[MAX][k + 1];
        List<int[]> valid = new ArrayList<>();
        valid.add(new int[]{0, 0});
        isMet[0][0] = true;

        for (int i = nums.length - 1; i >= 0; --i) {
            List<int[]> nextValid = new ArrayList<>();
            for (int[] tmp : valid) {
                nextValid.add(tmp);
                if (tmp[1] + 1 <= k && !isMet[tmp[0] | nums[i]][tmp[1] + 1]) {
                    isMet[tmp[0] | nums[i]][tmp[1] + 1] = true;
                    nextValid.add(new int[]{tmp[0] | nums[i], tmp[1] + 1});
                }
                if (tmp[1] + 1 == k) {
                    dp[i][tmp[0] | nums[i]] = true;
                }
                if (tmp[1] == k) {
                    dp[i][tmp[0]] = true;
                }
            }
            valid = nextValid;
        }

        int result = 0;
        
        boolean[] isLeftMet = new boolean[MAX];
        isMet = new boolean[MAX][k + 1];
        valid = new ArrayList<>();
        valid.add(new int[]{0, 0});
        isMet[0][0] = true;

        for (int i = 0; i < nums.length; ++i) {
            List<int[]> nextValid = new ArrayList<>();
            for (int[] tmp : valid) {
                nextValid.add(tmp);
                if (tmp[1] + 1 <= k && !isMet[tmp[0] | nums[i]][tmp[1] + 1]) {
                    isMet[tmp[0] | nums[i]][tmp[1] + 1] = true;
                    nextValid.add(new int[]{tmp[0] | nums[i], tmp[1] + 1});
                }
                if (tmp[1] + 1 == k && !isLeftMet[tmp[0] | nums[i]] && i + 1 < nums.length) {
                    int orResult = tmp[0] | nums[i];
                    isLeftMet[orResult] = true;
                    for (int j = 1; j < MAX; ++j) {
                        if (dp[i + 1][j]) {
                            result = Math.max(result, orResult ^ j);
                        }
                    }
                }
            }
            valid = nextValid;
        }
        
        return result;
    }
}

```
### Conclusion

The approach efficiently computes the maximum sequence value by combining dynamic programming and bit manipulation. It tracks valid subsequences using bitmasks and updates the DP table to find the optimal subsequence values that satisfy the problem constraints.