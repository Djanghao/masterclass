# Swift Solution

**Author:** jayantsogikar
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/660761/](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/660761/)

---

```
func hasAllCodes(_ s: String, _ k: Int) -> Bool {
    let s = Array(s)
    guard s.count > k else{return false}
    var dict : [String : Int] = [:]
    for i in 0...s.count-k{
        if dict[String(s[i..<i+k])] == nil{
            dict[String(s[i..<i+k])] = 1
        }
    }
    return dict.count == Int(pow(2, Double(k)))
}
```