# 100% runtime & 66.25%% memory Beats. With explanation using binary search.

**Author:** Lainaaa
**Votes:** 5
**Link:** [https://leetcode.com/problems/first-bad-version/solutions/3375529/](https://leetcode.com/problems/first-bad-version/solutions/3375529/)

---

# Intuition
This code implements a binary search algorithm to find the first "bad" version out of "n" versions given as an input. Here, "bad" implies a version that is to be avoided. 

# Approach
The code starts with initializing the search space by keeping the left pointer as zero and the right pointer as n. Then, the code continuously partitions the search space into halves by calculating the midpoint and checks for bad versions. If a bad version is encountered, the code moves the right pointer to the midpoint and records this result as a candidate for the first bad version. On the other hand, if a good version is encountered, the code moves the left pointer to the midpoint+1 and records the maximum good version possible so far. The code repeats this process until the left and right pointers meet. Finally, the code checks if the maximum good version found so far is the second last version (good version) or the last version (bad version) and returns the corresponding result.



# Complexity
- Time complexity O(log n):
The time complexity of this algorithm is O(log n) as it uses binary search to find the first bad version, resulting in logarithmic time complexity.

- Space complexity O(1):
The space complexity of this algorithm is O(1) as it only uses constant space variables regardless of the size of input n.



# Code
```
/**
 * The knows API is defined in the parent class VersionControl.
 *     func isBadVersion(_ version: Int) -> Bool{}
 */

class Solution : VersionControl {
    func firstBadVersion(_ n: Int) -> Int {
       // Initialize left, right pointers and result variable.
        var left: Int = 0
        var right: Int = n
        var result: Int = 1
        // Initialize maxGoodVersion as 0.
        var maxGoodVersion = 0
        // While the left pointer is less than the right pointer.
        while left < right {
          // Find the midpoint of the current search space.
            var mid = (left + right)/2
            // Check if the current version is bad.
            if isBadVersion(mid){
                // If the current version is bad, move the right pointer to the midpoint, 
                // record this value for future use and check if the previous version is the maximum good version.
                right = mid 
                result = mid
                if result == maxGoodVersion + 1{
                    return result
                }
            }else{
                // If the current version is good, move the left pointer to the midpoint+1, 
                // record the maximum good version so far, and repeat the process.
                maxGoodVersion = mid
                left = mid + 1
            }
        }
        // If the maximum good version found so far is the second last version, it is the answer.
        if maxGoodVersion == n - 1{
            return n
        }
        // Otherwise, return the candidate for the first bad version.
        return result
    }
}

```