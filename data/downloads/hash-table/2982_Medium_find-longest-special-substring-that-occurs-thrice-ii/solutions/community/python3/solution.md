# Python 3   ||   7 lines,  w/ groupby and dict   ||   T/S: 97% / 54%

**Author:** Spaulding_
**Votes:** 19
**Link:** [https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4485101/](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4485101/)

---

Here's the plan: 
1. We parse the the string into a list of strings of one character. (For example: `'aabeee'  --> ['aa', 'b', 'eee']`)
1. We increment a dict to track the beautiful strings; the trick here is to account for all substrings in a particular beautiful string, as they are also shorter beautiful strings in the same character.
2. We filter the dict keys for all beautiful strings that occur three times and return find the maximum length of all such beautiful strings. 
```
class Solution:
    def maximumLength(self, s: str) -> int:

        d = defaultdict(int)
        subs = [''.join(sub) for _, sub in groupby(s)]   # <-- 1.
        
        for sub in subs:                                 #
            d[sub]+= 1                                   # <-- 2.
            if len(sub) > 1: d[sub[1:]]+= 2              #
            if len(sub) > 2: d[sub[2:]]+= 3              #

        return max(map(len,filter(lambda x: d[x] > 2,    # <-- 3.
                             d.keys())), default = -1)
                             
```
[[https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/submissions/1133282705/](http://)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(s)`.