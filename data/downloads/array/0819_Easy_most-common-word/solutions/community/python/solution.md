# python solution using max and key function (16 ms)

**Author:** henrywyg
**Votes:** 14
**Link:** [https://leetcode.com/problems/most-common-word/solutions/335407/](https://leetcode.com/problems/most-common-word/solutions/335407/)

---

```
class Solution(object):
    def mostCommonWord(self, paragraph, banned):
        """
        :type paragraph: str
        :type banned: List[str]
        :rtype: str
        """
        dict = {}
        banned = set(banned)
        for c in "!?',;.":
            paragraph = paragraph.replace(c, " ")
        paragraph = paragraph.lower().split()

        for word in paragraph:            
            if word not in banned:
                if word in dict:
                    dict[word]+=1
                else:
                    dict[word]=1
		#Don't need a counter if you use key function to choose the key with max. count!
        return max(dict, key=dict.get)
```
