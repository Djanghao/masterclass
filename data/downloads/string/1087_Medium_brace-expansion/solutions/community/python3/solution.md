# Python backtracking template using graph with complexity

**Author:** hanjo108
**Votes:** 14
**Link:** [https://leetcode.com/problems/brace-expansion/solutions/1591034/](https://leetcode.com/problems/brace-expansion/solutions/1591034/)

---

so for input like {a, b, c}de{k, g} -> converting into [[a, b, c], [d], [c], [k, g]] and solve recursively to find all the permutation for the positions. After the conversion, let's say N for length of array, and K for maximum length of choices at each position.

**Time Complexity** -> (Edited, thanks to @user6299e)
First of all, we can consider this as repeat-allwowed permutation with K choices where K is length of nested array, and for N positions. So we have K^N choices
Then we have to take N times to build each permutations.
**So it is O(N * K^N) where N is length of array and K is length of nested arrary.**

consider we have these possible cases =>  [{a,b} x 10] vs [{a,b,c} x 7] vs [{a,b,c,d} x 5] (since we know length of s <= 50)
we have 2^10 vs 3^7 vs 4^5 = 1024 vs 2187 vs 1024
It seems the worst case we can have is where every list has 3 choices with 7 positions.

**Space Complexity** -> Since we are analyzing based on the structure of list from the input where K is number of choices for each position and N position (length of list) 
Space used to build the options array is O(N * K). And recursive call can get stack upto O(N)
**Therefore O(N * K)**

```
class Solution:
    def expand(self, s: str) -> List[str]:
        i = 0
        options = []
        res = []
        
        # turn string into graph "{a, b}c{d, e}f" -> [[a, b], [c], [d, e], [f]]
        while i < len(s):
            if s[i] == '{':
                tmpArr = []
                while s[i] != '}':
                    if s[i].isalpha():
                        tmpArr.append(s[i])
                    i += 1
                tmpArr.sort()
                options.append(tmpArr)
            elif s[i].isalpha():
                options.append([s[i]])
            i += 1
        
        # classic backtracking template
        def backtrack(index, tmpStr):
            if len(tmpStr) == len(options):
                res.append(tmpStr)
                return
            for s in options[index]:
                prev = tmpStr
                tmpStr += s
                backtrack(index + 1, tmpStr)
                tmpStr = prev
        
        backtrack(0, "")
        return res
```

**Please correct me if I am wrong !
Please UPVOTE if you find this solution helpful !
Happy algo!**