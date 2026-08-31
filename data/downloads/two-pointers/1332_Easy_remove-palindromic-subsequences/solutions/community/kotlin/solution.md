# Kotlin || 2 Ways

**Author:** yezhizhen
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-palindromic-subsequences/solutions/2124489/](https://leetcode.com/problems/remove-palindromic-subsequences/solutions/2124489/)

---

#### First:
```
fun removePalindromeSub(s: String): Int {
    return if (s == s.reversed()) 1 else 2
}
```
O(n) time O(n) space for reversed string storage


#### Second:
```
fun isPalind(s: String): Boolean{
    var l = 0; var r = s.length - 1
    while(l <= r && s[l] == s[r])
    {
        l++; r--
    }
    if(l > r)
        return true
    return false
}

fun removePalindromeSub(s: String): Int {
    return if (isPalind(s)) 1 else 2
}
```
O(n) time O(1) extra space