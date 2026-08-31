# clean code and detail explain

**Author:** JohnTse
**Votes:** 0
**Link:** [https://leetcode.com/problems/expressive-words/solutions/4385398/](https://leetcode.com/problems/expressive-words/solutions/4385398/)

---

# Intuition
If `s` is a stretchy of `w`, the following conditions must be met:
1. they must contain the same characters
2. the characters are also in same order
3. the number of a character in "w" must be less than or equal to the number of this character in "s"
4. because `the size of the group is three or more`, so if the number of a character in "s" is less than 3, then its number in "w" must be equal to it

# Approach

We first perform a simple compression encoding on the string (similar to the **group** in the question), for example:

```
"aaaabbbc" => "a4b3c1"
```

After this process, the size of the string must be even. a characters at an even index (**0 based**) is a letter, conversely, the character at an odd index is a number. And If `s` is a stretchy of `w`, the length of them must be equal.
Now we can compare the two strings one by one and check if they meet the conditions listed above.

# Complexity
- Time complexity: $O(n*m)$ (m is the size of s, n is the length of words)
- Space complexity: $O(n)$

# Code
```
func expressiveWords(s string, words []string) int {
    ss := group(s)

    var res int
    for _, word := range words {
        if stretchy(ss, group(word)) {
            res++
        }
    }

    return res
}

func stretchy(s, w []byte) bool {
    if len(s) != len(w) {
        return false
    }

    for i := 0; i < len(s); i += 2 {
        if s[i] != w[i] {
            return false
        }

        if s[i+1] != w[i+1] && int(s[i+1]-'0') < 3 {
            return false
        }

        if s[i+1] < w[i+1] {
            return false
        }
    }

    return true
}

func group(s string) []byte {
    res := []byte{s[0]}
    n, cnt := len(s), 1
    for i := 1; i < n; i++ {
        if s[i] == s[i-1] {
            cnt++
        } else {
            res = append(res, byte(cnt)+'0')
            res = append(res, s[i])
            cnt = 1
        }

        if i == n-1 {
            res = append(res, byte(cnt)+'0')
        }
    }

    return res
}
```