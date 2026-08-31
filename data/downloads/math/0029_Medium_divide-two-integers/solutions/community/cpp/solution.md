# Easy Solution in C++

**Author:** harshit7962
**Votes:** 139
**Link:** [https://leetcode.com/problems/divide-two-integers/solutions/2089533/](https://leetcode.com/problems/divide-two-integers/solutions/2089533/)

---

The idea here is to use addition efficiently to compute the final result...
we know that division can be done using addition or subtraction...
for example 20/3 = 3+3+3+3+3+3+(2, ignored) (result is 6 times 3 hence 6)

Hence the loop is run, n times where n is our result...
To more efficiently compute this, we can reduce the loops to log n time by adding divisor everytime it is added on...

So 20/3 = 3 + 6 + 12 + (24, ignore) (curr result is 2^(3-1)=4, 3 here is number of iterations...) 
left over sum, 20-12 = 8, and we repeat the process...
So 8/3 = 3 + 6 + (12, ignore) (this time result is 2^(2-1)=2, 2 here is number of iterations...)
left over sum, 8-6 = 2, since 2 is less than 3, we terminate the process...

Hence final result is 4+2 = 6

**Pls upvote the  thread if you found it helpful.**
```
class Solution {
public:
    int divide(int dividend, int divisor) {
        
        //Handling corner cases
        if(dividend==INT_MIN && divisor==-1) return INT_MAX;
        if(dividend==INT_MIN && divisor==1) return INT_MIN;

        
        //Converting divisors and dividend to their positive values
        long int dd = abs(dividend), dv = abs(divisor);
        
        //Result Variables
        int res=0;
        while(dv<=dd) {
            long int mul=dv, tmp=1;
            while(mul<=dd-mul) {
                mul+=mul;
                tmp+=tmp;
            }
            res+=tmp;
            dd-=mul;
        }
        
        //If either of dividend or divisor is negative our result will be negative
        if((dividend<0&&divisor>0) || (dividend>0&&divisor<0)) return -res;
        
        return res;
        
    }
};
```
