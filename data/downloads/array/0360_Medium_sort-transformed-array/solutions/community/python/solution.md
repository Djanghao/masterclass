# Python 3 | Math + Two Pointer | Detailed explanation with ascii drawing

**Author:** idontknoooo
**Votes:** 147
**Link:** [https://leetcode.com/problems/sort-transformed-array/solutions/766072/](https://leetcode.com/problems/sort-transformed-array/solutions/766072/)

---

### Intro
Math + Two Pointers

I feel like this is more of a Math question than Two Pointer algorithm. 

### Math fact:
if `a>0`: the quadratic function is something like this
```
y
^
|	+               +
|	 +             +
|	   +         +
|		   + +
---------------------------> x
```
if `a<0`: the quadratic function is something like this 
```
y
^
|	       + +
|	   +         +  
|	 +             +
|	+	            +
---------------------------> x
```
### About this question
We have a sort list `nums` from small to large. 
I hope you know what *vertex* is and how it's calculated. Vertex `x = -b/(2a)`. Tho, **formula is not important**, but the concept is. Vertex is the center `x` so that `y` is max or min (depending on sign of `a`).
When a > 0, we have 3 senarios:   
- nums[-1] <= vertex, meaning all values in `nums` will be on the left side of the center line of the quadratic function graph. (Decreasing side)   
- nums[0] >= vertex, meaning all values in `nums` will be on the right side of the center line of the quadratic function graph. (Increasing side)
- nums[0] <= nums[i] <= vertex <= nums[j] <= nums[-1], meaning some values are on the left and some are on the right.
  
  
How do we take advantage of these given information? Above information can be summed up to following. It tells you:  

**When `a>0`, the largest number is either on left or right end of `nums`.**

Correspondingly, 
**When `a<0`, the smallest number is either on left or right end of `nums`.**

Then, I think the idea is pretty simple, we use *Two Pointer* method to pick current largest or smallest in `nums` and add to new array (you can also do in-place change), depends on the sign of `a`.

#### Why we don't care about when `a = 0, b > 0 or b <0`?
Because, above method can handle that. How? 
When `a = 0, b > 0`, the graph is mono-increase, which is the same case as the **right** side of quadratic graph when `a > 0` (or **left** side when `a < 0`).
You can figure out the cooresponding cases for `a = 0, b < 0`. 

### Python 3 implementation
```
class Solution:
    def sortTransformedArray(self, nums: List[int], a: int, b: int, c: int) -> List[int]:
        def quadratic(x):
            return a*x*x + b*x + c 
        n = len(nums)
        index = 0 if a < 0 else n-1
        l, r, ans = 0, n-1, [0] * n
        while l <= r:
            l_val, r_val = quadratic(nums[l]), quadratic(nums[r])
            if a >= 0:
                if l_val > r_val:
                    ans[index] = l_val 
                    l += 1
                else:    
                    ans[index] = r_val 
                    r -= 1
                index -= 1
            else:
                if l_val > r_val:
                    ans[index] = r_val 
                    r -= 1
                else:    
                    ans[index] = l_val 
                    l += 1
                index += 1
        return ans
```