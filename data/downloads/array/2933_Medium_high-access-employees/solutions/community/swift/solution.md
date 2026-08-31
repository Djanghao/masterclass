# HashMap + Sort

**Author:** ogremergo
**Votes:** 1
**Link:** [https://leetcode.com/problems/high-access-employees/solutions/4278469/](https://leetcode.com/problems/high-access-employees/solutions/4278469/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
For the sorted timestamps, check if the times[i..j] are within one hour or not.

# Code
```
class Solution {
    func findHighAccessEmployees(_ access_times: [[String]]) -> [String] {
        var employers = [String: [Int]]()
        
        for entry in access_times {            
            employers[entry[0], default: []].append(convertToMinutes(entry[1]))
        }
        
        for (employee, _) in employers {
            employers[employee]?.sort()
        }
        
        return employers.compactMap { (employee, times) -> String? in
            guard times.count >= 3 else {
                return nil
            }
            
            for i in 0..<(times.count - 2) {
                if times[i + 2] - times[i] < 60 {
                    return employee
                }
            }
            
            return nil
        }
    }
    
    func convertToMinutes(_ time: String) -> Int {
        let hour = Int(time.prefix(2)) ?? 0
        let minutes = Int(time.suffix(2)) ?? 0
        return hour * 60 + minutes
    }
}

```