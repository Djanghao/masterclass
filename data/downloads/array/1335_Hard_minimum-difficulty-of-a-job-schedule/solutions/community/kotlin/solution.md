# No code, just breaking down the problem

**Author:** 2pac_shakur
**Votes:** 15
**Link:** [https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/1001011/](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/1001011/)

---

```
/**

    schedule all jobs within 'd' days
    To do a 'i'th job all the prev jobs should have been completed
    at-least one task everyday
    
    if given 'd' days  > number of jobs, return -1
    
    [6,5,4,3,2,1] , 2
     0 1 2 3 4 5
     
    we have to do 'd - 1' cuts in the array to have 'd' sub-arrays.
    All we need to do is to return the sum of max of all the sub-arrays [IMPORTANT]
    
	So, try to do 'd - 1' cuts at all possible positions till N - d + 1
	
                     prevMax + f(i + 1, d - 1) 
     [6] [5,4,3,2,1]   6 + 5 = 11 (max of 6 in first cut and max of 5 in second cut)
     [6,5] [4,3,2,1]   6 + 4 = 10
     [6,5,4] [3,2,1]   6 + 3 = 9
     [6,5,4,3] [2,1]   6 + 2 = 8
     [6,5,4,3,2,] [1]  6 + 1 = 7 (best candidate answer)
 
    
    Let f(i, d) denote a value for min-diff of schedule ending at
    index 'i' with days 'd', hence
    
                0                           when 'd' is 0
    f(i, d) =   0                           when 'i' is >= N
                maxOf(A[i:])                when 'd' is 1, max value of the array from i..lastIndex (obviously, with d==1, we needn't do any cut, 
				                                just return max value of A in i..lastIndex)
                minOf(                      otherwise, where i <= j <= N
                    prevMax(i..j) +
                    f(j + 1, d - 1),
                    result 
                )
                
**/
```

code: https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/discuss/1001015/Bruteforce-greater-top-down