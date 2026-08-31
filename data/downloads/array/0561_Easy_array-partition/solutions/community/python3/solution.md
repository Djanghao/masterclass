# Algorithm and solution in python3

**Author:** ramanaditya
**Votes:** 64
**Link:** [https://leetcode.com/problems/array-partition/solutions/390198/](https://leetcode.com/problems/array-partition/solutions/390198/)

---

The question states that we have to find the maximum sum obtained by taking minimum from **n** pairs. A pair can be formed from the elements of the list.

How to solve this:
- **Sort** the list
- **make a pair** starting from index 0
- take **minimum** from each pair
- **add** all the minimum obtained from the pairs

**Logic and Working of the problem**:
Suppose we have a list of **6** elements say ```[2,1,4,5,7,9]```
First task is to pair them and thus we will have 3 pairs:
```
1.  [1,2], [4,5], [7,9] Sum of their min : 1 + 4 + 7 = 12
2.  [1,2], [4,7], [5,9] Sum of thier min : 1 + 4 + 5 = 10
3.  [1,2], [4,9], [5,7] Sum of their min : 1 + 4 + 5 = 10
4.  [1,4], [2,5], [7,9] Sum of their min : 1 + 2 + 7 = 10
5.  [1,4], [2,7], [5,9] Sum of their min : 1 + 2 + 7 = 10
6.  [1,5], [2,4], [7,9] Sum of their min : 1 + 2 + 7 = 10
7.  [1,4], [2,9], [5,7] Sum of their min : 1 + 2 + 5 = 8
8.  [1,7], [2,4], [5,9] Sum of their min : 1 + 2 + 5 = 8
9.  [1,9], [2,4], [5,7] Sum of their min : 1 + 2 + 5 = 8
10. [1,5], [2,7], [4,9] Sum of their min : 1 + 2 + 4 = 7
11. [1,7], [2,5], [4,9] Sum of their min : 1 + 2 + 4 = 7
12. [1,7], [2,9], [4,5] Sum of their min : 1 + 2 + 4 = 7
13. [1,5], [2,9], [4,7] Sum of their min : 1 + 2 + 4 = 7
14. [1,9], [2,5], [4,7] Sum of their min : 1 + 2 + 4 = 7
15. [1,9], [2,7], [4,5] Sum of their min : 1 + 2 + 4 = 7
```

From the above pair and their sum we can conclude that the maximum sum is obtained from the pair which are obtained after sorting. Hence the answer to the above problem will be **12** which is obtained from the pairs ```[1,2], [4,5], [7,9]```

One solution can be

```py
class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        sum_ = 0
        for i in range(0,len(nums),2):
            sum_ += nums[i]
        return sum_

# Time : 356 ms
# Memory : 16.7 M
        
```

Another solution can be:
```py
class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        return sum(sorted(nums)[::2])
        
# Time : 332 ms
# Memory : 16.5 M
```

Please upvote this post if you like the solution, and I will keep on posting well commented solutions.

Currently I am using private repository for the solutions of Leetcode, but very soon I will make the repo public, so if you want to connect with me
GItHub : https://github.com/ramanaditya
LinkedIn : https://www.linkedin.com/in/ramanaditya/
Twitter : https://twitter.com/_adityaraman
Website : https://ramanaditya.github.io/