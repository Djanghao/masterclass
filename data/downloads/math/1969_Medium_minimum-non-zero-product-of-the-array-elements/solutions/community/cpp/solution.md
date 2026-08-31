# Petition to add modPow( ) in C++ STL  (-_-)

**Author:** Believe_itt
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/1428640/](https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/1428640/)

---

```
int power(ll x, ll times){
        if(times==0){
            return 1;
        }
        ll temp = power(x,times/2);
        temp = (temp * temp) %mod;
        if(times%2){
            temp = (temp * (x %mod)) %mod;
        }
        return temp %mod;
    }
    int minNonZeroProduct(int p) {
        
        ll x = (1ll << p) -1;
        return  x%mod  * power(x-1, x/2) %mod;  
    }
```