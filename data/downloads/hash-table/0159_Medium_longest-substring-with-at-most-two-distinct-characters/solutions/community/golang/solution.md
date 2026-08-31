# Golang shortest solution

**Author:** ramazankunakbayev
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/3889621/](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/3889621/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sliding window

# Approach
<!-- Describe your approach to solving the problem. -->
1)Move right border.
2)Move left border until amount of symbols in hashMap larger than 2.
3)Compare with result.
4)Update result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
func lengthOfLongestSubstringTwoDistinct(s string) int {
    symbCount := map[byte]int{}
    l, r := 0, 0
    result := 0

    for ;r < len(s); r++{
        symbCount[s[r]]++
        for ;len(symbCount) > 2;{
            symbCount[s[l]]--
            if symbCount[s[l]] == 0{
                delete(symbCount, s[l])
            }
            l++
        }
        if r - l + 1 > result{
            result = r - l + 1
        }
    }

    return result
}
```