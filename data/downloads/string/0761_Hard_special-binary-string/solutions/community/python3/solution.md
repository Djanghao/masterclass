# 📌📌 Easy-Approach || Well-Explained || Substring 🐍

**Author:** abhi9Rai
**Votes:** 6
**Link:** [https://leetcode.com/problems/special-binary-string/solutions/1498369/](https://leetcode.com/problems/special-binary-string/solutions/1498369/)

---

## IDEA:
* If we regard 1, 0 in the definition of the special string as '(' and ')' separately,

* The problem is actually to get the string which is so-called valid parenthesis and meanwhile is the lexicographically largest.

* It is intuitive that we prefer deeper valid parenthesis to sit in front (deeper means the string surrounded with more pairs of parenthesis, e.g., '(())' is deeper than '()' ).
* We can achieve that by sorting them reversely.


'''

	class Solution:
    def makeLargestSpecial(self, s: str) -> str:
        
        l = 0
        balance = 0
        sublist = []
        for r in range(len(s)):
            balance += 1 if s[r]=='1' else -1
            if balance==0:
                sublist.append("1" + self.makeLargestSpecial(s[l+1:r])+ "0")
                l = r+1
        
        sublist.sort(reverse=True)
        return ''.join(sublist)

### If you like the idea, please Upvote!!\uD83E\uDD1E