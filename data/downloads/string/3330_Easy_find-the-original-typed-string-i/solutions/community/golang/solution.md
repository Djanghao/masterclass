# O(N) easy solution

**Author:** danny4410
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-original-typed-string-i/solutions/6059438/](https://leetcode.com/problems/find-the-original-typed-string-i/solutions/6059438/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```golang []
func possibleStringCount(word string) int {
    ans := 1
    pre := word[0]
    for i:=1; i<len(word); i++ {
        if word[i] == pre {
            ans +=1
        } else {
            pre = word[i]
        }
    }
    return ans
}
```