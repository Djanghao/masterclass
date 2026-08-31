# Easy to understand

**Author:** shubham_kamdi
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-squared-difference/solutions/3000127/](https://leetcode.com/problems/minimum-sum-of-squared-difference/solutions/3000127/)

---



# Code
```
class Solution {
    func minSumSquareDiff(_ nums1: [Int], _ nums2: [Int], _ k1: Int, _ k2: Int) -> Int {
        guard nums1.count > 0 else { return 0 }
        var diff = Array(repeating: 0, count: nums1.count), maxEle = 0
        for i in 0 ..< nums1.count {
            diff[i] = abs(nums1[i] - nums2[i])
            maxEle = maxEle > diff[i] ? maxEle : diff[i]
        }
        var k = k1 + k2, bucket = Array(repeating: 0, count: maxEle + 1)
        for i in 0 ..< nums1.count {
            bucket[diff[i]] += 1
        }
        var i = maxEle
        while i > 0 {
            if bucket[i] > 0 {
                let minus = min(bucket[i],k)
                bucket[i] -= minus 
                bucket[i - 1] += minus 
                k -= minus
            }
            i -= 1
        }
        var ans = 0
        i = maxEle 
        while i > 0 {
            ans += (bucket[i] * (i * i))
            i -= 1
        }
        return ans
    }
}
```