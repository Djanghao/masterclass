# [C++] O(nlgn) Time, Constant Space DP Solution Explained

**Author:** Ajna
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/1119317/](https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/1119317/)

---

I started to tackle this problem in a kind of crude DP fashion (you know, preparing all the cells up to the sum of all the provided coins), when it occurred to me that there was a simpler way, less memory demanding way and that is the one I am going to explore and explaing now :)

To proceed, we will first of all initialise `res`, our usual accumulator variable, to be `1`, since we can always do at least a combination (`0`, no matter what coins are we given).

The magic starts now: we will sort `coins` so that they are in increasing order, then we will loop through them and for each `coin` we will check if its value is `<` res, which means we could actually get to use it to gain `res + coin` more combinations, since our loop invariant is that we could reach `res` without any gaps. As soon as we find a coin bigger than `res`, it implies that we would have gap, so we quit.

At the end of the loop, we can just return `res` and be done with it.

Let's try with a couple of simple examples, starting with (already sorted) `coins == {1, 1, 4}`.

We will have initially:

```cpp
res = 1; // we can reach a value of 0 with the coins
coin = 1
```

Since `coin <= res`, we know that we can reach `res` as a value, so we increase `res` by `1` and we move on:

```cpp
res = 2; // we can reach a value of 1 with the coins, so we have 2 combinations available
coin = 1
```

Again, we want to know if we can reach `2` with our coins so far and it turns out we can, since `coins < res`:

```cpp
res = 3; // we can reach a value of 2 with the coins, so we have 3 possible combinations
coin = 4
```

And here we stop, since `coin > res` (`4 > 3`), which means we cannot reach `4` with any of the smaller coins (and of course if we had bigger coins, they would not help either).

If we had `coins = {1, 1, 1, 4}`, you can easily verify how the last step would lead us to have

```cpp
res = 4; // we can reach a value of 3 with the coins, so we have 4 valid combinations
coin = 4
```

And then we might be able to return `res == 4 + 4 == 8` different combinations; if we had `5` or higher as a last coin, it is easy to visualise how we might have not gone back to a `5` or more cells ago in an ideal DP computation of all the possible combinations with it, not without gaps.

The code:

```cpp
class Solution {
public:
    int getMaximumConsecutive(vector<int>& coins) {
        // support variables
        int res = 1;
        // preparing coins
        sort(begin(coins), end(coins));
        for (int coin: coins) {
            // checking if we could have reached coin without gaps
            if (res >= coin) res += coin;
            else break;
        }
        return res;
    }
};
```