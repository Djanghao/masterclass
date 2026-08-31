# Python3 XOR and dict(map)

**Author:** abdullayev_akbar
**Votes:** 10
**Link:** [https://leetcode.com/problems/substring-xor-queries/solutions/3174153/](https://leetcode.com/problems/substring-xor-queries/solutions/3174153/)

---

![image.png](./images/0.png)


# Code
```
class Solution:
    def substringXorQueries(self, s: str, v: List[List[int]]) -> List[List[int]]:
        def cmp():
            return -2
        ans=[]
        mp=defaultdict(cmp)
        for i in v:
            x=bin((i[0]^i[1]))[2:]
            if mp[x]!=-2:
                if mp[x]==-1:
                    ans+=[[-1,-1]]
                else:
                    ans+=[[mp[x],mp[x]+len(x)-1]]
                continue 
            y=s.find(x)
            if y==-1:
                ans+=[[-1,-1]]
            else:
                ans+=[[y,y+len(x)-1]]
            mp[x]=y
        return ans
```