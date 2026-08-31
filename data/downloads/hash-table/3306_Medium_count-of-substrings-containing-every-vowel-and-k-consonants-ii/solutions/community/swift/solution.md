# Sliding window - at least k and invert - T: O(n), S: O(1)

**Author:** krishnamurthyb
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5847401/](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5847401/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Its clearly a sliding window problem. But the main insights are:
1) Identify that we can convert exactly k as: at least k - atleast k+1
2) We need to invert and solve for the at least k problems


# Approach
<!-- Describe your approach to solving the problem. -->
Standard sliding window template


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
```swift []
class Solution {
    func countOfSubstrings(_ word: String, _ k: Int) -> Int {
        let word = Array(word), n = word.count

        func atLeast(_ c: Int) -> Int {
            var reqVowelFreqs: [Character: Int] = ["a": 1, "e": 1, "i": 1, "o": 1, "u": 1], reqConsonantFreq = c
            var unsatisfiedConstraints = (c != 0 ? 6 : 5)
            var i = 0, nonSatisfyingSubstrings = 0
            for j in 0..<n {
                let cj = word[j]
                if reqVowelFreqs[cj] != nil {
                    reqVowelFreqs[cj]! -= 1
                    if reqVowelFreqs[cj] == 0 {
                        unsatisfiedConstraints -= 1
                    }
                } else {
                    reqConsonantFreq -= 1
                    if reqConsonantFreq == 0 {
                        unsatisfiedConstraints -= 1
                    }
                }
                while unsatisfiedConstraints == 0 {
                    let ci = word[i]
                    if reqVowelFreqs[ci] != nil {
                        reqVowelFreqs[ci]! += 1
                        if reqVowelFreqs[ci] == 1 {
                            unsatisfiedConstraints += 1
                        }
                    } else {
                        reqConsonantFreq += 1
                        if reqConsonantFreq == 1 {
                            unsatisfiedConstraints += 1
                        }
                    }
                    i += 1
                }
                nonSatisfyingSubstrings += j-i+1
            }
            return n*n - nonSatisfyingSubstrings
        }

        return atLeast(k) - atLeast(k+1)
    }
}
```