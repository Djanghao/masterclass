# ✔️ 100% Fastest Swift Solution, time: O(n + m), space: O(n + m).

**Author:** sergeyleschev
**Votes:** 22
**Link:** [https://leetcode.com/problems/add-binary/solutions/1915690/](https://leetcode.com/problems/add-binary/solutions/1915690/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(n + m), where n is the length of the a and m is the length of the b.
    //   - space: O(n + m), where n is the length of the a and m is the length of the b.

    func addBinary(_ a: String, _ b: String) -> String {
        guard !a.isEmpty else { return b }
        guard !b.isEmpty else { return a }

        var carry = 0
        let a = Array(a)
        let b = Array(b)
        var i = a.count - 1
        var j = b.count - 1
        var ans = [Int]()

        while i >= 0 || j >= 0 || carry != 0 {
            var sum = carry
            if i >= 0, a[i] == "1" { sum += 1 }
            if j >= 0, b[j] == "1" { sum += 1 }

            let digit = sum % 2
            carry = sum / 2
            ans.append(digit)

            i -= 1
            j -= 1
        }

        return ans.map { String($0) }.reversed().joined()
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.