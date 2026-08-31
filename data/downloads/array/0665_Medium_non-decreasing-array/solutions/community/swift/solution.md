# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 15
**Link:** [https://leetcode.com/problems/non-decreasing-array/solutions/1163685/](https://leetcode.com/problems/non-decreasing-array/solutions/1163685/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranties of any kind. You can are to use the content as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func checkPossibility(_ n: [Int]) -> Bool {
        var val = 0, len = n.count
        for i in 0..<len-1 where n[i] > n[i+1] {
            val += 1
            if val > 1 || i > 0 && i < len-2 && (n[i-1] > n[i+1] && n[i] > n[i+2]) {
                return false
            }
        }
        return val <= 1
    }
}
```

<hr>

<p><details>
<summary><img src="https://git.io/JDblm" height="24"> <b>TEST CASES</b></summary>

```swift
class Tests {
    
    private typealias s = Solution
    
    static func testExample1() {
        let val = s().checkPossibility([4,2,3])
        print(val == true)
    }
    
    static func testExample2() {
        let val = s().checkPossibility([4,2,1])
        print(val == false)
    }
}

Tests.testExample1()
Tests.testExample2()
```

</details></p>