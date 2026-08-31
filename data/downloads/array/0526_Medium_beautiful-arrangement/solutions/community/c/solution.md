# [C++] Backtracking DFS + Bitwise Solutions Compared and Explained, 100% Time, ~95% Space

**Author:** Ajna
**Votes:** 113
**Link:** [https://leetcode.com/problems/beautiful-arrangement/solutions/1000788/](https://leetcode.com/problems/beautiful-arrangement/solutions/1000788/)

---

So, this is a typical combinatorics problem where we can use each element (numbers in the `1 - n` range) only once, with the extra bonus of having an extra criterium to assess valid combinations - either:
* the number is divisible by its position or;
* the position is divisible by the number.

And we need to remember that the position has to be `1` based.

Now, to solve this problem we will declare 2 class variables:
* `seen` as an array of `16` booleans (since we can go in the `1 - 15` range and I want to avoid doing `- 1` all the time) to keep track of the already seen (or used) numbers, initially set with all the values equal to `false`;
* `res` is our accumulator variable to count our valid permutations.

In the main function we will just call the result of `dfs(n)`.

This function will just take `n` and another parameter that is `pos`, defaulted to `1`.

At each iteration, we will first of all check if `pos > n`, which means we are done running and in which case we exit after increasing `res` by `1`.

Otherwise, we will loop with `i` through all the numbers in the `1 - n` range and:
* mark it with `seen[i] = true`;
* call `dfs(n, pos + 1)` to find the next matches;
* backtrack `seen[i]`, resetting it to `false`.

Once done, we return `res`.

The code:

```cpp
class Solution {
public:
    bool seen[16] = {};
    int res = 0;
    int dfs(int n, int pos = 1) {
        if (pos > n) return res++;
        for (int i = 1; i <= n; i++) {
            if (!seen[i] && (i % pos == 0 || pos % i == 0)) {
                // marking i as seen
                seen[i] = true;
                dfs(n, pos + 1);
                // backtracking
                seen[i] = false;
            }
        }
        return res;
    }
    int countArrangement(int n) {
        if (n < 4) return n;
        return dfs(n);
    }
};
```

And if you notice, we don't really need `dfs`, which can be actually merged into the main function:

```cpp
class Solution {
public:
    bool seen[16] = {};
    int res = 0;
    int countArrangement(int n, int pos = 1) {
        if (n < 4) return n;
        if (pos > n) return res++;
        for (int i = 1; i <= n; i++) {
            if (!seen[i] && (i % pos == 0 || pos % i == 0)) {
                // marking i as seen
                seen[i] = true;
                countArrangement(n, pos + 1);
                // backtracking
                seen[i] = false;
            }
        }
        return res;
    }
};
```

Can we do better? Well, turns out that bitwise operators are again the faster option here, so `seen` will turn into a number and we will just mark its bits; I gained 8-12ms with it and used a bit less memory:

```cpp
class Solution {
public:
    int seen = 0;
    int res = 0;
    int countArrangement(int n, int pos = 1) {
        if (n < 4) return n;
        if (pos > n) return res++;
        for (int i = 1, bit; i <= n; i++) {
            bit = 1 << i;
            if (!(seen & bit)  && (i % pos == 0 || pos % i == 0)) {
                // marking i as seen
                seen ^= bit;
                countArrangement(n, pos + 1);
                // backtracking
                seen ^= bit;
            }
        }
        return res;
    }
};
```

Can we still do better?

Yep! If we consider that bigger slots are less likely to find fitting matches, starting from them and going down to `1` instead of the othere way around should avoid branching our DFS for those edge cases.

And it work, with the overall time down to 4ms with this simple change, while memory usage is basically unchanged (I expected less, due to fewer recursive calls):

```cpp
class Solution {
public:
    int seen = 0;
    int res = 0;
    int countArrangement(int n, int pos = -1) {
        if (n < 4) return n;
        if (pos == -1) pos = n;
        if (!pos) return res++;
        for (int i = n, bit; i; i--) {
            bit = 1 << i;
            if (!(seen & bit)  && (i % pos == 0 || pos % i == 0)) {
                // marking i as seen
                seen ^= bit;
                countArrangement(n, pos - 1);
                // backtracking
                seen ^= bit;
            }
        }
        return res;
    }
};
```

But, wait a moment: with such a limited range, it would IMHO make perfect sense to discuss also this alternative in an interview - precomputing the results and returning them as needed:

```cpp
class Solution {
public:
    int results[16] = {0, 1, 2, 3, 8, 10, 36, 41, 132, 250, 700, 750, 4010, 4237, 10680, 24679};
    int countArrangement(int n) {
        return results[n];
    }
};
```

Can we save even more memory? Well, yeah, taking an idea from the first solution:

```cpp
class Solution {
public:
    int results[12] = {8, 10, 36, 41, 132, 250, 700, 750, 4010, 4237, 10680, 24679};
    int countArrangement(int n) {
        if (n < 4) return n;
        return results[n - 4];
    }
};
```