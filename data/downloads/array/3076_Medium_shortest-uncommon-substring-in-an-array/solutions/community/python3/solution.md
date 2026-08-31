# Python 3   ||   9 lines,  Find the substrings and sort   ||   T/S: 56% / 68%

**Author:** Spaulding_
**Votes:** 18
**Link:** [https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/solutions/4852537/](https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/solutions/4852537/)

---

```
class Solution:
    def shortestSubstrings(self, arr: List[str]) -> List[str]:
        
        ans = ['']*len(arr)

        for i, s in enumerate(arr):

            subs = list(set(s[j:k] for j, k in 
                           combinations(range(len(s)+1),2)))
                           
            subs.sort(key = lambda x: (len(x), x))

            for sub in subs:
                if all(i == j or sub not in ss for j, ss in enumerate(arr)):
                    ans[i]=sub
                    break

        return ans
```
[https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/submissions/1199325410/](https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/submissions/1199325410/)



I could be wrong, but I think that time complexity is *O*(*M*^2 *N*^3) and space complexity is *O*(*MN*), in which *M* ~ maximum length of the strings in `arr` and *N* ~ `len(arr)`.