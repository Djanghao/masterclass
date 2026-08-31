# ✅  Python Precalculation O(n*k) without TLE

**Author:** constantine786
**Votes:** 8
**Link:** [https://leetcode.com/problems/match-substring-after-replacement/solutions/2140652/](https://leetcode.com/problems/match-substring-after-replacement/solutions/2140652/)

---

I have added comments to help understand better. I have seen many python solutions getting TLE. To avoid that, I have added a precalculation logic. Please let me know if there is a better way. :)

```
class Solution:
    def matchReplacement(self, s: str, sub: str, mappings: List[List[str]]) -> bool:
        s_maps = defaultdict(lambda : set())
        for x,y in mappings:
            s_maps[x].add(y)
                
        # build a sequence of set for substring match
        # eg: sub=leet, mappings = {e: 3, t:7}
        # subs = [{l}, {e, 3}, {e, 3}, {t, 7}]
        # precalculation helps to eliminate TLE
        subs = [s_maps[c] | {c} for c in sub] 
        
        for i in range(len(s)-len(sub) + 1):
            c=s[i]            
            j=i
            # Try to match substring
            while j-i<len(sub) and s[j] in subs[j-i]:                                        
                j+=1
            if j-i==len(sub): # a valid match if iterated through the whole length of substring
                return True
    
        return False   
```
If `n` is the length of `s`,  `k` is the length of `sub` and `m` is number of keys in  `s_maps` , then
Time - O(n * k )  
Space - O(k * m) 

---

***Please upvote if you find it useful***