# Python 3   ||   2-6 lines,  w/ explanation, example  ||   T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/2947389/](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/2947389/)

---

Here's the plan:
- First, we build a list of tuples with `itertools.groupby`. First element of each pair is the integer of the group(-1,0,or 1), and the second element is the length of the string.
1. Second, we iterate through this list checking for whether `{grp[i-1][0], grp[i+1][0]} == {-1,1}`. If so, then `grp[i][0]==0`, and `grp[i][1]` must be a potential answer.
- Third we check whether the `grp[i-1][0]` and `grp[i+1][0]` are 1 and -1 by whether their product is -1.
- Fourth, we return the maximum.
```
class Solution:
    def captureForts(self, forts: List[int]) -> int:

        grp = [(k,len(list(g))) for k,g in groupby(forts)]

           ans = 0                          #  Example: forts = [  1,    0,0,    -1,  0,0,0,0,  1]
                                            #                      |      |       |      |      |
        for i in range(1,len(grp)-1):       #             grp = [(1,1), (0,*2*),(-1,1),(0,*4*), (1,1)]        
            if grp[i-1][0]*grp[i+1][0]==-1: #                     |______________||_____________|| 
                ans = max(ans,grp[i][1])                                                                            #                       ans  = max(2, 4)

        return ans                          #                       return 4
```
[https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/submissions/864957033/](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/submissions/864957033/)

I could be wrong, but I think that time is *O*(*N*) and space is *O*(*N*), in which *N* ~ `len(forts)`.

Below is the two-liner. I couldn't quite pull of a one-liner, maybe someone else? I promise an upvote :).

```
class Solution:
    def captureForts(self, forts: List[int]) -> int:

        grp = [(k,len(list(g))) for k,g in groupby(forts)]
        return  max([grp[i][1] for i in range(1,len(grp)-1) 
               if grp[i-1][0]*grp[i+1][0]==-1], default = 0)
```
