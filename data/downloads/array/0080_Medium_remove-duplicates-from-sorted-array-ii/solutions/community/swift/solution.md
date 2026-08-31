# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(1).

**Author:** sergeyleschev
**Votes:** 16
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/1918873/](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/1918873/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the length of nums.
    //   - space: O(1), only constant space is used.
    
    func removeDuplicates(_ nums: inout [Int]) -> Int {
        let n = nums.count
        guard n > 2 else { return n }
        var j = 1
        var count = 1
        
        for i in 1..<nums.count {
            if nums[i] == nums[i - 1] {
                count += 1
            } else {
                count = 1
            }
            
            if count <= 2 {
                nums[j] = nums[i]
                j += 1
            }
        }
        
        return j
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.