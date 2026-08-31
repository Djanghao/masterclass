# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/2029164/](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/2029164/)

---

```

def maxProduct(s: String): Int = {
    var res :Int = 0
    def isPalindrome(word: String): Boolean = word == word.reverse

    def dfs(i:Int, word1:String, word2:String):Unit = {
      if (i >= s.length) {
        if (isPalindrome(word1) && isPalindrome(word2))
          res =  res max word1.length * word2.length
        return
      }
      dfs(i + 1, word1 + s.charAt(i), word2)
      dfs(i + 1, word1, word2 + s.charAt(i))
      dfs(i + 1, word1, word2)
    }

    dfs(0, "", "")
    res
  }
```