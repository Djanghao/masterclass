# Simple O(n) solution with explanation

**Author:** patrickpaky
**Votes:** 0
**Link:** [https://leetcode.com/problems/shifting-letters/solutions/4888780/](https://leetcode.com/problems/shifting-letters/solutions/4888780/)

---

# Intuition
Firstly we may come up with a brute force solution, following the instruction and shift the first i + 1 characters in s for each integer in shifts, which lead to a solution with time complexity O(n ^ 2).

Then we can see that we can obtain the total number of shift for each character by looping through shifts once.


# Approach
Converting all alphabets in s to a corresponding index, add the total number of shift and keep the character index stay within the bound. Finally map the index to character and return the result.

# Complexity
- Time complexity: O(n), where n is the length of s.

- Space complexity: O(n), as we store the converted index and characters of s.

# Code
```
class Solution {
    func shiftingLetters(_ s: String, _ shifts: [Int]) -> String {
        // Time complexity: O(n), as we loop through all character of s, all shifts separately

        // converting the letter in s to index, and shift them accordingly
        let alphabetIndex: [Character: Int] = zip("abcdefghijklmnopqrstuvwxyz", 0..<26).reduce(into: [:]) { $0[$1.0] = $1.1 }
        let indexToAlphabet: [Int: Character] = zip(0..<26, "abcdefghijklmnopqrstuvwxyz").reduce(into: [:]) { $0[$1.0] = $1.1 }

        let sArrayIndex: [Int] = Array(s).map { alphabetIndex[$0]! }
        // for each shift, shift the FIRST i + 1 letters of s
        // loop through shift and find the total shift of each alphabet
        var totalShifts: [Int] = shifts
        // when shifts.count == 1, nothing to add
        if totalShifts.count > 1 {
            for index in stride(from: shifts.count - 2, through: 0, by: -1) {
                totalShifts[index] = totalShifts[index + 1] + totalShifts[index]
            }
        }

        var resultAlphabets: [Character] = []
        for index in 0..<sArrayIndex.count {
            var newIndex: Int = sArrayIndex[index] + totalShifts[index]
            if newIndex > 25 { // 26 -> 0, 27 -> 1, ...
                newIndex = newIndex % 26
            }

            guard let alphabet = indexToAlphabet[newIndex] else { continue }
            resultAlphabets.append(alphabet)
        }

        return String(resultAlphabets)
    }
}
```

Feel free to let me know if you find anything incorrect ;) Nice day.