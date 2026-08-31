# DP Solution

**Author:** Garima1501
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-permutations-for-di-sequence/solutions/2649709/](https://leetcode.com/problems/valid-permutations-for-di-sequence/solutions/2649709/)

---

To add a new character to a sequence we only have to consider the last element-

Lets say currently DID sequence is 1032- this can form

DIDI - in cases where we end with 3,4
DIDD - in cases where we end with 0,1,2

So just use the last element value to create a new sequence.

```
class Solution:
    def numPermsDISequence(self, s: str) -> int:
        mem=defaultdict(int)
        def dfs(i,val=0):
            if i==len(s):
                return 1
            if (i,val) in mem:
                return mem[i,val]
            p=0
            if s[i]=="D":
                for ind in range(0,val+1):
                    p+=dfs(i+1,ind)%(10**9+7)
            else:
                for ind in range(val+1,i+2):
                    p+=dfs(i+1,ind)%(10**9+7)
            mem[i,val]=p
            return p
        return dfs(0)
 ```
				