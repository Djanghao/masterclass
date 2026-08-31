# Swift solution, boolean array

**Author:** ADinic
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-bold-tag-in-string/solutions/1032694/](https://leetcode.com/problems/add-bold-tag-in-string/solutions/1032694/)

---

``` swift
class Solution {

    func addBoldTag(_ s: String, _ dict: [String]) -> String {
        guard !s.isEmpty else { return "" }
        let s = Array(s)
        let n = s.count
        var mask = [Bool](repeating: false, count: n)
        
        for i in 0..<n {
            search: for word in dict {
                for (k, w) in word.enumerated() {
                    guard k+i >= n || s[k+i] != w else { continue }
                    continue search
                }
                for j in i..<i+word.count {
                    mask[j] = true
                }
            }
        }
                
        var ans = [String]()
        for i in 0..<n {
            if mask[i], (i == 0 || !mask[i-1]) {
                ans.append("<b>")
            }
            ans.append(String(s[i]))
            if mask[i], (i == n-1 || !mask[i+1]) {
                ans.append("</b>")
            }
        }
        return ans.joined()
    }

}
```