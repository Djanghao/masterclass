# GreyCode to decimal  C++ Math solution

**Author:** bharatwaj
**Votes:** 73
**Link:** [https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/877809/](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/877809/)

---

GreyCode always has the least number of bit changes, so treating the given number as grey code and converting it to decimal gives the correct answer.

https://en.wikipedia.org/wiki/Gray_code

Decimal	Binary	Gray
0	0000	0000
1	0001	0001
**2	0010	0011**
3	0011	0010
4	0100	0110
5	0101	0111
6	0110	0101
7	0111	0100
8	1000	1100
9	1001	1101
10	1010	1111
11	1011	1110
12	1100	1010
13	1101	1011
**14	1110	1001**
15	1111	1000

The bold test are the example cases 
```
class Solution {
public:
    int minimumOneBitOperations(int n) {
        int output = 0;
        
        while( n> 0)
        {
            output ^= n;
            n = n >> 1;
        }
        
        return output;
    }
};
```