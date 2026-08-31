# ✔️ [Python3] SLIDING WINDOW + HASH TABLE, Explained

**Author:** artod
**Votes:** 176
**Link:** [https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/1737985/](https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/1737985/)

---

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**

First, we have to create a hash map with letters from `p` as keys and its frequencies as values. Then, we start sliding the window `[0..len(s)]` over the `s`. Every time a letter gets out of the window, we increase the corresponding counter in the hashmap, and when a letter gets in the window - we decrease. As soon as all counters in the hashmap become zeros we encountered an anagram.

Time: **O(n)** - one pass over the `p`, on pass for `s`, and for every letter in `s` we iterate over values in hashmap (maximum 26)
Space: **O(1)** - hashmap with max 26 keys

```
    def findAnagrams(self, s: str, p: str) -> List[int]:
        hm, res, pL, sL = defaultdict(int), [], len(p), len(s)
        if pL > sL: return []

        # build hashmap
        for ch in p: hm[ch] += 1

        # initial full pass over the window
        for i in range(pL-1):
            if s[i] in hm: hm[s[i]] -= 1
            
        # slide the window with stride 1
        for i in range(-1, sL-pL+1):
            if i > -1 and s[i] in hm:
                hm[s[i]] += 1
            if i+pL < sL and s[i+pL] in hm: 
                hm[s[i+pL]] -= 1
                
            # check whether we encountered an anagram
            if all(v == 0 for v in hm.values()): 
                res.append(i+1)
                
        return res
```

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**