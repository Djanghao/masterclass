# python 3 | string matching and merge intervals | clean and readable

**Author:** kevintancs
**Votes:** 14
**Link:** [https://leetcode.com/problems/add-bold-tag-in-string/solutions/1544413/](https://leetcode.com/problems/add-bold-tag-in-string/solutions/1544413/)

---

```
class Solution:
    def addBoldTag(self, s: str, words: List[str]) -> str:
        # first, match occurances of each word in s and mark start and end tags
        # reduction to merge intervals problem
        # then merge tags together (removing nested tags) 
        # apply the merged tags to the string s
        
        # build list of intervals -- start (inclusive) to end (exlusive) (no regex)
        intervals = []
        windows = set([len(word) for word in words]) # removing duplicate window lengths
        words = set(words) # hash words for quick lookup
        n = len(s)
        for window in windows: 
            for i in range(n-window+1): 
                if s[i:i+window] in words:
                    intervals.append([i, i+window])
        
        # reduction to merge intervals
        intervals.sort(key=lambda x: (x[0], x[1])) # O(n log n)
        merged = []
        for itv in intervals:
            if not merged or merged[-1][1] < itv[0]:
                merged.append(itv)
            else:
                merged[-1][1] = max(merged[-1][1], itv[1])
        
        # convert merged itvs to bold tags
        s_arr = list(s)
        for itv in merged[::-1]: # reverse to allow multiple insertions on the same list
            s_arr.insert(itv[1], '</b>')
            s_arr.insert(itv[0], '<b>')
            
        return ''.join(s_arr)