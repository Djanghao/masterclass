# 317 ms solution

**Author:** wickedbuild
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/4907675/](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/4907675/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. Divisibility -> modulo, gcd, remainder approach, etc.
2. Pairs, Tuples -> optimize by filtering in as few steps as possible
3. Comparison -> optimize by reduction of compared groups


# Approach
<!-- Describe your approach to solving the problem. -->
1. Collect pair selection information: identity, frequency (in other cases, index for reference).
2. Iterate through identified groups (modulos) and confirm frequencies match with the paired group. In the case of the edge case (modulo = 0), a different check must be made.
3. Allocate return values.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n). The first step involves visiting each number in the input array in order to determine an associated modulo and update the frequency of that modulo, O(n). The final step requires only checking each modulo frequency with the pair frequency which is O(n), at worst.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Using a dictionary reduces the space complexity down to the max number of modulos possible: O(n), worst case scenario.

# Code
```
class Solution {
    func canArrange(_ arr: [Int], _ k: Int) -> Bool {
        
        // Constraints:
        // 1. array length is n
        // 2. n is between 1 and 10^5, inclusive
        // 3. n is even
        // 4. each item in the array is between -10^9 and 10^9, inclusive
        // 5. k is between 1 and 10^5, inclusive

        // Each item in the array will contain [modulo, index of numbers with this modulo]
        var modulos: [Int:Int] = [:]

        for num in arr {
            let modulo = (num % k) >= 0 ? (num % k) : (k + (num % k))
            if modulos.keys.contains(modulo) {
                modulos[modulo]! += 1
            } else {
                modulos[modulo] = 1
            }
        }

        if modulos.keys.contains(0) {
            guard (modulos[0]! % 2) == 0 else { return false }
            modulos[0] = nil
        }
        
        for modulo in modulos.keys {
            let moduloPair = k - modulo
            if modulos.keys.contains(moduloPair) {
                if modulos[modulo] != modulos[moduloPair] {
                    return false
                }
            } else {
                return false
            }
        }
        return true
    }
}
```