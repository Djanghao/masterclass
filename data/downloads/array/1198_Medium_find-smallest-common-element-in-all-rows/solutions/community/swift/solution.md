# Swift / 50% Faster

**Author:** martinlasek
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/2185197/](https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/2185197/)

---

First if we only have one array just return the first element of it since it's already sorted and it will be the smallest.
If we have multiple arrays lets sort them by their size so we only loop through the smallest.

We loop through each element of the smallest array and then loop through all arrays and check whether they don't contain that element. If they don't contain it `result` with `-1` and break out of that loop (but we are staying in the element loop).
If we always contain the current element (we are starting with the smallest) then we always assign that element to our result until we finished looping through all arrays.

Then we check if the result is unequal `-1` and if so we can break out of our element-loop to return the value. If we don't break out we will move onto the next element and that next one could also be contained in all arrays BUT it wouldn't be the SMALLEST element that is contained in all.

```
class Solution {
    func smallestCommonElement(_ mat: [[Int]]) -> Int {
        if mat[0].count == 1 {
            return mat[0][0]
        }
        
        var result = -1
        
        let sortedMat = mat.sorted { n1, n2 in n1.count < n2.count }
        
        for element in sortedMat[0] {
            
            for nArray in sortedMat {
                if !nArray.contains(element) {
                    result = -1
                    break
                } else {
                    result = element
                }
            }
            
            if result != -1 {
                break
            }
        }
        
        return result        
    }
}
```