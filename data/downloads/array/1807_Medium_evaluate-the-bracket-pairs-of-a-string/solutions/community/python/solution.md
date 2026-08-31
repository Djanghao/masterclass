# Python solution using dictionary

**Author:** it_bilim
**Votes:** 8
**Link:** [https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/1131431/](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/1131431/)

---

```
def evaluate(self, s: str, knowledge: List[List[str]]) -> str:
        d = dict()
        for i, j in knowledge:
            d[i]=j
        res, i = '', 0
        while i < len(s):
            if s[i] =='(':
                i,t = i+1,i+1
                while s[i]!=')':
                    i+=1
                if s[t:i] in d:
                    res+=d[s[t:i]]
                else:
                    res += '?'
            else:
                res += s[i]
            i += 1
        return res
```