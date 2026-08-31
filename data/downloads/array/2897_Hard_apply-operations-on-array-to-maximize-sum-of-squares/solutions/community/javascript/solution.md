# ✅☑[C++/C/Java/Python/JavaScript] || Easy Solution || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 4
**Link:** [https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/solutions/4144660/](https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/solutions/4144660/)

---

# *PLEASE UPVOTE IF IT HELPED*

---


# Approach
***(Also explained in the code)***
1. The goal of this code is to find the maximum sum of squares of `k` elements from the input vector `a`.

1. It uses a frequency vector `f` to count the number of set bits (bits with value 1) at each position from 0 to 30 for all elements in `a`.

1. The vector `b` is then updated based on the frequency of set bits in `f`, resulting in a new array of values.

1. The code calculates the maximum sum of squares of the first `k` elements in `b`.

---



# Complexity
- **Time complexity:**
$$O(n+k)$$

- **Space complexity:**
$$O(n)$$

---


# Code
```C++ []
class Solution {
public:
    int maxSum(vector<int>& a, int k) {
        // Initialize a frequency vector 'f' to count the number of set bits at each position (0 to 30).
        vector<int> f(31, 0);
        
        // Count the number of set bits for each element in 'a' and update 'f' accordingly.
        for (auto x : a) {
            for (int i = 0; i <= 30; i++) {
                f[i] += (x >> i & 1);
            }
        }
        
        int n = a.size();
        vector<int> b(n); // Initialize a new vector 'b' to store updated values.
        
        // Update the values in 'b' by considering the positions with set bits in 'f'.
        for (auto &x : b) {
            for (int i = 0; i <= 30; i++) {
                if (f[i]) {
                    x += 1 << i;
                    f[i]--;
                }
            }
        }
        
        int ans = 0;
        const int mod = 1e9 + 7;
        
        // Calculate the maximum sum of squares of the first 'k' elements in 'b'.
        for (int i = 0; i < k; i++) {
            ans += 1LL * b[i] * b[i] % mod;
            ans %= mod;
        }
        return ans;
    }
};

```
```C []

#include <stdio.h>

int maxSum(int* a, int n, int k) {
    int f[31] = {0}; // Initialize a frequency array 'f' to count set bits at each position (0 to 30).

    // Count the number of set bits for each element in 'a' and update 'f' accordingly.
    for (int j = 0; j < n; j++) {
        int x = a[j];
        for (int i = 0; i <= 30; i++) {
            f[i] += ((x >> i) & 1);
        }
    }

    int b[n]; // Initialize a new array 'b' to store updated values.
    
    // Update the values in 'b' by considering the positions with set bits in 'f'.
    for (int j = 0; j < n; j++) {
        int x = 0;
        for (int i = 0; i <= 30; i++) {
            if (f[i]) {
                x += (1 << i);
                f[i]--;
            }
        }
        b[j] = x;
    }
    
    int ans = 0;
    const int mod = 1e9 + 7;

    // Calculate the maximum sum of squares of the first 'k' elements in 'b'.
    for (int i = 0; i < k; i++) {
        ans += 1LL * b[i] * b[i] % mod;
        ans %= mod;
    }
    return ans;
}

int main() {
    int a[] = {1, 2, 3};
    int n = sizeof(a) / sizeof(a[0]);
    int k = 2;
    printf("Maximum sum: %d\
", maxSum(a, n, k));
    return 0;
}


```
```Java []

class Solution {
    public int maxSum(int[] a, int k) {
        int[] f = new int[31]; // Initialize a frequency array 'f' to count set bits at each position (0 to 30).

        // Count the number of set bits for each element in 'a' and update 'f' accordingly.
        for (int x : a) {
            for (int i = 0; i <= 30; i++) {
                f[i] += (x >> i & 1);
            }
        }

        int n = a.length;
        int[] b = new int[n]; // Initialize a new array 'b' to store updated values.

        // Update the values in 'b' by considering the positions with set bits in 'f'.
        for (int j = 0; j < n; j++) {
            int x = 0;
            for (int i = 0; i <= 30; i++) {
                if (f[i] > 0) {
                    x += 1 << i;
                    f[i]--;
                }
            }
            b[j] = x;
        }

        int ans = 0;
        final int mod = 1000000007;

        // Calculate the maximum sum of squares of the first 'k' elements in 'b'.
        for (int i = 0; i < k; i++) {
            ans += 1L * b[i] * b[i] % mod;
            ans %= mod;
        }
        return ans;
    }
}


```
```python []

class Solution:
    def maxSum(self, a: List[int], k: int) -> int:
        f = [0] * 31 # Initialize a frequency list 'f' to count set bits at each position (0 to 30).

        # Count the number of set bits for each element in 'a' and update 'f' accordingly.
        for x in a:
            for i in range(31):
                f[i] += (x >> i & 1)

        n = len(a)
        b = [0] * n # Initialize a new list 'b' to store updated values.

        # Update the values in 'b' by considering the positions with set bits in 'f'.
        for j in range(n):
            x = 0
            for i in range(31):
                if f[i] > 0:
                    x += 1 << i
                    f[i] -= 1
            b[j] = x

        ans = 0
        mod = 10**9 + 7

        # Calculate the maximum sum of squares of the first 'k' elements in 'b'.
        for i in range(k):
            ans += 1LL * b[i] * b[i] % mod
            ans %= mod
        return ans


```
```Javascript []

var maxSum = function(a, k) {
    const f = new Array(31).fill(0); // Initialize a frequency array 'f' to count set bits at each position (0 to 30).

    // Count the number of set bits for each element in 'a' and update 'f' accordingly.
    for (const x of a) {
        for (let i = 0; i <= 30; i++) {
            f[i] += (x >> i & 1);
        }
    }

    const n = a.length;
    const b = new Array(n); // Initialize a new array 'b' to store updated values.

    // Update the values in 'b' by considering the positions with set bits in 'f'.
    for (let j = 0; j < n; j++) {
        let x = 0;
        for (let i = 0; i <= 30; i++) {
            if (f[i] > 0) {
                x += 1 << i;
                f[i]--;
            }
        }
        b[j] = x;
    }

    let ans = 0;
    const mod = 1e9 + 7;

    // Calculate the maximum sum of squares of the first 'k'


```
# *PLEASE UPVOTE IF IT HELPED*

---
---

