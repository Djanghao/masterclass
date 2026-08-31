# radix 2

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/5167274/](https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/5167274/)

---


```
class Solution {
    func queryString(_ s: String, _ n: Int) -> Bool {
        for num in 1...n {
            let stringNum = String(num, radix: 2)
            if !s.contains(stringNum) {
                return false 
            }
        }
        return true 
    }
}
```