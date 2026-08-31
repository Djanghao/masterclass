# [Java / C++ / Go / Python / JavaScript] Dynamic programming + enforsing the requirements

**Author:** whoawhoawhoa
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-the-number-of-inversions/solutions/5352804/](https://leetcode.com/problems/count-the-number-of-inversions/solutions/5352804/)

---

# Intuition
We can build a DP solution to check the number of permutations for each end position + number of inversions. How do we enforce all the requirements at the same time then?

# Approach
Traversing the reqs ordered by `endi` and doing a DP function. Once we have done one req - we fill current DP row with zeros to enforce the req. This way we're sure that all the redundant permutations are not counted.
We know from the constraints that there's always one req with `endi == n - 1`. We use it to retrieve the result.

# Complexity
- Time complexity:
$$O(n ^ 2)$$

- Space complexity:
$$O(n ^ 2)$$

# Code
```java []
class Solution {
    static int mod = 1_000_000_007;
    static Integer[][] dp;
    
    public int numberOfPermutations(int n, int[][] requirements) {
        dp = new Integer[n + 1][n * (n - 1) / 2 + 1];
        Arrays.sort(requirements, (a, b) -> a[0] - b[0]);
        for (int[] r : requirements) {
            if (count(r[0], r[1]) == 0) {
                return 0;
            }
            // enforce the current req
            for (int i = 0; i < dp[r[0]].length; i++) {
                if (i != r[1]) {
                    dp[r[0]][i] = 0;
                }
            }
        }
        int[] last = requirements[requirements.length - 1];
        return dp[last[0]][last[1]];
    }
    
    static int count(int pos, int inv) {
        if (inv < 0) {
            return 0;
        }
        if (pos == 0) {
            return inv == 0 ? 1 : 0;
        }
        if (dp[pos][inv] != null) {
            return dp[pos][inv];
        }
        int res = 0;
        for (int i = 0; i <= pos; i++) {
            res = (res + count(pos - 1, inv - i)) % mod;
        }
        return dp[pos][inv] = res;
    }
}
```
```C++ []
const int mod = 1'000'000'007;

class Solution {
public:
    int numberOfPermutations(int n,
                             std::vector<std::vector<int>>& requirements) {
        dp.assign(n + 1, std::vector<int>(n * (n - 1) / 2 + 1, -1));

        std::sort(requirements.begin(), requirements.end(),
                  [](const std::vector<int>& a, const std::vector<int>& b) {
                      return a[0] < b[0];
                  });

        for (const auto& r : requirements) {
            if (count(r[0], r[1]) == 0) {
                return 0;
            }
            for (int i = 0; i < dp[r[0]].size(); ++i) {
                if (i != r[1]) {
                    dp[r[0]][i] = 0;
                }
            }
        }

        const auto& last = requirements.back();
        return dp[last[0]][last[1]];
    }

private:
    std::vector<std::vector<int>> dp;

    int count(int pos, int inv) {
        if (inv < 0) {
            return 0;
        }
        if (pos == 0) {
            return inv == 0 ? 1 : 0;
        }
        if (dp[pos][inv] != -1) {
            return dp[pos][inv];
        }

        int res = 0;
        for (int i = 0; i <= pos; ++i) {
            res = (res + count(pos - 1, inv - i)) % mod;
        }
        return dp[pos][inv] = res;
    }
};
```
``` Go []
import (
	"sort"
)

const mod int = 1_000_000_007

var dp [][]*int

func numberOfPermutations(n int, requirements [][]int) int {
	dp = make([][]*int, n+1)
	for i := range dp {
		dp[i] = make([]*int, n*(n-1)/2+1)
	}

	sort.Slice(requirements, func(i, j int) bool {
		return requirements[i][0] < requirements[j][0]
	})

	for _, r := range requirements {
		if count(r[0], r[1]) == 0 {
			return 0
		}

		// fill remaining line
		for i := range dp[r[0]] {
			if i != r[1] {
				dp[r[0]][i] = new(int)
			}
		}
	}

	last := requirements[len(requirements)-1]
	return *dp[last[0]][last[1]]
}

func count(pos, inv int) int {
	if inv < 0 {
		return 0
	}
	if pos == 0 {
		if inv == 0 {
			return 1
		}
		return 0
	}
	if dp[pos][inv] != nil {
		return *dp[pos][inv]
	}

	res := 0
	for i := 0; i <= pos; i++ {
		res = (res + count(pos-1, inv-i)) % mod
	}
	dp[pos][inv] = &res
	return res
}
```
```Python []
MOD = 1_000_000_007

class Solution:
    def numberOfPermutations(self, n: int, requirements: List[List[int]]) -> int:
        self.dp = [[None] * (n * (n - 1) // 2 + 1) for _ in range(n + 1)]
        
        requirements.sort(key=lambda x: x[0])
        
        for r in requirements:
            if self.count(r[0], r[1]) == 0:
                return 0
            for i in range(len(self.dp[r[0]])):
                if i != r[1]:
                    self.dp[r[0]][i] = 0

        last = requirements[-1]
        return self.dp[last[0]][last[1]]

    def count(self, pos: int, inv: int) -> int:
        if inv < 0:
            return 0
        if pos == 0:
            return 1 if inv == 0 else 0
        if self.dp[pos][inv] is not None:
            return self.dp[pos][inv]
        
        res = 0
        for i in range(pos + 1):
            res = (res + self.count(pos - 1, inv - i)) % MOD
        self.dp[pos][inv] = res
        return res
```
```javascript []
const MOD = 1_000_000_007;

/**
 * @param {number} n
 * @param {number[][]} requirements
 * @return {number}
 */
var numberOfPermutations = function(n, requirements) {
    let dp = Array.from({ length: n + 1 }, () => Array(n * (n - 1) / 2 + 1).fill(null));

    requirements.sort((a, b) => a[0] - b[0]);

    for (let r of requirements) {
        if (count(r[0], r[1]) === 0) {
            return 0;
        }
        for (let i = 0; i < dp[r[0]].length; i++) {
            if (i !== r[1]) {
                dp[r[0]][i] = 0;
            }
        }
    }

    let last = requirements[requirements.length - 1];
    return dp[last[0]][last[1]];

    function count(pos, inv) {
        if (inv < 0) {
            return 0;
        }
        if (pos === 0) {
            return inv === 0 ? 1 : 0;
        }
        if (dp[pos][inv] !== null) {
            return dp[pos][inv];
        }

        let res = 0;
        for (let i = 0; i <= pos; i++) {
            res = (res + count(pos - 1, inv - i)) % MOD;
        }
        dp[pos][inv] = res;
        return res;
    }
};
```