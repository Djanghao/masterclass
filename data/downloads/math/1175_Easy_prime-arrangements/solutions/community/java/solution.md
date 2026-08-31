# Simple Java With comment [sieve_of_eratosthenes]

**Author:** JatinYadav96
**Votes:** 43
**Link:** [https://leetcode.com/problems/prime-arrangements/solutions/371884/](https://leetcode.com/problems/prime-arrangements/solutions/371884/)

---

Used sieve of eratosthenes to generate count prime no 
```
    public static int countPrimes(int n) {
        boolean[] prime = new boolean[n + 1];
        Arrays.fill(prime, 2, n + 1, true);
        for (int i = 2; i * i <= n; i++)
            if (prime[i])
                for (int j = i * i; j <= n; j += i)
                    prime[j] = false;
        int cnt = 0;
        for (int i = 0; i < prime.length; i++)
            if (prime[i])
               cnt++;

        return cnt;
    }
```
if you dont know what is sieve of eratosthenes read this
https://www.geeksforgeeks.org/sieve-of-eratosthenes/

After getting count of prime 'pn'
calculate no fo arragement of prime numbers i.e pn!
calculate no fo arragement of non-prime numbers i.e (n-pn)!

afterwards simple multiply them I used BigInteger of java

Hope you will like it :P
```

    static int MOD = 1000000007;

    public static int numPrimeArrangements(int n) {
        int noOfPrime = generatePrimes(n);
        BigInteger x = factorial(noOfPrime);
        BigInteger y = factorial(n - noOfPrime);
        return x.multiply(y).mod(BigInteger.valueOf(MOD)).intValue();
    }

    public static BigInteger factorial(int n) {
        BigInteger fac = BigInteger.ONE;
        for (int i = 2; i <= n; i++) {
            fac = fac.multiply(BigInteger.valueOf(i));
        }
        return fac.mod(BigInteger.valueOf(MOD));
    }
```

