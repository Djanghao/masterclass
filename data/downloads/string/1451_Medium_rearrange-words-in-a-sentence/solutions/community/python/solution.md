# Python, sorting

**Author:** jcchoi
**Votes:** 11
**Link:** [https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/636445/](https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/636445/)

---

* sort by length of each word
* capitalize the first word and merge rest of words

```
class Solution(object):
    def arrangeWords(self, text):
        """
        :type text: str
        :rtype: str
        """
        res = []
        for w in text.split():
            w = w.lower()            
            res.append(w)
        res = sorted(res, key=len)
        res = [res[0].capitalize()] + res[1:]
        return ' '.join(res)
```		