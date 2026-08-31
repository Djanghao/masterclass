# Swift Solution

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-iv/solutions/3140853/](https://leetcode.com/problems/next-greater-element-iv/solutions/3140853/)

---

# Approach
1. Create two stacks s1 and s2
2. Create a temporary stack tmp
3. Traverse the array from start to end
4. If s2 is not empty and A[s2.top] < A[i], then pop s2 and store the popped element in res
5. If s1 is not empty and A[s1.top] < A[i], then pop s1 and push the popped element in tmp
6. If tmp is not empty, then pop tmp and push the popped element in s2
7. Push i in s1
8. Return res


# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
class Solution {
    func secondGreaterElement(_ A: [Int]) -> [Int] {
        var n = A.count,  res = Array(repeating: -1, count: n)
        var s1 = [Int](), s2 = [Int](), tmp = [Int]()
        for i in 0..<n {
            while !s2.isEmpty && A[s2.last!] < A[i] {
                res[s2.removeLast()] = A[i]
            }
            while !s1.isEmpty && A[s1.last!] < A[i] {
                tmp.append(s1.removeLast())
            }
            while !tmp.isEmpty {
                s2.append(tmp.removeLast())
            }
            s1.append(i)
        }
        return res
    }
}
```