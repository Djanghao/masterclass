# Swift O(n)

**Author:** anu22
**Votes:** 2
**Link:** [https://leetcode.com/problems/interval-list-intersections/solutions/5457361/](https://leetcode.com/problems/interval-list-intersections/solutions/5457361/)

---

# Approach
Traverse through each interval, find common element and move to the next interval in the list with the earlier ending

# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(1)$$ result array itself

# Code
```
class Solution {
    func intervalIntersection(_ firstList: [[Int]], _ secondList: [[Int]]) -> [[Int]] {
        var result = [[Int]]()
        var i = 0
        var j = 0
        
        while i < firstList.count && j < secondList.count {
            let start1 = firstList[i][0]
            let end1 = firstList[i][1]
            let start2 = secondList[j][0]
            let end2 = secondList[j][1]
            
            // Check if intervals overlap
            let start = max(start1, start2)
            let end = min(end1, end2)
            
            if start <= end {
                result.append([start, end])
            }
            
            // Move to the next interval in the list with the earlier ending
            if end1 < end2 {
                i += 1
            } else {
                j += 1
            }
        }
        
        return result
    }
}

```