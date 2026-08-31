# [Java/Python 3] One pass S O(1) T O(n) codes and follow up, w/ brief explanation and analysis.

**Author:** rock
**Votes:** 153
**Link:** [https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/1907179/](https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/1907179/)

---

Traverse the input `s`:
1. If encontering `0`, count subsequences ending at current `0`: `0`, `10` and `010`'s; The number of `10` depends on how many `1`s before current `0`, and the number of `010` depends on how many `01` before current `0`;

Similarly, 

2. If encontering `1`, count subsequences ending at current `1`:  `1`, `01` and `101`'s; The number of `01` depends on how many `0`s before current `1`, and the number of `101` depends on how many `10` before current `1`.

```java
    public long numberOfWays(String s) {
        long one = 0, zero = 0, oneZero = 0, zeroOne = 0, ways = 0;
        for (int i = 0; i < s.length(); ++i) {
            if (s.charAt(i) == '0') {
                ++zero;
                oneZero += one; // Count in '10'.
                ways += zeroOne; // Count in '010'.
            }else {
                ++one;
                zeroOne += zero; // Count in '01'.
                ways += oneZero; // Count in '101'.
            }
        }
        return ways;
    }
```
```python
    def numberOfWays(self, s: str) -> int:
        ways = 0
        one = zero = zero_one = one_zero = 0
        for c in s:
            if c == '0':
                zero += 1
                one_zero += one
                ways += zero_one
            else:
                one += 1    
                zero_one += zero 
                ways += one_zero
        return ways
```

**Analysis:**

Time: `O(n)`, space: `O(1)`, where `n = s.length()`.

----

**Follow-up**
What if the city official would like to select `k`, instead of `3`, buildings?

~~~If **the upvotes can reach `25`**, I  will provide time `O(k * n)` space `O(k)` code for the follow-up.~~~

Traverse the input `s`:
1. If encontering `0`, count subsequences ending at current `0`:  `0`, `10` and `010`, `1010`'s, ...,; The number of `10` depends on how many `1`s before current `0`, the number of `010` depends on how many `01` before current `0`, and the number of `1010` depends on how many `101` before current `0`...;

Similarly,

2. If encontering `1`, count subsequences ending at current `1`:  `1`, `01`, `101`, and `0101`'s; The number of `01` depends on how many `0`s before current `1`, the number of `101` depends on how many `10` before current `1`, and the number of `0101` depends on how many `010` before current `1`...
3. We can observe the above patterns and use a 2-D array `ways` to record the corresponding subsequences, e.g., 
 
	 ways[0][0] - number of `0`'s;
	 ways[1][0] - number of `10`'s;
	 ways[2][0] - number of `010`'s;
	 ways[3][0] - number of `1010`'s;
	 ...
	 ways[0][1] - number of `1`'s;
	 ways[1][1] - number of `01`'s;
	 ways[2][1] - number of `101`'s;
	 ways[3][1] - number of `0101`'s;
	 ...
	 
```java
    public long numberOfWays(String s, int k) {
     // int k = 3;
        long[][] ways = new long[k][2]; 
        for (int i = 0; i < s.length(); ++i) {
            int idx = s.charAt(i) - '0';
            ++ways[0][idx];
            for (int j = 1; j < k; ++j) {
                ways[j][idx] += ways[j - 1][1 - idx];
            }
        }
        return ways[k - 1][0] + ways[k - 1][1];
    }
```
```python
    def numberOfWays(self, s: str, k: int) -> int:
      # k = 3
        ways = [[0, 0] for _ in range(k)]
        for c in s:
            idx = ord(c) - ord('0')
            ways[0][idx] += 1
            for i in range(1, k):
                ways[i][idx] += ways[i - 1][1 - idx]
        return sum(ways[-1])
```
**Analysis:**

Time: `O(k * n)`, space: `O(k)`, where `n = s.length()`.

**Do let me know** if you have an algorithm better than `O(k * n)` time or `O(k)` space for the follow-up.