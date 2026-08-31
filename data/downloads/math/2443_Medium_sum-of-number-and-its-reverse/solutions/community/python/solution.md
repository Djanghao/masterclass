# Python  ||   modular arithmetic, 1/9 time of brute force  ||    T/S: 98% / 99%

**Author:** Spaulding_
**Votes:** 13
**Link:** [https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/2711861/](https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/2711861/)

---

This solution depends upon a fact from number theory for any non-negative integer *N*: 
```
                               *N* %9  = sum(digits of *N*) &9 
```
From this identity, we infer that *N* %9 == *revN* %9, where *revN* is the reverse of *N*. For example, for *N* = 47 and *revN* = 74: 
```
                          47 %9 == 74 %9  == (4+7) %9 = 2.
```
Furthermore, 
```
                 2+2 = 47 %2 + 74 %2 == (47+74) %9 == 121 %9 == 4
```
So, if *num* = 121 in this problem, we can limit our search to integers *N* and *revN* to those that are no greater than 121//2 and *N* %9 == 2. Instead of checking [1,2, ..., 58,59,60], sixty iterations, so we only need to iterate halfway of this list, which is seven iterations:
```
             [2,11,20,29,38,47,56,   65,74,83,92,101,110,119]
```
Note that 47 and 74 are in the list.

One hurdle to over come is, knowing num %9, how do we deduce  *x* %9? It's an easy question to answer num %9 is even, but not so easy if num %9 is odd. (You can find the answers in the list m in the code.)

There's still a few other hurdles to grapple with, but the code below will give you additional hints. 


```
class Solution:
    def sumOfNumberAndReverse(self, num: int) -> bool:
        
        if num < 11: return  num %2 == 0
        
        m = [0,5,1,6,2,7,3,8,4]

        for i in range(m[num %9],num,9)[::-1]:

            if i + int(str(i)[::-1]) == num: return True
            
        return False
```
[https://leetcode.com/problems/sum-of-number-and-its-reverse/submissions/824412826/](https://leetcode.com/problems/sum-of-number-and-its-reverse/submissions/824412826/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `n`.