# Simple Python Solution with explanation 🔥

**Author:** wilspi
**Votes:** 4
**Link:** [https://leetcode.com/problems/selling-pieces-of-wood/solutions/3036060/](https://leetcode.com/problems/selling-pieces-of-wood/solutions/3036060/)

---

# Approach

* Price Map -> 

    Since prices is a list, it is costly to fetch the price of a specific height `h` and width `w`. 
    Lets convert it to a map: `priceMap` where the first order key is height and second order key is width.

    ```
    height: h1
    width: w1
    price: priceMap[h1][w1]
    ```

* Recursive approach ->

    Lets say we have a rectangle of height `h` and width `w`, 

    * first, lets check if there is any price in our `priceMap` for this rectangle configuration (or initialise it to zero)
    * now lets say we make a horizontal cut, so that it divides the rectangle in two rectangles:
    Rectangle 1: height: `h1`, width: `w`
    Rectangle 2: height: `h-h1`, width: `w`

    
    * lets check where can we make a cut so that we get the maximum price, `h1` can be anywhere between `[1, h-1]` (inclusive)
      we will recursively check for each of this rectangle, and maximise the amount
        ```
        money = max(
            money,  
            rec(h1, w) + rec(h-h1, w)
        )
        ```

    do the same vertically


# Complexity
- Time complexity:
$$O(m * n)$$

- Space complexity:
$$O(m * n)$$  -> memoization and priceMap

# Code
```
class Solution:
    def sellingWood(self, m: int, n: int, prices: List[List[int]]) -> int:

        priceMap = {}
        for p in prices:
            if p[0] in priceMap:
                priceMap[p[0]][p[1]] = p[2]
            else:
                priceMap[p[0]] = {p[1]: p[2]}

        def getPrice(h, w):
            if h in priceMap and w in priceMap[h]:
                return priceMap[h][w]
            return 0

        @cache
        def rec(h, w):
            money = getPrice(h, w)

            # cut horizontal
            for i in range(1, h):
                money = max(money, rec(i, w) + rec(h - i, w))

            # cut vertical
            for i in range(1, w):
                money = max(money, rec(h, i) + rec(h, w - i))

            return money

        return rec(m, n)

```