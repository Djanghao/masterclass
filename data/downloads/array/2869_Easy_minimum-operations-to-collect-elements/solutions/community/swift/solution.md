# Set superset

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/5418020/](https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/5418020/)

---

```
class Solution {
func minOperations(_ nums: [Int], _ k: Int) -> Int {
  var target = Set(1...k)
  var nums = nums
  var collected = Set<Int>()
  var count = 0
  while !nums.isEmpty {
    let last = nums.removeLast()
    collected.insert(last)
    count += 1
    if collected.isSuperset(of: target) {
      return count
    }
  }
  return count
}

}
```