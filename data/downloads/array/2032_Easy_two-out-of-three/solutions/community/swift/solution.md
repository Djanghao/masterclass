# Swift Sets Intersections & Unions

**Author:** michaelneas
**Votes:** 4
**Link:** [https://leetcode.com/problems/two-out-of-three/solutions/1701141/](https://leetcode.com/problems/two-out-of-three/solutions/1701141/)

---

```
class Solution {
    func twoOutOfThree(_ nums1: [Int], _ nums2: [Int], _ nums3: [Int]) -> [Int] {
        let setA = Set(nums1)
        let setB = Set(nums2)
        let setC = Set(nums3)
        let a = setA.intersection(setB)
        let b = setB.intersection(setC)
        let c = setA.intersection(setC)
        return Array(a.union(b).union(c))
    }
}
```