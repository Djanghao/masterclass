# Python 3 SortedList solution, O(NlogN)

**Author:** xil899
**Votes:** 17
**Link:** [https://leetcode.com/problems/count-good-triplets-in-an-array/solutions/1783361/](https://leetcode.com/problems/count-good-triplets-in-an-array/solutions/1783361/)

---

According to the question, first we obtain an index array `indices`, where `indices[i]` is the index of `nums1[i]` in `num2`, this can be done using a hashmap in `O(N)` time. For example, given `nums1 = [2,0,1,3], nums2 = [0,1,2,3]`, then `indices = [2,0,1,3]`; given `nums1 = [4,0,1,3,2], nums2 = [4,1,0,2,3]`, then `indices = [0,2,1,4,3]`.

Then, the problem is essentially asking - find the total number of triplets `(x, y, z)` as a subsequence in `indices`, where `x < y < z`. To do this, we can scan through `indices` and locate the middle number `y`. Then, we count (1) how many numbers on the left of `y` in `indices` that are less than `y`; and (2) how many numbers on the right of `y` in `indices` that are greater than `y`. This can done using SortedList in Python or other data structures in `O(NlogN)` time.

The final step is to count the total number of **good triplets** as asked in the problem. This can be done by a linear scan in `O(N)` time.

Below is my in-contest solution, though I could have made it a bit neater. Please upvote if you find this solution helpful.
```
class Solution:
    def goodTriplets(self, nums1: List[int], nums2: List[int]) -> int:
        n = len(nums1)
        hashmap2 = {}
        for i in range(n):
            hashmap2[nums2[i]] = i
        indices = []
        for num in nums1:
            indices.append(hashmap2[num])
        from sortedcontainers import SortedList
        left, right = SortedList(), SortedList()
        leftCount, rightCount = [], []
        for i in range(n):
            leftCount.append(left.bisect_left(indices[i]))
            left.add(indices[i])
        for i in range(n - 1, -1, -1):
            rightCount.append(len(right) - right.bisect_right(indices[i]))
            right.add(indices[i])
        count = 0
        for i in range(n):
            count += leftCount[i] * rightCount[n - 1 - i]
        return count
```