# Easy C++ O(logn) solution - beats 100%time and memory

**Author:** yajassardana
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximize-number-of-nice-divisors/solutions/1130743/](https://leetcode.com/problems/maximize-number-of-nice-divisors/solutions/1130743/)

---

*  The total number of good divisors will be the product of the amount of each type of prime factor.
 * In order to maximize this product, each prime number's frequency must not exceed 3.
 * If input is divisible by 3, answer is simply pow(3,primeFactors/3);
 * If primeFactors gives remainder 1, then maximization will require us to having 2 prime numbers in frequency two each, as `2 * 2> 3 * 1`
  * If primeFactors gives remainder 2, then one prime number will have to have a frequency equal to two.
 * In order to preven TLE, we write an optimised power function, optimised using binary search.
```
class Solution {
public:
    int power(long long base, int pow){
        if(pow==0)return 1;
        return (pow&1?(base*power(base,pow-1))%1000000007:power((base*base)%1000000007,pow/2))%1000000007;
    }
    int maxNiceDivisors(int primeFactors) {
        long ans = 1;
        if(primeFactors%3==1&&primeFactors>1){
            ans  = 4;
            primeFactors -= 4;
        }
        else if(primeFactors%3==2){
            ans =2;
            primeFactors-=2;
        }
        return (power(3,primeFactors/3)*ans)%1000000007;
    }
};
```