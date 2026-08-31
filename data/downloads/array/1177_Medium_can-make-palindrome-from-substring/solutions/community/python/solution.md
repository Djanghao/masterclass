# Python 3   ||   9-10 lines,  xor,  three versions  ||   T/S: 98% / 97%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/2846031/](https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/2846031/)

---

Both are pretty much the same as many posts before, with a few wrinkles. It's not necessary to count chars, only keep track of even/odd. We can accomplish this by using a xor toggle. Similarly, we can use a toggle to determine whether a char changes over a query interval.

The first one employs lists indexed with ord #s. The second one employs dicts using the distinct letters in *s* as keys. The third employs bit-maps to track the changes.
```
class Solution:               #  Using lists     T/M: 52%/80%
    def canMakePaliQueries(self, s: str, queries: List[List[int]]) -> List[bool]:

            d, ans = [[0]*26], []

            for ch in s:                                            # keep track of even/odd (0/1)
                nxt = d[-1][:]                                      # for each char as we iterate
                nxt[ord(ch)-97]^= 1                                 # across s.
                d.append(nxt)                                       #

            for l, r, k in queries:                                 # Check whether all odds can be remedied
                odds = sum(d[l][i]^d[r+1][i] for i in range(26))    # with k changes

                ans.append(odds//2 <= k)                            # Check whether all odds can be remedied
                                                                    # with k changes
            return ans            
```
[https://leetcode.com/submissions/detail/849264474/](https://leetcode.com/submissions/detail/849264474/)




```
class Solution:                #  Using dicts   T/M: 89%/21%
    def canMakePaliQueries(self, s: str, queries: List[List[int]]) -> List[bool]:

            S = set(s)
            d, ans = [{ch:0 for ch in S}], []

            for ch in s:                                        # keep track of even/odd (0/1)
                nxt = d[-1].copy()                              # for each char as we iterate
                nxt[ch]^= 1                                     # across s.
                d.append(nxt)                                   #

            for l, r, k in queries:                             # check whether char changes even/odd
                odds = sum(d[l][ch]^d[r+1][ch] for ch in S)     # over query interval
                                                    
                ans.append(odds//2 <= k)                        # Check whether all odds can be remedied 
                                                                # with k changes
            return ans
```


[https://leetcode.com/submissions/detail/849291479/](hhttps://leetcode.com/submissions/detail/849291479/)

```
class Solution:              #  Using bit-map     T/M: 99%/90%
    def canMakePaliQueries(self, s: str, queries: List[List[int]]) -> List[bool]:
       
        d, ans = [0], []
        int_ = lambda x: ord(x) - 97
        
        for i, ch in enumerate(s):                              # keep track of even/odd (0/1)
            nxt = d[i] ^ (1 << int_(ch))                        # for each char as we iterate
            d.append(nxt)                                       # across s.

        for l, r, k in queries:                                 # Check whether all odds can be remedied
                ans.append((d[l]^d[r+1]).bit_count()//2 <= k)   # with k changes

        return ans
```
[https://leetcode.com/submissions/detail/849323828//](https://leetcode.com/submissions/detail/849323828//)