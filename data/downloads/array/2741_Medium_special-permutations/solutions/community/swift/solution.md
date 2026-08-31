# Swift | Recusrive DP + Bitwise memoization

**Author:** VladimirTheLeet
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-permutations/solutions/3651248/](https://leetcode.com/problems/special-permutations/solutions/3651248/)

---

# Complexity

- Time complexity: $O(n^2 + n(n-1)\\cdot2^{n-2}) = O(n^2\\cdot2^{n})$
- Space complexity: $O(n(n-1) + n\\cdot2^{n-1}) = O(n^2 + n\\cdot2^n)= O(n\\cdot2^n)$
Adjacency list of up to $n(n-1)$ size is $O(n^2)$. In the worst case when every pair of nums can be adjacent memo will hold all possible permutations for all lengths from $1$ to $n-1$ differing by the last num used, that being $n\\cdot2^{n-1}$ entries. Recursion stack size of $n$ depth adds nothing compared to that.

# Code
```
let modulo = 1_000_000_007
class Solution {
    func specialPerm(_ nums: [Int]) -> Int
    {
        let n = nums.count
        var nbs: [[Int]] = Array(repeating: [], count: nums.count) // allowed neighbors
        
        for (i, num) in nums.enumerated()
        {
            for (j, num2) in nums.enumerated() where num2 != num
            {
                if num % num2 == 0 || num2 % num == 0 {
                    nbs[i].append(j)
                }
            }
            if nbs[i].isEmpty { return 0 }
        }
        
        // As we've just computed allowed neighbors for every num,
        // we don't care about their values anymore. From here, 'num' 
        // means not the num itself, but its index in the original nums array

        var memo: [Int:Int] = [:] // key: 16 bit for last num appended, then
                                  //      16 last bits for all used nums flags
                                  // value: resulting number of permutations 
        var ans = 0
        for num in nums.indices {                   // (lastNum << 16) + set flag
            ans += solve((num << 16) | (1 << num))  // for a single num used so far 
        }
        
        func solve(_ state: Int) -> Int
        {
            if let res = memo[state] { return res }
            if (state & 0xFFFF).nonzeroBitCount == n { // all nums taken
                memo[state] = 1; return 1
            } 
            
            let lastNum = state >> 16
            let clearState = state & 0xFFFF // cleared from previous lastNum
            
            var res = 0
            for num in nbs[lastNum] where state & (1 << num) == 0 {
                res += solve((num << 16) | clearState | (1 << num))
            }
            res %= modulo
            memo[state] = res
            return res
        }
        
        return ans % modulo
    }
}

```