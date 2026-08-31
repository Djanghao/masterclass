# Swift solution

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/solutions/1079865/](https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/solutions/1079865/)

---

Swift solution
```
class Solution {
    let alphabet = 26
    private func translate(_ s: String) -> [Int] {
        Array(s).reduce(into: [Int](repeating: 0, count: alphabet), { $0[Int($1.asciiValue ?? 97) - 97] += 1 })
    }
    func minCharacters(_ a: String, _ b: String) -> Int {
        let a = translate(a), b = translate(b)
        var al2r = [Int](repeating: 0, count: alphabet), ar2l = al2r, bl2r = al2r, br2l = al2r, result = Int.max
        for i in 1..<alphabet {
            al2r[i] = al2r[i - 1] + a[i - 1]
            bl2r[i] = bl2r[i - 1] + b[i - 1]
            ar2l[alphabet - 1 - i] = ar2l[alphabet - i] + a[alphabet - i]
            br2l[alphabet - 1 - i] = br2l[alphabet - i] + b[alphabet - i]
        }
        for i in 0..<alphabet {
            let condition1 = i < alphabet - 1 ? ar2l[i] + bl2r[i + 1] : Int.max
            let condition2 = i < alphabet - 1 ? br2l[i] + al2r[i + 1] : Int.max
            let condition3 = al2r[i] + ar2l[i] + bl2r[i] + br2l[i]
            result = min(result, condition1, condition2, condition3)
        }
        return result
    }
}
```