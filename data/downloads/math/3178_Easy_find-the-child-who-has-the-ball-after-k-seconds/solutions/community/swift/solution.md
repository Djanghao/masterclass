# ✅ O(1) Solution

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5285702/](https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5285702/)

---

# Solution
```swift
struct Solution {
    @_optimize(speed)
    func numberOfChild(_ n: Int, _ k: Int) -> Int {
        let n = n - 1
        // > Ifthe number of complete back-and-forth cycles is even:
        //      -> calculate the remaining passings
        // > Otherwise (if odd):
        //      -> the ball is passed backward, so we compute the remaining difference
        return k / n & 1 == 0 ? k % n : n - k % n
    }
}
```