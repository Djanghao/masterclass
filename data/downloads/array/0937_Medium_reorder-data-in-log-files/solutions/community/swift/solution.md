# Swift solution using CharacterSet

**Author:** mkim1030
**Votes:** 1
**Link:** [https://leetcode.com/problems/reorder-data-in-log-files/solutions/1993092/](https://leetcode.com/problems/reorder-data-in-log-files/solutions/1993092/)

---

```
// Strategy:
// * identify whether the string is a letter-log, or digit-log
// * place into two separate arrays: letterLogs array and digitLogs array
// * sort letter logs array by content; if content is equal, sort by identifier
// * combine the two array (letterLogs array, now sorted) and return

class Solution {
    func reorderLogFiles(_ logs: [String]) -> [String] {
        var letterLogs = [String]()
        var digitLogs = [String]()
        
        // ~ O(n) time
        for log in logs {
            let components = log.components(separatedBy: " ")
            let identifier = components[0]
            let digits = CharacterSet.decimalDigits
            if CharacterSet.decimalDigits.isSuperset(of: CharacterSet(charactersIn: components[1])) {
                // digit logs
                digitLogs.append(log)
            } else if CharacterSet.lowercaseLetters.isSuperset(of: CharacterSet(charactersIn: components[1])) {
                // letter logs
                letterLogs.append(log)
            }
        }
        
        // ~ O(n log n) time
        letterLogs = letterLogs.sorted {
            // ~ O(n) time
            var components0 = $0.components(separatedBy: " ")
            let identifier0 = components0[0]
            components0.removeFirst()
            let content0 = components0.joined(separator: " ")
            
            var components1 = $1.components(separatedBy: " ")
            let identifier1 = components1[0]
            components1.removeFirst()
            let content1 = components1.joined(separator: " ")
            
            if content0 != content1 {
                return content0 < content1
            } else {
                return identifier0 < identifier1
            }
        }
        
        var stringArrayToReturn = [String]()
        stringArrayToReturn.append(contentsOf: letterLogs)
        stringArrayToReturn.append(contentsOf: digitLogs)
        
        return stringArrayToReturn
    }
}
```