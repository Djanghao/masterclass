# Clear Python o(n) Time, o(n) Space solution with comments

**Author:** ay6xp123
**Votes:** 14
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/497350/](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/497350/)

---

bottom up dp python solution with comments

Time: o(n)
Space: o(n)


```
class Solution:
    def minSwap(self, A: List[int], B: List[int]) -> int:
        
        n = len(A)
        
        # In this problem, we have two states that we need to keep track at element i; 
        # what happens if we swap or do not swap at i?
        
        # min number of swaps to get ascending order if we SWAP at i             
        swap = [0] * n
        
        # min number of swaps to get ascending order if we do NOT SWAP at i
        noswap = [0] * n
        
        # base case: swapping 0th element
        swap[0] = 1

        for i in range(1, n):
            strictly_increasing = A[i] > A[i-1] and B[i] > B[i-1]
            strictly_xincreasing = A[i] > B[i-1] and B[i] > A[i-1]
            
            # we can swap here, but we also do not have too
            if strictly_increasing and strictly_xincreasing:                               
                
                # if we decide to swap at i, we can consider the state of either swapping or not swapping i-1, since doing either
                # will not break out strictly increasing for either array rule
                swap[i] = min(noswap[i-1], swap[i-1]) + 1
                
                # we chose not to swap at i, so we can consider states if we swap at i - 1 or not swap, since again we will not break the strictly                          increasing rule
                noswap[i] = min(noswap[i-1], swap[i-1])
                
            
            # we can not swap at i, since we know that A[i] is not greater than B[i-1], or that B[i] is not greater than A[i-1]
            elif strictly_increasing:
                
                
                
                # if we swap at i, then to keep increasing condition, we must also swap at i-1, we are essentially just swapping both i and i-1 and get                     the same thing 
                swap[i] = swap[i-1] + 1
                
                # if we do not swap at i, then we must also chose to not swap at i-1 to keep the problem conditions true
                noswap[i] = noswap[i-1]
                
              
            # we must swap, since A[i] is not greater than A[i-1], or B[i] is not greater than B[i-1]
            # but we know that A[i] > B[i-1] and that B[i] > A[i-1]
            elif strictly_xincreasing:

                # if we swap at i, then we must have not swapped at i-1
                swap[i] = noswap[i-1] + 1
                
                # if we do not swap at i, then we must have swapped at i-1 for the problem conditions to be true
                noswap[i] = swap[i-1]
                
            
        
        # take min of both state paths to see who holds the better result
        return min(noswap[n-1], swap[n-1])


```