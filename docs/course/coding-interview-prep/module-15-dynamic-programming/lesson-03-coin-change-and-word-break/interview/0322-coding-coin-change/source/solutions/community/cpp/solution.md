# [C++] DP solution explained, ~100% Time, 100% Space

**Author:** Ajna
**Votes:** 660
**Link:** [https://leetcode.com/problems/coin-change/solutions/778548/](https://leetcode.com/problems/coin-change/solutions/778548/)

---

Okay, this is probably the second most famous classic problem introducing the concepts of dynamic programming, second only to Fibonacci numbers generation.

And in order to proceed, we really need to lay down the result step by step.

I opted to do so using an array instead of a vector and the differences in both speed and consumed memory were relevant, but I invite you to experiment with it and see with your own eyes how this works.

That said, the core logic: let's assume we have a series of memory cells storing how many coins are needed as a minimum to get there, safely considering that for the first, matching the amount of `0`, we actually have `0` options, while the initial value of all the others is going to be `INT_MAX`. Since we want to compute up to `amount`, and we have a `0` value for simplicity `amount + 1` cells are how many we need.

It is much easier to go with an example and I am confident most people will find it more understandable as they proceed reading.

So, for our aforementioned example, let's assume having as coins `[1, 2, 5]` and wishing to get up to the amount of `6` with the required mininum numbers of coins, we will have this starting situation for our array:

```cpp
{0, INT_MAX, INT_MAX, INT_MAX, INT_MAX, INT_MAX, INT_MAX}
```

And we move then with our loop to the second cell, with index `i == 1`, our first `INT_MAX` to parse: we loop through the coins and we see we can go back only with the first coin (`c == 1`, since in order to get there, we can make one move, plus what it took to get to `i - c` positions before. This is definitely less than `INT_MAX`, so we update our array, which now is:

```cpp
{0, 1, INT_MAX, INT_MAX, INT_MAX, INT_MAX, INT_MAX}
```

Not too clear? Okay, let's move to index `i == 2` and things should possibly simplify a bit: this time we have two coins that are `<= i`, `1` and `2`: we know that to get to a total of two coins, we can take either what is needed to make one coin (the cell we just computed to have value `1` in the previous iteration) plus one with `c == 1` or what is needed to make zero coins (initially set to `0`) plus one with `c == 2`. Again, we will not use `c == 5` because, for now, we cannot go back 5 positions. Updated situation:

```cpp
{0, 1, 1, INT_MAX, INT_MAX, INT_MAX, INT_MAX}
```

Now, what happens with `i == 3`? Well, whether we go back one cell or two, the value is the same and we add one (ie: we can make `3` either as `1 + 2` or `2 + 1`: it doesn't matter), so we have:

```cpp
{0, 1, 1, 2, INT_MAX, INT_MAX, INT_MAX}
```

Now: `i == 4`: we can go back again only by one cell or two, and we quickly notice that going back by two is more conveient (ie: `2 + 2` uses less coins than `1 + 2 + 1`, the latter being an option if we went back by only one step):

```cpp
{0, 1, 1, 2, 2, INT_MAX, INT_MAX}
```

Finally with `i == 5` we can also use the last and more "powerful" coin, going back up to five slots; if you followed me up to here, you will see probably soon that using this very coin is the most convenient option: to have a value of `5`, we just need one coin (with the same value) plus the coins we needed to have a value of `0` (zero coins, indeed); definitely better than having a coin more than the one necessary to get either a value of `3` or `4` (that would be `3` coins in both cases), so we have now:

```cpp
{0, 1, 1, 2, 2, 1, INT_MAX}
```

Last step, with `i == 6`, we can quickly compute that while going back by two cells would cost us a grand total of `3` coins, either going back by one or five will cost us only two (ie: we can get to `6` either as `5 + 1` or `1 + 5`, respectively), so we have:

```cpp
{0, 1, 1, 2, 2, 1, 2}
```

And we can return the value of the last cell as the correct result.

My code below does the same with an extra bit of logic: when I backtrack and encounter a cell with value still equal to `INT_MAX` it means that the same cell was never reached before, so I skip it.

If in the end my final cell has a value of `INT_MAX`, I replace it with `-1` as required in the specs, otherwise I return its properly computed value.

The code:

```cpp
class Solution {
public:
    int coinChange(vector<int>& coins, int n) {
        // creating the base dp array, with first value set to 0
        int dp[++n];
        dp[0] = 0;
        // more convenient to have the coins sorted
        sort(begin(coins), end(coins));
        // populating our dp array
        for (int i = 1; i < n; i++) {
            // setting dp[0] base value to 1, 0 for all the rest
            dp[i] = INT_MAX;
            for (int c: coins) {
                if (i - c < 0) break;
                // if it was a previously not reached cell, we do not add use it
                if (dp[i - c] != INT_MAX) dp[i] = min(dp[i], 1 + dp[i - c]);
            }
        }
        return dp[--n] == INT_MAX ? -1 : dp[n];
    }
};
```