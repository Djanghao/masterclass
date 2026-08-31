# Swift | Slidung window solution

**Author:** VladimirTheLeet
**Votes:** 2
**Link:** [https://leetcode.com/problems/grumpy-bookstore-owner/solutions/5344112/](https://leetcode.com/problems/grumpy-bookstore-owner/solutions/5344112/)

---

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```
class Solution {
    func maxSatisfied(_ customers: [Int], _ grumpy: [Int], _ m: Int) -> Int
    {
        let n = customers.count
        if m == n { return customers.reduce(0, +) } // all customers satisfied

        // init non-grumpy window of m length with first m minutes
        // first m customers will be satisified regardless of grumpy
        var satisfiedCustomers = customers[0..<m].reduce(0, +) 

        // add the rest of satisfied customers
        for i in m..<n where grumpy[i] == 0 {
            satisfiedCustomers += customers[i]
        }

        var maxSatisfied = satisfiedCustomers
        var leftBound = 0, rightBound = m

        // advance sliding window to the right, calculating changes
        while rightBound < n
        {
            // left bound falls out of non-grumpy window
            if grumpy[leftBound] == 1 { 
                satisfiedCustomers -= customers[leftBound]
            }

            // right bound comes into non-grumpy window
            if grumpy[rightBound] == 1 { 
                satisfiedCustomers += customers[rightBound]
            }

            maxSatisfied = max(maxSatisfied, satisfiedCustomers)
            leftBound += 1
            rightBound += 1
        }
        return maxSatisfied
    }
}
```