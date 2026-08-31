# C# binary search solution | 284 ms | Explained

**Author:** alexeyfv
**Votes:** 0
**Link:** [https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/5414778/](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/5414778/)

---

# Intuition

This is a classic binary search problem with some math.

# Approach

Let's consider the following example:

```
inventory = [2, 5];
orders = 4;
```

The `inventory` array can also be representned this way:
 
```
   5
   4
   3
2  2
1  1
```

We use the binary search to track the minimum price (`mid` variable). The minimum price determines how many balls are available for sale.

For a selected `mid` value, we need to:

1. Calculate how many balls we can sell (`ballsToSell` variable). For example, if `mid = 2`, then we can sell all the balls with a price equals or greater than `mid`.:


    ```
       5
       4     
       3
    2  2 <- `mid`, we can buy balls from this price
    1  1

    // 2 + (2 + 3 + 4 + 5) = 5 balls
    ```

2. Calculate the price of these balls. This can be done using the formula for the sum of an arithmetic progression: 

    $Sum = n/2 \u22C5 (2\u22C5a+(n\u22121)\u22C5d)$
    
    where 
   - $a$ is the first term of the arithmetic progression, which is `mid`;
   - $n$ is the number of terms, which is `balls`; 
   - $d$ is the common difference between terms, which is 1.

    ```
                         5 <- `inventory[1]`
                         4     
                         3
    `inventory[0]` -> 2  2 <- `mid`
                      1  1
    
    // sum for inventory[0] = 1 / 2 * (2 * 2 + 2 \u2212 1) = 2
    // sum for inventory[1] = 4 / 2 * (2 * 2 + 4 - 1) = 14
    // total sum = 16
    ```

3. If the `ballsToSell` value is less than the desired number of `orders`, descrease the right bound.
4. Otherwise save the result and remove excees balls if any.

# Complexity
- Time complexity: $O(n\u22C5log(n))$
- Space complexity: $O(1)$

![image.png](./images/0.png)

# Code
```
public class Solution {
    public int MaxProfit(int[] inventory, int orders) {
                
        var (res, min, max) = (0L, 1L, (long) inventory.Max());

        while (min <= max) {

            long mid = min + (max - min) / 2;
            var (sum, ballsToSell) = (0L, 0L);

            foreach (var n in inventory) {

                if (n < mid) continue;
                
                // calc how many balls we can buy at current price
                var balls = n - mid + 1;

                // add number of balls at current price
                ballsToSell += balls;

                // calc total price using arithmetic progression formula
                sum += balls * (2 * mid + (balls - 1) * 1) / 2;
            }

            if (ballsToSell < orders) {
                max = mid - 1;
                continue;
            }

            (res, min) = (sum, mid + 1);

            // Remove excees balls if any
            res -= (ballsToSell - orders) * mid;
        }

        res %= 1_000_000_007;

        return (int) res;
    }
}
```