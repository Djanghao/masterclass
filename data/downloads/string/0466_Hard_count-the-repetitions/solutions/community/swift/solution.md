# Maximising Repetitions through Iterative Subsequence Matching

**Author:** Naradarn
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-repetitions/solutions/4553332/](https://leetcode.com/problems/count-the-repetitions/solutions/4553332/)

---

# Intuition
Initially, the problem seems straightforward - repeat strings `s1` and `s2` for `n1` and `n2` times respectively, and then find how many times `s2` can be obtained from `s1`. However, the challenge is to efficiently handle cases where parts of `s2` may be formed within a single repetition of `s1`, as well as cases where `s2` can be formed across the boundary of `s1`'s repetitions.

# Approach
To solve this, we iterate through each character of `s1`, repeated `n1` times, and check if it matches the current character of `s2`. If it does, we move to the next character in `s2`. Once we reach the end of `s2`, it means one repetition of `s2` is completed within `s1`, and we reset our position in `s2` to the start. We repeat this process until we've gone through `s1` `n1` times. The number of times we complete `s2` gives us the total count of `s2` repetitions. Finally, we divide this count by `n2` to get the maximum integer `m`.

# Complexity
- Time complexity: $$O(n1 \	imes |s1|)$$, where $$|s1|$$ is the length of the string `s1`. This is because we iterate through each character of `s1` for `n1` times.
- Space complexity: $$O(|s1| + |s2|)$$, as we convert `s1` and `s2` into arrays for easier access to their characters.

# Code
```swift
class Solution {
    func getMaxRepetitions(_ s1: String, _ n1: Int, _ s2: String, _ n2: Int) -> Int {
        let s1Array = Array(s1)
        let s2Array = Array(s2)
        var indexS2 = 0
        var countS2 = 0

        for _ in 0..<n1 {
            for char in s1Array {
                if char == s2Array[indexS2] {
                    indexS2 += 1
                    if indexS2 == s2Array.count {
                        indexS2 = 0
                        countS2 += 1
                    }
                }
            }
        }

        return countS2 / n2
    }
}
```