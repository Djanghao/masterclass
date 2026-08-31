# Swift | One liner | Beats 100%

**Author:** iosdevzone
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-common-factors/solutions/3827003/](https://leetcode.com/problems/number-of-common-factors/solutions/3827003/)

---



# Complexity
- Time complexity: $$O(min(a,b))$$
- Space complexity: $$O(1)$$

# Code
```
class Solution {
    func commonFactors(_ a: Int, _ b: Int) -> Int {
        (1...min(a,b)).reduce(0) { (a % $1 == 0 && b % $1 == 0) ? $0 + 1 : $0} }        
}
```