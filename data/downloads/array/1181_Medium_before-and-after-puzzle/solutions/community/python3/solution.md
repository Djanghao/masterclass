# [Python3] Straight-forward HashMapSolution [Time: O(n log n) Space: O(n)]

**Author:** fox6
**Votes:** 1
**Link:** [https://leetcode.com/problems/before-and-after-puzzle/solutions/377027/](https://leetcode.com/problems/before-and-after-puzzle/solutions/377027/)

---

*  Store index of start words from each phrase into maps.
*  Iterate through each phrase and check if end word of phrase belong in map

Corner Case:
1. End word and start word of same phrase is not considered
2. Repetition is not allowed in the returned list
3. Start word and End word of a phrase can be same

```
def beforeAndAfterPuzzles(self, phrases: List[str]) -> List[str]:
        start = {}
        for i in range(len(phrases)):
            words = list(phrases[i].split(" "))
            sw,ew = words[0],words[-1]
            if sw in start:
                start[sw].append(i)
            else:
                start[sw] = [i]
            
            
        #print (start)
        res = []
        seen = set()
        for i in range(len(phrases)):
            ew = list(phrases[i].split(" "))[-1]    
            if ew in start:
                for j in start[ew]:
                    if i!=j:
                        string = phrases[i]+phrases[j][len(ew):]
                        if string in seen:
                            continue
                        else:
                            res.append(string)
                            seen.add(string)
        return sorted(res)**