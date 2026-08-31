# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4282005/](https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4282005/)

---

# Complexity
- Time complexity: $$O(n * log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func sortVowels(_ s: String) -> String {
        var vowels = [Character]()
        for ch in s where ch.isVowel {
            vowels.append(ch)
        }
        vowels.sort(by: >)

        var result = ""
        for ch in s {
            if ch.isVowel {
                result.append(vowels.removeLast())
            } else {
                result.append(ch)
            }
        }
        return result
    }
}

private extension Character {
    var isVowel: Bool {
        switch self.lowercased() {
        case "a", "e", "i", "o", "u": return true
        default: return false
        }
    }
}
```