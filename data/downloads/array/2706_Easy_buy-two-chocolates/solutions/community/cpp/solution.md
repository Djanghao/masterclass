# 【Video】Give me 5 minutes - How we think about a solution + Bonus codes in Python

**Author:** niits
**Votes:** 56
**Link:** [https://leetcode.com/problems/buy-two-chocolates/solutions/4427319/](https://leetcode.com/problems/buy-two-chocolates/solutions/4427319/)

---

# Intuition
Find the two minimum costs

---

# Solution Video

https://youtu.be/nMRj-C4yzpI

\u25A0 Timeline of the video

`0:03` Explain key points
`2:40` coding
`4:49` Time Complexity and Space Complexity
`5:02` Step by step algorithm of my solution code

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 3,548
My first goal is 10,000 (It's far from done \uD83D\uDE05)
Thank you for your support!

---

# Approach

## How we think about a solution

We know that we need to find the two minimum cost in the input array.

Basically, we iterate through all numbers one by one. If current cost is lower than current minimum cost,

---

\u2B50\uFE0F Points

the current cost will be the minimum cost.
the current minimum cost will be the second minimum cost.

---

If not that case, there is possiblity that current cost may be the second minimum cost, so compare

---

\u2B50\uFE0F Points

```
second_min_cost = min(second_min_cost, current_cost)
```

Let's say 

first_min_cost = 3
second_min_cost = 5
current_cost = 4

In this case, `current_cost` will not be `first_min_cost` but will be `second_min_cost`.

In the end,

first_min_cost = 3
second_min_cost = 4

---

We repeat this process one by one. After that we will get two minimum costs, then simply

```
leftover = money - (first_min_cost + second_min_cost)
```
if `leftover` is greater than or equal to 0
```
return leftover
```
If not,
```
return money
```

Easy!\uD83D\uDE04
Let's see a real algorithm!

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        first_min_cost = second_min_cost = float("inf")

        for p in prices:
            if p < first_min_cost:
                second_min_cost, first_min_cost = first_min_cost, p
            else:
                second_min_cost = min(second_min_cost, p)

        leftover = money - (first_min_cost + second_min_cost)

        return leftover if leftover >= 0 else money
```
```javascript []
var buyChoco = function(prices, money) {
    let firstMinCost = Infinity;
    let secondMinCost = Infinity;

    for (let p of prices) {
        if (p < firstMinCost) {
            secondMinCost = firstMinCost;
            firstMinCost = p;
        } else {
            secondMinCost = Math.min(secondMinCost, p);
        }
    }

    let leftover = money - (firstMinCost + secondMinCost);

    return leftover >= 0 ? leftover : money;    
};
```
```java []
class Solution {
    public int buyChoco(int[] prices, int money) {
        int firstMinCost = Integer.MAX_VALUE;
        int secondMinCost = Integer.MAX_VALUE;

        for (int p : prices) {
            if (p < firstMinCost) {
                secondMinCost = firstMinCost;
                firstMinCost = p;
            } else {
                secondMinCost = Math.min(secondMinCost, p);
            }
        }

        int leftover = money - (firstMinCost + secondMinCost);

        return leftover >= 0 ? leftover : money;        
    }
}
```
```C++ []
class Solution {
public:
    int buyChoco(vector<int>& prices, int money) {
        int firstMinCost = INT_MAX;
        int secondMinCost = INT_MAX;

        for (int p : prices) {
            if (p < firstMinCost) {
                secondMinCost = firstMinCost;
                firstMinCost = p;
            } else {
                secondMinCost = min(secondMinCost, p);
            }
        }

        int leftover = money - (firstMinCost + secondMinCost);

        return leftover >= 0 ? leftover : money;        
    }
};
```

## Step by step algorithm

##### Step 1: Initialization
```python
first_min_cost = second_min_cost = float("inf")
```
Initialize two variables `first_min_cost` and `second_min_cost` to positive infinity. These variables will be used to keep track of the two smallest prices encountered during the iteration.

##### Step 2: Iterate Through Prices
```python
for p in prices:
```
Iterate through the list of prices.

##### Step 3: Update Minimum Costs
```python
if p < first_min_cost:
    second_min_cost, first_min_cost = first_min_cost, p
else:
    second_min_cost = min(second_min_cost, p)
```
Check if the current price (`p`) is smaller than the current smallest (`first_min_cost`). If yes, update both `first_min_cost` and `second_min_cost`. If not, update only `second_min_cost` if the current price is smaller than the current second smallest.

##### Step 4: Calculate Leftover Money
```python
leftover = money - (first_min_cost + second_min_cost)
```
Calculate the amount of money left after buying chocolates with the two smallest prices.

##### Step 5: Return Result
```python
return leftover if leftover >= 0 else money
```
Return the calculated leftover money if it is non-negative; otherwise, return the original amount of money.


---

# Bonus

Here are other ways to retrieve the smallest and second smallest numbers from an array in Python

##### min + remove

```python []
class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        first_min_cost = min(prices)
        prices.remove(first_min_cost)
        second_min_cost = min(prices)
        
        leftover = money - (first_min_cost + second_min_cost)

        return leftover if leftover >= 0 else money
```

##### sorted

```python []
class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:

        prices = sorted(prices)
        first_min_cost = prices[0]
        second_min_cost = prices[1]
        
        leftover = money - (first_min_cost + second_min_cost)

        return leftover if leftover >= 0 else money
```

##### heapq

```python []
class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        heapq.heapify(prices)
        first_min_cost = heapq.heappop(prices)
        second_min_cost = heapq.heappop(prices)        
        
        leftover = money - (first_min_cost + second_min_cost)

        return leftover if leftover >= 0 else money
```

Please leave your comments if you have another idea!

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

### My next daily coding challenge post and video.

post
https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/4432934/video-give-me-5-minutes-how-we-think-about-a-solution-bonus-code-in-python/

video
https://youtu.be/q628cVxEFvU

\u25A0 Timeline of the video

`0:06` Explain key points
`3:16` Coding
`4:38` Time Complexity and Space Complexity
`4:57` Step by step algorithm of my solution code
`5:08` Bonus coding in Python
`6:19` Time Complexity and Space Complexity for Bonus


### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/image-smoother/solutions/4423391/video-give-me-10-minutes-how-we-think-about-a-solution/

video
https://youtu.be/eCHajvYReSg

\u25A0 Timeline of the video

`0:03` Explain how we solve Image Smoother
`1:13` Check Top side
`2:18` Check Bottom side
`4:11` Check left and right side
`3:32` Talk about the first biggest and the second biggest
`6:26` coding
`9:24` Time Complexity and Space Complexity
`9:45` Step by step algorithm of my solution code
