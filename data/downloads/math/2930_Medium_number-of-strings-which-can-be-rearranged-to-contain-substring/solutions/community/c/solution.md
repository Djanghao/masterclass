# ✅☑[C++/Java/Python/JavaScript] || Beats 100% || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-strings-which-can-be-rearranged-to-contain-substring/solutions/4276760/](https://leetcode.com/problems/number-of-strings-which-can-be-rearranged-to-contain-substring/solutions/4276760/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**
1. **Dynamic Programming Array (ans):**

    - `ans[i][j][k][l]` represents the number of strings of length `i` with `j` occurrences of `l`, `k` occurrences of `e`, and `l` occurrences of `t`.
1. **Base Case:**

    - Initialize the base case where there is one string of length 0 with no `l`, `e`, and `t`.
1. **Dynamic Programming Transition Rules:**

    - Use dynamic programming to fill the ans array based on the transition rules.
    - Transition rules consider the current state (`j`, `k`, `l`) and update the count for the next length.
1. **Result:**

- The result is the count of strings of length `n` with one `l`, two `e`, and one 't' (`ans[n][1][2][1]`).



# Complexity
- *Time complexity:*
   $$O(n)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []
using ll = long long;
const ll mod = 1e9 + 7;
ll ans[100001][2][3][2];

// Function to add two numbers and take the result modulo 'mod'
void cadd(ll& x, ll y) {
    x = (x + y) % mod;
}

class Solution {
public:
    // Function to count the number of strings of length n
    int stringCount(int n) {
        // Initialize the 4D array 'ans' with zeros
        for (int i = 0; i <= n; i++)
            for (int j = 0; j < 2; j++)
                for (int k = 0; k < 3; k++)
                    for (int l = 0; l < 2; l++)
                        ans[i][j][k][l] = 0;

        // Base case: there is one string of length 0 with no 'l', 'e', 't'
        ans[0][0][0][0] = 1;

        // Dynamic Programming to fill the 'ans' array
        for (int i = 0; i < n; i++)
            for (int j = 0; j < 2; j++)
                for (int k = 0; k < 3; k++)
                    for (int l = 0; l < 2; l++) {
                        // Transition rules based on the current state
                        cadd(ans[i + 1][j][k][l], ans[i][j][k][l] * 23);
                        cadd(ans[i + 1][min(1, j + 1)][k][l], ans[i][j][k][l]);
                        cadd(ans[i + 1][j][k][min(1, l + 1)], ans[i][j][k][l]);
                        cadd(ans[i + 1][j][min(2, k + 1)][l], ans[i][j][k][l]);
                    }

        // The result is the count of strings of length n with one 'l', two 'e', and one 't'
        return (int)(ans[n][1][2][1]);
    }
};


```

```C []

typedef long long ll;

const ll mod = 1000000007;
ll ans[100001][2][3][2];

// Function to add two numbers and take the result modulo 'mod'
void cadd(ll* x, ll y) {
    *x = (*x + y) % mod;
}

// Function to count the number of strings of length n
int stringCount(int n) {
    // Initialize the 4D array 'ans' with zeros
    for (int i = 0; i <= n; i++)
        for (int j = 0; j < 2; j++)
            for (int k = 0; k < 3; k++)
                for (int l = 0; l < 2; l++)
                    ans[i][j][k][l] = 0;

    // Base case: there is one string of length 0 with no 'l', 'e', 't'
    ans[0][0][0][0] = 1;

    // Dynamic Programming to fill the 'ans' array
    for (int i = 0; i < n; i++)
        for (int j = 0; j < 2; j++)
            for (int k = 0; k < 3; k++)
                for (int l = 0; l < 2; l++) {
                    // Transition rules based on the current state
                    cadd(&ans[i + 1][j][k][l], ans[i][j][k][l] * 23);
                    cadd(&ans[i + 1][j < 1 ? j + 1 : 1][k][l], ans[i][j][k][l]);
                    cadd(&ans[i + 1][j][k][l < 1 ? l + 1 : 1], ans[i][j][k][l]);
                    cadd(&ans[i + 1][j][k < 2 ? k + 1 : 2][l], ans[i][j][k][l]);
                }

    // The result is the count of strings of length n with one 'l', two 'e', and one 't'
    return (int)(ans[n][1][2][1]);
}


