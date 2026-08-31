# Set and triangle knowledge

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/type-of-triangle/solutions/5144238/](https://leetcode.com/problems/type-of-triangle/solutions/5144238/)

---


```
class Solution {
func triangleType(_ nums: [Int]) -> String {
  var nums = nums
  if nums.sorted()[0] + nums.sorted()[1] <= nums.sorted()[2] { return "none"}
  if Set(nums).count == 1 { return "equilateral" }
  if Set(nums).count == 2  { return "isosceles"}
  if Set(nums).count == 3  { return "scalene" }
  return "none"
}
}
```