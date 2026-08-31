# TypeScript solution

**Author:** jparry67
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-echo-substrings/solutions/4397767/](https://leetcode.com/problems/distinct-echo-substrings/solutions/4397767/)

---

# Intuition and Approach
<!-- Describe your first thoughts on how to solve this problem. -->
Anytime we find a matching string it's always immediately after itself. So we can solve this by having two for loops. The outer loop goes through all the possible sizes of a, half the matching text, and the inner loop goes through all the possible starting indices of a+a, the entire matching text. We can use a set of all the a values to filter out duplicate matching texts and get the number of uniqe strings at the end.

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function distinctEchoSubstrings(text: string): number {
    const texts = new Set();
    for (let size = 1; size <= text.length/2; size++) {
        for (let i = 0; i <= text.length-size*2; i++) {
            if (text.substring(i, i+size) == text.substring(i+size, i+size*2)) {
                texts.add(text.substring(i, i+size))
            }
        }
    }
    return texts.size;
};
```