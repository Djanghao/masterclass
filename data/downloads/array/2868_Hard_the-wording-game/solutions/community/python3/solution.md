# Python 3   |||   14 lines,  deque   ||   T/S: 59% / 58%

**Author:** Spaulding_
**Votes:** 4
**Link:** [https://leetcode.com/problems/the-wording-game/solutions/4102095/](https://leetcode.com/problems/the-wording-game/solutions/4102095/)

---

```
class Solution:
    def canAliceWin(self, a: List[str], b: List[str]) -> bool:

        f = lambda w1, w2: (w1[0] == w2[0] or 
                            ord(w1[0]) - ord(w2[0]) == 1)

        a, b = deque(a), deque(b)
        aWord, bWord, aTurn = a.popleft(), chr(123), True

        while a or b:
            if aTurn:
                while b and b[0] < aWord: b.popleft()
                if b and f(b[0], aWord): bWord = b.popleft()
                else: return True
                
            else:
                while a and a[0] < bWord: a.popleft()
                if a and f(a[0], bWord): aWord = a.popleft()
                else: return False

            aTurn^= True

        return aTurn
```
[https://leetcode.com/problems/the-wording-game/submissions/1061613217/](http://)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(a) + len(b)`.