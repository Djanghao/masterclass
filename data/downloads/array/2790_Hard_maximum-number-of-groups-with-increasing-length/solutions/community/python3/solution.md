# Simple Python Math Solution - O(NlogN) time complexity - only 7 lines of code

**Author:** lcshiung
**Votes:** 87
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/solutions/3803590/](https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/solutions/3803590/)

---

# Code
```
class Solution:
    def maxIncreasingGroups(self, usageLimits: List[int]) -> int:
        usageLimits.sort()
    
        total, count = 0, 0
        for i in range(len(usageLimits)):
            total += usageLimits[i]
            if total >= ((count+1)*(count+2))//2:
                count += 1
                
        return count
```

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Intuitively, the naive (but slow) strategy you could use is to build the groups starting from the number with the highest frequency. Hence, you can  sort `usageLimits` in reverse order. The first group will take the number with the highest frequency, then the second group will take the first two numbers with the two highest frequencies, and so on. This could have been achieved with a heap, with time complexity of `O(N^2logN)`. 

However, notice that the constraints is up to `length=100000`, which suggests we must use an algorithm that has better time complexity. We will discuss the actual solution later.

Consider a few examples.

Input: [1,2,3]
Remaining frequencies at every iteration:
| Iteration | Remaining frequencies | Group formed |
|-----------|-----------------------|--------------|
| 1 | 1,2,2 | 2 |
| 2 | 1,1,1 | 1,2 |
| 3 | 0,0,0 | 0,1,2 |
Max groups: 3

Input: [1,2,3,4]
Remaining frequencies at every iteration:
| Iteration | Remaining frequencies | Group formed |
|-----------|-----------------------|--------------|
| 1 | 1,2,3,3 | 3 |
| 2 | 1,2,2,2 | 2,3 |
| 3 | 1,1,1,1 | 1,2,3 |
| 4 | 0,0,0,0 | 0,1,2,3 |
Max groups: 4

Input: [2,2,2]
Remaining frequencies at every iteration:
| Iteration | Remaining frequencies | Group formed |
|-----------|-----------------------|--------------|
| 1 | 2,2,1 | 2 |
| 2 | 1,1,1 | 0,1 |
| 3 | 0,0,0 | 0,1,2 |
Max groups: 3

Input: [1,1,1,7]
Remaining frequencies at every iteration:
| Iteration | Remaining frequencies | Group formed |
|-----------|-----------------------|--------------|
| 1 | 1,1,1,6 | 3 |
| 2 | 0,1,1,5 | 0,3 |
| 3 | 0,0,0,4 | 1,2,3 |
Max groups: 3

Input: [1,1,1,1,11]
Remaining frequencies at every iteration:
| Iteration | Remaining frequencies | Group formed |
|-----------|-----------------------|--------------|
| 1 | 1,1,1,1,10 | 4 |
| 2 | 0,1,1,1,9| 0,4 |
| 3 | 0,0,0,1,8 | 1,2,4 |
Max groups: 3

Input: [1,1,1,3,9]
Remaining frequencies at every iteration:
| Iteration | Remaining frequencies | Group formed |
|-----------|-----------------------|--------------|
| 1 | 1,1,1,3,8 | 4 |
| 2 | 1,1,1,2,7 | 3,4 |
| 3 | 0,1,1,1,6 | 0,3,4 |
| 4 | 0,0,0,0,5 | 1,2,3,4 |
Max groups: 4


# Approach

You may have noticed that the number of groups will always be limited by the following constraints:
- <= length of input
- the number of groups that can be formed will always require at least total frequencies of `1+2+3+...+n` or `n(n+1)/2`, where n is the number of groups.

Hence, [a,b,c,d] will never have more than 4 groups.

For [a,b]:
- there will only be 2 groups if b>=1, and a+b>=1+2
- there will only be 1 group if b=1, and a+b<1+2 (e.g. [1,2])

For [a,b,c]:
- there will be only 3 groups if c>=1, b+c>=1+2, a+b+c>=1+2+3

Hence, instead of using a heap, we can sort the list in increasing order, and then compute the number of times, we can get 1+2+3+...+n. That would be the number of groups we can form.

# Complexity
- Time complexity: O(NlogN)
- Space complexity: O(N)

