# Swift Solution || Easy approach

**Author:** aayushkumar20
**Votes:** 1
**Link:** [https://leetcode.com/problems/super-washing-machines/solutions/3135550/](https://leetcode.com/problems/super-washing-machines/solutions/3135550/)

---

# Approach
1. If the sum of all the clothes is not divisible by the number of machines, return -1
2. Calculate the average number of clothes in each machine
3. Calculate the left sum and right sum of each machine
4. For each machine, calculate the expected number of clothes in the left and right
5. If the expected number of clothes in the left is greater than the left sum, add the difference to the left
6. If the expected number of clothes in the right is greater than the right sum, add the difference to the right
7. The maximum number of moves is the maximum of the left and right
8. Return the maximum number of moves

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
class Solution {
    func findMinMoves(_ machines: [Int]) -> Int {
        let n = machines.count
        var sum = 0
        for num in machines {
            sum += num
        }
        if sum % n != 0 {
            return -1
        }
        let avg = sum / n
        var leftSums = [Int](repeating: 0, count: n)
        var rightSums = [Int](repeating: 0, count: n)
        for i in 1 ..< n {
            leftSums[i] = leftSums[i-1] + machines[i-1]
        }
        for i in (0 ..< n - 1).reversed() {
            rightSums[i] = rightSums[i+1] + machines[i+1]
        }
        var move = 0
        for i in 0 ..< n {
            let expLeft = i * avg
            let expRight = (n - i - 1) * avg
            var left = 0
            var right = 0
            if expLeft > leftSums[i] {
                left = expLeft - leftSums[i]
            } 
            if expRight > rightSums[i] {
                right = expRight - rightSums[i]
            }
            move = max(move, left + right)
        }
        return move
    }
}

```