# ✔97.16% FASTER🐍PYTHON BINARY SEARCH & BRUTE FORCE.💥

**Author:** shubhamdraj
**Votes:** 37
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/2367785/](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/2367785/)

---

# Two Solutions: 
`BRUTE FORCE`: Here we literally take every element from matrix and sort them and then return k-1th element, as indexing starts from 0 in our Python.
`Time:` O(n\xB2 * (log n)\xB2), feel free to correct me if I'm wrong.
```
class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        temp = []
        
        for row in matrix:
            temp.extend(row)
        temp.sort()
        return temp[k-1]
```

`BINARY SEARCH`: Let's take advantage of that fact that each row is sorted.
So one of the few things we know about this matrix is that top left right and the bottom right
are going to be minimum and maximum respectively.
So the gap between the min and max that's going to be our range 
while doing a binary search and we're going to do another binary search through each row to find
how many elements are less than the element we're searching for(bisect_right). As soon as we
find our left and right range equal to another, then we could return l or r whatever.
`If the n is really large this solution would work much better. `
`Mine\uD83D\uDC49:` **178 ms, faster than 97.16% & 18.6 MB, less than 97.87%**
`Time:` maybe O((n log n) * (log m) ), feel free to correct me.
```
class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        l, r, N = matrix[0][0], matrix[-1][-1], len(matrix)
        
        def less_k(m):
            cnt = 0 # count
            for r in range(N):
                # binary search 
                x = bisect_right(matrix[r], m)
                cnt += x
            return cnt
        
        while l<r:
            mid = (l+r) // 2
            
            if less_k(mid) < k:
                l = mid + 1
            else:
                r = mid
        return l
```
## Give it a **Upvote** If You Like My Explanation.
### Have a Great Day/Night.