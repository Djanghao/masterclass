# Swift solution w/ reduce

**Author:** djpropah
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-vowels-from-a-string/solutions/6086503/](https://leetcode.com/problems/remove-vowels-from-a-string/solutions/6086503/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func removeVowels(_ s: String) -> String {
        return s.reduce("") {   
            switch $1 {
                case "a","e","i","o","u":
                    $0
                default:
                    $0 + String($1) 
            }

        }
    }
}
```