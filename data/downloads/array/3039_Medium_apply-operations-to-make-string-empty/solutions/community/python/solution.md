# 2 solutions: save last position and frequency

**Author:** MrEnderml
**Votes:** 4
**Link:** [https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4746699/](https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4746699/)

---

Save last position for every char and frequency. 
At the end sort all chars by the last position and keep only with max frequency.
```python3
class Solution:
    def lastNonEmptyString(self, s: str) -> str:
        freq, lastPos = defaultdict(int), defaultdict(int)
        for i, ch in enumerate(s):
            freq[ch] += 1
            lastPos[ch] = i
        maxFreq = max(freq.values())

        return ''.join(ch for ch in sorted(lastPos, key=lastPos.get) if freq[ch] == maxFreq)
```

The same logic, but using array instead of dictionary.

```python3
class Solution:
    def lastNonEmptyString(self, s: str) -> str:
        freq, lastPos = [0] * 26, [0] * 26
        for i, ch in enumerate(s):
            key = ord(ch) - 97
            freq[key] += 1
            lastPos[key] = i
        
        maxFreq = max(freq)

        return ''.join(chr(ch+97) for _, ch in sorted(zip(lastPos, range(27))) if freq[ch] == maxFreq)
```