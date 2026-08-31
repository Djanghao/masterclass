# swift easy solution

**Author:** Zhanadilll
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/4416833/](https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/4416833/)

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
```
class Solution {
    func getStrongest(_ arr: [Int], _ k: Int) -> [Int] {
        var sortedArr = arr.sorted()
        var m = (sortedArr.count - 1) / 2
        var medium = sortedArr[m]
        var valueArr = [Int]()

        for i in sortedArr {
            valueArr.append(abs(i - medium))
        }

        var res = zip(sortedArr, valueArr).sorted { 
            ($0.1, $0.0) > ($1.1, $1.0) 
        }
        
        var answer = [Int]()
        for i in 0..<k {
            answer.append(res[i].0)
        }

        return answer
    }
}
```