# Easy python solution

**Author:** Vistrit
**Votes:** 12
**Link:** [https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/1701196/](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/1701196/)

---

```
def divideString(self, s: str, k: int, fill: str) -> List[str]:
        l=[]
        if len(s)%k!=0:
            s+=fill*(k-len(s)%k)
        for i in range(0,len(s),k):
            l.append(s[i:i+k])
        return l
```