# Easy Beginner solution O(N)

**Author:** akhilshetty24
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/1694389/](https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/1694389/)

---

def minMoves(self, target: int, maxDoubles: int) -> int:
        
        ans=0
        while target!=1:
            if target%2==0 and maxDoubles!=0: 
                target=target/2
                maxDoubles-=1
                ans+=1                   
            else:
                if maxDoubles==0:
                    ans=ans+(target-1)
                    target=1 
                else:
                    target-=1
                    ans+=1
        return int(ans)