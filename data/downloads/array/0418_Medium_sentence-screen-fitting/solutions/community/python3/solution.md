# Easiest python solution with explanation(based on valid space)

**Author:** HaoChenNus
**Votes:** 11
**Link:** [https://leetcode.com/problems/sentence-screen-fitting/solutions/1777509/](https://leetcode.com/problems/sentence-screen-fitting/solutions/1777509/)

---

We have rows*columns total space, but some of them can not store words, we calculate the valid space and then using valid space // length of sentence to get the result
```
class Solution:
    def wordsTyping(self, sentence: List[str], rows: int, cols: int) -> int:
        str=" ".join(sentence)+" "
        valid_space=0
        for i in range(rows):
            valid_space+=cols
            if str[valid_space%len(str)]==" ":
                valid_space+=1
            else:
                while valid_space>0 and str[valid_space%len(str)-1]!=" ":
                    valid_space-=1
        return valid_space//len(str)
```