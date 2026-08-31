# Easy Python Solution

**Author:** Vistrit
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/2100121/](https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/2100121/)

---

```
def divisorSubstrings(self, num: int, k: int) -> int:
        s=str(num)
        c=0
        for i in range(k,len(s)+1):
            x=int(s[i-k:i])
            if x!=0 and num%x==0:
                c+=1
        return c
```