# [Python3] 874ms(100% faster code) and 1-line solution

**Author:** packkill
**Votes:** 18
**Link:** [https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2956353/](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2956353/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Summary of this problem is to maximize the number of full bags.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Zip cap and rocks, then subtract each element of zip.
You can use **itertool.starmap** and **operator.sub**.
```
starmap(sub, zip(cap, rocks))
```
2. Sort the ones from 1.
```
sorted(
    starmap(sub,zip(cap, rocks))
)
```

3. Make prefixSum of sorted list from 2. 
You can use **itertools.accumulate** function in python3.
```
accumulate(
    sorted(
        starmap(sub, zip(cap, rocks))
    )
)
```
4. Find where addRocks will be located.
You can use **bisect.bisect_right**.
```
bisect_right(
    list(accumulate(
        sorted(
            starmap(sub, zip(cap, rocks))
        )
    )),
    addRocks
)
```
Submission Code Link
-> https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/submissions/866129457/

Thanks for reading my post!
# Code
```
class Solution:
    def maximumBags(self, cap, rocks, addRocks):
        return bisect_right(list(accumulate(sorted(starmap(sub,zip(cap,rocks))))),addRocks)
```