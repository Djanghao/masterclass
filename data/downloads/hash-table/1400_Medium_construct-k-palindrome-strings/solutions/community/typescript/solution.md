# Typescript solution using hashmap

**Author:** sreerajsr03
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-k-palindrome-strings/solutions/5454080/](https://leetcode.com/problems/construct-k-palindrome-strings/solutions/5454080/)

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
function canConstruct(s: string, k: number): boolean {
    let hashMap: Map<string, number> = new Map<string, number>();
    if (s.length < k)
        return false

    for (const str of s) {
        hashMap.set(str, (hashMap.get(str) || 0) + 1)
    }
    let count: number = 0;
    for (const [_, value] of hashMap.entries()) {
        if (value % 2 === 1)
            count++;
    }
    if (count > k) return false
    return true;
};
```