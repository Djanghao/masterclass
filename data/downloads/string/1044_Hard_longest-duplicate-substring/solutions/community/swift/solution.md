# Swift Cyclic polynomial (Buzhash) Solution example

**Author:** alex-lev2312
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-duplicate-substring/solutions/706060/](https://leetcode.com/problems/longest-duplicate-substring/solutions/706060/)

---

https://en.wikipedia.org/wiki/Rolling_hash#Cyclic_polynomial
Using simple algorithm, standart Swfit ```hashValue``` without any own constant
```
class Solution {
    
    func longestDupSubstring(_ S: String) -> String {
        let aInt = Int(Character("a").asciiValue!)
        let arrayS = S.map { Int($0.asciiValue!) - aInt }
        var left = 0
        var right = arrayS.count - 1
        var maxString: ArraySlice<Int> = []

        while left <= right {
            
            let middle = left + (right - left) / 2
            if let ans = longestDupSubstring(arrayS, k: middle) {
                maxString = ans
                left = middle + 1
            } else {
                right = middle - 1
            }
        }
        return String(maxString.map { Character(UnicodeScalar($0 + aInt)!)} )
    }
    
    func longestDupSubstring(_ arrayS: [Int], k: Int) -> ArraySlice<Int>? {
        var set = Set<Int>()
        var allHash = hash(arrayS[0..<k])
        set.insert(allHash)

        for i in arrayS.startIndex+1...arrayS.endIndex - k {
            allHash = nextHash(allHash, next: arrayS[i+k-1], lenght: k, dropped: arrayS[i-1])

            if set.contains(allHash) {
                return arrayS[i..<k+i]
            } else {
                set.insert(allHash)
            }
        }
        return nil
    }
    
    func hash(_ chars: ArraySlice<Int>) -> Int {
        var value = 0
        let count = chars.count
        for i in chars.startIndex..<chars.endIndex {
            let c = chars[i]
            let index = i + chars.startIndex
            value ^= c.hashValue << (count - index - 1)
        }
        return value
    }
    
    func nextHash(_ hash: Int, next: Int, lenght: Int, dropped: Int) -> Int {
        let offset = lenght - 1
        return ((hash ^ (dropped.hashValue << offset)) << 1) ^ next.hashValue
    }
        
}
```