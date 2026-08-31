# Swift solution with comments. Beats 100% on time and space. Functional programming

**Author:** nanosem
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-keypresses/solutions/4137968/](https://leetcode.com/problems/minimum-number-of-keypresses/solutions/4137968/)

---

# Intuition
The key insight is to prioritize characters with a higher frequency of occurrences by assigning them to smaller positions possible. The strategy minimizes the number of keypresses required for typing the entire string.

# Complexity
- Time complexity:
$$O(n)$$ to go through each character on the first reduce call. Then we perform all the operations on constant (max 26) elements each time.

- Space complexity:
$$O(1)$$. Since we store max of 26 characters in HashMap.

# Code
```
class Solution {
    func minimumKeypresses(_ s: String) -> Int {
        /// Calculate the number of times each character occurs.
        s.reduce(into: [Character: Int]()) {
            $0[$1, default: 0] += 1
        }
        /// Get only the values (character counts).
        .map { $0.value }
        /// Sort the counts in descending order.
        /// The more times a character occurs, the closer its position should be on the key.
        .sorted(by: >)
        /// Enumerate to know the index of each character's count.
        .enumerated()
        /// Calculate the result.
        .reduce(0) {
            /// The number of keypresses calculated by dividing the index by the number of buttons plus one.
            let presses = ($1.0 / 9) + 1
            /// The result is the current number plus the number of times to type each character times the number of keypresses needed.
            return $0 + $1.1 * presses
        }
    }
}
```