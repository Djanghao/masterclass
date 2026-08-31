# Python 3   ||   7 lines, iteration,  w/ explanation & example   ||   T/S: 95% / 97%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/solutions/2960229/](https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/solutions/2960229/)

---

Here's the plan:
- Suppose, for example: 
`divisor1 = 2, uniqueCnt1 = 11`, and `divisor2 = 3, uniqueCnt2 = 2`

- We need at least 13 elements in total in the two groups. Four elements would be eligible for either group (`[1,5,7,11]`), two for Group1 only (`[3,9]`), four for Group2 only (`[2,4,8,10]`), and two for neither group [6,12].
The diagram below summarizes:
![a.jpg](./images/0.jpeg)



- Clearly n needs to be increased by at least 4 (`n = 13+4 = 17`) in order for Group 1 to have 11 elements. We add 4 to n (so now n = 17), and determine the groups again:
```
Group1 : `len([3,9,         15])    = 3`
Group2 : `len([2,4,8,10,    14,16]) = 6`
Both   : `len([1,5,7,11,13, 17])    = 6`
Neither: `len([6,12])               = 2
```
- We continue to iterate in this fashion, ending up with `n = 21`.
```
Group1 : `len([3,9,         15,         21]) = 4` \u2013
Group2 : `len([2,4,8,10,    14,16    20   ]) = 7`     4 + 7  = 11
Both   : `len([1,5,7,11,13, 17,      19   ]) = 7` \u2013
Neither: `len([6,12,                 18   ]) = 3```

```
___
Here's the code:
```
class Solution:
    def minimizeSet(self, d1: int, d2: int, ct1: int, ct2: int) -> int:
        
        f = lambda x: (x+abs(x))//2                             

        n, prev, d = ct1 + ct2, 0, lcm(d1,d2)

        while n > prev:                    # keep going until we do not 
                                           # have to add more
            prev = n       

            l1, l2  = n//d2 - n//d, n//d1 - n//d   # l1, l2 : length of group1, group2

            n+= f(f(ct1 - l1) + f(ct2 - l2)- n + n//d + l2 + l1) # determine the incease in n

        return n
```
[https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/submissions/1290535220/](https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/submissions/1290535220/)

I could be wrong, but I think that time is O(log(max(*d1,d2*)\u22C5max(c*t1,ct2*))) and space is *O*(1). (Note: I was baffled on the time, so I asked a few AI's)