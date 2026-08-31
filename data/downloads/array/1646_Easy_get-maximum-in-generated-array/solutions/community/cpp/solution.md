# [C++] DP Solution Explained

**Author:** Ajna
**Votes:** 20
**Link:** [https://leetcode.com/problems/get-maximum-in-generated-array/solutions/1020155/](https://leetcode.com/problems/get-maximum-in-generated-array/solutions/1020155/)

---

Kinda of a dull, boring problem, but I get practice is made of that too.

First we want to get 2 edge cases out the way, with the first in particular being otherwise annoying: when we are given `n < 2`, we can just return `n`.

In all the other cases, we will create 2 variables:
* `arr` is an array of `n + 1` (since we count `0`-indexed, but still up to `n`) array we will go populate with the values in the series;
* `m` will store the currently run maximum.

We will set the first 2 values of `arr` as instructed (`1` in particular would fail every time we would be given `0`, so that is why we wanted to get rid of it).

We will then loop, proceed to create each element from `2` to `n` as instructed and update `m` accordingly.

Once done, we can just return `m` :)

The code:

```cpp
class Solution {
public:
    int getMaximumGenerated(int n) {
        // base cases
        if (n < 2) return n;
        // support variables
        int arr[n + 1], m;
        arr[0] = 0, arr[1] = 1;
        // building arr
        for (int i = 2; i <= n; i++) {
            if (i % 2) arr[i] = arr[i / 2] + arr[i / 2 + 1];
            else arr[i] = arr[i / 2];
            // updating m
            m = max(arr[i], m);
        }
        return m;
    }
};
```