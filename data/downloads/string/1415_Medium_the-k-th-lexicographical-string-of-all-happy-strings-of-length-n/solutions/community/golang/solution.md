# Golang | Backtracking

**Author:** pikachuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/3085458/](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/3085458/)

---

# Code
```
func dfs(n int, k *int, temp string, ans *string) {
    if len(temp) > n || *k <= 0 {return}
    if len(temp) == n {
        (*k)--
        if *k == 0 {
            *ans = temp
            return
        }
    }
    for _, ch := range []byte{'a', 'b', 'c'} {
        if len(temp) == 0 || temp[len(temp) - 1] != ch {
            dfs(n, k, temp + string(ch), ans)
        } 
    }
}

func getHappyString(n int, k int) string {
    var ans string = ""
    dfs(n, &k, "", &ans)
    return ans
}



```