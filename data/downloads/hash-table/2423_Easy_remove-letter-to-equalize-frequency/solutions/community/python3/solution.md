# Counter of Counter

**Author:** votrubac
**Votes:** 33
**Link:** [https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/2660629/](https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/2660629/)

---

Harder than it looks.

We count characters, and then count the frequency of each count. 

For example, for the string "abcc", the character count is `{'c': 2, 'a': 1, 'b': 1}`, and frequency of each count is `{1: 2, 2: 1}` (one letters appear two times, and two letters appear one time each).

We can equalize the string if the frequency counter contains one or two elements, and there are four cases:
1. "abcde"  `{1: 5}`
2. "aaaaa" `{5: 1}`
3. "abbcc" `{1: 1, 2: 2}`
4. "aaabbcc" `{3: 1, 2: 2}`

**Python 3**
```python
class Solution:
    def equalFrequency(self, word: str) -> bool:
        cnt = Counter(Counter(word).values())
        if (len(cnt) == 1):
            return list(cnt.keys())[0] == 1 or list(cnt.values())[0] == 1
        if (len(cnt) == 2):
            f1, f2 = min(cnt.keys()), max(cnt.keys())
            return (f1 + 1 == f2 and cnt[f2] == 1) or (f1 == 1 and cnt[f1] == 1)
        return False
```