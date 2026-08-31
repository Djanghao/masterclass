# Swift Solution w/ Comments: O(maxLength)

**Author:** wfbarksdale
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-good-binary-strings/solutions/3882344/](https://leetcode.com/problems/number-of-good-binary-strings/solutions/3882344/)

---

O(n) space O(n) time

it seems like this approach was in fact optimal? It seems like there should be a closed form solution though.

# Code
```
class Solution {
    // First Pass: very doubtful this is optimal but i'm going to start by trying a 
    // dynamic programming approach and then see if some math falls out that can make this O(1)
    func goodBinaryStrings(_ minLength: Int, _ maxLength: Int, _ oneGroup: Int, _ zeroGroup: Int) -> Int {
        var combos = Array(repeating: 0, count: maxLength + 1)
        combos[0] = 1 
        let modulus = 1_000_000_007
        for i in 1...maxLength {
            var combosEndingAtI = 0
            if i >= oneGroup {
                combosEndingAtI += combos[i-oneGroup]
            }
            if i >= zeroGroup {
                combosEndingAtI += combos[i-zeroGroup]
            }

            combosEndingAtI %= modulus
            combos[i] = combosEndingAtI
        }

        // sum all the possible combinations with a length between min and max length
        var sum = 0
        for value in combos[minLength..<maxLength+1]{
            sum += value
            sum %= modulus
        }

        return sum
    }
}
```