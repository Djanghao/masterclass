# Solution in Python 3 (beats 100.0 %) ( O(1) Math Solution )

**Author:** junaidmansuri
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-ones/solutions/377251/](https://leetcode.com/problems/maximum-number-of-ones/solutions/377251/)

---

( I'll try to add an explanation soon so it makes more sense. )

_Long Version:_
```
class Solution:
    def maximumNumberOfOnes(self, w: int, h: int, s: int, m: int) -> int:
    	(a,b), (c,d) = divmod(w,s), divmod(h,s)
    	if c > a: (a,b), (c,d) = (c,d), (a,b)
    	fs = m*a*c
    	if m <= b*d: return fs + (a+c+1)*m
    	if m <= s*d: return fs + (a+c+1)*b*d + a*(m-b*d)
    	if m > s*d: return fs + (a+c+1)*b*d + a*d*(s-b) + c*(min(m-s*d, b*(s-d)))
		
		
```
_One Line Version:_
```
class Solution:
    def maximumNumberOfOnes(self, w: int, h: int, s: int, m: int) -> int:
    	return (lambda c,d,a,b: m*a*c+(a+c+1)*min(m,b*d)+a*(min(max(m,b*d),s*d)-b*d)+c*(min(m-s*d,b*s-b*d))*(m>s*d))(*sum(sorted([[w//s,w%s],[h//s,h%s]]),[]))


- Junaid Mansuri
(LeetCode ID)@hotmail.com