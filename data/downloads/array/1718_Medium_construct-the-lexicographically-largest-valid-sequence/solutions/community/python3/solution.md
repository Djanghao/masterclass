# Python Greedy+Backtracking | Well Explained | Comments

**Author:** etoss
**Votes:** 26
**Link:** [https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/1008948/](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/1008948/)

---

The array contains `2*n-1` elements since `1` occurs once and others twice.

The basic idea is, we try to put numbers into the array in a greedy way, since it requires **the only "Lexicographically Largest"** one.
We try numbers from `n` to `1` from beginning of the array.
Each time we put `x` into the array at index `i`. If `x > 2`, we put another `x` at index `i+x`.
Note that we must ensure the availability of indecies `i` and `i+x` for any `x`, `x>2`
We stop when the array is successfully filled.
```
class Solution:
    def constructDistancedSequence(self, n: int) -> List[int]:
        
        arr = [0]*(2*n-1)     # the array we want to put numbers. 0 means no number has been put here
        i = 0                 # current index to put a number                
        vi = [False] * (n+1)  # check if we have used that number
        
		# backtracking
        def dfs(arr, i, vi):
		    # if we already fill the array successfully, return True
            if i >= (2*n-1):
                return True
				
			# try each number from n to 1
            for x in range(n, 0, -1):
			    # two cases:
			    # x > 1, we check two places. Mind index out of bound here.
			    # x = 1, we only check one place
				# arr[i] == 0 means index i is not occupied
                if (x > 1 and ((not (arr[i] == 0 and (i+x < 2*n-1) and arr[i+x] == 0)) or vi[x]))  \\
					or (x == 1 and (arr[i] != 0 or vi[x])):
                    continue
				
				# if it can be placed, then place it
                if x > 1:
                    arr[i] = x
                    arr[i+x] = x
                else:
                    arr[i] = x
                vi[x] = True
				
				# find the next available place
                nexti = i+1
                while nexti < 2*n-1 and arr[nexti]:
                    nexti += 1
				
				# place the next one
                if dfs(arr, nexti, vi):
					# if it success, it is already the lexicographically largest one, we don't search anymore
                    return True
					
				# backtracking... restore the state
                if x > 1:
                    arr[i] = 0
                    arr[i+x] = 0
                else:
                    arr[i] = 0
                vi[x] = False
			
			# we could not find a solution, return False
            return False
		
        dfs(arr, i, vi)
        return arr
            
```