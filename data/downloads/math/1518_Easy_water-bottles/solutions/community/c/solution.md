# ✅💯🔥Explanations No One Will Give You🎓🧠2 Detailed Approaches🎯🔥Extremely Simple And Effective🔥

**Author:** heir-of-god
**Votes:** 44
**Link:** [https://leetcode.com/problems/water-bottles/solutions/5432621/](https://leetcode.com/problems/water-bottles/solutions/5432621/)

---

<blockquote>
        <p>
            <b>
                To live is the rarest thing in the world. Most people just exist.
            </b>        
        </p>
        <p>
            --- Oscar Wilde ---
        </p>
</blockquote>

# \uD83D\uDC51Problem Explanation and Understanding:

## \uD83C\uDFAF Problem Description
You are given two integers `numBottles` and `numExchange` representing number of full bottles you have initially and number of empty bottles you need to exchange them on one full bottle. You want to find maximum number of bottles you can drink.

## \uD83D\uDCE5\u2935\uFE0F Input:
- Integer `numBottles`
- Integer `numExchange`

## \uD83D\uDCE4\u2934\uFE0F Output:
The maximum number of full bottles you can drink

---

# 1\uFE0F\u20E3\uD83E\uDDE0 Approach 1: Smart Simulation

# \uD83E\uDD14 Intuition
This is the first approach that came up to me until I learnt about next approach.
- We can simulate the process. On every step we will drink as much bottles as we can and then refill as much as we can.
- Initially we drinked `numBottles` bottles and have `numBottles` empty bottles.
- On each step while we can not exchange any bottles we:
    - Calculate the number of bottles we can exchange and immediately drink 
    - Updating number of empty bottles based on bottles we have after drinking and bottles that just remaining empty before this step.

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- Initialize `res` with the value of `numBottles` to store the total number of bottles that can be drunk.
- Initialize `cur_empty` with the value of `numBottles` to track the current number of empty bottles.
- Start a while loop that continues as long as the number of empty bottles (`cur_empty`) divided by `numExchange` is not zero (we still can exchange some bottles):
  - Calculate `full_drinked` as the integer division of `cur_empty` by `numExchange` to determine how many new full bottles can be obtained from the empty bottles.
  - Calculate `left_empty` as the remainder of empty bottles after exchanging (`cur_empty - full_drinked * numExchange`).
  - Add the number of newly obtained full bottles (`full_drinked`) to `res`.
  - Update `cur_empty` to be the sum of `left_empty` and `full_drinked` to account for new empty bottles after drinking the newly obtained full bottles.
- Return `res` which represents the total number of bottles that can be drunk.


# \uD83D\uDCD9 Complexity Analysis
- \u23F0 Time complexity: O(log n), where `n = numBottles` since we divide the number of full bottles `numBottles` by `numExchange` at each iteration. 
- \uD83E\uDDFA Space complexity: O(1), since no extra space is used

# \uD83D\uDCBB Code
``` python []
class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        res: int = numBottles
        cur_empty: int = numBottles

        while cur_empty // numExchange != 0:
            full_drinked: int = cur_empty // numExchange
            left_empty: int = cur_empty - full_drinked * numExchange
            res += full_drinked
            cur_empty = left_empty + full_drinked

        return res
```
``` C++ []
class Solution {
public:
    int numWaterBottles(int numBottles, int numExchange) {
        int res = numBottles;
        int cur_empty = numBottles;

        while (cur_empty / numExchange != 0) {
            int full_drinked = cur_empty / numExchange;
            int left_empty = cur_empty - full_drinked * numExchange;
            res += full_drinked;
            cur_empty = left_empty + full_drinked;
        }

        return res;
    }
};

```
``` JavaScript []
var numWaterBottles = function(numBottles, numExchange) {
    let res = numBottles;
    let cur_empty = numBottles;

    while (Math.floor(cur_empty / numExchange) !== 0) {
        let full_drinked = Math.floor(cur_empty / numExchange);
        let left_empty = cur_empty - full_drinked * numExchange;
        res += full_drinked;
        cur_empty = left_empty + full_drinked;
    }

    return res;
};
```
``` Java []
class Solution {
    public int numWaterBottles(int numBottles, int numExchange) {
        int res = numBottles;
        int cur_empty = numBottles;

        while (cur_empty / numExchange != 0) {
            int full_drinked = cur_empty / numExchange;
            int left_empty = cur_empty - full_drinked * numExchange;
            res += full_drinked;
            cur_empty = left_empty + full_drinked;
        }

        return res;
    }
}
```
``` C []
int numWaterBottles(int numBottles, int numExchange) {
    int res = numBottles;
    int cur_empty = numBottles;

    while (cur_empty / numExchange != 0) {
        int full_drinked = cur_empty / numExchange;
        int left_empty = cur_empty - full_drinked * numExchange;
        res += full_drinked;
        cur_empty = left_empty + full_drinked;
    }

    return res;
}
```


# 2\uFE0F\u20E3\uD83C\uDFC6 Approach 2: Math Trick

## Credits for this approach to [@rock](/u/rock) (I think he's first who wrote this solution)

# \uD83E\uDD14 Intuition
As it turns out, we can calculate the number of bottles we can drink with just one formula in O(1) time.
- First of all as earlier you can immediately drink `numBottles` and get `numBottles` empty bottles
- Every time you trade in `numExchange` bottles, you get one bottle back. Therefore you decrease your number of bottles by `numExchange - 1` and increase your `res` by 1.
- This suggests a simple division, where you can just divide `numBottles` by `numExchange - 1`. This doesn't work you can't end up with zero bottles. For example if you have 4 bottles and `numExchange` is 5, you can't trade and wind up with 0 bottles; you can't trade at all. 

As rock wrote:
The "price" of buying a refill is handing over `numExchange - 1` empties. However, you must have your own empty bottle to receive the refill.
Therefore after drinking the initial `numBottles`, you "keep aside" `one` empty for receiving the refills (therefore in fact you use for exchange `numBottles - 1`) and trade in the remaining `numBottles - 1` empties to get refills

- So, you subtract one from each of the numbers you're given, and then divide. That says how many full bottles you can get by trading. Add to that the number of bottles you started with, and you have the answer

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- Subtract 1 from numBottles and numExchange to calculate the effective number of full bottles that can be obtained through exchanges.
- Use integer division to determine the number of additional bottles that can be obtained by trading.
- Add the initial number of full bottles to the number of additional bottles obtained by trading.

# \uD83D\uDCDA Complexity Analysis
- \u23F0 Time complexity: O(1), since number of operations doesn't impacted by input
- \uD83E\uDDFA Space complexity: O(1), since no extra space is used

# \uD83D\uDCBB Code
``` python []
class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        return numBottles + (numBottles - 1) // (numExchange - 1)
```
``` C++ []
class Solution {
public:
    int numWaterBottles(int numBottles, int numExchange) {
        return numBottles + (numBottles - 1) / (numExchange - 1);
    }
};
```
``` JavaScript []
var numWaterBottles = function(numBottles, numExchange) {
    return numBottles + Math.floor((numBottles - 1) / (numExchange - 1));
};
```
``` Java []
class Solution {
    public int numWaterBottles(int numBottles, int numExchange) {
        return numBottles + (numBottles - 1) / (numExchange - 1);
    }
}
```
``` C []
int numWaterBottles(int numBottles, int numExchange) {
    return numBottles + (numBottles - 1) / (numExchange - 1);
}
```

## \uD83D\uDCA1\uD83D\uDCA1\uD83D\uDCA1I encourage you to check out [my profile](https://leetcode.com/heir-of-god/) and [Project-S](https://github.com/Heir-of-God/Project-S) project for detailed explanations and code for different problems (not only Leetcode). Happy coding and learning!\uD83D\uDCDA

### Please consider *upvote*\u2B06\uFE0F\u2B06\uFE0F\u2B06\uFE0F because I try really hard not just to put here my code and rewrite testcase to show that it works but explain you WHY it works and HOW. Thank you\u2764\uFE0F

## If you have any doubts or questions feel free to ask them in comments. I will be glad to help you with understanding\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F

![There is image for upvote](./images/0.png)
