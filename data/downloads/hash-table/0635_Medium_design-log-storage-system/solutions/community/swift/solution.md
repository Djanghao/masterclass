# [Swift] Solution via comparing strings

**Author:** alptekin35
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-log-storage-system/solutions/548691/](https://leetcode.com/problems/design-log-storage-system/solutions/548691/)

---

```
class LogSystem {

    var times:[(String,String)] = []
    var units:[String:Int] = ["Year":0, "Month":1, "Day":2, "Hour":3, "Minute":4, "Second":5]
    var indeces = [4,7,10,13,16,19]
    
    init() {
        
    }
    
    func put(_ id: Int, _ timestamp: String) {
        times.append((id.description, timestamp))
    }
    
    func retrieve(_ s: String, _ e: String, _ gra: String) -> [Int] {
        var list:[Int] = []
        let idx = indeces[units[gra]!]
        let arr1 = Array(s)
        let arr2 = Array(e)
        let val1 = String(arr1[0..<idx])
        let val2 = String(arr2[0..<idx])

        for time in times{
            let id = time.0
            let chars = Array(time.1)
            let val = String(chars[0..<idx])
            if ((val.compare(val1) == .orderedDescending) ||  (val.compare(val1) == .orderedSame)) && ((val.compare(val2) == .orderedAscending) ||  (val.compare(val2) == .orderedSame)){
                list.append(Int(id)!)
            }
        }
        return list
    }
}
```