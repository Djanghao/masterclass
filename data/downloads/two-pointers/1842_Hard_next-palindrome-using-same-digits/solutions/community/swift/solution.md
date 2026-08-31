# Swift solution Two pointers

**Author:** Yan_feng
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/5141623/](https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/5141623/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    func nextPalindrome(_ num: String) -> String {
        var len = num.count
        var n = len/2
        var ans = Array(num)

        var k = -1
        for i in stride(from: n-2, through:0, by: -1) {
            if ans[i] < ans[i+1] {
                k = i
                break
            }
        }

        if k == -1 { return "" }

        var l = -1 

        for i in stride(from: n-1, to:k, by: -1) {
            if ans[i] > ans[k] {
                l = i
                break
            }
        }

        var temp = ans[k]
        ans[k] = ans[l]
        ans[l] = temp

        var left = k+1, right = n-1

        while left < right {
            temp = ans[left]
            ans[left] = ans[right]
            ans[right] = temp
            right -= 1
            left += 1
        }

        left = n-1
        right = len%2 == 0 ? n : n+1

        while left >= 0 && right < len {
            ans[right] = ans[left]
            right += 1
            left -= 1
        }

        return String(ans)
    }
}
```