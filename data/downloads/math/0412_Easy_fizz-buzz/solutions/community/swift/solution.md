# 🧩 Swift || Simple switch-case solution 29ms

**Author:** jazzdiluffy
**Votes:** 15
**Link:** [https://leetcode.com/problems/fizz-buzz/solutions/1903854/](https://leetcode.com/problems/fizz-buzz/solutions/1903854/)

---

```
class Solution {
    func fizzBuzz(_ n: Int) -> [String] {
        var output: [String] = []
        for num in 1...n {
            switch (num%3, num%5) {
            case (0, 0): output.append("FizzBuzz")
            case (0, _): output.append("Fizz")
            case (_, 0): output.append("Buzz")
            default: output.append(String(num))
            }
        }
        return output
    }
}
```