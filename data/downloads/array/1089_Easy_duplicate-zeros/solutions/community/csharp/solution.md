# O(n) time O(1) space without two pointers

**Author:** Drugged_Monkey
**Votes:** 2
**Link:** [https://leetcode.com/problems/duplicate-zeros/solutions/4309190/](https://leetcode.com/problems/duplicate-zeros/solutions/4309190/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
`O(n^2)` time or/and `O(n)` space solution was so obvious so I decided to invent something faster.

# Approach
<!-- Describe your approach to solving the problem. -->
I remembered old trick which allows to store two integer values using only one variable:
```
x = a + b * n
```
Where `a` is an old value, `b` is a new value and `n` is a big enough integer such as `a,b < n`

To restore original value all we need is:
```
a = x % n
```
Where `%` is `MOD` operation and to restore new value:
```
b = x / n
```
Where `/` is integer division. And that's it.

I choose `n = 10` since `0 <= nums[i] <= 9`. Also powers of ten as `n` are pretty convenient in case of debuging. Cause `x` will look like `A..A0..0B..B` (`AB` in our case), where `A..A` is decimal notation of number `a` and `B..B` is decimal notation of number `b`.

First loop:
1. Extracting old value `var old = nums[i] % n`
2. Counting zeroes.
3. Updating `nums[i + zeroes]` item inplace according to formula described above. 

Second loop is only needed for restoring new values: `nums[i] = nums[i] / n`

# Complexity
- Time complexity: $$O(n) + O(n) = O(n)$$

- Space complexity: $$O(1)$$ (since everything done inplace)


# Code
```
public class Solution 
{
    public void DuplicateZeros(int[] nums) 
    {
        var n = 10;
        var l = nums.Length;
        var zeroes = 0;

        for(int i = 0; i < l; i++)
        {
            var old = nums[i] % n;

            if(old == 0) 
            {
                zeroes++;
            } 
            else 
            {
                if(i + zeroes < l) 
                {
                    nums[i + zeroes] += old * n;
                }
            }
        }

        for(int i = 0; i < l; i++)
        {
            nums[i] = nums[i] / n;
        }
    }
}
```

# Beats 
95.31% C# solutions