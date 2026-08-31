# Python | No Regex | Simple Logic | Probably better for interviews | Commented

**Author:** since2020
**Votes:** 5
**Link:** [https://leetcode.com/problems/solve-the-equation/solutions/837106/](https://leetcode.com/problems/solve-the-equation/solutions/837106/)

---

Noticing there are many posts about using Regex, this post will mainly focus on how to approach this problem during the interview, when, most likely, the interviewer hopes to see your problem-solving skills but not the knowledge of using APIs.

Firstly, to solve a linear equation of single variable:
- We need to find the coefficient of the ```x``` and the constant value. 
- We would treat the coefficient and the constant differently if they appear on different sides of ```=```, as we need to flip the sign. Therefore, we need a ```helper``` function to parse both left and right parts.
- In the ```helper```, we need to deal with three cases:
	- ```equation[i]``` is a number
	- ```equation[i]``` is the ```x```
	- ```equation[i]``` is ```+/-```

```Python
class Solution:
    def solveEquation(self, equation: str) -> str:
        def helper(l,r): # left inclusive and right exclusive
            constant = unknown = 0
            sign,val = 1,''
            while l < r:
                if equation[l].isnumeric():
                    val += equation[l]
                elif equation[l] == 'x':
                    unknown += sign*int(val or '1') # in case the coefficient is 1
                    val = ''
                else: # meet a +/-
                    if val:
                        constant += sign*int(val)
                    sign = 1 if equation[l]=='+' else -1
                    val = ''
                l += 1
            if val: # if the last digit is a number
                constant += sign*i
            return constant,unknown
    
        mid = equation.find('=')
        constant1,unknown1 = helper(0,mid)
        constant2,unknown2 = helper(mid+1,len(equation))
        const,var = constant2-constant1,unknown1-unknown2
        # print(a,b)
        if var == 0:
            if const == 0: return "Infinite solutions"
            else: return "No solution"
        else: return 'x={}'.format(const//var)
```