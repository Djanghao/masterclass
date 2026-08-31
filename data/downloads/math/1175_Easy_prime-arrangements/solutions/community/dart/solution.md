# using BigInt in dart and making the fastest solution in dart

**Author:** ahmed___
**Votes:** 1
**Link:** [https://leetcode.com/problems/prime-arrangements/solutions/4020101/](https://leetcode.com/problems/prime-arrangements/solutions/4020101/)

---


# Complexity
- Time complexity:
 O(n * sqrt(n))
- Space complexity:
 O(1)
# Code
```
class Solution {
  static const int MOD = 1000000007;

  int numPrimeArrangements(int n) {
    int primeCount = countPrimes(n);
    int nonPrimeCount = n - primeCount;

    BigInt primePermutations = calculatePermutations(primeCount);
    BigInt nonPrimePermutations = calculatePermutations(nonPrimeCount);

    BigInt result = (primePermutations * nonPrimePermutations) % BigInt.from(MOD);
    
    return result.toInt();
  }

  int countPrimes(int n) {
    int count = 0;
    for (int i = 1; i <= n; i++) {
      if (isPrime(i)) {
        count++;
      }
    }
    return count;
  }

  bool isPrime(int num) {
    if (num <= 1) {
      return false;
    }
    if (num == 2) {
      return true;
    }
    if (num % 2 == 0) {
      return false;
    }
    for (int i = 3; i * i <= num; i += 2) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }

  BigInt calculatePermutations(int count) {
    BigInt result = BigInt.from(1);
    for (int i = 1; i <= count; i++) {
      result = (result * BigInt.from(i)) % BigInt.from(MOD);
    }
    return result;
  }
}

```