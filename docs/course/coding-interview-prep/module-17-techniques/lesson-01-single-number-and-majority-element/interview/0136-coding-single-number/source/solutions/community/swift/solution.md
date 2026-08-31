# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(1).

**Author:** sergeyleschev
**Votes:** 20
**Link:** [https://leetcode.com/problems/single-number/solutions/1938482/](https://leetcode.com/problems/single-number/solutions/1938482/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the length of the nums.
    //   - space: O(1), only constant space is used.
    
    func singleNumber(_ nums: [Int]) -> Int {
        var ans = 0
        for num in nums { ans ^= num }
        return ans
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.