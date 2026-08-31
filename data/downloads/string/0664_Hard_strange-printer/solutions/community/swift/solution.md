# 🧩 Mastering the Strange Printer: Unraveling Dynamic Programming Mysteries

**Author:** phistellar
**Votes:** 17
**Link:** [https://leetcode.com/problems/strange-printer/solutions/3835942/](https://leetcode.com/problems/strange-printer/solutions/3835942/)

---

# Intuition
Firstly, a big thank you to vanAmsen for the insightful video explanation on this problem (you can check it out here: [vanAmsen - 664. Strange Printer](https://youtu.be/f4diE_0zYs4)). This problem is a classic example of dynamic programming (DP). The key insight is to realize that we can break down the problem into smaller subproblems (i.e., substrings of the input string). We then solve these subproblems and use their solutions to construct the solution for the original problem.

# Approach
The approach involves setting up a DP table where each cell `dp[i][j]` represents the minimum number of turns the printer needs to print the substring from `i` to `j`. We initialize the diagonal of the DP table with 1s because the printer only needs one turn to print a single character. Then, we fill in the DP table using a bottom-up approach. For every `i` (from `n-1` to 0) and `j` (from `i+1` to `n`), we initially set `dp[i][j]` to `dp[i][j-1] + 1`. This corresponds to printing the substring from `i` to `j-1` first and then printing the character at `j` separately. However, if there are overlapping characters, we can print the substring in fewer turns. We update `dp[i][j]` to be the minimum of its current value and `dp[i][k] + dp[k+1][j-1]` (or just `dp[i][k]` if `k+1 > j-1`). After filling the DP table, the minimum number of turns needed to print the entire string is found at `dp[0][n-1]`.

# Complexity
- Time complexity: The time complexity is \\(O(n^3)\\), where \\(n\\) is the length of the string. This is because we have three nested loops iterating over the string.
- Space complexity: The space complexity is \\(O(n^2)\\), due to the space required for the DP table.

# Code
Here are implementations of the solution in multiple languages:

``` Rust []
impl Solution {
    pub fn strange_printer(s: String) -> i32 {
        let s = s.into_bytes();
        let n = s.len();
        let mut dp = vec![vec![0; n]; n];

        for i in (0..n).rev() {
            dp[i][i] = 1;
            for j in i+1..n {
                dp[i][j] = dp[i][j-1] + 1;
                for k in i..j {
                    if s[k] == s[j] {
                        dp[i][j] = dp[i][j].min(dp[i][k] + if k+1<=j-1 { dp[k+1][j-1] } else { 0 });
                    }
                }
            }
        }

        dp[0][n-1] as i32
    }
}
```
``` Go []
func strangePrinter(s string) int {
	n := len(s)
	dp := make([][]int, n)
	for i := range dp {
		dp[i] = make([]int, n)
	}

	for i := n - 1; i >= 0; i-- {
		dp[i][i] = 1
		for j := i + 1; j < n; j++ {
			dp[i][j] = dp[i][j-1] + 1
			for k := i; k < j; k++ {
				if s[k] == s[j] {
					tmp := dp[i][k] + dp[k+1][j-1]
					if k+1 > j-1 {
						tmp = dp[i][k]
					}
					if dp[i][j] > tmp {
						dp[i][j] = tmp
					}
				}
			}
		}
	}

	return dp[0][n-1]
}
```
``` Ruby []
# @param {String} s
# @return {Integer}
def strange_printer(s)
    n = s.size
    dp = Array.new(n) {Array.new(n, 0)}

    (n-1).downto(0) do |i|
        dp[i][i] = 1
        (i+1...n).each do |j|
            dp[i][j] = dp[i][j-1] + 1
            (i...j).each do |k|
                if s[k] == s[j]
                    dp[i][j] = [dp[i][j], dp[i][k] + (k+1<=j-1 ? dp[k+1][j-1] : 0)].min
                end
            end
        end
    end

    dp[0][n-1]
end
```
``` TypeScript []
function strangePrinter(s: string): number {
    const n = s.length;
    const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = n - 1; i >= 0; i--) {
        dp[i][i] = 1;
        for (let j = i + 1; j < n; j++) {
            dp[i][j] = dp[i][j - 1] + 1;
            for (let k = i; k < j; k++) {
                if (s[k] === s[j]) {
                    dp[i][j] = Math.min(dp[i][j], dp[i][k] + (k+1<=j-1 ? dp[k+1][j-1] : 0));
                }
            }
        }
    }

    return dp[0][n - 1];
};
```
``` swift []
class Solution {
		func strangePrinter(_ s: String) -> Int {
			let s = Array(s)
			let n = s.count
			var dp = Array(repeating: Array(repeating: 0, count: n), count: n)

			for i in stride(from: n-1, through: 0, by: -1) {
					dp[i][i] = 1
					for j in i+1..<n {
							dp[i][j] = dp[i][j-1] + 1
							for k in i..<j {
									if s[k] == s[j] {
											dp[i][j] = min(dp[i][j], dp[i][k] + (k+1<=j-1 ? dp[k+1][j-1] : 0))
									}
							}
					}
			}

			return dp[0][n-1]
	}
}
```
