# Simple, Fast and Short Swift Solution(Beat 97.3%)

**Author:** yy929058
**Votes:** 12
**Link:** [https://leetcode.com/problems/subsets/solutions/27337/](https://leetcode.com/problems/subsets/solutions/27337/)

---

Add one integer every time. Not only add to ans array, but add a integer to ans array 's element. For example,
input = [1,2,3] 
Add a number 1:
ans = [ [1] ]
and add a number 2:
ans = [ [1], [1,2], [2] ]
and add a number 3:
ans = [ [1], [1,2], [2], [1,3], [1,2,3], [2,3], [3] ]    

```
    func subsets(_ nums: [Int]) -> [[Int]] {
        var ans:[[Int]] = []
        for i in 0..<nums.count{
            for j in 0..<ans.count{
                var temp = ans[j]
                temp.append(nums[i])
                ans.append(temp)
            }
            ans.append([nums[i]])
        }
        ans.append([])
        return ans
    }