# Segment Tree, include similar problems and template

**Author:** dekail
**Votes:** 18
**Link:** [https://leetcode.com/problems/peaks-in-array/solutions/5319808/](https://leetcode.com/problems/peaks-in-array/solutions/5319808/)

---

# Intuition
Range query == Segment Tree is all you need.

# Complexity
- Time complexity:
$$O(nlogn)$$

- Space complexity:
$$O(n)$$

# Similar problems
Using my Segment Tree template, you can easily solve the following questions
- [LC 307](https://leetcode.com/problems/range-sum-query-mutable/description/)
- [LC 2407](https://leetcode.com/problems/longest-increasing-subsequence-ii/description/)
- [LC 3161](https://leetcode.com/problems/block-placement-queries/description/)
- [LC 2736](https://leetcode.com/problems/maximum-sum-queries/description/)
- [LC 2276](https://leetcode.com/problems/count-integers-in-intervals/description/)

# Code
```python
class SegmentTree:
    def __init__(self, n):
        self.n = n
        self.total = defaultdict(int)


    def update(self, o, l, r, idx, val):
        if l == r:
            self.total[o] = val
            return
        
        mid = l + (r - l) // 2


        if idx <= mid:
            self.update(2 * o, l, mid, idx, val)
        
        else:
            self.update(2 * o + 1, mid + 1, r, idx, val)
        
        self.total[o] = self.total[2 * o] + self.total[2 * o + 1]
        return
    
    def query(self, o, l, r, left, right):
        # out of the query range
        if r < left or right < l:
            return 0
        
        # totally inside the query range
        if left <= l and r <= right:
            return self.total[o]


        mid = l + (r - l) // 2
        result = 0

        if left <= mid:
            result += self.query(2 * o, l, mid, left, right)
        
        if mid + 1 <= right:
            result += self.query(2 * o + 1, mid + 1, r, left, right)
        
        return result
        
class Solution:
    def countOfPeaks(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        n = len(nums)
        tree = SegmentTree(n)
        
        # update the initial peak number
        for i in range(1, n - 1):
            if nums[i - 1] < nums[i] and nums[i] > nums[i + 1]:
                tree.update(1, 1, n, i + 1, 1)
        
        result = []
        for q in queries:
            if q[0] == 1:
                _, left, right = q
                # The first and the last number of the array doesn't count as peak number
                # so we query nums[left + 1...right - 1]
                # because in my segment tree implementation, I use 1-index
                # so the actual query range used by the tree is [left + 2...right]
                result.append(tree.query(1, 1, n, left + 2, right))
            else:
                _, i, val = q
                nums[i] = val
                
                # only the nums[1...n-2] are the valid peak numbers
                if 1 <= i <= n - 2:
                    if nums[i - 1] < nums[i] and nums[i] > nums[i + 1]:
                        tree.update(1, 1, n, i + 1, 1)
                    else:
                        tree.update(1, 1, n, i + 1, 0)
                
                # if nums[i - 1] also is a valid peak number
                if i >= 2:
                    left = i - 1
                    if nums[left - 1] < nums[left] and nums[left] > nums[left + 1]:
                        tree.update(1, 1, n, left + 1, 1)
                    else:
                        tree.update(1, 1, n, left + 1, 0)
                
                # if nums[i + 1] also is a valid peak number
                if i <= n - 3:
                    right = i + 1
                    if nums[right - 1] < nums[right] and nums[right] > nums[right + 1]:
                        tree.update(1, 1, n, right + 1, 1)
                    else:
                        tree.update(1, 1, n, right + 1, 0)          
                        
        return result
            
```