# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(1).

**Author:** sergeyleschev
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-product-subarray/solutions/1941882/](https://leetcode.com/problems/maximum-product-subarray/solutions/1941882/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the length of nums.
    //   - space: O(1), only constant space is used.
    
    func maxProduct(_ nums: [Int]) -> Int {
        guard !nums.isEmpty else { return 0 }

        var ans = nums[0]
        var maxSoFar = nums[0]
        var minSoFar = nums[0]

        for i in 1..<nums.count {
            let curr = nums[i]

            let tmpMax = max(curr, maxSoFar * curr, minSoFar * curr)
            minSoFar = min(curr, maxSoFar * curr, minSoFar * curr)
            maxSoFar = tmpMax

            ans = max(ans, maxSoFar)
        }

        return ans
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.