# ✅☑[C++/C/Java/Python/JavaScript] || Beats 100% || DP || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 7
**Link:** [https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4144688/](https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4144688/)

---

# *PLEASE UPVOTE IF IT HELPED*

---


# Approach
***(Also explained in the code)***
1. The goal is to make two binary strings `s1` and `s2` equal by performing operations, where each operation costs `x`.

1. Count the difference in the number of '1's between `s1` and `s2`. If the difference is odd, it's impossible to make them equal, so return -1.

1. Create a vector `a` to store the indices where `s1` and `s2` are different.

1. Initialize a dynamic programming array `dp` with a large initial value. `dp[i]` represents the minimum cost to make `s1` and `s2` equal up to index `a[i-1]`.

1. Update `dp[i]` based on the minimum cost of making `s1` and `s2` equal at index `a[i-1]`. Consider two cases: either perform an operation at the current index or skip it.

1. The final result is half of `dp[n]` because the cost is calculated for both `s1` and `s2`.
---


# Complexity
- **Time complexity:**
$$O(n)$$

- **Space complexity:**
$$O(n)$$

---



# Code
```C++ []
class Solution {
public:
    int minOperations(string s1, string s2, int x) {
        int cnt = 0;
        // Count the difference in the number of '1's between s1 and s2.
        for (auto x : s1) if (x == '1') cnt++;
        for (auto x : s2) if (x == '1') cnt--;
        
        // If the difference is not even, it's impossible to make them equal.
        if (cnt % 2 != 0) return -1;
        
        // Initialize a vector 'a' to store indices where s1 and s2 are different.
        vector<int> a;
        for (int i = 0; i < s1.length(); i++) if (s1[i] != s2[i]) a.push_back(i);
        
        int n = a.size();
        // Initialize a dynamic programming array 'dp' with a large initial value.
        vector<int> dp(n + 1, 10000000);
        dp[0] = 0;
        
        for (int i = 1; i <= n; i++){
            // Update dp[i] based on the minimum cost of making s1 and s2 equal at index a[i-1].
            dp[i] = dp[i - 1] + x;
            if (i >= 2) dp[i] = min(dp[i], dp[i - 2] + 2 * (a[i - 1] - a[i - 2]));
        }
        
        // The final result is half of dp[n] because the cost is calculated for both s1 and s2.
        return dp[n] / 2;
    }
};

```
```C []
#include <stdio.h>

int minOperations(char *s1, char *s2, int x) {
    int cnt = 0;
    for (int i = 0; s1[i] != '\\0'; i++) {
        if (s1[i] == '1') cnt++;
    }
    for (int i = 0; s2[i] != '\\0'; i++) {
        if (s2[i] == '1') cnt--;
    }

    if (cnt % 2 != 0) return -1;

    int a[1000]; // Initialize an array 'a' to store indices where s1 and s2 are different.
    int a_index = 0;
    for (int i = 0; s1[i] != '\\0'; i++) {
        if (s1[i] != s2[i]) {
            a[a_index++] = i;
        }
    }

    int n = a_index;
    int dp[1000]; // Initialize a dynamic programming array 'dp' with a large initial value.
    for (int i = 0; i <= n; i++) {
        dp[i] = 10000000;
    }
    dp[0] = 0;

    for (int i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + x;
        if (i >= 2) dp[i] = (dp[i] < (dp[i - 2] + 2 * (a[i - 1] - a[i - 2]))) ? dp[i] : (dp[i - 2] + 2 * (a[i - 1] - a[i - 2]));
    }

    return dp[n] / 2;
}

int main() {
    char s1[] = "110";
    char s2[] = "001";
    int x = 2;
    printf("Minimum operations: %d\
", minOperations(s1, s2, x));
    return 0;
}

```
```Java []
class Solution {
    public int minOperations(String s1, String s2, int x) {
        int cnt = 0;
        for (char c : s1.toCharArray()) {
            if (c == '1') cnt++;
        }
        for (char c : s2.toCharArray()) {
            if (c == '1') cnt--;
        }

        if (cnt % 2 != 0) return -1;

        List<Integer> a = new ArrayList<>();
        for (int i = 0; i < s1.length(); i++) {
            if (s1.charAt(i) != s2.charAt(i)) {
                a.add(i);
            }
        }

        int n = a.size();
        int[] dp = new int[n + 1];
        Arrays.fill(dp, 10000000);
        dp[0] = 0;

        for (int i = 1; i <= n; i++) {
            dp[i] = dp[i - 1] + x;
            if (i >= 2) {
                dp[i] = Math.min(dp[i], dp[i - 2] + 2 * (a.get(i - 1) - a.get(i - 2)));
            }
        }

        return dp[n] / 2;
    }
}

```
```Python []
class Solution:
    def minOperations(self, s1: str, s2: str, x: int) -> int:
        cnt = 0
        for c in s1:
            if c == '1':
                cnt += 1
        for c in s2:
            if c == '1':
                cnt -= 1

        if cnt % 2 != 0:
            return -1

        a = []
        for i in range(len(s1)):
            if s1[i] != s2[i]:
                a.append(i)

        n = len(a)
        dp = [10000000] * (n + 1)
        dp[0] = 0

        for i in range(1, n + 1):
            dp[i] = dp[i - 1] + x
            if i >= 2:
                dp[i] = min(dp[i], dp[i - 2] + 2 * (a[i - 1] - a[i - 2]))

        return dp[n] // 2

```
```JavaScript []
var minOperations = function(s1, s2, x) {
    let cnt = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === '1') cnt++;
    }
    for (let i = 0; i < s2.length; i++) {
        if (s2[i] === '1') cnt--;
    }

    if (cnt % 2 !== 0) return -1;

    let a = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            a.push(i);
        }
    }

    let n = a.length;
    let dp = new Array(n + 1).fill(10000000);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + x;
        if (i >= 2) {
            dp[i] = Math.min(dp[i], dp[i - 2] + 2 * (a[i - 1] - a[i - 2]));
        }
    }

    return Math.floor(dp[n] / 2);
};

```


# *PLEASE UPVOTE IF IT HELPED*

---
---

