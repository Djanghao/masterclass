# Python 3

**Author:** neerajankam
**Votes:** 20
**Link:** [https://leetcode.com/problems/occurrences-after-bigram/solutions/341301/](https://leetcode.com/problems/occurrences-after-bigram/solutions/341301/)

---

```
class Solution(object):
    def findOcurrences(self, text, first, second):
        """
        :type text: str
        :type first: str
        :type second: str
        :rtype: List[str]
        """
        if not text:
            return 
        results = []
        text = text.split(" ")
        for i in range(len(text)-2):
            if text[i] == first and text[i+1] == second:
                results.append(text[i+2])
        return results
        
```