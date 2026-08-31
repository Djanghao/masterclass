# ✅ O(n) | Two Optimal Approaches | Bitmasking & Set

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/vowels-game-in-a-string/solutions/5539825/](https://leetcode.com/problems/vowels-game-in-a-string/solutions/5539825/)

---

# Solutions
##### #1
```
1. Masking through vowels ascii-to-binary codes
2. Checking the first non-zero match to early exit the iteration

a: 97 & (~96) = 97 & (255 - 96) = 97 & 159 = 1

Bitkshift values:
1 << 1  = 2
1 << 5  = 32
1 << 9  = 512
1 << 15 = 32768
1 << 32 = 2097152

Summing these over a 32-bit mask:
2 | 32 | 512 | 32768 | 2097152 = 2130466

2130466 represents the bitmask for positions corresponding to vowels 
(a, e, i, o, u) based on their ASCII values
```
```swift
struct Solution {
    @_optimize(speed)
    func doesAliceWin(_ s: String) -> Bool {
        s.utf8CString
         .lazy
         .dropLast()
         .compactMap(Int.init)
         .first {  
            (1 << ($0 & ~96)) & 2130466 != 0
         } != nil
    }
}
```

#### #2
```
1. Checking the first vowel appearence in the sequence
2. Early exiting traversal if match is successfull
```
```swift
struct Solution {
    @_optimize(speed)
    func doesAliceWin(_ s: String) -> Bool {
        let vowels = Set<Character>(["a","e","i","o","u"])
        return s.first { vowels.contains($0) } != nil
    }
}
```