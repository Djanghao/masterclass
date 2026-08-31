# 2 dimensional DP - C++, Java, Python, JavaScript, GoLang

**Author:** JayPokale
**Votes:** 5
**Link:** [https://leetcode.com/problems/string-compression-ii/solutions/4469055/](https://leetcode.com/problems/string-compression-ii/solutions/4469055/)

---

# C++
```c++
class Solution {
public:
    int getLengthOfOptimalCompression(string s, int k) {
        int n = s.length();
        vector<vector<int>> dp(n, vector<int>(k + 1, 101));
        return dfs(0, k, s, dp);
    }

private:
    int dfs(int i, int k, const string& s, vector<vector<int>>& dp) {
        int n = s.length();
        if (i + k >= n) return 0;
        if (k < 0) return 101;
        if (dp[i][k] != 101) return dp[i][k];

        int res = dfs(i + 1, k - 1, s, dp); // Skip this character
        int diff = 0, same = 0, length = 0;

        // For all continuous s[i] characters (can skip k characters)
        for (int j = i; j < n && k - diff >= 0; ++j) {
            if (s[i] == s[j]) {
                ++same;
                if (same <= 2 || same == 10 || same == 100) {
                    ++length;
                }
            } else {
                ++diff;
            }
            res = min(res, length + dfs(j + 1, k - diff, s, dp));
        }

        return (dp[i][k] = res);
    }
};
```

# Java
```java
class Solution {
    public int getLengthOfOptimalCompression(String s, int k) {
        int n = s.length();
        int[][] dp = new int[n][k + 1];
        for (int i = 0; i < n; i++) {
            Arrays.fill(dp[i], 101);
        }

        return dfs(0, k, s, dp);
    }

    private int dfs(int i, int k, String s, int[][] dp) {
        int n = s.length();
        if (i + k >= n) {
            return 0;
        }
        if (k < 0) {
            return 101;
        }
        if (dp[i][k] != 101) {
            return dp[i][k];
        }

        int res = dfs(i + 1, k - 1, s, dp);
        int diff = 0, same = 0, length = 0;

        for (int j = i; j < n; j++) {
            if (k - diff < 0) {
                break;
            }
            if (s.charAt(i) == s.charAt(j)) {
                same++;
                if (same <= 2 || same == 10 || same == 100) {
                    length++;
                }
            } else {
                diff++;
            }
            res = Math.min(res, length + dfs(j + 1, k - diff, s, dp));
        }

        dp[i][k] = res;
        return res;
    }
}
```

# Python
```py
class Solution:
    def getLengthOfOptimalCompression(self, s: str, k: int) -> int:
        n = len(s)
        dp = [[101] * (k + 1) for _ in range(n)]

        def dfs(i, k):
            nonlocal s, n, dp
            if i + k >= n:
                return 0
            if k < 0:
                return 101
            if dp[i][k] != 101:
                return dp[i][k]

            res = dfs(i + 1, k - 1) # Skip this character
            diff, same, length = 0, 0, 0

            # For all continuous s[i] characters (can skip k characters)
            for j in range(i, n):
                if k - diff < 0:
                    break
                if s[i] == s[j]:
                    same += 1
                    if same <= 2 or same == 10 or same == 100:
                        length += 1
                else:
                    diff += 1
                res = min(res, length + dfs(j + 1, k - diff))

            dp[i][k] = res
            return res

        return dfs(0, k)
```

# JavaScript
```js
/**
 * @author {Dare2Solve}
 * @author {twitter.com/JayPokale35}
 */
var getLengthOfOptimalCompression = function (s, k) {
    var dp = Array.from({ length: s.length }, () =>
        new Uint8Array(k + 1).fill(101)
    );

    var dfs = (i, k) => {
        if (i + k >= s.length) return 0;
        if (k < 0) return 101;
        if (dp[i][k] !== 101) return dp[i][k];

        var res = dfs(i + 1, k - 1); // Skip this character
        var diff = 0, same = 0, length = 0;

        // For all continuous s[i] characters (can skip k characters)
        for (var j = i; j < s.length && k - diff >= 0; ++j) {
            if (s[i] === s[j]) {
                ++same;
                if (same <= 2 || same === 10 || same === 100) ++length;
            } else ++diff;
            res = Math.min(res, length + dfs(j + 1, k - diff));
        }

        return (dp[i][k] = res);
    };

    return dfs(0, k);
};
```

# Go
```go
func getLengthOfOptimalCompression(s string, k int) int {
	n := len(s)
	dp := make([][]int, n)
	for i := range dp {
		dp[i] = make([]int, k+1)
		for j := range dp[i] {
			dp[i][j] = 101
		}
	}

	var dfs func(int, int) int
	dfs = func(i, k int) int {
		if i+k >= n {
			return 0
		}
		if k < 0 {
			return 101
		}
		if dp[i][k] != 101 {
			return dp[i][k]
		}

		res := dfs(i+1, k-1) // Skip this character
		diff, same, length := 0, 0, 0

        // For all continuous s[i] characters (can skip k characters)
		for j := i; j < n; j++ {
			if k-diff < 0 {
				break
			}
			if s[i] == s[j] {
				same++
				if same <= 2 || same == 10 || same == 100 {
					length++
				}
			} else {
				diff++
			}
			res = int(math.Min(float64(res), float64(length+dfs(j+1, k-diff))))
		}

		dp[i][k] = res
		return res
	}

	return dfs(0, k)
}
```