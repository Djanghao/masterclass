# python3 SortedList Soultion in O(nlogn)

**Author:** swap2001
**Votes:** 6
**Link:** [https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/1010512/](https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/1010512/)

---

```
from sortedcontainers import SortedList
class Solution:
    def createSortedArray(self, ins: List[int]) -> int:
        mod = 10**9+7
        dicti = defaultdict(int)
        s1 = SortedList()
        sum_ = 0
        
        for i in range(len(ins)):
            dicti[ins[i]] += 1
            s1.add(ins[i])
            if i == 0:
                sum_ = (sum_+0)%mod
            else:
                leftIndex = s1.bisect_left(ins[i])
                small = leftIndex - 0
                big = len(s1) - leftIndex
                if dicti[ins[i]]>0:
                    big -= dicti[ins[i]]
                sum_ = (sum_+min(small,big))%mod
        return sum_