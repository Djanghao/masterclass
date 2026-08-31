# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 2
**Link:** [https://leetcode.com/problems/excel-sheet-column-title/solutions/1945416/](https://leetcode.com/problems/excel-sheet-column-title/solutions/1945416/)

---

```
class Solution {
    func convertToTitle(_ columnNumber: Int) -> String {
        var string = ""
        var num = columnNumber - 1
        var rem = 0
        var nums: [Int] = []
        
        while num >= 0 {
            rem = num % 26
            num = num / 26
            nums.append(rem)
            if num == 0 { break }
        }
        
        nums[0] += 1
        if nums.count > 1 && nums[nums.count - 1] == 1 && nums[nums.count - 2] == 0 {
            nums.remove(at: nums.count - 1)
        }
        
        for num in nums {
            let c = num == 0 ? 26 : num
            string = "\\(Character(Unicode.Scalar(c + 64)!))\\(string)"
        }
        
        return string
    }
    
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.