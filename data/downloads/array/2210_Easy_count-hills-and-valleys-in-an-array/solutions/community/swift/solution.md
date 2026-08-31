# ✅ Easy and understandable solution for beginners

**Author:** Alexandr_Novikov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/4627723/](https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/4627723/)

---


# Code
```
class Solution {
    func countHillValley(_ nums: [Int]) -> Int {
        var answer = 0
        var direction = 0 // 1 = UP, 0 = DOWN

        if nums[0] - nums[1] > 0{
            direction = 0
        } else if nums[0] - nums[1] < 0{
            direction = 1
        } else {
            direction = 2
        }

        for i in 1..<nums.count-1{
            if nums[i+1] > nums[i] {
                if direction == 0  {
                    answer += 1
                    print(i)
                }
                direction = 1
            } 
            
            if nums[i+1] < nums[i] {
                if direction == 1 {
                    answer += 1
                    print(i)
                }
                direction = 0
            }   
        }
        return answer
    }
}
```