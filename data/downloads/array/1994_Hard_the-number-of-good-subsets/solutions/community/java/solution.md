# Java Bit Mask + DP Solution (15ms)

**Author:** hdchen
**Votes:** 10
**Link:** [https://leetcode.com/problems/the-number-of-good-subsets/solutions/1444183/](https://leetcode.com/problems/the-number-of-good-subsets/solutions/1444183/)

---

**Intuition**
* The value range from 1 to 30. If the number can be reduced to 20, an algorithm runs O(2^20) should be sufficient. So I should factorialize each number to figure out how many valid number within the range first.
* There are only 18 valid numbers (can be represented by unique prime numbers)
* Represent each number by a bit mask - each bit represent the prime number
* The next step should be that categorize the input - remove all invalid numbers and count the number of 1 as we need to handle 1 separately.
* The problem is reduced to a math problem and I simply test all the combinations - O(18*2^18)
* If 1 exists in the input, the final answer will be `result * (1 << number_of_one) % mod`.

Note: Need to use primitive types to pass the test cases under the above complexity.
```
// static int[] map = new int[31]; is the preprocessed factorialized result
    public int numberOfGoodSubsets(int[] nums) {
        int[] cnt = new int[31];
        int one = 0, n = 0;
        for (int i : nums) {
            if (-1 != map[i]) {
                if (0 == cnt[i]++) n++;
            } else if (1 == i) one++;
        }
        int[] keys = new int[n];
        for (int i = 1, j = 0; i <= 30; ++i) if (0 != cnt[i]) keys[j++] = i;
        long res = 0;
        for (int i = 1; i < 1 << n; ++i) {
            long val = 1, mask = 0;
            for (int j = 0; j < n; ++j) {
                if (0 == ((i >> j) & 1)) continue;
                if (0 != (mask & map[keys[j]])) {
                    val = -1;
                    break;
                }
                val = val * cnt[keys[j]] % mod;
                mask |= map[keys[j]];
            }
            if (-1 != val) res = (res + val) % mod;
        }
        if (0 != one) res = res * pow(one) % mod;
        return (int) res;
    }
    private long pow(int n) {
        long res = 1, m = 2;
        while (0 != n) {
            if (1 == (n & 1)) res = (res * m) % mod;
            m = m * m % mod;
            n >>= 1;
        }
        return res;
    }
```	
	
**Update 09/06**
Learnt from @lee215, DP version, runtime 15ms
```
class Solution {
    static int mod = (int) 1e9 + 7;
    static int[] map = new int[31];
    static {
        int[] prime = new int[]{2, 3, 5, 7, 11, 13, 17, 19, 23, 29};
        for (int i = 2; i <= 30; ++i) {
            if (0 == i % 4 || 0 == i % 9 || 25 == i) continue;
            int mask = 0;
            for (int j = 0; j < 10; ++j) {
                if (0 == i % prime[j]) mask |= 1 << j;
            }
            map[i] = mask;
        }
    }
    public int numberOfGoodSubsets(int[] nums) {
        int n = nums.length, one = 0;
        int[] dp = new int[1024], cnt = new int[31];
        dp[0] = 1;
        for (int i : nums) {
            if (1 == i) one++;
            else if (0 != map[i]) cnt[i]++;
        }
        for (int i = 0; i < 31; ++i) {
            if (0 == cnt[i]) continue;
            for (int j = 0; j < 1024; ++j) {
                if (0 != (j & map[i])) continue;
                dp[j | map[i]] = (int) ((dp[j | map[i]] + dp[j] * (long) cnt[i]) % mod);
            }
        }
        long res = 0;
        for (int i : dp) res = (res + i) % mod;
        res--;
        if (0 != one) res = res * pow(one) % mod;
        return (int) res;
    }
    private long pow(int n) {
        long res = 1, m = 2;
        while (0 != n) {
            if (1 == (n & 1)) res = (res * m) % mod;
            m = m * m % mod;
            n >>= 1;
        }
        return res;
    }
}
```