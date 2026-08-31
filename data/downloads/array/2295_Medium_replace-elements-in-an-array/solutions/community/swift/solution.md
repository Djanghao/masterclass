# Swift O(n+m) Time Complexity

**Author:** tmunir
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-elements-in-an-array/solutions/4393437/](https://leetcode.com/problems/replace-elements-in-an-array/solutions/4393437/)

---

# Complexity
- Time complexity: $$O(n+m)$$ 

- Space complexity: $$O(n)$$

where $$n$$ is length of $$nums$$ and $$m$$ is length of $$operations$$

# Code
```
class Solution {
    func arrayChange(_ nums: [Int], _ operations: [[Int]]) -> [Int] {
        var numsResult = nums
        var numDict = nums.enumerated().reduce(into: [Int: Int]()) {
            $0[$1.element] = $1.offset
        }

        for operation in operations {
            numDict[operation[1]] = numDict[operation[0]]
            numsResult[numDict[operation[1]]!] = operation[1]
            numDict[operation[0]] = nil
        }

        return numsResult
    }
}
```