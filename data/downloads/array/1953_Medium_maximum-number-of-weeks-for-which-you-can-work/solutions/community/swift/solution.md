# Swift

**Author:** tomtclai
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/5358558/](https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/5358558/)

---


# Intuition
```
// when max equals to rest... i can work on all of them
//      return max*2

// when max is 1 smaller than rest.. i can work on all of them
//          is more than 1 smaller than the rest.. i can only work on 1 of them
///        rest + max

// 5... 2  1 
// when max is 1 larger than rest.. i can work on all of them
//          is more than 1 larger than the rest.. i can only work on 1 of them
//         5 ...  3             
//         4 ... 3 
//              4+3 = 7
//          rest + rest + 1
```

# Code
```
class Solution {
   func numberOfWeeks(_ milestones: [Int]) -> Int {
       var sum = 0
       var max = 0
       for i in 0..<milestones.count { 
            sum += milestones[i]
max = Swift.max(max, milestones[i])
       }
       let rest = sum - max
       if max == rest { // 
           return rest*2
       } else if max > rest {
           return rest + rest + 1
       } else {
           return max + rest
       }

   }

}
```