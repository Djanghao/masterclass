# Python | Easy Solution✅

**Author:** gmanayath
**Votes:** 17
**Link:** [https://leetcode.com/problems/shortest-completing-word/solutions/2397466/](https://leetcode.com/problems/shortest-completing-word/solutions/2397466/)

---

```
def shortestCompletingWord(self, licensePlate: str, words: List[str]) -> str:
        # removing digit and space from licensePlate
        licensePlate = ''.join([i.lower() for i in licensePlate if i.isalpha()])
        # sorting words array based on length of item
        words = sorted(words, key=len)
        for word in words:
            for i in range(len(licensePlate)):
                if word.count(licensePlate[i]) < licensePlate.count(licensePlate[i]):
                    break
                if i == len(licensePlate)-1:
                    return word
```