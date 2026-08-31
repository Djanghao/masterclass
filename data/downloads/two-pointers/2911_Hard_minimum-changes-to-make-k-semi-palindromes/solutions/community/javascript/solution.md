# ✅☑[C++/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes/solutions/4195236/](https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes/solutions/4195236/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

1. The code defines a class `Solution` with a function `minimumChanges` to find the minimum changes needed to make a given string palindrome by considering substrings of length k.

1. It uses a dynamic programming approach to compute the minimum changes needed for different substrings.

1. The `dp` array is used to store dynamic programming values where `dp[i][j]` represents the minimum changes needed for a substring of length `i` with `j` changes.

1. The `fac` vector is used to store factors of string lengths to optimize the calculation of changes needed for substrings.

1. The `num` function calculates the number of changes needed to make a substring a palindrome.

1. The code initializes the `dp` array and calculates the number of changes needed for substrings of various lengths.

1. It iteratively updates the `dp` values for different values of `k`.

1. Finally, the code returns the minimum changes needed for the entire string.


# Complexity
- *Time complexity:*
   $$O(n^3 * k)$$
    

- *Space complexity:*
   $$O(nk)$$
    


# Code
```C++ []
class Solution {
public:
    int dp[210][110];  // A 2D array to store dynamic programming values.
    vector<int> fac[210];  // A vector of vectors to store factors of string lengths.

    // Function to calculate the number of changes needed to make a string palindrome.
    int num(string st) {
        int n = st.length();
        int ans = 1e9;  // Initialize ans with a large value.

        // Iterate through all factors of the string length.
        for (auto it : fac[st.length()]) {
            int nu = n / it;
            int cur = 0;

            // Compare characters in the string to make it a palindrome.
            for (int i = 0; i < nu / 2; i++) {
                int i2 = nu - i - 1;
                for (int j = 0; j < it; j++)
                    if (st[i * it + j] != st[i2 * it + j])
                        cur++;
            }

            ans = min(ans, cur);  // Update ans with the minimum changes needed.
        }
        return ans;
    }

    // Main function to calculate the minimum changes needed.
    int minimumChanges(string st, int k) {
        int n = st.length();

        // Precompute factors for string lengths.
        for (int i = 2; i <= n; i++)
            for (int j = 1; j < i; j++)
                if (i % j == 0)
                    fac[i].push_back(j);

        // Initialize the dp array with a large value.
        for (int i = 0; i <= n; i++)
            for (int j = 0; j <= k; j++)
                dp[i][j] = 1e9;

        dp[0][0] = 0;  // Base case: no changes needed for an empty string.

        // Dynamic programming to find the minimum changes needed.
        for (int i = 0; i < n; i++)
            for (int j = 0; j <= i; j++) {
                string cur = st.substr(j, i - j + 1);
                int add = num(cur);  // Calculate changes needed for the current substring.

                // Update dp values for different values of k.
                for (int l = 0; l < k; l++)
                    dp[i + 1][l + 1] = min(dp[i + 1][l + 1], dp[j][l] + add);
            }

        return dp[n][k];  // Return the minimum changes needed for the entire string.
    }
};


```

```C []
#include <stdio.h>
#include <string.h>

int dp[210][110];
int fac[210][210];

int num(char *st, int n) {
    int ans = 1000000000;
    for (int i = 0; i < 210; i++) {
        int it = fac[n][i];
        if (it == 0) break;
        int nu = n / it;
        int cur = 0;

        for (int i = 0; i < nu / 2; i++) {
            int i2 = nu - i - 1;
            for (int j = 0; j < it; j++) {
                if (st[i * it + j] != st[i2 * it + j]) {
                    cur++;
                }
            }
        }

        if (cur < ans) {
            ans = cur;
        }
    }
    return ans;
}

int minimumChanges(char *st, int n, int k) {
    for (int i = 2; i <= n; i++) {
        int count = 0;
        for (int j = 1; j < i; j++) {
            if (i % j == 0) {
                fac[i][count] = j;
                count++;
            }
        }
    }

    for (int i = 0; i <= n; i++) {
        for (int j = 0; j <= k; j++) {
            dp[i][j] = 1000000000;
        }
    }

    dp[0][0] = 0;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= i; j++) {
            int len = i - j + 1;
            char cur[210];
            strncpy(cur, st + j, len);
            cur[len] = '\\0';
            int add = num(cur, len);

            for (int l = 0; l < k; l++) {
                if (dp[j][l] + add < dp[i + 1][l + 1]) {
                    dp[i + 1][l + 1] = dp[j][l] + add;
                }
            }
        }
    }

    return dp[n][k];
}

int main() {
    char st[] = "ab";
    int n = 2;
    int k = 1;
    int result = minimumChanges(st, n, k);
    printf("Minimum changes: %d\
", result);
    return 0;
}

```



