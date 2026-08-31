# [Swift] With recursion. Solved after 4-5 hours, and its not easy.

**Author:** evkobak
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-nice-substring/solutions/1515286/](https://leetcode.com/problems/longest-nice-substring/solutions/1515286/)

---

```
class Solution {
    func longestNiceSubstring(_ s: String) -> String {
        
        var result = [s]
        var prevResult = [String]()
        
        func recursion(arrays: [String]) -> String{

            if arrays.count == 0 {
                return ""
            }

            if prevResult == arrays {
                var answer = ""
                for each in prevResult {
                    if each.count > answer.count {
                        answer = each
                    }
                }
                return answer
            } else {
                prevResult = result
                result = []
            }

            arrays.forEach{

                let setOfString = Set($0)
                var stopChars = ""
                setOfString.forEach{

                    if $0.isLowercase && !setOfString.contains(Character($0.uppercased())) {
                        stopChars.append($0)
                    } else if $0.isUppercase && !setOfString.contains(Character($0.lowercased())) {
                        stopChars.append($0)
                    }
                }

                var newString = $0
                stopChars.forEach{
                    newString = newString.replacingOccurrences(of: String($0), with: " ")
                }

                result += newString.split(separator: " ").map { String($0) }
            }

            return recursion(arrays: result)
        }

        return recursion(arrays: result)
    }
}
```