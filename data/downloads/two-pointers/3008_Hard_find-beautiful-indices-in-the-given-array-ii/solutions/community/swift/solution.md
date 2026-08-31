# Using kmp string matching

**Author:** ak47chaudhary
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/solutions/5809497/](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/solutions/5809497/)

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
    // Compute LPS array (Longest Prefix which is also Suffix)
    func computeLPS(_ pattern: String) -> [Int] {
        let M = pattern.count
        var lps = Array(repeating: 0, count: M)
        var length = 0
        var i = 1

        let patternArray = Array(pattern) // Convert String to Array for easier indexing

        while i < M {
            if patternArray[i] == patternArray[length] {
                length += 1
                lps[i] = length
                i += 1
            } else {
                if length != 0 {
                    length = lps[length - 1]
                } else {
                    lps[i] = 0
                    i += 1
                }
            }
        }
        return lps
    }

    // KMP Pattern Matching to find all starting indices of pattern in the text
    func KMP(_ pat: String, _ txt: String) -> [Int] {
        let N = txt.count
        let M = pat.count
        var result = [Int]()
        let lps = computeLPS(pat)

        let txtArray = Array(txt)
        let patArray = Array(pat)

        var i = 0 // Index for text
        var j = 0 // Index for pattern

        while i < N {
            if patArray[j] == txtArray[i] {
                i += 1
                j += 1
            }

            if j == M {
                result.append(i - j) // Pattern found at index (i - j)
                j = lps[j - 1]
            } else if i < N && patArray[j] != txtArray[i] {
                if j != 0 {
                    j = lps[j - 1]
                } else {
                    i += 1
                }
            }
        }

        return result
    }

    // Function to find the lower bound of an element in a sorted list
    func lowerBound(_ list: [Int], _ target: Int) -> Int {
        var left = 0
        var right = list.count - 1
        var result = list.count

        while left <= right {
            let mid = left + (right - left) / 2
            if list[mid] >= target {
                result = mid
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        return result
    }

    // Function to find beautiful indices
    func beautifulIndices(_ s: String, _ a: String, _ b: String, _ k: Int) -> [Int] {
        let n = s.count

        // Get all start indices of `a` and `b` in the string `s`
        let i_indices = KMP(a, s)
        let j_indices = KMP(b, s)

        var result = [Int]()

        // Iterate through every match of `a`
        for i in i_indices {
            let leftLimit = max(0, i - k)
            let rightLimit = min(n - 1, i + k)

            // Find the lower bound of left limit
            let lowerBoundIndex = lowerBound(j_indices, leftLimit)

            // Check if there's a valid `j` index within the window [i-k, i+k]
            if lowerBoundIndex < j_indices.count && j_indices[lowerBoundIndex] <= rightLimit {
                result.append(i)
            }
        }

        return result
    }
}
```