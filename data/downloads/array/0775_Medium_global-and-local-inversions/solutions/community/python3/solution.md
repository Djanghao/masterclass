# Python O(N) using index to record the global inversion at each index

**Author:** leovam
**Votes:** 5
**Link:** [https://leetcode.com/problems/global-and-local-inversions/solutions/1012067/](https://leetcode.com/problems/global-and-local-inversions/solutions/1012067/)

---

```py
'''
w: it is trivial to get the number of local inversion,
    since we only need to compare two neighbours, the 
    key is to find the number of global inversion.
	AGAIN, for probelm like number in a array of length N is 0,...,N-1
	a natural idea is to think about adding more meaningful things to the index, 
	which help to reduce the space
h: note that the number in the arr of length n is 0,1,...,n-1
    A key observation is:
    At current index,
      1) if num > num's index: 
          currnet global inversion = num - num's index
          this is how many numbers after current index is smaller
          than the number at current index
      2) if num < num's index
          current global inversion = num's index - num -1
          this is how many numbers before current index is larger
          than the number at current index, the reason we subtract 1
          is that we have one duplicated count in 1)
          e.g. : [2, 1, 0] when we at index 0, we include the 
          instance 2>0, so when at at index 2, we should not include 0<2.
    then everything is trivial now
	
O(N) in time and O(1) in space
'''

class Solution:
    def isIdealPermutation(self, A: List[int]) -> bool:
        numLoc = 0
        numGlo = 0

        for idx, num in enumerate(A):
            if num > idx:
                numGlo += (num-idx)
            elif num < idx:
                numGlo += (idx-num-1)
            
            if idx < len(A)-1 and num > A[idx+1]:
                numLoc += 1
        
        print(numLoc, numGlo)
        return numLoc == numGlo
```