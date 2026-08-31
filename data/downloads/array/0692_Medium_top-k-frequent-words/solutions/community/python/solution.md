# Python Use dictionary and lambda beat 94%

**Author:** JefferyZZY
**Votes:** 58
**Link:** [https://leetcode.com/problems/top-k-frequent-words/solutions/449970/](https://leetcode.com/problems/top-k-frequent-words/solutions/449970/)

---

Use lambda to sort the dictionary in desc order based on words frequency and if frequency are equal then sort dictionary in asc order based on the word alphabet. 

```
def topKFrequent(self, words: List[str], k: int) -> List[str]:
        dict = {}
        for x in words:
            if x in dict:
                dict[x] += 1
            else:
                dict[x] = 1
        res = sorted(dict, key=lambda x: (-dict[x], x))
        return res[:k]
```