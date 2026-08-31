# Rotate Your Array with Space complexity  O(1)

**Author:** Magdalenaspace
**Votes:** 3
**Link:** [https://leetcode.com/problems/rotate-array/solutions/4583902/](https://leetcode.com/problems/rotate-array/solutions/4583902/)

---


# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
class Solution {
    func rotate(_ nums: inout [Int], _ k: Int) {
         guard !nums.isEmpty ||  k > 0  else { return }

  //pointers
  let n = nums.count
  let k = k % n

  // Reverse entire array
  nums.reverse()

  // Reverse first k elements
  nums[0..<k].reverse()

  // Reverse remaining n-k elements
  nums[k..<n].reverse()
 }

}
```