# Math Solution with Explanation

**Author:** nathannaveen
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/1964250/](https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/1964250/)

---

To solve this solution, we have to see that from the example given in the problem description that **we are returning the number of pencils we can get for every number of pens**:

```
Input: total = 20, cost1 = 10, cost2 = 5
Output: 9
**Explanation:** The price of a pen is 10 and a pencils price is 5.
- If you buy 0 pens, you can buy 0, 1, 2, 3, or 4 pencils.
- If you buy 1 pen, you can buy 0, 1, or 2 pencils.
- If you buy 2 pens, you cannot buy any pencils.
The total number of ways to buy pens and pencils is 5 + 3 + 1 = 9.
```

In this example, for `0` pens, we are getting `5` combinations of pencils, for `1` pen, we are getting `3` combinations of pencils, and for `2` pens, we are getting `0` combinations of pencils but `1` pen. So we have `5 + 3 + 1 = 9`, our result.

So to solve this problem, we can start with a basic equation:

`n * x + m * y = total`

Where `x = cost1`, `y = cost2`, `n = number of pens`, `m = number of pencils`.

Now, all we have to do is solve for `m` because we want the number of pencils:

`n * x + m * y = total`

`m * y = total - n * x`

`m = (total - n * x) / y`

So we can add `(total - n * x) / y` to `res` for `n <= total / cost1`.

But wait, when we try to use this equation `res += (total - cost1 * i) / cost2`, we only `m - 1` combinations because we are not finding the combinations with `0` pencils. This can be shown using the previous example: 

`Input: total = 20, cost1 = 10, cost2 = 5`

If we try to do `res += (total - cost1 * i) / cost2` then we have:

* For `0` pens we can buy `1, 2, 3, or 4` pencils (4 combinations)
* For `1` pens we can buy `1 or 2` pencils (2 combinations)
* For `2` pens we can not buy pencils (0 combinations)

If we sum up our results `4 + 2 + 0 = 6` we can see that this is not our expected answer. So we can do `res += (total - cost1 * i) / cost2 + 1` to account for our extra combinations. 

``` go
func waysToBuyPensPencils(total int, cost1 int, cost2 int) int64 {
    res := int64(0)
    
    for i := 0; i <= total / cost1; i++ {
        res += int64(total - (cost1 * i)) / int64(cost2) + 1
    }
    
    return res
}
```