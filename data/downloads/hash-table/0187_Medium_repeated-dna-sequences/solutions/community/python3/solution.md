# [Python] 2 solutions - HashTable & Rolling Hash - Clean & Concise

**Author:** hiepit
**Votes:** 38
**Link:** [https://leetcode.com/problems/repeated-dna-sequences/solutions/898297/](https://leetcode.com/problems/repeated-dna-sequences/solutions/898297/)

---

**\u2714\uFE0F Solution 1: Hashtable**
```python3
class Solution(object):
    def findRepeatedDnaSequences(self, s):
        n = len(s)
        cnt = defaultdict(int)
        ans = []

        for i in range(n - 9):
            dna = s[i:i+10]
            cnt[dna] += 1
            if cnt[dna] == 2:
                ans.append(dna)

        return ans
```

**Complexity**
- Time & Space: `O(10*N)`

----
**\u2714\uFE0F Solution 2: Hashtable + Rolling Hash**
```python3
class Solution(object):
    def getVal(self, c):
        if c == 'A': return 0
        if c == 'C': return 1
        if c == 'G': return 2
        return 3

    def findRepeatedDnaSequences(self, s):
        n = len(s)
        cnt = defaultdict(int)
        ans = []
        
        dnaHash = 0
        POWN1 = 4 ** 9
        for i in range(n):
            dnaHash = dnaHash * 4 + self.getVal(s[i])
            if i >= 9:
                cnt[dnaHash] += 1
                if cnt[dnaHash] == 2:
                    ans.append(s[i-9:i+1])

                dnaHash -= POWN1 * self.getVal(s[i-9])

        return ans
```
**Complexity**
- Time & Space: `O(10*N)` (in worst case)