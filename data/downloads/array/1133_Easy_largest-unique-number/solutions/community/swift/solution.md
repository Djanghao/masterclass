# Swift || HashTable || O(n)

**Author:** Admiralk
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-unique-number/solutions/3604150/](https://leetcode.com/problems/largest-unique-number/solutions/3604150/)

---


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func largestUniqueNumber(_ nums: [Int]) -> Int {
        guard nums.count != 1 else { return nums.first ?? -1 }
        var dict: [Int: Int] = [:]
        var ans = -1
        for n in nums {
            dict[n, default: 0] += 1
        }
        for i in dict {
            if i.value == 1 {
                ans = max(i.key, ans)
            }
        }
        return ans
    }
}
```