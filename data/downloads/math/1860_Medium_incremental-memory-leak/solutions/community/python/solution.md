# Python O(1) Solution

**Author:** IgorReshetnyak
**Votes:** 50
**Link:** [https://leetcode.com/problems/incremental-memory-leak/solutions/1210210/](https://leetcode.com/problems/incremental-memory-leak/solutions/1210210/)

---

Since I didn't realize during the contest that the simple brute-force passed all the tests - came up with an O(1) solution. Let's assume that the first memory stick is larger than the second one. If it's not the case - we can always re-assign variables. 

Then we have 2 stages:
* Memory is used from the first stick until it becomes smaller than the second one. 
* Then memory is used sequentially from: 2nd stick, 1st stick, 2nd stick, 1st stick... 

For each stage the amount of memory removed is a sum of an arithmetic sequence. With step d=1 for the first stage and d=2 for the second one. So to get the number of steps in each stage we have to solve quadratic equations.
```
n**2 + i*n = x
```
This is done using a helper function:
```
def solve_quadratic(i,x):
    return floor( (-i + sqrt(i**2+4*x))/2 )
```
 
The full solution is then:

```

class Solution:
    def memLeak(self, memory1: int, memory2: int) -> List[int]:
        
        inverted = False 
        if memory2>memory1:
            memory2, memory1 = memory1, memory2
            inverted = True 

		#Compute the number of steps in first stage - 1
        i_start = solve_quadratic(1,2*(memory1-memory2))
        
		#Memory1 after the end of first stage is computed using the sum of arithmetic sequence
        memory1-= i_start*(i_start+1)//2
		
		if memory1 == memory2: #Special case (if we end up with equal numbers after stage - 1 - undo inversion)
            inverted = False 
       
        #Compute number of steps in stage - 2
        n_end = solve_quadratic((i_start+1), memory2)
        
		#Compute sums of respective arithmetic sequences
        i_end_1 = i_start - 1 + 2*n_end
        i_end_2 = i_start + 2*n_end
        
        sum1 = n_end * (i_start+1 + i_end_1)//2
        sum2 = n_end * (i_start+2 + i_end_2)//2
        
		#Compute updated memories 
        memory1-=sum1
        memory2-=sum2
        
        full_cnt=2*n_end+i_start
        
        if memory1>=i_end_2+1: #If we can still make one removal from the first stick - perform it.
            memory1-=(i_end_2+1)
            full_cnt+=1
            
        return [full_cnt+1, memory2, memory1] if inverted else [full_cnt+1, memory1, memory2]
            
		 ```