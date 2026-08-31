# Solution By Dare2Solve | Detailed Explanation | 2D DP

**Author:** Dare2Solve
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-inversions/solutions/5353498/](https://leetcode.com/problems/count-the-number-of-inversions/solutions/5353498/)

---

```Explanation []
authorslog.vercel.app/blog/e3UxxojHfx
```

# Code

```cpp []
class Solution {
public:
    int numberOfPermutations(int n, vector<vector<int>>& requirements) {
        vector<vector<int>> dp(n + 1, vector<int>(401, 0));
        vector<int> req(n + 1, -1);

        for (auto& r : requirements) {
            req[r[0] + 1] = r[1];
        }

        const int mod = 1e9 + 7;

        if (req[1] <= 0) {
            dp[1][0] = 1;
        }

        for (int i = 2; i <= n; i++) {
            for (int c = 0; c < i; c++) {
                for (int j = 0; j + c <= 400; j++) {
                    if (req[i] != -1 && j + c != req[i]) {
                        continue;
                    }
                    dp[i][j + c] += dp[i - 1][j];
                    dp[i][j + c] %= mod;
                }
            }
        }

        return dp[n][req[n]];
    }
};
```

```Python []
class Solution:
    def numberOfPermutations(self, n: int, requirements: List[List[int]]) -> int:
        dp = [[0] * 401 for _ in range(n + 1)]
        req = [-1] * (n + 1)
        
        for a, b in requirements:
            req[a + 1] = b
        
        if req[1] <= 0:
            dp[1][0] = 1
        
        for i in range(2, n + 1):
            for c in range(i):
                for j in range(401 - c):
                    if req[i] != -1 and j + c != req[i]:
                        continue
                    dp[i][j + c] += dp[i - 1][j]
                    dp[i][j + c] %= 1000000007
        
        return dp[n][req[n]]
```

```java []
class Solution {
    public int numberOfPermutations(int n, int[][] requirements) {
        int[][] dp = new int[n + 1][401];
        int[] req = new int[n + 1];
        Arrays.fill(req, -1);

        for (int[] requirement : requirements) {
            int a = requirement[0];
            int b = requirement[1];
            req[a + 1] = b;
        }

        if (req[1] <= 0) {
            dp[1][0] = 1;
        }

        for (int i = 2; i <= n; i++) {
            for (int c = 0; c < i; c++) {
                for (int j = 0; j + c <= 400; j++) {
                    if (req[i] != -1 && j + c != req[i]) continue;
                    dp[i][j + c] += dp[i - 1][j];
                    dp[i][j + c] %= 1000000007;
                }
            }
        }

        return dp[n][req[n]];
    }
}
```

```JavaScript []
/**
 * @param {number} n
 * @param {number[][]} requirements
 * @return {number}
 */
var numberOfPermutations = function (n, requirements) {
  let dp = Array.from({ length: n + 1 }, () => new Array(401).fill(0));
  let req = new Array(n + 1).fill(-1);
  for (let [a, b] of requirements) {
    req[a + 1] = b;
  }

  if (req[1] <= 0) dp[1][0] = 1;

  for (let i = 2; i <= n; i++) {
    for (let c = 0; c < i; c++) {
      for (let j = 0; j + c <= 400; j++) {
        if (req[i] !== -1 && j + c !== req[i]) continue;
        dp[i][j + c] += dp[i - 1][j];
        dp[i][j + c] %= 1e9 + 7;
      }
    }
  }

  return dp[n][req[n]];
};
```

```Go []
func numberOfPermutations(n int, requirements [][]int) int {
	dp := make([][]int, n+1)
	for i := range dp {
		dp[i] = make([]int, 401)
	}

	req := make([]int, n+1)
	for i := range req {
		req[i] = -1
	}

	for _, r := range requirements {
		a := r[0]
		b := r[1]
		req[a+1] = b
	}

	const mod = 1e9 + 7

	if req[1] <= 0 {
		dp[1][0] = 1
	}

	for i := 2; i <= n; i++ {
		for c := 0; c < i; c++ {
			for j := 0; j+c <= 400; j++ {
				if req[i] != -1 && j+c != req[i] {
					continue
				}
				dp[i][j+c] += dp[i-1][j]
				dp[i][j+c] %= mod
			}
		}
	}

	return dp[n][req[n]]
}
```

```csharp []
public class Solution {
    public int NumberOfPermutations(int n, int[][] requirements) {
        int[,] dp = new int[n + 1, 401];
        int[] req = new int[n + 1];
        Array.Fill(req, -1);

        foreach (var requirement in requirements) {
            int a = requirement[0];
            int b = requirement[1];
            req[a + 1] = b;
        }

        if (req[1] <= 0) {
            dp[1, 0] = 1;
        }

        for (int i = 2; i <= n; i++) {
            for (int c = 0; c < i; c++) {
                for (int j = 0; j + c <= 400; j++) {
                    if (req[i] != -1 && j + c != req[i]) continue;
                    dp[i, j + c] += dp[i - 1, j];
                    dp[i, j + c] %= 1000000007;
                }
            }
        }

        return dp[n, req[n]];
    }
}
```