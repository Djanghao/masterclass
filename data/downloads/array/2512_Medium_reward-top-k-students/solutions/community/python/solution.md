# Python 3   ||   4 lines, nsmallest   ||   T/S: 56% / 95%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/reward-top-k-students/solutions/2973623/](https://leetcode.com/problems/reward-top-k-students/solutions/2973623/)

---

```
class Solution:
    def topStudents(self, positive_feedback: List[str], negative_feedback: List[str], report: List[str], student_id: List[int], k: int) -> List[int]:

        d = [0]*len(student_id)

        pSet,nSet = set(positive_feedback), set(negative_feedback)

        for i,s in enumerate(report):
            for w in s.split(): d[i]+= 3*(w in pSet)-(w in nSet)

        return [id for _i, id in 
                nsmallest(k, enumerate(student_id), 
                key = lambda x: (-d[x[0]],x[1]))]
```
[https://leetcode.com/problems/reward-top-k-students/submissions/1290532428/](https://leetcode.com/problems/reward-top-k-students/submissions/1290532428/)


I could be wrong, but I think that time is *O*(*MN*) and space is *O*(*N* * *K*), in which *N* ~ `len(student_id)`, *N* ~ `len(report)` and *K* ~ `k`.