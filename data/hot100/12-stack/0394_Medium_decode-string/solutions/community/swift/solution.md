# Two stacks solution on Swift

**Author:** blackbirdNG
**Votes:** 5
**Link:** [https://leetcode.com/problems/decode-string/solutions/3040419/](https://leetcode.com/problems/decode-string/solutions/3040419/)

---


# Code
```
func decodeString(_ s: String) -> String {
    var intStack = [Int](), strStack = [String](), currentNum = Int(), currentString = String()
    for char in s {
        if char == "[" {
            strStack.append(currentString)
            intStack.append(currentNum)
            currentString = ""
            currentNum = 0
        } else if char == "]" {
            let num = intStack.removeLast()
            let prevString = strStack.removeLast()
            currentString = prevString + String(repeating: currentString, count: num)
        } else if let charNum = Int(String(char)) {
            currentNum = currentNum * 10 + charNum
        } else {
            currentString.append(String(char))
        }
    }
    return currentString
}
```
### Please upvote if the solution was useful!