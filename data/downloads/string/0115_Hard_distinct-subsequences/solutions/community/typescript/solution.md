# ✅ Detailed explanation of Distinct Subsequences problem with many programming languages

**Author:** trinhminhtriet
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-subsequences/solutions/6090330/](https://leetcode.com/problems/distinct-subsequences/solutions/6090330/)

---

# Solution: Dynamic Programming

We define $f[i][j]$ as the number of schemes where the first $i$ characters of string $s$ form the first $j$ characters of string $t$. Initially, $f[i][0]=1$ for all $i \in [0,m]$.

When $i > 0$, we consider the calculation of $f[i][j]$:

-   When $s[i-1] 
e t[j-1]$, we cannot select $s[i-1]$, so $f[i][j]=f[i-1][j]$;
-   Otherwise, we can select $s[i-1]$, so $f[i][j]=f[i-1][j-1]$.

Therefore, we have the following state transition equation:

$$
f[i][j]=\left\{
\begin{aligned}
&f[i-1][j], &s[i-1] 
e t[j-1] \\
&f[i-1][j-1]+f[i-1][j], &s[i-1]=t[j-1]
\end{aligned}
\right.
$$

The final answer is $f[m][n]$, where $m$ and $n$ are the lengths of strings $s$ and $t$ respectively.

The time complexity is $O(m 	imes n)$, and the space complexity is $O(m 	imes n)$.

We notice that the calculation of $f[i][j]$ is only related to $f[i-1][..]$. Therefore, we can optimize the first dimension, reducing the space complexity to $O(n)$.
    
# Code    


#### Python3

```python
class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        m, n = len(s), len(t)
        f = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(m + 1):
            f[i][0] = 1
        for i, a in enumerate(s, 1):
            for j, b in enumerate(t, 1):
                f[i][j] = f[i - 1][j]
                if a == b:
                    f[i][j] += f[i - 1][j - 1]
        return f[m][n]
```

#### Java

```java
class Solution {
    public int numDistinct(String s, String t) {
        int m = s.length(), n = t.length();
        int[][] f = new int[m + 1][n + 1];
        for (int i = 0; i < m + 1; ++i) {
            f[i][0] = 1;
        }
        for (int i = 1; i < m + 1; ++i) {
            for (int j = 1; j < n + 1; ++j) {
                f[i][j] = f[i - 1][j];
                if (s.charAt(i - 1) == t.charAt(j - 1)) {
                    f[i][j] += f[i - 1][j - 1];
                }
            }
        }
        return f[m][n];
    }
}
```

#### C++

```cpp
class Solution {
public:
    int numDistinct(string s, string t) {
        int m = s.size(), n = t.size();
        unsigned long long f[m + 1][n + 1];
        memset(f, 0, sizeof(f));
        for (int i = 0; i < m + 1; ++i) {
            f[i][0] = 1;
        }
        for (int i = 1; i < m + 1; ++i) {
            for (int j = 1; j < n + 1; ++j) {
                f[i][j] = f[i - 1][j];
                if (s[i - 1] == t[j - 1]) {
                    f[i][j] += f[i - 1][j - 1];
                }
            }
        }
        return f[m][n];
    }
};
```

#### Go

```go
func numDistinct(s string, t string) int {
	m, n := len(s), len(t)
	f := make([][]int, m+1)
	for i := range f {
		f[i] = make([]int, n+1)
	}
	for i := 0; i <= m; i++ {
		f[i][0] = 1
	}
	for i := 1; i <= m; i++ {
		for j := 1; j <= n; j++ {
			f[i][j] = f[i-1][j]
			if s[i-1] == t[j-1] {
				f[i][j] += f[i-1][j-1]
			}
		}
	}
	return f[m][n]
}
```

#### TypeScript

```ts
function numDistinct(s: string, t: string): number {
    const m = s.length;
    const n = t.length;
    const f: number[][] = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let i = 0; i <= m; ++i) {
        f[i][0] = 1;
    }
    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            f[i][j] = f[i - 1][j];
            if (s[i - 1] === t[j - 1]) {
                f[i][j] += f[i - 1][j - 1];
            }
        }
    }
    return f[m][n];
}
```

#### Rust

```rust
impl Solution {
    #[allow(dead_code)]
    pub fn num_distinct(s: String, t: String) -> i32 {
        let n = s.len();
        let m = t.len();
        let mut dp: Vec<Vec<u64>> = vec![vec![0; m + 1]; n + 1];

        // Initialize the dp vector
        for i in 0..=n {
            dp[i][0] = 1;
        }

        // Begin the actual dp process
        for i in 1..=n {
            for j in 1..=m {
                dp[i][j] = if s.as_bytes()[i - 1] == t.as_bytes()[j - 1] {
                    dp[i - 1][j] + dp[i - 1][j - 1]
                } else {
                    dp[i - 1][j]
                };
            }
        }

        dp[n][m] as i32
    }
}
```


    
# Contact information
If you have any questions or suggestions, please feel free to contact me at https://trinhminhtriet.com/
- Website: [trinhminhtriet.com](https://trinhminhtriet.com/)
- Github: [trinhminhtriet](https://github.com/trinhminhtriet)
- LinkedIn: [trinhminhtriet](https://www.linkedin.com/in/triet-trinh/)
- Facebook: [trinhminhtriet](https://www.facebook.com/trinhminhtriet)
- Twitter: [trinhminhtriet](https://twitter.com/trinhminhtriet)
- Email: [contact@trinhminhtriet.com](mailto:contact@trinhminhtriet.com)