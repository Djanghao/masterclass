# Beginner-friendly || Simple/tricky solution in Python3 and JavaScript/TypeScript

**Author:** subscriber6436
**Votes:** 2
**Link:** [https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/4085555/](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/4085555/)

---

# Intuition
The problem description is the following:
- there's a `n` string, that's a valid positive integer
- our goal is to calculate, how many **deci-binary** integers it contains 

Following to the statement, **deci-binary** integer is that, which has only `1`-s and `0`-s as digits with **no leading zeroes**.

Instead of thinking **HOW to find** this numbers, let's pay your attention at these notes.
```
# Example
n = '692'

# As always we can start from top to bottom like
digits = '111' => n = '692' - '111' == '581'...
=> n = '26' => '15' => '4' ... => '1' 
# And we think that this will work.

# Try to practice reducing an integer like in the task example =>
n = '82734'
# and y'll see, that this approach WON'T lead us 
# to the optimal solution!

# For this moment we can try to iterate vice-versa, i.e. bottom-up,
# but with some trick

# Consider an integer like 692 again and
n = '692'

# 1. break down the integer into digits 6-9-2 or 600 + 90 + 2 
# and start from the least digit
# 2. calculate HOW many numbers we can sum up to get
# a current integer
# 3. y'll find, that maximum count of integers you need
# to sum up is THE LARGEST digit!
```

# Approach
1. declare an `ans` variable
2. iterate over `n` string
3. define the maximum digits count and store in `ans`
4. return `ans`

# Complexity
- Time complexity: **O(n)** to iterate over `n`
- Space complexity: **O(1)**, we don't allocate extra space


# Code in JavaScript/TypeScript
```
function minPartitions(n: string): number {
    let ans = 0

    for (let i = 0; i < n.length; i++) {
        ans = Math.max(ans, +n[i])
    }

    return ans
};
```

# Code in Python3
```
class Solution:
    def minPartitions(self, n: str) -> int:
        return max([int(x) for x in n])
```