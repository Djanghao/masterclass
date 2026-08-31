# Easy and fast typescript solution with detailed explanation

**Author:** Nina_Torgunakova
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/2021446/](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/2021446/)

---

We need to get maximum number of coins each time when we pick three different piles. Considering the fact that Alice always takes the **maximum**, we need to take the **second maximum**. If we want to obtain the maximum number of coins for us (that means for Alice too) in *next* round, then it means to give the Bob the **minimum** count of coins in the *current* round.

So, the scheme is next: firstly, we need to **sort** piles, than we can be sure that coins in piles are changing from minimum to maximum.
And then each time, when we still have piles (which amount is multiple of 3), we have to do **3** actions:
1) Give the Alice the maximum number of coins;
2) Get the second maximum of coins;
3) Give Bob the minimum of coins.

```
function maxCoins(piles: number[]): number {
    piles.sort((a, b) => a - b);
    let result = 0;
    while (piles.length !== 0) {
        piles.pop();
        result += piles.pop();
        piles.shift();
    }
    return result;
};
```

**Time complexity:** O(nlogn)
**Space complexity:** O(1)