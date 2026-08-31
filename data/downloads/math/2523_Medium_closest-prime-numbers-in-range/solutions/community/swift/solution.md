# Passed with 100% time / space Swift solution

**Author:** yyao8
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/5610714/](https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/5610714/)

---

# Code
```
class Solution {
    func closestPrimes(_ left: Int, _ right: Int) -> [Int] {
        guard right - left > 1 else { return [-1, -1] }
        var results = [(diff: Int, num1: Int, num2: Int)]()
        var test = left % 2 == 0 ? left + 1 : left
        var prevPrime: Int?
        var smallest = Int.max
        while test <= right {
            guard test.isPrime else {
                test += (test < 5 ? 1 : 2)
                continue
            }
            guard let p = prevPrime else {
                prevPrime = test
                test += (test < 5 ? 1 : 2)
                continue
            }
            let diff = test - p
            if diff == 2 || diff == 1 { return [p, test] }
            smallest = min(smallest, diff)
            results.append((diff, p, test))
            prevPrime = test
            test += (test < 5 ? 1 : 2)
        }
        // print("\\(results)")

        let filtered = results.filter { $0.diff == smallest }.map { [$0.num1, $0.num2] }
        return filtered.isEmpty ? [-1, -1] : filtered.sorted { $0.lexicographicallyPrecedes($1) }.first!
    }
}

extension Int {
    // this is easier to understand
    // var isPrime: Bool {
    //     guard self >= 4 else { return self > 1 }
    //     var max = Int(Double(self).squareRoot())
    //     if max % 2 == 0 { max += 1 }
    //     for i in stride(from: 3, through: max, by: 2) {
    //         if self % i == 0 { return false }
    //     }
    //     return true
    // }

    // By observing the pattern of prime numbers, we can see that all prime numbers greater than 3 can be written in the form of 6k \xB1 1, where k is a positive integer.
    // So we can check the divisibility of the number by 6k \xB1 1 up to the square root of the number.
    var isPrime: Bool {
        // <= 4, only 2 and 3 are prime
        guard self >= 4 else { return self > 1 }
        // This is to check if the number is divisible by 2 or 3. Needed prior to the loop because the loop starts from 5.
        if self % 2 == 0 || self % 3 == 0 { return false }
        var max = Int(ceil(Double(self).squareRoot()))
        for i in stride(from: 5, through: max, by: 6) {
            // % i is to check 6k - 1, % (i + 2) is to check 6k + 1
            if self % i == 0 || self % (i + 2) == 0 { return false }
        }
        return true
    }
}
