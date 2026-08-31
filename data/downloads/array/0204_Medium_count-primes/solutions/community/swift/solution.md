# 🂡 Swift 🂡 Memory > 95% 👍 Upvote if useful 👍

**Author:** farial_mahmod
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-primes/solutions/4112936/](https://leetcode.com/problems/count-primes/solutions/4112936/)

---

# Intuition
To calculate the total number of primes available upto a given integer.

# Approach
Mathematical, Iterative


# Code
```
class Solution {
    // the below array will increment its size as primes are catched
    var totalPrimes = [Int]()
    func countPrimes(_ n: Int) -> Int {
        guard 1 < n else { return 0 }
        var num = 2
        while num < n {
            // calculatePrime() to separately look for primes below
            calculatePrime(target: num)
            num += 1
        }
        return totalPrimes.count
    }
    // looking for primes inside calculatePrime()
    func calculatePrime(target: Int) {
	    // Sieve of Eratosthenes formula
        let root = Int(Double(target).squareRoot())
        for i in totalPrimes {
            if root < i { break }
            if target % i == 0 { return }
        }
        totalPrimes.append(target)
    }
}
```