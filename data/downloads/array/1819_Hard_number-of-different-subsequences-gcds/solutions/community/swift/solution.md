# Swift Acceptable Solution

**Author:** heva
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-different-subsequences-gcds/solutions/1141567/](https://leetcode.com/problems/number-of-different-subsequences-gcds/solutions/1141567/)

---

Well, I tried lots of implementation but they got TLE \uD83D\uDE22 ( Though the same logic passed in other language ... 

Here is one passable solution I found ... 

Idea here is quite simple:
- check each number in [0...200000] too see if this can be a valid common gcd for nums

```
class Solution {
    func countDifferentSubsequenceGCDs(_ nums: [Int]) -> Int {
        let n = nums.count
        if n == 1 { return 1 }

        let size = 200001
        var factor = Array(repeating: false, count: size)
        for num in nums {
            factor[num] = true
        }

        var valid = 0
        for i in 1..<size {
            var f = 0

            // check all number with factor i
            var x = i
            while f != i, x < size{
                if factor[x] {
                    f = getGCD(f, x)
                }
                x += i
            }

            // factor i can be common gcd in nums
            if f == i {
                valid += 1
            }
        }

        return valid
    }

    // get gcd of a, b
    func getGCD(_ a: Int, _ b: Int) -> Int {
        var t = 0
        var a = a
        var b = b
        while b != 0 {
            t = a
            a = b
            b = t % b
        }

        return a
    }
}
```