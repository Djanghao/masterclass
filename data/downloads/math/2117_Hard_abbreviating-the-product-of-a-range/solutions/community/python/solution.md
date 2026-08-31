# Python Straightforward

**Author:** lz2657
**Votes:** 3
**Link:** [https://leetcode.com/problems/abbreviating-the-product-of-a-range/solutions/1646606/](https://leetcode.com/problems/abbreviating-the-product-of-a-range/solutions/1646606/)

---

Track the head, tail and trailing zero when passing through the range.
For trailing zero, we need to count the number of 2 and 5 within the range.
For the head, as 1 <= left <= right <= 10^6, the top 5 digits can be calculated with the 1st ~ 12th digits, so we track top 12 digits.
For the tail, if we track the last 5 digits, when a new trailing zero pops up, we may get 4 effective digits left. 
So I remove all the 2 and 5 in each step and multiply the remaining ones in the end.

```
class Solution:
    def abbreviateProduct(self, left: int, right: int) -> str:
        c2 = c5 = 0
        top12 = tail5 = 1

        for i in range(left, right+1):
            # count and remove all 2 and 5
            while i % 2 == 0:
                i //= 2
                c2 += 1
            while i % 5 == 0:
                i //= 5
                c5 += 1

            # track top 12 and last 5
            top12 = int(str(top12 * i)[:12])
            tail5 = tail5 * i % 100000
        
        # multiply the remained 2 or 5
        if c2 > c5:
            for _ in range(c2 - c5):
                top12 = int(str(top12 * 2)[:12])
                tail5 = tail5 * 2 % 100000
        elif c2 < c5:
            for _ in range(c5 - c2):
                top12 = int(str(top12 * 5)[:12])
                tail5 = tail5 * 5 % 100000

        zero = min(c2, c5)

        # as is included in top 12, it's easy to tell when d<=10
        if len(str(top12))<=10:
            return str(top12)+'e'+str(zero)
        
        return str(top12)[:5] + '.'*3 + '0'*(5-len(str(tail5)))+str(tail5)+'e'+str(zero)
```