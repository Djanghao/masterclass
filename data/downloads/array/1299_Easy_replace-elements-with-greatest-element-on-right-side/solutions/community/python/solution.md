# Easy to Understand | Simple | Python Solution

**Author:** Mrmagician
**Votes:** 59
**Link:** [https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/557857/](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/557857/)

---

```
def replaceElements(self, arr: List[int]) -> List[int]:
        m = -1
        i = len(arr) -1 
        while i >= 0:
            temp = arr[i]
            arr[i] = m
            if temp > m:
                m = temp
            i-= 1
        return arr
```

**I hope that you've found the solution useful.**
*In that case, please do upvote and encourage me to on my quest to document all leetcode problems\uD83D\uDE03*
PS: Search for **mrmagician** tag in the discussion, if I have solved it, You will find it there\uD83D\uDE38