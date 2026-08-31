# Python | Easy Solution✅

**Author:** gmanayath
**Votes:** 10
**Link:** [https://leetcode.com/problems/distribute-candies/solutions/2402699/](https://leetcode.com/problems/distribute-candies/solutions/2402699/)

---

```
def distributeCandies(self, candyType: List[int]) -> int:
        # half length of candyType list
        candy_len = int(len(candyType)/2)
        # no of of unique candies 
        unique_candy_len = len(set(candyType))
        return min(candy_len,unique_candy_len)
```