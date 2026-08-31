# swift beats 100%

**Author:** Zhanadilll
**Votes:** 0
**Link:** [https://leetcode.com/problems/simplified-fractions/solutions/5018283/](https://leetcode.com/problems/simplified-fractions/solutions/5018283/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func simplifiedFractions(_ n: Int) -> [String] {
        var res = [String]()

        var k = 1
        while k < n {
            for i in 2...n {
               let d = gcd(i, k);
               let i2  = i / d;
               let k2 = k / d;

               if res.contains("\\(k2)/\\(i2)") || k >= i { continue }
               res.append("\\(k2)/\\(i2)")
            }
            k += 1
        }

        return res
    }

    func gcd(_ a: Int, _ b: Int) -> Int {
       let r = a % b
       if r != 0 {
          return gcd(b, r)
       } else {
          return b
       }
    }
}
```