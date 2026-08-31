# 🔥Python3🔥 EASY Solution

**Author:** abdullayev_akbar
**Votes:** 15
**Link:** [https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3083873/](https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3083873/)

---


- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n*log(n))$$
# Python3
```
class Solution:
    def sortTheStudents(self, a: List[List[int]], k: int) -> List[List[int]]:
        v=[]
        
        for i in range(len(a)):
            v+=[[a[i][k],a[i]]]
        print(v)
        def cmp(a):
            return a[0]
        v=sorted(v,key=cmp)[::-1]
        print(v)
        ans=[]
        for i in range(len(v)):
            a[i]=v[i][1]
        return a
```
Please UPVOTE if it helps \u2764\uFE0F\uD83D\uDE0A
Thank You and Happy To Help You!!