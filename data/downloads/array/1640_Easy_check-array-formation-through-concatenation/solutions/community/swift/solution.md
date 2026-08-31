# Swift | Using Dictionary

**Author:** jayantsogikar
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/918482/](https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/918482/)

---

```
func canFormArray(_ arr: [Int], _ pieces: [[Int]]) -> Bool {
    var dict : [Int:Int] = [:]
    for i in 0..<pieces.count{
        dict[pieces[i][0]] = i
    }
    var i = 0
    while i < arr.count{
        if dict[arr[i]] == nil{
            return false
        }
        let a = pieces[dict[arr[i]]!]
        for j in 0..<a.count{
            if arr[i] != a[j]{
                return false
            }
            i += 1
        }
    }
    return true
}
```