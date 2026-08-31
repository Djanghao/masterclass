# Time Complexity, O(nlogn)

**Author:** HimanshuChowdhary
**Votes:** 0
**Link:** [https://leetcode.com/problems/wiggle-sort-ii/solutions/5930629/](https://leetcode.com/problems/wiggle-sort-ii/solutions/5930629/)

---

# Intuition
Time Complexity, O(nlogn)

# Approach
1. sort array
2. iterate from mid to 0 && end to > mid
3. fill alternate values to sol

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(n)

# Code
```swift []
class Solution {
    func wiggleSort(_ nums: inout [Int]) {
        var arr = nums.sorted()
        let mid = (arr.count - 1) / 2
        var i = mid, j = arr.count - 1
        print("mid \\(mid) ")
        var sol = [Int]()
        while i >= 0 || j > mid {
            if i >= 0 {
                sol.append(arr[i])
            }
            if j > mid {
                sol.append(arr[j])
            }
            i -= 1
            j -= 1
        }
        nums = sol
    }
}
```