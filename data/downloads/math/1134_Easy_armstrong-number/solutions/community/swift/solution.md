# Easy solution by extracting digits

**Author:** rohity821
**Votes:** 0
**Link:** [https://leetcode.com/problems/armstrong-number/solutions/6097280/](https://leetcode.com/problems/armstrong-number/solutions/6097280/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

Armstrong number - The k-digit number n is an Armstrong number if and only if the kth power of each digit sums to n
So by this we have to extract a digit from the given number and calculate it to the power of  the total number of digits

for example 
1634 = 1 * 1 * 1 * 1 + 6 * 6 * 6 * 6 + 3 * 3 * 3 * 3 + 4 * 4 * 4 * 4

we can extract digits one by one by calculating remainder. 

# Complexity
- Time complexity: O (LogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func isArmstrong(_ n: Int) -> Bool {
        let digits = String(n)
        var duplicate = n
        var sum = 0
        while duplicate != 0 {
            let num = duplicate % 10
            duplicate /= 10
            sum += Int(pow(Double(num), Double(digits.count)))
        }
        return sum == n
    }
}
```