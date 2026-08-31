# Swift 🚫GCD

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5127510/](https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5127510/)

---

**Brute Force w/ sorted strings (accepted answer)**
\u26A0\uFE0F - Don't use GCD! They fail with "aabb". Leetcode testcases not robust; creating false positives. 
```
class Solution {
  func minAnagramLength(_ s: String) -> Int {
    let s = Array(s)
    for n in 1...(s.count+1)/2 where s.count%n == 0 {
      let match = s[0..<n].sorted()
      if (1..<s.count/n).allSatisfy{i in match == s[i*n..<(i+1)*n].sorted()} {
        return n
      } 
    }
    return s.count
  }
}
```
**ALT: Brute Force with freq maps (accepted answer)**
```
class Solution {
  func minAnagramLength(_ s: String) -> Int {
    let s = Array(s)
    for n in 1...(s.count+1)/2 where s.count%n == 0 {
      let match = Dictionary(s[0..<n].map{($0,1)}){$0+$1}
      if (1..<s.count/n).allSatisfy{i in match == Dictionary(s[i*n..<(i+1)*n].map{($0,1)}){$0+$1}} {
        return n
      } 
    }
    return s.count
  }
}
```