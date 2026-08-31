# Binary search, beats 100% time and memory

**Author:** a_m_78
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3092085/](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3092085/)

---

# Intuition
So we use binary search trying to guess the max number.
The correct range is between 1 and maxSum parameter.

# Approach
For the number we choose by binary search we calculate the minumum sum from the left and from the right of that index.
Calculation done using arithmetic progression formula:
Sum = (A1 + An) * n / 2

n = progression size
A1 = first member
An = last member

Calculation done depending on array boundaries (index) and the number itself. If it is too small and in the middle of the long array the rest is added as '1' (count - num)

GetSum uses long parameters and return value to avoid possible overflows.

# Complexity
- Time complexity:
O(Logn)

- Space complexity:
O(1)

# Code
```
public class Solution {
    public int MaxValue(int n, int index, int maxSum) {
        if (n == 1) return maxSum;

        var res = Int32.MinValue;
        var lo = 1;
        var hi = maxSum;

        while (lo <= hi) {
            var num = lo + (hi - lo) / 2;

            var rightSum = GetSum(num - 1, n - index - 1);
            var leftSum = GetSum(num - 1, index);
            
            var target = maxSum - num;

            if (leftSum <= target - rightSum) {
                res = Math.Max(res, num);
                lo = num + 1;
            } else {
                hi = num - 1;
            }
        }

        return res;
    }

    private long GetSum(long num, long count) {
        if (num >= count) {
            // arith progression sum = (a1+an) * n/2
            return (num + (num - count + 1)) * count / 2;
        } else {
            // arith progression sum = (a1+an) * n/2 + rest 1
            return ((1 + num) * num / 2) + (count - num);
        }
    }   
}
```