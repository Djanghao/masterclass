# [Python] O(n) simple solution using counter.

**Author:** coders-block
**Votes:** 13
**Link:** [https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/713509/](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/713509/)

---

```python
 def maxFreq(self, s: str, maxLetters: int, minSize: int, maxSize: int) -> int:
        # count frequency of characters
        count = collections.Counter()
        
        # Check only for minSize
        for i in range(len(s) - minSize + 1):
            t = s[i : i+minSize]
            if len(set(t)) <= maxLetters:
                count[t] += 1
        
        return max(count.values()) if count else 0
		
```