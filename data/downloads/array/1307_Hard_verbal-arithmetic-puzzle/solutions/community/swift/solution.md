# [Swift] backtracking

**Author:** heva
**Votes:** 0
**Link:** [https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/1388369/](https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/1388369/)

---

Idea ref: https://leetcode.com/problems/verbal-arithmetic-puzzle/discuss/463916/C%2B%2B-12ms-DFS-and-Backtracking-and-Prunning-Strategy

This solution is kind of swift version of above idea.
where I also add some small changes to cover all edge cases of leading zeros:

```swift
class Solution {
    // record which number will be map to which char
    var indexArr: [Character?] = Array(repeating: nil, count: 10)
    // record char is map to which interger
    var charMap = [Character: Int]()
    
    func isSolvable(_ words: [String], _ result: String) -> Bool {
        for word in words {
            if word.count > result.count {
                return false
            }
        }
        
        // reverse for checking from least significant digit to larger one
        var words = words.map { $0.reversed() }.map{ Array($0) }
        var result = Array(result.reversed())
                
        return check(0, 0, 0, words, result)
    }
    
    // words index
    // words[index] digit
    func check(_ index: Int, _ digit: Int, _ sum: Int, 
               _ words: [[Character]], _ result: [Character]) -> Bool {
        if digit == result.count { 
            var val = sum == 0
            if val {
                // double check words and result leading zero
                for word in words {
                    if word.count > 1, word.last == indexArr[0] {
                        return false
                    }
                }
                if result.count > 1, result.last == indexArr[0] {
                    return false
                }
                // print(indexArr)
                return true
            }
            return false
        }
        
        if index == words.count {
            if let val = charMap[result[digit]] {
                if sum % 10 == val {
                    return check(0, digit+1, sum/10, words, result)
                }
            } else if indexArr[sum % 10] == nil {
                if digit == result.count-1, sum % 10 == 0 { 
                    // cannot assign leading 0 to result 
                    return false 
                }
                
                charMap[result[digit]] = sum % 10
                indexArr[sum % 10] = result[digit]
                
                if check(0, digit+1, sum / 10, words, result) {
                    // print(indexArr)
                    return true
                }
                
                charMap[result[digit]] = nil
                indexArr[sum % 10] = nil
            }
            return false
        }
        
        // check next word
        if digit >= words[index].count {
            return check(index+1, digit, sum, words, result)
        }
        
        if let val = charMap[words[index][digit]] {
            return check(index+1, digit, sum+val, words, result)
        }
        
        for i in 0...9 {
            if indexArr[i] != nil { continue }
            
            // can not assign leading zero to one string, reversed string, 
            // check n-1 would be okay
            if i == 0, digit == words[index].count-1, words[index].count > 1 {
                continue
            }
            
            indexArr[i] = words[index][digit]
            charMap[words[index][digit]] = i
            
            if check(index+1, digit, sum+i, words, result) {
                return true
            }
            
            indexArr[i] = nil
            charMap[words[index][digit]] = nil
        }
        return false
    }
}
```