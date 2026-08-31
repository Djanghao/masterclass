# Swift version: modular inverse

**Author:** tzef
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-anagrams/solutions/2972286/](https://leetcode.com/problems/count-anagrams/solutions/2972286/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Great explanation please refer
https://leetcode.com/problems/count-anagrams/solutions/2947111/c-solution-math-with-explanation-each-step-in-detail/?orderBy=most_votes

Add on reference for Fermat's little theorem
https://en.wikipedia.org/wiki/Fermat%27s_little_theorem

# Approach
<!-- Describe your approach to solving the problem. -->
1. catch the factorial result for reuse
2.  combination formula all $$n!/a!*b!$$ when there are 0...a and 0...b same items
2. modularMultiplication for handling multiply overflow product
3. binaryExponentiation for quickly get power of number
4. moduloInverse for deal with dividing the factorial for same items


# Code
```
class Solution {
    let mod = Int(1e9+7)
    func countAnagrams(_ s: String) -> Int {
        var anagrams = [String: [Character: Int]]()
        for word in s.split(separator: " ") {
            var anagram = [Character: Int]()
            word.forEach {
                anagram[$0, default: 0] += 1
            }
            anagrams[String(word)] = anagram
        }

        var result = 1
        for anagram in anagrams {
            var permutation = factorial(anagram.key.count)
            var devideFactorial = 1
            for value in anagram.value.values {
                guard value > 1 else {
                    continue
                }
                // (a/b)%m != a%m / b%m -> use modular inverse for division
                permutation = modularMultiplication(permutation, moduloInverse(factorial(value)))
            }
            result = modularMultiplication(result, permutation)
        }
        return result
    }
    
    var factorials = [Int: Int]()
    func factorial(_ n: Int) -> Int {
        if let cache = factorials[n] {
            return cache
        }
        guard n > 1 else {
            return 1
        }
        let result = modularMultiplication(n, factorial(n-1))
        factorials[n] = result
        return result
    }
    
    // n^-1 % m
    func moduloInverse(_ n: Int) -> Int {
        binaryExponentiation(n, mod-2) % mod
    }
    
    // (a * b) % m
    func modularMultiplication(_ a: Int, _ b: Int) -> Int {
        (a % mod * b % mod) % mod
    }
    
    // pow(a, b)
    func binaryExponentiation(_ a: Int, _ b: Int) -> Int {
        if b == 0 {
            return 1
        }
        let result = binaryExponentiation(a, b/2)
        if b % 2 == 1 {
            return modularMultiplication(a, modularMultiplication(result, result))
        } else {
            return modularMultiplication(result, result)
        }
    }
}
```