```Java []
import java.util.ArrayList;
import java.util.List;

public class Solution {
    int[][] dp = new int[210][110];
    List<Integer>[] fac = new List[210];

    public int num(String st) {
        int n = st.length();
        int ans = 1e9;

        for (int it : fac[st.length()]) {
            int nu = n / it;
            int cur = 0;

            for (int i = 0; i < nu / 2; i++) {
                int i2 = nu - i - 1;
                for (int j = 0; j < it; j++) {
                    if (st.charAt(i * it + j) != st.charAt(i2 * it + j)) {
                        cur++;
                    }
                }
            }

            ans = Math.min(ans, cur);
        }
        return ans;
    }

    public int minimumChanges(String st, int k) {
        int n = st.length();

        for (int i = 2; i <= n; i++) {
            fac[i] = new ArrayList<>();
            for (int j = 1; j < i; j++) {
                if (i % j == 0) {
                    fac[i].add(j);
                }
            }
        }

        for (int i = 0; i <= n; i++) {
            for (int j = 0; j <= k; j++) {
                dp[i][j] = 1e9;
            }
        }

        dp[0][0] = 0;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                String cur = st.substring(j, i - j + 1);
                int add = num(cur);

                for (int l = 0; l < k; l++) {
                    dp[i + 1][l + 1] = Math.min(dp[i + 1][l + 1], dp[j][l] + add);
                }
            }
        }

        return dp[n][k];
    }
}


```

```python3 []
class Solution:
    def minimumChanges(self, st: str, k: int) -> int:
        def num(st):
            n = len(st)
            ans = float('inf')
            for it in fac[len(st)]:
                nu = n // it
                cur = 0
                for i in range(nu // 2):
                    i2 = nu - i - 1
                    for j in range(it):
                        if st[i * it + j] != st[i2 * it + j]:
                            cur += 1
                ans = min(ans, cur)
            return ans

        n = len(st)
        for i in range(2, n + 1):
            fac[i] = []
            for j in range(1, i):
                if i % j == 0:
                    fac[i].append(j)

        dp = [[float('inf')] * (k + 1) for _ in range(n + 1)]
        dp[0][0] = 0

        for i in range(n):
            for j in range(i + 1):
                cur = st[j:i + 1]
                add = num(cur)
                for l in range(k):
                    dp[i + 1][l + 1] = min(dp[i + 1][l + 1], dp[j][l] + add)

        return dp[n][k]

# Initialize the fac array.
fac = [[] for _ in range(210)]



```
```javascript []
class Solution {
    num(st) {
        const n = st.length;
        let ans = 1e9;
        for (const it of this.fac[st.length]) {
            const nu = Math.floor(n / it);
            let cur = 0;
            for (let i = 0; i < Math.floor(nu / 2); i++) {
                const i2 = nu - i - 1;
                for (let j = 0; j < it; j++) {
                    if (st[i * it + j] !== st[i2 * it + j]) {
                        cur++;
                    }
                }
            }
            ans = Math.min(ans, cur);
        }
        return ans;
    }

    minimumChanges(st, k) {
        const n = st.length;

        for (let i = 2; i <= n; i++) {
            this.fac[i] = [];
            for (let j = 1; j < i; j++) {
                if (i % j === 0) {
                    this.fac[i].push(j);
                }
            }
        }

        const dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(1e9));
        dp[0][0] = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j <= i; j++) {
                const cur = st.slice(j, i + 1);
                const add = this.num(cur);
                for (let l = 0; l < k; l++) {
                    dp[i + 1][l + 1] = Math.min(dp[i + 1][l + 1], dp[j][l] + add);
                }
            }
        }

        return dp[n][k];
    }
}

// Initialize the fac array.
Solution.prototype.fac = new Array(210).fill().map(() => []);


```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---