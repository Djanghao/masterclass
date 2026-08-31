# C++ Math Solution - O(1) extra space and O(1) time for each

**Author:** meldsza
**Votes:** 126
**Link:** [https://leetcode.com/problems/fancy-sequence/solutions/898861/](https://leetcode.com/problems/fancy-sequence/solutions/898861/)

---

The solution to this problem to compute the value only when requested to.
we keep track of the changes using two variables increment and mult
so the final calculation will be `A[i] * mult +increment`

**So what happens if there is a addAll?**
we just do `increment+=val`

**What happens on multAll?**
assume the value before multiplication is `org`
`org =  A[i] * mult +increment`
we are multiplying by m, hence it will be
`org = A[i] * (mult * m) + (increment * m)`
comparing with our lazy formula, we see that we can just do `mult*=m` and `increment*=m` and continue

**What if there is an append?**
Now we cant just ignore this operation because the new value cannot be subject to the orginal formula. One way to solve it would be to just compute the values at this point and reset increment and mult but this would lead to a TLE. So we need a way to negate the final formula
so first we do `newval - =increment` and then `newval/=mult`. But as these are in modulo arthematic, the division changes to `newval *= moduloInverse(mult)`

**How to calculate Modulo Inverse?**
We know that 10^9+7 is prime and hence we can use Fermat's theorem to calculate inverse
`a^(m-1) \u2261 1 (mod m)`
If we multiply both sides with a^(-1), we get 
 `a^(-1) \u2261 a^(m-2) (mod m)`
 so we just need to calculate `modPower(a, m-2)`

The final solution is given below. I have used a C style array only for speed (trade memory for speed). You can replace it with a vector and use pushback instead of manually keeping track of length

```cpp
int mod97 = 1000000007;
/**
Calculates multiplicative inverse
*/
unsigned long modPow(unsigned long x, int y) {
        unsigned long tot = 1, p = x;
        for (; y; y >>= 1) {
            if (y & 1)
                tot = (tot * p) % mod97;
            p = (p * p) % mod97;
        }
        return tot;
    }
class Fancy {
public:
    unsigned long seq[100001];
    unsigned int length = 0;
    unsigned long increment = 0;
    unsigned long mult = 1;
    Fancy() {
        ios_base::sync_with_stdio(false);
        cin.tie(NULL);
    }
    
    void append(int val) {
        seq[length++] = (((mod97 + val - increment)%mod97) * modPow(mult, mod97-2))%mod97;
    }
    void addAll(int inc) {
        increment = (increment+ inc%mod97)%mod97;
    }
    
    void multAll(int m) {
        mult = (mult* m%mod97)%mod97;
        increment = (increment* m%mod97)%mod97;
    }
    
    int getIndex(int idx) {
        
        if (idx >= length){
            return -1;
        }else{
            return ((seq[idx] * mult)%mod97+increment)%mod97;
        }
    }
};
```