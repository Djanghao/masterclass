# Simple C# solution with explanation, Dynamic Programming

**Author:** OliverVea
**Votes:** 0
**Link:** [https://leetcode.com/problems/selling-pieces-of-wood/solutions/4979147/](https://leetcode.com/problems/selling-pieces-of-wood/solutions/4979147/)

---

# Summary
We're building up a lookup `optimalPrices`, which will contain the optimal price of a rectangle of some size.

We start with the smallest rectangle 1x1. The `GetOptimalPrice` method will get the optimal price for the rectangle with this shape.

With a 1x1 rectangle, this is either 0 if a rectangle with this size is not sold or `p` if the rectangle can be sold at price `p`. The price is looked up in `priceLookup`, which is just `prices` but with constant time lookup.

The next rectangle will be 2x1. Here, we'll be trying 2 * 1x1 and a 2x1, if it can be found in `priceLookup`.

## Optimal price breakdown examples

- **3x1**: 2x1 + 1x1
- **4x1**: 3x1 + 1x1 and 2 * 2x1, ...
- **2x2**: 2 * 2x1 or 2 * 1x2
- **6x6**: 5x6 + 1x6 or 4x6 + 2x6 or 2 * 3x6 or  6x5 + 6x1 or 6x4 + 6x2 or 2 * 6x3

Of course, we also remember to lookup the size in the prices table, as the price might be better than the sum of the broken down pieces.

# Code
```
public class Solution {
    public long SellingWood(int m, int n, int[][] prices)
    {
        Dictionary<(int w, int h), int> priceLookup = prices.ToDictionary(p => (p[0], p[1]), p => p[2]);
        var optimalPrices = new long[m, n];

        for (var w = 1; w <= m; w++)
        {
            for (var h = 1; h <= n; h++)
            {
                optimalPrices[w - 1, h - 1] = GetOptimalPrice(w, h, optimalPrices, priceLookup);
            }
        }

        return optimalPrices[m - 1, n - 1];
    }

    private long GetOptimalPrice(int w, int h, long[,] optimalPrices, Dictionary<(int w, int h), int> priceLookup)
    {
        var optimalPrice = (long)priceLookup.GetValueOrDefault((w, h), 0);

        if (w > 1)
        {
            for (var sw = w - 1; sw >= w / 2; sw--)
            {
                var price = optimalPrices[sw - 1, h - 1] + optimalPrices[w - sw - 1, h - 1];
                optimalPrice = Math.Max(optimalPrice, price);
            }
        }

        if (h > 1)
        {
            for (var sh = h - 1; sh >= h / 2; sh--)
            {
                var price = optimalPrices[w - 1, sh - 1] + optimalPrices[w - 1, h - sh - 1];
                optimalPrice = Math.Max(optimalPrice, price);
            }
        }

        return optimalPrice;
    }
}

```