# Swift - prefix sum

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/6024844/](https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/6024844/)

---

# Code
```swift []
class Solution {
    func vowelStrings(_ words: [String], _ queries: [[Int]]) -> [Int] {
        guard words.count > 0 && queries.count > 0 else { return [] }
        var vowels: Set<Character> = Set(Array("aeiou"))
        //prefix num word count
        var prefixCount = words.map { word in 
            guard word.count > 0 else { return 0 }
            return vowels.contains(word.first!) && vowels.contains(word.last!) ? 1 : 0
        }

        for i in 1..<words.count {
            prefixCount[i] += prefixCount[i-1]
        }

        //now prefixCount will tell exactly how many vowel words are there till ith index
        
        var result = [Int]()
        for query in queries {
            let (left, right) = (query[0], query[1])
            var ans = 0

            if left == 0 {
                ans = prefixCount[right]
            } else {
                ans = prefixCount[right] - prefixCount[left - 1] //left - 1 to include words at index left as well
            }

            result.append(ans)
        }

        return result
    }
}
```