# Python 3 lines solution

**Author:** xcv58
**Votes:** 99
**Link:** [https://leetcode.com/problems/bulls-and-cows/solutions/74644/](https://leetcode.com/problems/bulls-and-cows/solutions/74644/)

---

use `Counter` to count `guess` and `secret` and sum their overlap. Then use `zip` to count `A`.

        s, g = Counter(secret), Counter(guess)
        a = sum(i == j for i, j in zip(secret, guess))
        return '%sA%sB' % (a, sum((s & g).values()) - a)