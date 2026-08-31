# Easy Approach for solving this problem I hope to tell me how to improve run time for it :D

**Author:** Anas7Salah
**Votes:** 2
**Link:** [https://leetcode.com/problems/pancake-sorting/solutions/4588797/](https://leetcode.com/problems/pancake-sorting/solutions/4588797/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:   O(n * numberOfElements) <<<>>>   :(
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:  O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func pancakeSort(_ arr: [Int]) -> [Int] {
        var ans: [Int] = [] // lol i return my name :D
        var copyArry = arr
        let n = arr.count

        for i in 0..<copyArry.count {
            let index = findIndxOfNumber(target: n - i, arr: copyArry)
            swap(numberOfElements: index + 1, arr: &copyArry)
            swap(numberOfElements: n - i, arr: &copyArry)
            ans.append(index + 1)
            ans.append(n - i)
        }
        return ans
    }

    func swap(numberOfElements: Int, arr: inout [Int]) {
        var left = 0
        var right = numberOfElements - 1

        while left < right {
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            left += 1
            right -= 1
        }
    }

    func findIndxOfNumber(target: Int, arr: [Int]) -> Int {
        for i in 0..<arr.count {
            if arr[i] == target {
                return i
            }
        }
        return -1
    }
}

```