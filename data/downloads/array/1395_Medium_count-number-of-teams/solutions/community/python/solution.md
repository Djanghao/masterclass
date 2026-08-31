# Easiest Code Ever - Python - Top 97% Speed - O( n log n ) Combinatorial

**Author:** Aragorn_
**Votes:** 83
**Link:** [https://leetcode.com/problems/count-number-of-teams/solutions/724711/](https://leetcode.com/problems/count-number-of-teams/solutions/724711/)

---

**Easiest Code Ever - Python - Top 97% Speed - O( n log n ) Combinatorial**

The code below simply loops through the array taking an element "x" as the pivot. Using this pivot, we count separately the number of values:
1. **Lower** than "x" to the **left** (lo_L)
2. **Higher** than "x" to the **left** (hi_L)
1. **Lower** than "x" to the **right**  (lo_R)
2. **Higher** than "x" to the **right** (hi_R)

These values are then combined to update our result variable:
* result +=  lo_L * hi_R + hi_L * lo_R

The idea makes a lot of sense after a moment (a detailed explanation of the formula can be found below).

Now, the 4 tracked variables can be obtained in two ways:
1. The best way is to use SortedLists containing all the values to the Left and Right of our pivot. Using binary search, we can find the index of our pivot in these lists, and quickly deduce the number of elements higher or lower. This allows us to have a O( n log n ) solution.
2. Otherwise, we can use two nested loops to build our counting variables primitively. This gives us a O(n^2) solution.

Both code versions are presented below. I hope the explanation was helpful. Cheers,

```
# Version A:  [Top Speed] O(n log n) solution using SortedLists to calculate our 4 counting variables in Log(n) time.
from sortedcontainers import SortedList
class Solution:
    def count_low_high(self,sl,x):
        lo =           sl.bisect_left(x)
        hi = len(sl) - lo
        return lo, hi
    
    def numTeams(self, A):
        result = 0
        left   = SortedList()
        right  = SortedList(A)
        for x in A:
            right.remove(x)
            lo_L, hi_L  =  self.count_low_high(left ,x)
            lo_R, hi_R  =  self.count_low_high(right,x)
            result     +=  lo_L*hi_R + hi_L*lo_R
            left .add(x)
        return result
```

```
# Version B:  O(n^2) solution with (primitive) nested loops for building our 4 counting variables.
class Solution:
    def numTeams(self, A):
        L = len(A)
        result = 0
        for j in range(1,L-1):
            x, lo_L, lo_R, hi_L, hi_R = A[j], 0, 0, 0, 0
            for i in range(j):
                if A[i]<x:
                    lo_L += 1
                else:
                    hi_L += 1
            for k in range(j+1,L):
                if A[k]<x:
                    lo_R += 1
                else:
                    hi_R += 1
            result += lo_L*hi_R + hi_L*lo_R
        return result
```


**PS.** Detailed explanation of the formula ``` lower_left * higher_right + higher_left * lower_right``` :

The formula  comes from the fact that we need to create triplets with the form ```a<b<c``` or```a>b>c```. Since ```b``` can be regarded as the pivotal point dividing the sequence, we notice that we can form triplets by choosing:
1) For ```a<b<c```, choose any number ```a``` (to the left) lower than ```b```, and any number ```c``` to the right which is higher. The total number of combinations for this case is  ```lower_left*higher_right```.
2) For ```a>b>c```, reverse the previous process. Choose any number ```a``` to the left higher than ```b```, and any subsequent number ```c``` which is lower. This creates a total number of combinations ```higher_left*lower_right```.

As you can see, summing the combinations for both alternatives gives us the formula ```total = lower_left*higher_right + higher_left*lower_right```. The rest of the code is just book-keeping, and choosing good Data Structures to handle the problem easily.