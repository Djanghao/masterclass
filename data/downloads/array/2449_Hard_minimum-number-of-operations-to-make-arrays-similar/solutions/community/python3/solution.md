# Python | Simple Odd/Even Sorting O(nlogn) | Walmart OA India | Simple Explanation

**Author:** tarushfx
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/solutions/2734139/](https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/solutions/2734139/)

---

```
class Solution:
    def makeSimilar(self, A: List[int], B: List[int]) -> int:
        if sum(A)!=sum(B): return 0
        # The first intuition is that only odd numbers can be chaged to odd numbers and even to even hence separate them
        # Now minimum steps to making the target to highest number in B is by converting max of A to max of B similarily
        # every number in A can be paired with a number in B by index hence sorting
        # now we need only the number of positives or number of negatives.
        oddA,evenA=[i for i in A if i%2],[i for i in A if i%2==0]
        oddB,evenB=[i for i in B if i%2],[i for i in B if i%2==0]        
        oddA.sort(),evenA.sort()
        oddB.sort(),evenB.sort()
        res=0
        for i,j in zip(oddA,oddB):
            if i>=j: res+=i-j
        
        for i,j in zip(evenA,evenB):
            if i>=j: res+=i-j
        
        return res//2
```