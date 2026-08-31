# Swift 5 One line solution

**Author:** mveliseev
**Votes:** 4
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays/solutions/1258706/](https://leetcode.com/problems/intersection-of-two-arrays/solutions/1258706/)

---

```
func intersection(_ nums1: [Int], _ nums2: [Int]) -> [Int] {
	Array(Set(nums1).intersection(Set(nums2)))
}
```