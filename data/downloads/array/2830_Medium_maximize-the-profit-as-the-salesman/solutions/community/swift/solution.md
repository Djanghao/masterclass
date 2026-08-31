# Sorting + DP

**Author:** linhnd99hit
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/4461721/](https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/4461721/)

---

# Intuition
Easy to find that if I accept a offer from $$a^{th}$$ to $$b^{th}$$, maximum profit of houses from $$0^{th}$$ to $$b^{th}$$ will be maximum profit of houses from $$0^{th}$$ to $${(a-1)}^{th}$$ add value of one
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
- Call $$f[i]$$ is max profit of houses from $$0^{th}$$ to  $$i^{th}$$.
- With each offer $$x$$, we have $$f[x.end] = f[i - x.start - 1] + x.gold$$. It means to $$f[x.end]$$ is maximum, $$f[i - x.start - 1]$$ is also maximum. So, we will compute $$f$$ array from $$0^{th}$$. In other words, we have to sort list offer by $$end$$ ascending before computing.
- Use pointer $$offerIndex$$ as code below to reduce time complexity to $$O(n)$$
- Result of problem is max of $$f$$ array.
# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maximizeTheProfit(_ n: Int, _ offers: [[Int]]) -> Int {
        let offers = offers.sorted(by: { $0[1] < $1[1] })

        var f = Array(repeating: 0, count: n)
        var offerIndex = 0
        for index in 0 ..< n {
            if index > 0 {
                f[index] = f[index - 1]
            }

            while offerIndex < offers.count, offers[offerIndex][1] == index {
                if offers[offerIndex][0] - 1 < 0 {
                    f[index] = max(f[index], offers[offerIndex][2])
                } else {
                    f[index] = max(f[index], f[offers[offerIndex][0] - 1] + offers[offerIndex][2])
                }

                offerIndex += 1
            }
        }

        return f.max()!
    }
}
```