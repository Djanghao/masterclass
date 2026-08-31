# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 35
**Link:** [https://leetcode.com/problems/longest-palindromic-substring/solutions/1640332/](https://leetcode.com/problems/longest-palindromic-substring/solutions/1640332/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranty of any kind. You are free to use the content freely and as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func longestPalindrome(_ s: String) -> String {
        let len = s.count, arr = Array(s)
        if len <= 1 { return s }
        var lhs = 0, rhs = 0, dp = Array(repeating: Array(repeating: false, count: len), count: len)
        for i in 1..<len {
            for j in 0..<i where arr[j] == arr[i] && (dp[j+1][i-1] || i - j <= 2) {
                dp[j][i] = true
                if i - j > rhs - lhs {
                    lhs = j
                    rhs = i
                }
            }
        }
        return String(arr[lhs...rhs])
    }
}
```

---

<p>
<details>
<summary>
<img src="https://git.io/JDblm" height="24">
<b>TEST CASES</b>
</summary>

<p><pre>
<b>Result:</b> Executed 2 tests, with 0 failures (0 unexpected) in 0.008 (0.010) seconds
</pre></p>

```swift
class Tests {
    
    private typealias sol = Solution
    
    static func test0() {
        let value = sol().longestPalindrome("babad")
        print(value == "bab")
    }
    
    static func test1() {
        let value = sol().longestPalindrome("cbbd")
        print(value == "bb")
    }
}

Tests.test0()
Tests.test1()
```

</details>
</p>