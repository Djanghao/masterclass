# Simple Swift Solution Using Dictionary

**Author:** jayantsogikar
**Votes:** 5
**Link:** [https://leetcode.com/problems/destination-city/solutions/616189/](https://leetcode.com/problems/destination-city/solutions/616189/)

---

```
    func destCity(_ paths: [[String]]) -> String {
    var dict : [String : String] = [:]
    for path in paths{
        dict[path[0]] = path[1]
    }
    for val in dict.values{
        if dict[val] == nil{
            return val
        }
    }
    return ""
        
    }
```