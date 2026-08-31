# Swift Sort and Counting Sort Solutions

**Author:** irk
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/5330296/](https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/5330296/)

---

# Sort: O(nlogn)
```swift
func minProductSum(_ nums1: [Int], _ nums2: [Int]) -> Int {
        let nums1 = nums1.sorted(by: <)
        let nums2 = nums2.sorted(by: >)
        return nums1.indices.map {nums1[$0] * nums2[$0]}.reduce(0,+)
    }
```
# Counting Sort: O(n + k)
```swift
    func minProductSum(_ nums1: [Int], _ nums2: [Int]) -> Int {
       var n1 = Array(repeating: 0, count: 101)
       nums1.forEach{n1[$0] += 1}
       var n2 = Array(repeating: 0, count: 101)
       nums2.forEach{n2[101 - $0] += 1}

       var res = 0
       var i = 0
       var j = 0
       for _ in 0..<nums1.count {
           i = n1[i...].firstIndex(where:{ $0 != 0})!
           j = n2[j...].firstIndex(where:{ $0 != 0})!
           n1[i] -= 1
           n2[j] -= 1
           res += i * (101 - j)
       }
       return res
    }
```