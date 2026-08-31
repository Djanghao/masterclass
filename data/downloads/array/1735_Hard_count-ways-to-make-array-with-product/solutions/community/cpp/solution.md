# ** easy |commented |prime factorization, modular exponentiation, and precomputed factorial**s

**Author:** Now_And_Then
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-ways-to-make-array-with-product/solutions/4001685/](https://leetcode.com/problems/count-ways-to-make-array-with-product/solutions/4001685/)

---

# Intuition




Prime-factorize ki and count how many ways you can distribute the primes among the ni positions.
After prime factorizing ki, suppose there are x amount of prime factor. There are (x + n - 1) choose (n - 1) ways to distribute the x prime factors into k positions, allowing repetitions.






Compute the number of ways to fill an array, considering **prime factorization, modular exponentiation, and precomputed factorial**s with their inverses. It first employs the Sieve of Eratosthenes to identify prime numbers and their smallest prime factors, which is essential for subsequent prime factorization. The prime factorization is used to decompose one of the problem parameters, 'k,' into its prime powers. Modular exponentiation is employed to efficiently calculate large exponentiations while avoiding integer overflow. Finally, precomputed factorials and their inverses are used to compute combinations efficiently and derive the final answer for each query in a vectorized manner

# Code
```
class Solution {
	vector<bool> isPrime;  // Vector to store prime number information
	vector<int> spf;       // Vector to store the smallest prime factor
	vector<long long> fact, ifact;  // Vectors for factorials and their inverses
	const int mod = 1e9 + 7;       // Modulo value
	const int maxn = 1e4 + 5;      // Maximum allowed value for 'n'

	// Sieve of Eratosthenes to find prime numbers and smallest prime factors
void sieve() {
    isPrime.resize(maxn, true);  // Resize and initialize the 'isPrime' vector with 'true'
    spf.resize(maxn);  // Resize the 'spf' vector to store the smallest prime factors
    isPrime[0] = isPrime[1] = false;  // Set 0 and 1 as non-prime
    for (int i = 2; i < maxn; i++) {  // Start from 2 (the first prime number)
        if (isPrime[i]) {  // If 'i' is marked as prime
            spf[i] = i;  // Set the smallest prime factor of 'i' to 'i' itself
            for (int j = i * i; j < maxn; j += i) {  // Mark all multiples of 'i' as non-prime
                if (isPrime[j]) {
                    isPrime[j] = false;
                    spf[j] = i;  // Set their smallest prime factor to 'i'
                }
            }
        }
    }
}


	// Function to factorize a number 'n'
// Function to factorize a number 'n'
vector<int> factorize(int n) {
    vector<int> f;  // Create a vector to store prime factor powers
    while (n > 1) {  // Continue until 'n' is greater than 1
        int s = spf[n];  // Find the smallest prime factor of 'n'
        int c = 0;        // Initialize a count to zero for the power of 's'
        while (n % s == 0) {  // Continue as long as 's' divides 'n'
            n /= s;   // Reduce 'n' by dividing it by 's'
            c++;      // Increment the count to record the power of 's'
        }
        f.push_back(c);  // Add the power of 's' to the vector 'f'
    }
    return f;  // Return the vector 'f' containing the prime factor powers
}

	// Modular exponentiation using recursion
	// Function to perform modular exponentiation: a^n % mod
long long modPow(int a, int n) {
    if (n == 0)
        return 1;  // Base case: a^0 = 1 (mod any number)

    long long e = modPow(a, n >> 1);  // Recursive call to compute a^(n/2)

    e *= e;  // Square the result (a^(n/2) * a^(n/2))

    e %= mod;  // Take the result modulo 'mod' to avoid integer overflow

    if (n & 1) {  // If n is odd
        e *= a;  // Multiply by 'a' (a^(n/2) * a^(n/2) * a)
        e %= mod; // Take the result modulo 'mod'
    }

    return e;  // Return the result of a^n % mod
}


	// Precompute factorials and their inverses
	void factorial() {
    const int maxf = 2 * maxn;  // Maximum value for precomputing factorials
    fact.resize(maxf);  // Resize the 'fact' and 'ifact' vectors to store factorials and their inverses
    ifact.resize(maxf);
    fact[0] = 1;  // The factorial of 0 is 1
    for (int i = 1; i < maxf; i++) {
        fact[i] = (fact[i - 1] * i) % mod;  // Compute the factorial of 'i' and take it modulo 'mod'
    }
    ifact[maxf - 1] = modPow(fact[maxf - 1], mod - 2);  // Compute the inverse modulo for the last factorial
    for (int i = maxf - 2; i >= 1; i--) {
        ifact[i] = (ifact[i + 1] * (i + 1)) % mod;  // Compute inverses for the rest of the factorials
    }
}


public:
	vector<int> waysToFillArray(vector<vector<int>>& queries) {
    factorial();  // Precompute factorials and their inverses
    sieve();      // Find prime numbers and smallest prime factors
    int N = queries.size();
    vector<int> ans(N);  // Create a vector to store the answers for each query
    for (int i = 0; i < N; i++) {
        int n = queries[i][0], k = queries[i][1];  // Extract 'n' and 'k' from the current query
        if (k == 1 || n == 1) {
            ans[i] = 1;  // If 'k' or 'n' is 1, there is only one way to fill the array
            continue;
        }
        vector<int> f = factorize(k);  // Factorize 'k' into prime powers
        long long res = 1;  // Initialize 'res' to 1 to accumulate the result
        for (const int &x: f) {
            long long cur = fact[x + n - 1];  // Compute (x + n - 1)!
            cur *= ifact[x];  // Multiply by the inverse of 'x!'
            cur %= mod;  // Take the result modulo 'mod'
            cur *= ifact[n - 1];  // Multiply by the inverse of '(n - 1)!'
            cur %= mod;  // Take the result modulo 'mod'
            res *= cur;  // Multiply the current result by 'cur'
            res %= mod;  // Take the result modulo 'mod'
        }
        ans[i] = res;  // Store the final result for the current query in 'ans'
    }
    return ans;  // Return the vector 'ans' containing the answers for all queries
}

};

```