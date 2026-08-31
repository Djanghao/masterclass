# Swift - OLog(N) Solution with explaination

**Author:** osama10
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/1594669/](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/1594669/)

---

**Idea**
I like to thing this problem as window problem. Some points to consider
- We dont need 0, so our window should not contain zero
- If we have even negative nums then whole window can be consider
- If we have odd nums then we'll consider the window from the current index to the index after the first negative num in that window
- We adjust the window using the above points and will calculate the length.
-  assign the max of the calculated length and result to the result
-  return result
```
    func getMaxLen(_ nums: [Int]) -> Int {
        var startOfArray = -1
        var startOfNegative = -1
        var numOfNegatives = 0
        
        var length = 0
        
        for (i, num) in nums.enumerated() {
            if num == 0 {
                startOfArray = i
                startOfNegative = -1
                numOfNegatives = 0
            } else if num < 0 {
                if startOfNegative == -1 {
                    startOfNegative = i
                }
                
                numOfNegatives += 1
            }
            let end = numOfNegatives % 2 == 0 ? startOfArray : startOfNegative
            length = max(length, i -  end)
        }
        
        return length
    }

```