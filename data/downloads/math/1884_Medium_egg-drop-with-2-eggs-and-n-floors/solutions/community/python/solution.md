# Here, is an O(1) solution using math take a look at you don't believe how easy it is.

**Author:** ResilientWarrior
**Votes:** 6
**Link:** [https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/5421872/](https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/5421872/)

---



# Explanation
<!-- Describe your approach to solving the problem. -->
# How to choose the intial floor to through the first egg from??

find the maximum element that could be used when trying to express n as sum of concequative integer number. 
for example let's take 100 and say it is sum of x + (x-1) + (x-2) + ... + 0 i.e 

100 = x + (x-1) + (x-2) + ... + 0
but, we can express the second part as follows using Arithmetic progression equation. 
x + (x-1) + (x-2) + ... + 0 =(x(x+1))/2 

--> 100 = (x(x+1))/2 
--> 200  = x^2 + x 
--> x^2 + x - 200 = 0 
solving this and taking math.ceil of it we will find or finally result. 

thanks. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
class Solution:
    def twoEggDrop(self, n: int) -> int:
        # x2 + x - 2n = 0 -- >  = (-b2 +- srt(b2-4ac))/2 
        # (-1 +(sqr1+4*c))/2 
        ans = ((1+8*n)**0.5 -1)/2
        return math.ceil(ans)
        
```