# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/4164979/](https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/4164979/)

---

```
class Solution {
    func checkPalindromeFormation(_ a: String, _ b: String) -> Bool {

        func check(_ a: Array<Character>, _ b: Array<Character>) -> Bool {

            func pal(_ i: Int, _ s: Array<Character>) -> Bool {
                guard i < s.count / 2 else { return true }

                for j in i..<s.count / 2
                    where s[j] != s[s.count - j - 1] {
                        return false
                    }
                
                return true
            }

            let i = (0..<a.count / 2)
                .lazy
                .first { (i: Int) -> Bool in a[i] != b[a.count - i - 1] } ?? a.count / 2
            
            return pal(i, a) || pal(i, b)
        }

        let a = Array(a)
        let b = Array(b)

        return check(a, b) || check(b, a)
    }
}
```