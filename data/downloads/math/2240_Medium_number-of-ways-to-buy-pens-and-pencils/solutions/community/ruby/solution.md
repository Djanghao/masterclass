# Straightforward Ruby solution with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/3601785/](https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/3601785/)

---

# Intuition
Find the max number of pens you can buy.  For each pen possibility, add the number of pencil possibilities to count.

# Approach
1. Initialize count to zero.
2. Find the max number of pens you can buy.
3. For each number of pens, subtract the cost of those pens from total and divide by the cost of pencils to find the max number of pencils you can buy.  Add that to count, +1 because you could buy 0 pencils.
4. Return count.

# Complexity
- Time complexity:
$$O(n)$$, where *n* is the maximum number of pens you can buy.

- Space complexity:
$$O(1)$$

# Code
```
def ways_to_buy_pens_pencils(total, pen, pencil)
    count = 0
    max_pen = total / pen
    (0..max_pen).each { |k| count += (total - k*pen) / pencil + 1 }
    count 
end
```