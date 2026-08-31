# 【Video】Keep minimum number of coins to make up each amount

**Author:** niits
**Votes:** 324
**Link:** [https://leetcode.com/problems/coin-change/solutions/5117751/](https://leetcode.com/problems/coin-change/solutions/5117751/)

---

# Intuition
Keep minimum number of coins to make up each amount

# Solution Video

https://youtu.be/IrHPiwWUTKw

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 4,765
Thank you for your support!

---


# Approach

There are several ways to create amount with coins and we need to find minimum number of coins to make up amount. This is my rule of thumbs. When we have many ways to do something and find minimum(or maximum) number of something, there is possibility that the question is solved by Dynamic Programming.

I'll explain how to solve this question by Dynamic Programming.
```
Input: coins = [1,2,5], amount = 11
```
First of all, I create array for Dynamic Programing.
```
 0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10,11(= index)
[0,12,12,12,12,12,12,12,12,12,12,12]
```
We use each index number as amount. index `1` means amount `1`. index `5` means amount `5`.

**We will keep minimum number of coins to make up each amount.**

We initialize each value with `12` which is `amount + 1`. You can put any number greater than `amount` or negative number such as `-1`(impossible number). In the end, if we still have `12`, **that means we didn't find combination to make up the target amount, so return `-1`.**

At index `0`, I put `0` as a value, because to make up amount `0`, we don't need any coins, so we can start from index `1`(= amount `1`)

Let's see one by one.

At index `1`, we try to create amount `1` with the coins and check all possible combinations and find minimum number of coins.

If we use `coin 1` to make up amount `1`, what amount should we have before we use **one coin 1**? It's `zero`.

---

\u2B50\uFE0F Points

Formula is 
```
amount = current amount - current value of coin
```
---
In this case,

```
1 - 1 = 0

- first 1 is current amount
- second 1 is current value of coin
- 0 is amount we need if we use one coin 1
to make up amount 1 this time
```
So, we should check index `0`, but no coin because we don't need to use any coins to make up amount `0`.

That's why total of coins to make up `amount 1` this time is

```
number of coin added this time + number of coins to make up amount 0
= amount 1

1 + 0 = 1

```
We need `one coin 1` to make up `amount 1`. In the end,

```
12 vs 1
```
which is minimum number of coins? it's `1`, so update `index 1`.

```
 0,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10,11(= index)
[0,1,12,12,12,12,12,12,12,12,12,12]
```
We have to check cases where we use `coin 2` and `coin 5` this time but obviously we cannot create `amount 1` with `coin 2` and `coin 5`, so skip them. That means we need to check this condition below before we update the array.
```
current amount - current value of coin >= 0
```

Let's think about `amount 2`. Every time we check all possible cases.

If we use `coin 1` this time, we need

```
current amount - current value of coin >= 0
= 2 - 1 >= 0 
```
So, it's time to update the array.

We use `one coin 1` this time and we should have `amount 1` if we create `amount 2` with `one coin 1`.
```
2(current amount) - 1(value of coin) = 1 amount
```
We need `amount 1` **that means we need mininum number of coins to make up amount 1.** Check `index 1` and we have one coin as minimum number of coins to make up `amount 1`, then add `one coin 1` this time to make up `amount 2`. Total should be

```
1 + 1 = 2 coins
```
Update `index 2`
```
 0,1,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10,11(= index)
[0,1,2,12,12,12,12,12,12,12,12,12]
```
The next coin is `coin 2`. If we use **one coin 2** this time, we need

```
2(current amount) - 2(current value of coin) = 0(amount)
```
Check `0 amount`. No coin to make up `amount 0` **that means we need only one coin 2 to make up amount 2.**
```
0 + 1 = 1
```
Check `index 2` and take minimum number of coins to make up `amount 2`.

```
2 vs 1 = 1
```
```
 0,1,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10,11(= index)
[0,1,1,12,12,12,12,12,12,12,12,12]
```
The next coin is `coin 5`, skip it because we cannot create `amount 2` with `coin 5`. We don't meet this condition.

```
current amount - current value of coin >= 0
= 2 - 5 = -3
```
I hope you can understand how it works. I will stop my explanation because too long.

In the end, target amount is `11` which is the last index. If the value of the last index is `12`, that means we didn't find combination to make up `amount 11`. If we have different number from `12`, that is minimum number of coins to make up `amount 11`.

Easy!\uD83D\uDE04
Let's see solution codes and step by step algorithm!

---

https://youtu.be/bU_dXCOWHls

---

# Complexity
- Time complexity: $$O(a * c)$$
`a` is number of amount and `c` is number of coins

- Space complexity: $$O(a)$$

```python []
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        min_coins = [amount + 1] * (amount + 1)
        min_coins[0] = 0

        for i in range(1, amount + 1):
            for c in coins:
                if i - c >= 0:
                    min_coins[i] = min(min_coins[i], 1 + min_coins[i - c])
        
        return min_coins[-1] if min_coins[-1] != amount + 1 else -1
```
```javascript []
var coinChange = function(coins, amount) {
    let minCoins = new Array(amount + 1).fill(amount + 1);
    minCoins[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                minCoins[i] = Math.min(minCoins[i], 1 + minCoins[i - coins[j]]);
            }
        }
    }

    return minCoins[amount] !== amount + 1 ? minCoins[amount] : -1;    
};
```
```java []
class Solution {
    public int coinChange(int[] coins, int amount) {
        int[] minCoins = new int[amount + 1];
        Arrays.fill(minCoins, amount + 1);
        minCoins[0] = 0;

        for (int i = 1; i <= amount; i++) {
            for (int j = 0; j < coins.length; j++) {
                if (i - coins[j] >= 0) {
                    minCoins[i] = Math.min(minCoins[i], 1 + minCoins[i - coins[j]]);
                }
            }
        }

        return minCoins[amount] != amount + 1 ? minCoins[amount] : -1;        
    }
}
```
```C++ []
class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        vector<int> minCoins(amount + 1, amount + 1);
        minCoins[0] = 0;

        for (int i = 1; i <= amount; i++) {
            for (int j = 0; j < coins.size(); j++) {
                if (i - coins[j] >= 0) {
                    minCoins[i] = min(minCoins[i], 1 + minCoins[i - coins[j]]);
                }
            }
        }

        return minCoins[amount] != amount + 1 ? minCoins[amount] : -1;        
    }
};
```

## Step by Step Algorithm

1. **Initialize `min_coins` array**:
   - Create an array `min_coins` of length `amount + 1`, initialized with each element set to `amount + 1`.
   - Set `min_coins[0]` to `0`, as it takes zero coins to make up an amount of zero.

```python
min_coins = [amount + 1] * (amount + 1)
min_coins[0] = 0
```

2. **Iterate over each amount**:
   - Start a loop from 1 to `amount` (inclusive) to represent each amount from 1 to `amount`.
   - For each amount `i`, iterate over each coin denomination `c` in the `coins` list.

```python
for i in range(1, amount + 1):
    for c in coins:
```

3. **Calculate the minimum number of coins**:
   - Check if the current amount `i` minus the coin denomination `c` is greater than or equal to 0.
   - If it is, update `min_coins[i]` to the minimum of its current value and `1 + min_coins[i - c]`.
     - `1 + min_coins[i - c]` represents taking one coin of denomination `c` and the minimum number of coins required to make up the remaining amount `i - c`.

```python
if i - c >= 0:
    min_coins[i] = min(min_coins[i], 1 + min_coins[i - c])
```

4. **Return the result**:
   - After updating `min_coins` for all amounts from 1 to `amount`, return `min_coins[-1]` if it's not equal to `amount + 1`.
   - If `min_coins[-1]` is still `amount + 1`, it means the amount cannot be made up by any combination of coins, so return `-1`.

```python
return min_coins[-1] if min_coins[-1] != amount + 1 else -1
```

This algorithm uses dynamic programming to compute the minimum number of coins required to make up each amount from 1 to `amount`, ultimately providing the minimum number of coins required to make up the total amount.

---

Thank you for reading my post.

## \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

## \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

## \u2B50\uFE0F My previous video
https://youtu.be/CijisxopxqM

