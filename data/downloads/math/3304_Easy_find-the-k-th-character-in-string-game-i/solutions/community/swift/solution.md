# Swift: O(1) time and space

**Author:** haoxinli
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/5872138/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/5872138/)

---

# Intuition
Turns out this is a search problem. Realized this when I am writing testing cases k=1~8.

# Approach
Simply count the number of 1's in the binary representation of (k - 1), then map it back to the 0-25 mapping of a-z.

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```swift []
class Solution {
    func kthCharacter(_ k: Int) -> Character {
        var adjustedK = k - 1
        var numberOf1InAdjustedK = 0
        
        while adjustedK > 0 {
            numberOf1InAdjustedK += adjustedK % 2
            adjustedK /= 2
        }
        
        return numberOf1InAdjustedK.asCharacter
    }
}

fileprivate extension Int {
    var asCharacter: Character {
        switch self % 26 {
        case 0: return "a"
        case 1: return "b"
        case 2: return "c"
        case 3: return "d"
        case 4: return "e"
        case 5: return "f"
        case 6: return "g"
        case 7: return "h"
        case 8: return "i"
        case 9: return "j"
        case 10: return "k"
        case 11: return "l"
        case 12: return "m"
        case 13: return "n"
        case 14: return "o"
        case 15: return "p"
        case 16: return "q"
        case 17: return "r"
        case 18: return "s"
        case 19: return "t"
        case 20: return "u"
        case 21: return "v"
        case 22: return "w"
        case 23: return "x"
        case 24: return "y"
        case 25: return "z"
        default: fatalError()
        }
    }
}

```