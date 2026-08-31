# Easy, Fast Python Solutions (2 Approaches - 28ms, 32ms; Faster than 93%)

**Author:** the_sky_high
**Votes:** 15
**Link:** [https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/1355349/](https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/1355349/)

---

# Easy, Fast Python Solutions (2 Approaches - 28ms, 32ms; Faster than 93%)
## Approach 1 - Using Sets
**Runtime: 28 ms, faster than 93% of Python3 online submissions for Maximum Number of Words You Can Type.**
**Memory Usage: 14.4 MB**
```
class Solution:
    def canBeTypedWords(self, text: str, brokenLetters: str) -> int:
        text = text.split()
        length = len(text)
        brokenLetters = set(brokenLetters)

        for word in text:
            for char in word:
                if char in brokenLetters:
                    length -= 1
                    break
					
        return length
```


## Approach 2 - Using Lists
**Runtime: 32 ms, faster than 82% of Python3 online submissions for Maximum Number of Words You Can Type.**
**Memory Usage: 14.4 MB**

```
class Solution:
    def canBeTypedWords(self, text: str, brokenLetters: str) -> int:
        text = text.split()
        length = len(text)
        brokenLetters = list(brokenLetters)
		
        for i in text:
            temp = 0
            for j in i:
                if j in brokenLetters:
                    temp -= 1
                    break
            if temp < 0:
                length -= 1
				
        return length
```
