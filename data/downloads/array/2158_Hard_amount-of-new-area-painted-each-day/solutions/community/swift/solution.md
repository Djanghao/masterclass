# Jump Line

**Author:** banjodayo39
**Votes:** 0
**Link:** [https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/2788994/](https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/2788994/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
Create a line to indicate the last painted end point for an every possible index that could be painted we pick 50001, because it is the maximum.
Iterate through the all paint interval.
Paint all the areas in range i if it empty. 
For every paint index save the end of that paint index and update the next jump point.
Look up the

# Complexity
##### Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Time: O(n + m), where m is the total length to be painted.

##### Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- Memory: O(n + m).

# Code
```
class Solution {
    func amountPainted(_ paint: [[Int]]) -> [Int] {
        var line = [Int](repeating: 0, count : 500001)
        var result = [Int](repeating: 0, count: paint.count)

        for i  in 0..<paint.count {
            let start = paint[i][0]
            let end = paint[i][1]

            var currStart = start
            while currStart < end {
                let jump = max(currStart+1, line[currStart])
                result[i] += line[currStart] == 0 ? 1 : 0
                line[currStart] = max(line[currStart], end)
                currStart = jump
            }
        }

        return result
    }
}
```