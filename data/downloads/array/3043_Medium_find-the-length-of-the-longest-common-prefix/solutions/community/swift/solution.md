# Swift | Set intersection

**Author:** pagafan7as
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5825934/](https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5825934/)

---

# Code
```swift []
class Solution {
    func longestCommonPrefix(_ arr1: [Int], _ arr2: [Int]) -> Int {
        var prefixSet1 = prefixSet(arr1), prefixSet2 = prefixSet(arr2)
        var commonPrefixes = prefixSet1.intersection(prefixSet2)

        if let maxCommonPrefix = commonPrefixes.max() {
            // "The length of the longest common prefix."
            return String(maxCommonPrefix).count
        } else {
            // "If no common prefix exists among them, return 0."
            return 0
        }

        // Returns the set of all the prefixes in the
        // numbers in the array.
        // [123, 27, 95] -> [1, 12, 123, 2, 27, 9, 95]
        func prefixSet(_ arr: [Int]) -> Set<Int> {
            var set = Set<Int>()
            for var val in arr {
                while val > 0 {
                    set.insert(val)
                    val /= 10
                }
            }          
            return set  
        } 
    }
}
```