# [Python] One line Math Solution O(1) beating 100%

**Author:** augustus3
**Votes:** 153
**Link:** [https://leetcode.com/problems/water-bottles/solutions/5431028/](https://leetcode.com/problems/water-bottles/solutions/5431028/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Please just forget about solving this leetcode problem, think about the following situation: if you have `(numExchange-1)` empty water bottles, you can borrow one full water bottle from your friend, and drink it. Then exchange `numExchange` empty bottles to one full bottle, and return back the full bottle to your friend. Therefore, your friend has no loss no change, but for every `(numExchange-1)` empty water bottles you have, you can gain one free drink!

Now come back to solve this leetcode problem, you have `numBottles`, you take out one full bottle aside and let your friend keep it, so you have `(numBottles-1)` remaining. For each step, you borrow that bottle from your friend, drink that bottle, and you take `(numExchange-1)` from your empty bottles, and exchange these `numExchange` empty bottles to one full bottle and give it back to your friend. So you are able to do the above step `(numBottles-1)/(numExchange-1)` times, aka `(numBottles-1)/(numExchange-1)` free drinks!

How to prove this solution is correct? In fact, my solution is exactly the same as Editorial Approach 1: **Simulation**, it is a greedy strategy to use `numExchange` empty bottles to exchange for one full bottle in each step. You just need to keep repeating the above step until you don't have enough bottles. The operation of my solution is exactly the same as the operation in Editorial Approach 1, it is just a different way to think about it. 

# Approach
<!-- Describe your approach to solving the problem. -->
As explained in the Inituition, you take away one bottle and let your friend keep it, then you have `(numBottles-1)` bottles. You can caluclate the extra bottles by dividing your number of bottles by `(numExchange-1)`, so the extra free drinks number is: `(numBottles-1)/(numExchange-1)`. 

Thus, the answer is the original bottles plus the free drinks you gain, one line solution:
``` python
return numBottles + (numBottles-1)//(numExchange-1)
```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
``` python []
class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        return numBottles + (numBottles-1)//(numExchange-1)
```

If you like the solution, please upvote, thank you!

![image.png](./images/0.png)

