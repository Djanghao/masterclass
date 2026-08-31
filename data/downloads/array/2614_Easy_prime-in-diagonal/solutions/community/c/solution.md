# Sieve

**Author:** votrubac
**Votes:** 37
**Link:** [https://leetcode.com/problems/prime-in-diagonal/solutions/3395752/](https://leetcode.com/problems/prime-in-diagonal/solutions/3395752/)

---

We can do a simple primality check. It's good enough since `n <= 300`.

For larger `n`, we can pre-compute Sieve of Eratosthenes.

## Simple Primality Check
**C++**
```cpp
bool isPrime(int n){
    if (n <= 2 || n % 2 == 0) 
        return n == 2;
    for (int i = 3; i * i <= n; i += 2)
        if (n % i == 0)
            return false;
    return true;
}      
int diagonalPrime(vector<vector<int>>& n) {
    int p = 0;
    for (int i = 0; i < n.size(); ++i)
        p = max({p, isPrime(n[i][i]) * n[i][i], 
            isPrime(n[i][n.size() - i - 1]) * n[i][n.size() - i - 1]});
    return p;
}
```

## Sieve of Eratosthenes
Note that `sieve` is global, so we compute it only once. 

**C++**
```cpp
bool sieve[4000001] =  { true, true }; 
class Solution {
public:
void buildSieve() {
    for (int p = 2; p * p < 400001; ++p)
        if (!sieve[p])
            for (int i = p * p; i < 400001; i += p)
                sieve[i] = true;
}    
int diagonalPrime(vector<vector<int>>& n) {
    if (!sieve[4])
        buildSieve();
    int p = 0;
    for (int i = 0; i < n.size(); ++i)
        p = max({p, !sieve[n[i][i]] * n[i][i], 
            !sieve[n[i][n.size() - i - 1]] * n[i][n.size() - i - 1]});
    return p;
}
};
```