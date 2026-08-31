# Easy solution with binary search in  O(nlogn) time

**Author:** teenuburi
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/3497015/](https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/3497015/)

---



# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(n)

# Code
```
class Solution {
    func longestObstacleCourseAtEachPosition(_ obstacles: [Int]) -> [Int] {
        var returnArr = [Int]()
        var validObstaclesArray = [Int]()
        returnArr.append(1)
        validObstaclesArray.append(obstacles[0])
        for i in 1...obstacles.count-1 {
            var maxm = 1
            var left = 0 
            var right = validObstaclesArray.count-1
            if (validObstaclesArray[right] <= obstacles[i]) {
              validObstaclesArray.append(obstacles[i])
              returnArr.append(validObstaclesArray.count)
              continue
            }
            while (left < right) {
              let mid = (left + right)/2

              if (validObstaclesArray[mid] > obstacles[i]) {
                right -= 1
              } else {
                left += 1
              }
            }
            validObstaclesArray[left] = obstacles[i]
            returnArr.append(left+1)
        }
        return returnArr
    }
}
```