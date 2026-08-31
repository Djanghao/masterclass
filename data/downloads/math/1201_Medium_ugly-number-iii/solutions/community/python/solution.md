# Python sol. by binary-search and set-theory. 80%+ [ with Hint and Comment ]

**Author:** brianchiang_tw
**Votes:** 8
**Link:** [https://leetcode.com/problems/ugly-number-iii/solutions/514893/](https://leetcode.com/problems/ugly-number-iii/solutions/514893/)

---

Python sol. by **binary-search** and **set-theory**.

---

**Hint**:

#1.
Think of **multiple counting** and **set theory**

By **set theory**, we can know **total number of multiples** in within given range within positive integer *k*.

---

Take *a*, *b*, *c* = 2, 3, 5, *k*=50 for example

Total number of multiple on *a*=2, *b*=3, *c*=5, from 1 to k = 50

= ( k // 2 + k // 3 + k // 5 ) - ( k // lcm(2,3) - k // lcm(2, 5) - k // lcm(3, 5) ) + k // lcm( 2, 3, 5 )

= 50 // 2 + 50 // 3 + 50 // 5 - 50 // 6 - 50 // 10 - 50 // 15 + 50 // 30

= #Mutiple of 2 + #Multiple of 3 + #Multiple of 5 - #Multiple of 6 - #Multiple of 10 - #Multiple of 15+ #Multiple of 30

= 25 + 16 + 10 - 8 - 5 - 3 + 1

= 36 = **n**

Therefore, we can say k=50 is the n = 36th ug1y number of 2, 3, 5.

---

#2.
Think of the **framework of Binary search**.

Use **binary search** to compute the **smallest k** such that there are **n multiples of a, b, c**.
That also means, k is the nth u-number of a, b, c.

---

**Implementation**:

```
from math import gcd

class Solution:
    

    def nthUglyNumber(self, n: int, a: int, b: int, c: int) -> int:

        
        def lcm( x, y):
            
            # From number theory,
            # gcd(x,y) * lcm(x,y) = x * y
            
            return  x * y  // gcd(x,y)        
        
        # -----------------------------------
        
        def total_num_of_multiples( number, a, b, c):
            
            # From set theory,
            # count the total number of mutiples of a, b, c, range from 1 to number.
            ab = lcm(a,b)
            bc = lcm(b,c)
            ac = lcm(a,c)

            abc = lcm(a, bc)

            result = number // a + number // b + number // c 
            result -= number // ab + number // bc + number // ac
            result += number // abc

            return result        
        
        # -----------------------------------
        
        # Goal:
        # Find the smallest number k, such that k has n multiples of a, b, or c.
        
        # Binary search approach
        lower = 1
        upper = 2 * (10 ** 9)
        
        while lower < upper:
            
            mid = lower + (upper - lower) // 2
            
            count_of_u_number = total_num_of_multiples(mid, a, b, c)

            if count_of_u_number >= n:
                upper = mid
                
            else:
                lower = mid+1
            
        return lower
        
```

---

Related leetcode challenge:

[Leetcode #263 Ugly Number](https://leetcode.com/problems/ugly-number)

[Leetcode #264 Ugly Number II](https://leetcode.com/problems/ugly-number-ii)

[Leetcode #313 Super Ugly Number](https://leetcode.com/problems/super-ugly-number/)


---

Reference:

[1] [GfG: Count of Multiples of A ,B or C less than or equal to N](https://www.geeksforgeeks.org/count-of-multiples-of-a-b-or-c-less-than-or-equal-to-n/)