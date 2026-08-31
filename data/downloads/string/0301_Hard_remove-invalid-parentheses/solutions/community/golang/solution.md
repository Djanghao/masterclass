# CleanCodeGolang : Runtime 0 ms Beats 100% Memory 2.7 MB Beats 89.9%

**Author:** sunilsoni2201
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-invalid-parentheses/solutions/3282424/](https://leetcode.com/problems/remove-invalid-parentheses/solutions/3282424/)

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
func removeInvalidParentheses(s string) []string {
    left := 0
    right := 0
    result := []string{}

    visited := make(map[string]empty)

    for _,v := range s{
        if v == '('{
            left++
        } else if v == ')' {
            if left==0 {
                right++
            } else {
                left--
            }
        }
    }

    dfs(s, 0, left, right, &result, visited)
    return result
}

type empty struct{}

func dfs(s string, start int, left int, right int, res *[]string, visited map[string]empty){

    // if _, found := visited[s]; found {
    //     return
    // } else {
    //     visited[s] = empty{}
    // }

    if left == 0 && right == 0 && isValid(s){
        *res = append(*res, s)
        return
    }

    for i := start; i<len(s); i++ {

        if i!=start && s[i] == s[i-1] {
            continue
        }

        cur := s[:i]+s[i+1:]
        if s[i] == '(' && left > 0{
            dfs(cur, i, left-1, right, res, visited)
        } else if s[i] == ')' && right > 0{
            dfs(cur, i, left, right-1, res, visited)
        }
    }
}

func isValid(s string) bool{
    count := 0

    for _,v := range s{
        if v == '(' {
            count++
        } else if v == ')' {
            count--
        }

        if count < 0 {
            return false
        }
    }
    return count==0
}

```