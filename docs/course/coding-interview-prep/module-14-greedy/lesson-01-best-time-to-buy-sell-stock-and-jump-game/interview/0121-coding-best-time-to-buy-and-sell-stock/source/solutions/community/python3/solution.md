# 【Video】Keep minimum price solution

**Author:** niits
**Votes:** 622
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/5501275/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/5501275/)

---

# Intuition
Keep minimum price.

---

# Solution Video

https://youtu.be/NG4ZDYD4a2o

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 4,197
Thank you for your support!

---

# Approach

Simply, when we find low price of stock, we should buy it so that we can get maximum profit in a later day.

```
Input: prices = [7,1,5,3,6,4]
```
Initialize
```
buy_price = 7
profit = 0

7 is the first price in input array
```
We start from index `1`.

```
[7,1,5,3,6,4]
   p

buy_price = 7
profit = 0
```
We find `price 1`. Let's think about whether we should update `buy_price` or not.

As I told you, we should buy the stock when we find low price because there is possiblity that we can get maximum profit in a later day.

Caculation of profit is very simple

```
profit = current price - buy price
```
At day 1, we find `price 1`, so we should buy it at day 1. Update `buy_price` with `price 1`
```
buy_price = 1
```
Then calclate profit.
```
profit = max(profit, current price - buy price)
0 = max(0, 1 - 1)
```
Next, I'll speed up.
```
[7,1,5,3,6,4]
     p

buy_price = 1
profit = 0
```
Update `buy_price`? \u2192 No, because previous `buy_price` is lower than current price.

Calculate profit.
```
profit = max(0, 5 - 1)
= 4
```
Next,
```
[7,1,5,3,6,4]
       p

buy_price = 1
profit = 4
```
Update `buy_price`? \u2192 No
Calculate profit.
```
profit = max(4, 3 - 1)
= 4
```
Next,
```
[7,1,5,3,6,4]
         p

buy_price = 1
profit = 4
```
Update `buy_price`? \u2192 No
Calculate profit.
```
profit = max(4, 6 - 1)
= 5
```
Next,
```
[7,1,5,3,6,4]
           p

buy_price = 1
profit = 5
```
Update `buy_price`? \u2192 No
Calculate profit.
```
profit = max(5, 4 - 1)
= 5
```
Finish iteration.

```
return 5
```

Easy!\uD83D\uDE04
Let's see solution codes and step by step algorithm!

---

\u2B50\uFE0F I recently created a video on how I've been using LeetCode to learn.

https://youtu.be/bU_dXCOWHls

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


```python []
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy_price = prices[0]
        profit = 0

        for p in prices[1:]:
            if buy_price > p:
                buy_price = p
            
            profit = max(profit, p - buy_price)
        
        return profit
```
```javascript []
var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (buyPrice > prices[i]) {
            buyPrice = prices[i];
        }

        profit = Math.max(profit, prices[i] - buyPrice);
    }

    return profit;    
};
```
```java []
class Solution {
    public int maxProfit(int[] prices) {
        int buyPrice = prices[0];
        int profit = 0;

        for (int i = 1; i < prices.length; i++) {
            if (buyPrice > prices[i]) {
                buyPrice = prices[i];
            }

            profit = Math.max(profit, prices[i] - buyPrice);
        }

        return profit;        
    }
}
```
```C++ []
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int buyPrice = prices[0];
        int profit = 0;

        for (int i = 1; i < prices.size(); i++) {
            if (buyPrice > prices[i]) {
                buyPrice = prices[i];
            }

            profit = max(profit, prices[i] - buyPrice);
        }

        return profit;        
    }
};
```

## Step by Step Algorithm

1. **Initialize Variables**:
Initialize `buy_price` to the first price in the list and `profit` to 0.

```python
buy_price = prices[0]
profit = 0
```

2. **Iterate Over Prices**
Loop through each price starting from the second price (`prices[1:]`).

```python
for p in prices[1:]:
```

3. **Update Buy Price**
If the current price (`p`) is less than the previously set `buy_price`, update `buy_price` to the current price. This ensures that we buy at the lowest price possible.

```python
if buy_price > p:
    buy_price = p
```

4. **Calculate Profit**
Calculate the profit by subtracting the `buy_price` from the current price (`p`). Update `profit` to the maximum value between the current profit and the calculated profit. This ensures we keep track of the maximum profit throughout the iteration.

```python
profit = max(profit, p - buy_price)
```

5. **Return Maximum Profit**
After the loop, return the final value of `profit`, which represents the maximum profit achievable from buying and selling stocks.

```python
return profit
```

---

Thank you for reading my post.
Please upvote it and don't forget to subscribe to my channel!

# \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

# \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

# \u2B50\uFE0F My previous post and video
#392 Is Subsequence

post
https://leetcode.com/problems/is-subsequence/solutions/4934555/video-two-pointer-solution/

video
https://youtu.be/2FYJxatZnxE
