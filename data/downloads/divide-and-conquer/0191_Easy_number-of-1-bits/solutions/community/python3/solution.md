# Easy to Understand | Faster than 98% | 2 solutions | Simple | Python

**Author:** Mrmagician
**Votes:** 93
**Link:** [https://leetcode.com/problems/number-of-1-bits/solutions/644682/](https://leetcode.com/problems/number-of-1-bits/solutions/644682/)

---

```
    def using_inbuilt_counter(self, n):
        counter = collections.Counter(bin(n)[2:])
        return counter.get("1", 0)
    
    def using_bit_manipulation(self, n):
        count = 0
        while n:
            if n & 1: count += 1
            n = n >> 1
        return count
```

**I hope that you've found the solution useful.**
*In that case, please do upvote and encourage me to on my quest to document all leetcode problems\uD83D\uDE03*
PS: Search for **mrmagician** tag in the discussion, if I have solved it, You will find it there\uD83D\uDE38