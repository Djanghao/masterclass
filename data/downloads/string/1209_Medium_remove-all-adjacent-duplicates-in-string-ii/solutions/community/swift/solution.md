# Swift solution

**Author:** yamironov
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/1161104/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/1161104/)

---

Swift solution
```
class Solution {
    func removeDuplicates(_ s: String, _ k: Int) -> String {
        var stack = [(char: Character, count: Int)]()
        for char in s {
            if !stack.isEmpty && stack.last!.char == char {
                if stack.last!.count == k - 1 {
                    stack.removeLast()
                } else {
                    stack[stack.count - 1] = (char, stack.last!.count + 1)
                }
            } else {
                stack.append((char, 1))
            }
        }
        return stack.reduce(into: String(), { $0 += String(repeating: $1.char, count: $1.count) })
    }
}
```