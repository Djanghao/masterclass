# O(nums1.count + nums2.count), Two pointer

**Author:** Victor-SMK
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/5190286/](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/5190286/)

---


```
class Solution {
    func mergeArrays(_ nums1: [[Int]], _ nums2: [[Int]]) -> [[Int]] {
        var ind1 = 0
        var ind2 = 0
        var arr = [[Int]]()
        var temp1 = 0
        var temp2 = 0

        while ind1 < nums1.count || ind2 < nums2.count{
            
            if ind1 >= nums1.count{
                temp1 = 2000
            } else{
                temp1 = nums1[ind1][0]
            }

            if ind2 >= nums2.count{
                temp2 = 2000
            } else {
                temp2 = nums2[ind2][0]
            }

            if temp1 == temp2 {
                arr.append([nums1[ind1][0], nums1[ind1][1] + nums2[ind2][1]])
                ind1 += 1
                ind2 += 1
            } else if temp1 < temp2 {
                arr.append([nums1[ind1][0], nums1[ind1][1]])
                ind1 += 1
            } else{
                arr.append([nums2[ind2][0], nums2[ind2][1]])
                ind2 += 1
            }
        }

        return arr
    }
}
```