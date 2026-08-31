# ✅ Detailed explanation of Palindrome Partitioning II problem with many programming languages

**Author:** trinhminhtriet
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-ii/solutions/6097249/](https://leetcode.com/problems/palindrome-partitioning-ii/solutions/6097249/)

---

### Solution 1
    
# Code    


#### Python3

```python
class Solution:
    def minCut(self, s: str) -> int:
        n = len(s)
        g = [[True] * n for _ in range(n)]
        for i in range(n - 1, -1, -1):
            for j in range(i + 1, n):
                g[i][j] = s[i] == s[j] and g[i + 1][j - 1]
        f = list(range(n))
        for i in range(1, n):
            for j in range(i + 1):
                if g[j][i]:
                    f[i] = min(f[i], 1 + f[j - 1] if j else 0)
        return f[-1]
```

#### Java

```java
class Solution {
    public int minCut(String s) {
        int n = s.length();
        boolean[][] g = new boolean[n][n];
        for (var row : g) {
            Arrays.fill(row, true);
        }
        for (int i = n - 1; i >= 0; --i) {
            for (int j = i + 1; j < n; ++j) {
                g[i][j] = s.charAt(i) == s.charAt(j) && g[i + 1][j - 1];
            }
        }
        int[] f = new int[n];
        for (int i = 0; i < n; ++i) {
            f[i] = i;
        }
        for (int i = 1; i < n; ++i) {
            for (int j = 0; j <= i; ++j) {
                if (g[j][i]) {
                    f[i] = Math.min(f[i], j > 0 ? 1 + f[j - 1] : 0);
                }
            }
        }
        return f[n - 1];
    }
}
```

#### C++

```cpp
class Solution {
public:
    int minCut(string s) {
        int n = s.size();
        bool g[n][n];
        memset(g, true, sizeof(g));
        for (int i = n - 1; ~i; --i) {
            for (int j = i + 1; j < n; ++j) {
                g[i][j] = s[i] == s[j] && g[i + 1][j - 1];
            }
        }
        int f[n];
        iota(f, f + n, 0);
        for (int i = 1; i < n; ++i) {
            for (int j = 0; j <= i; ++j) {
                if (g[j][i]) {
                    f[i] = min(f[i], j ? 1 + f[j - 1] : 0);
                }
            }
        }
        return f[n - 1];
    }
};
```

#### Go

```go
func minCut(s string) int {
	n := len(s)
	g := make([][]bool, n)
	f := make([]int, n)
	for i := range g {
		g[i] = make([]bool, n)
		f[i] = i
		for j := range g[i] {
			g[i][j] = true
		}
	}
	for i := n - 1; i >= 0; i-- {
		for j := i + 1; j < n; j++ {
			g[i][j] = s[i] == s[j] && g[i+1][j-1]
		}
	}
	for i := 1; i < n; i++ {
		for j := 0; j <= i; j++ {
			if g[j][i] {
				if j == 0 {
					f[i] = 0
				} else {
					f[i] = min(f[i], f[j-1]+1)
				}
			}
		}
	}
	return f[n-1]
}
```

#### TypeScript

```ts
function minCut(s: string): number {
    const n = s.length;
    const g: boolean[][] = Array(n)
        .fill(0)
        .map(() => Array(n).fill(true));
    for (let i = n - 1; ~i; --i) {
        for (let j = i + 1; j < n; ++j) {
            g[i][j] = s[i] === s[j] && g[i + 1][j - 1];
        }
    }
    const f: number[] = Array(n)
        .fill(0)
        .map((_, i) => i);
    for (let i = 1; i < n; ++i) {
        for (let j = 0; j <= i; ++j) {
            if (g[j][i]) {
                f[i] = Math.min(f[i], j ? 1 + f[j - 1] : 0);
            }
        }
    }
    return f[n - 1];
}
```

#### C#

```cs
public class Solution {
    public int MinCut(string s) {
        int n = s.Length;
        bool[,] g = new bool[n,n];
        int[] f = new int[n];
        for (int i = 0; i < n; ++i) {
            f[i] = i;
            for (int j = 0; j < n; ++j) {
                g[i,j] = true;
            }
        }
        for (int i = n - 1; i >= 0; --i) {
            for (int j = i + 1; j < n; ++j) {
                g[i,j] = s[i] == s[j] && g[i + 1,j - 1];
            }
        }
        for (int i = 1; i < n; ++i) {
            for (int j = 0; j <= i; ++j) {
                if (g[j,i]) {
                    f[i] = Math.Min(f[i], j > 0 ? 1 + f[j - 1] : 0);
                }
            }
        }
        return f[n - 1];
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