```
```Java []
public class Solution {
    // Function to count the number of strings of length n
    public int stringCount(int n) {
        long[][][][] ans = new long[100001][2][3][2];
        final long mod = 1000000007;

        // Function to add two numbers and take the result modulo 'mod'
        java.util.function.BiFunction<Long, Long, Long> cadd = (x, y) -> (x + y) % mod;

        // Initialize the 4D array 'ans' with zeros
        for (int i = 0; i <= n; i++)
            for (int j = 0; j < 2; j++)
                for (int k = 0; k < 3; k++)
                    for (int l = 0; l < 2; l++)
                        ans[i][j][k][l] = 0;

        // Base case: there is one string of length 0 with no 'l', 'e', 't'
        ans[0][0][0][0] = 1;

        // Dynamic Programming to fill the 'ans' array
        for (int i = 0; i < n; i++)
            for (int j = 0; j < 2; j++)
                for (int k = 0; k < 3; k++)
                    for (int l = 0; l < 2; l++) {
                        // Transition rules based on the current state
                        ans[i + 1][j][k][l] = cadd.apply(ans[i + 1][j][k][l], ans[i][j][k][l] * 23);
                        ans[i + 1][Math.min(1, j + 1)][k][l] = cadd.apply(ans[i + 1][Math.min(1, j + 1)][k][l], ans[i][j][k][l]);
                        ans[i + 1][j][k][Math.min(1, l + 1)] = cadd.apply(ans[i + 1][j][k][Math.min(1, l + 1)], ans[i][j][k][l]);
                        ans[i + 1][j][Math.min(2, k + 1)][l] = cadd.apply(ans[i + 1][j][Math.min(2, k + 1)][l], ans[i][j][k][l]);
                    }

        // The result is the count of strings of length n with one 'l', two 'e', and one 't'
        return (int)(ans[n][1][2][1]);
    }
}


```

```python3 []
class Solution:
    # Function to count the number of strings of length n
    def stringCount(self, n):
        ans = [[[ [0 for _ in range(2)] for _ in range(3)] for _ in range(2)] for _ in range(100001)]
        mod = 10**9 + 7

        # Function to add two numbers and take the result modulo 'mod'
        def cadd(x, y):
            return (x + y) % mod

        # Initialize the 4D array 'ans' with zeros
        for i in range(n + 1):
            for j in range(2):
                for k in range(3):
                    for l in range(2):
                        ans[i][j][k][l] = 0

        # Base case: there is one string of length 0 with no 'l', 'e', 't'
        ans[0][0][0][0] = 1

        # Dynamic Programming to fill the 'ans' array
        for i in range(n):
            for j in range(2):
                for k in range(3):
                    for l in range(2):
                        # Transition rules based on the current state
                        ans[i + 1][j][k][l] = cadd(ans[i + 1][j][k][l], ans[i][j][k][l] * 23)
                        ans[i + 1][min(1, j + 1)][k][l] = cadd(ans[i + 1][min(1, j + 1)][k][l], ans[i][j][k][l])
                        ans[i + 1][j][k][min(1, l + 1)] = cadd(ans[i + 1][j][k][min(1, l + 1)], ans[i][j][k][l])
                        ans[i + 1][j][min(2, k + 1)][l] = cadd(ans[i + 1][j][min(2, k + 1)][l], ans[i][j][k][l])

        # The result is the count of strings of length n with one 'l', two 'e', and one 't'
        return int(ans[n][1][2



```
```javascript []
class Solution {
    // Function to add two numbers and take the result modulo 'mod'
    cadd(x, y) {
        return (x + y) % (1e9 + 7);
    }

    // Function to count the number of strings of length n
    stringCount(n) {
        // Initialize the 4D array 'ans' with zeros
        const ans = new Array(n + 1)
            .fill(null)
            .map(() =>
                new Array(2)
                    .fill(null)
                    .map(() =>
                        new Array(3)
                            .fill(null)
                            .map(() => new Array(2).fill(0))
                    )
            );

        // Base case: there is one string of length 0 with no 'l', 'e', 't'
        ans[0][0][0][0] = 1;

        // Dynamic Programming to fill the 'ans' array
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < 2; j++) {
                for (let k = 0; k < 3; k++) {
                    for (let l = 0; l < 2; l++) {
                        // Transition rules based on the current state
                        ans[i + 1][j][k][l] = this.cadd(
                            ans[i + 1][j][k][l],
                            ans[i][j][k][l] * 23
                        );
                        ans[i + 1][Math.min(1, j + 1)][k][l] = this.cadd(
                            ans[i + 1][Math.min(1, j + 1)][k][l],
                            ans[i][j][k][l]
                        );
                        ans[i + 1][j][k][Math.min(1, l + 1)] = this.cadd(
                            ans[i + 1][j][k][Math.min(1, l + 1)],
                            ans[i][j][k][l]
                        );
                        ans[i + 1][j][Math.min(2, k + 1)][l] = this.cadd(
                            ans[i + 1][j][Math.min(2, k + 1)][l],
                            ans[i][j][k][l]
                        );
                    }
                }
            }
        }

        // The result is the count of strings of length n with one 'l', two 'e', and one 't'
        return ans[n][1][2][1];
    }
}

```


---



# PLEASE UPVOTE IF IT HELPED

---
---


---