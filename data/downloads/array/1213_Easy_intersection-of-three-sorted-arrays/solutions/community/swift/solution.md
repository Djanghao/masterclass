# Swift 0MS

**Author:** FuzzyBuckbeak
**Votes:** 0
**Link:** [https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/6101925/](https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/6101925/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func arraysIntersection(_ arr1: [Int], _ arr2: [Int], _ arr3: [Int]) -> [Int] {
        //use three pointers
        // if all the values in the three pointers are the same; add the value to result
        // if P1 < P2 -> Move P1; P2 < P3 move P2 else P3

        var firstPointer = 0
        var secondPointer = 0
        var thirdPointer = 0
        var result: [Int] = []

        while(firstPointer < arr1.count && secondPointer < arr2.count && thirdPointer < arr3.count) {
            if arr1[firstPointer] == arr2[secondPointer] && arr2[secondPointer] == arr3[thirdPointer] {
                result.append(arr1[firstPointer])
                firstPointer += 1
                secondPointer += 1
                thirdPointer += 1
            } else if arr1[firstPointer] < arr2[secondPointer] {
                firstPointer += 1
            } else if arr2[secondPointer] < arr3[thirdPointer] {
                secondPointer += 1
            } else {
                thirdPointer += 1
            }
        }

        return result
    }
}
```