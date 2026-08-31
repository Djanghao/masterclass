# Well defined with bitmask. Beats 100%. O(N^2 * 2^N).

**Author:** Alexanderwsz
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/5409145/](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/5409145/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Find all subpalindromes.
Traverse subpalindromes
---- if pair.isDisjoint
-------- currentProduct = length1 * length2
-------- currentMax = (maxProduct, currentProduct)
return maxProduct


# Complexity
- Time complexity: O(N^2 * 2^N).
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(2^N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

Upvotes appreciated. Happy coding.
# Code
```
class Solution {
    func maxProduct(_ s: String) -> Int {
        func areDisjoint(_ mask1: Int, _ mask2: Int) -> Bool { mask1 & mask2 == 0 }

        func subPalindromes(_ characters: [Character]) -> [(Int, Int)] {
            func isPalindrome(_ array: [Character]) -> Bool {
                for i in 0..<(array.count / 2) where array[i] != array[array.count - 1 - i] { return false }
                return true
            }

            var palindromicSubsequences = [(Int, Int)]()
            let number = characters.count
            (1..<(1 << number)).forEach { mask in
                var subWord = [Character]()
                for i in 0..<number where (mask & (1 << i)) != 0 { subWord.append(characters[i]) }
                if isPalindrome(subWord) {
                    palindromicSubsequences.append((mask, subWord.count)) 
                }
            }
            return palindromicSubsequences
        }

        let characters = Array(s)
        var maxProduct = 0
        guard !characters.isEmpty else { return maxProduct }
        let palindromicSubsequences = subPalindromes(characters)
        let count = palindromicSubsequences.count
        (0..<count).forEach { i in
            ((i + 1)..<count).forEach { j in
                let (mask1, lenght1) = palindromicSubsequences[i]
                let (mask2, lenght2) = palindromicSubsequences[j]
                if areDisjoint(mask1, mask2) { maxProduct = max(maxProduct, lenght1 * lenght2) }
            }
        }
        
        return maxProduct
    }
}

```