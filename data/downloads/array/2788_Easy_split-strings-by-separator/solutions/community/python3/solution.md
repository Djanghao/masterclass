# Python3, One Liner

**Author:** Silvia42
**Votes:** 14
**Link:** [https://leetcode.com/problems/split-strings-by-separator/solutions/3803614/](https://leetcode.com/problems/split-strings-by-separator/solutions/3803614/)

---

# Code
```
class Solution:
    def splitWordsBySeparator(self, words: List[str], separator: str) -> List[str]:
        return [w for word in words for w in word.split(separator) if w]
```
# Explanation in Python
```
class Solution:
    def splitWordsBySeparator(self, words: List[str], separator: str) -> List[str]:
        answ=[]
        for word in words:
            for w in word.split(separator):
                if w:
                    answ.append(w)
        return answ        
```
# Another one liner using regex
```
return re.findall(f"[^{separator}]+",separator.join(words))
```