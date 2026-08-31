# Beats 90% (Simple + Explanation)

**Author:** ProbablyLost
**Votes:** 4
**Link:** [https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/4185996/](https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/4185996/)

---

# Intuition
Use two pointers to swap vowels.
# Approach
Traverse the array from both ends `(left, right)`, and only perform swap when two characters are vowels. Otherwise, move a step (forward or backward).

**Note**: when only a single vowel is found at any instant, no swap occurs. Its pointer remains at that vowel and the other pointer moves until a swap occurs or the loop is exited.
# Complexity
- Time complexity:
$$O(n)
$$
- Space complexity:
$$O(1)
$$
# Code
```
class Solution {
    func reverseVowels(_ s: String) -> String {
        var s = Array(s)
        let vowels: Set<Character> = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

        var leftPointer = 0
        var rightPointer = s.count - 1

        while leftPointer < rightPointer {
            if vowels.contains(s[leftPointer]) && vowels.contains(s[rightPointer]) {
                s.swapAt(leftPointer, rightPointer)
                leftPointer += 1
                rightPointer -= 1
            } else if vowels.contains(s[leftPointer]) {
                rightPointer -= 1
            } else if vowels.contains(s[rightPointer]) {
                leftPointer += 1
            } else {
                leftPointer += 1
                rightPointer -= 1
            }
        }

        return String(s)
    }
}

```