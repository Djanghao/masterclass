# Dart: Hard-coded list of primes to avoid trial division

**Author:** alexhutcheson
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/2929773/](https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/2929773/)

---

# Intuition
There are [only 65 prime numbers $<\\sqrt{100000}$](https://www.wolframalpha.com/input?i=prime+numbers+less+than+sqrt%28100000%29). We can store them as a constant array to avoid testing unnecessary values when generating prime factors.

If we needed to support larger values of `n`, we could use the [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) or another similar approach to generate the set of primes at program startup, or just fall back to the
trial division approach for large values of `n`.

# Code
```dart
class Solution {
  int smallestValue(int n) {
    if (n > 100000) {
      throw ArgumentError(n, 'exceeds maximum range of 100000');
    }
    while (true) {
      final sumOfPrimeFactors = 
        _primeFactors(n).reduce((sum, prime) => sum + prime);
      if (sumOfPrimeFactors == n) {
        return n;
      } 
      n = sumOfPrimeFactors;
    }
  }

  Iterable<int> _primeFactors(int n) sync* {
    var candidateIndex = 0;
    while (n > 1) {
      if (candidateIndex >= _primes.length) {
        // n is itself a prime > sqrt(100000)
        yield n;
        return;
      }
      final candidate = _primes[candidateIndex];
      if (n % candidate == 0) {
        yield candidate;
        n ~/= candidate;
      } else {
        candidateIndex++;
      }
    }
  }

  // There are only 65 primes < sqrt(100000), which 
  // is small enough that we can just precalculate them
  // and store them as a compile-time constant.
  static const _primes = [
    2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,
    53,59,61,67,71,73,79,83,89,97,101,103,107,
    109,113,127,131,137,139,149,151,157,163,167,
    173,179,181,191,193,197,199,211,223,227,229,
    233,239,241,251,257,263,269,271,277,281,283,
    293,307,311,313 ];
}
```