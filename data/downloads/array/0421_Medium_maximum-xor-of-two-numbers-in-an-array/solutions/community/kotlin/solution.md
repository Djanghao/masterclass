# Kotlin Lovers | HashSet to store unique masked Values

**Author:** treat
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/4283954/](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/4283954/)

---

# Intuition
Lets understand this with example
Eg: 1,2,3,4,5
Constraints - 2^31 - 1 (31 bits possible in binary representation)

Binary Reps: 
    1 -> 001 (0000000000000000000000000000001) in 31 bits
    2 -> 010
    3 -> 011
    4 -> 100
    5 -> 101

As you can see for given inputs we only need to worry about last 3 bits

Extras used: 
Mask -> 0 
Max -> 0
Set -> {}

Target -> Find maximum 1s from left. Why? Because 
```
2^4 > 2^3 + 2^2 + 2^1 + 2^0
```
So we can go greedy
We start from left and assume that current bit in focus is possible to set to 1. Then we try to see if our assumption was right. 

Also we need to mask our numbers before we can use as explained in approach


# Approach

For any particular iteration i (left to right), till 4th bit for given input the mask should be zero because we are only intersted in following: 
i = 2 -> 3rd bit
i = 1 -> 2nd and 3rd bit
i = 0 -> last 3 bits

Lets say for i = 2, our target is to find result - 0000....000100 (if this is possible)
Assume it was possible for 2 numbers a and b

ie A XOR B = Result

A XOR (A XOR B) = A XOR Result

B = A XOR Result

This means if we xor a number in set with expected result then there should be another element in the set - A XOR Result

If it exist we update our Max XOR till i = 2, ie Add 1

In case we don't find such element, we update with 0 (basically means no change)



# Complexity
- Time complexity:
O(30*n)
- Space complexity:
O(30*n)

# Code
`````
class Solution {
    fun findMaximumXOR(nums: IntArray): Int {
        val masked = mutableSetOf<Int>()
        var mask = 0
        var maxXor = 0
        for(i in 30 downTo 0){
            masked.clear()
            mask = mask.or(1.shl(i))
            for(n in nums){
                masked.add(n.and(mask))
            }
            var newXor = maxXor.or(1.shl(i))
            for(m in masked){
                if(masked.contains(m.xor(newXor))){
                    maxXor = newXor
                    break
                }
            }
        }
        return maxXor
    }
}
`````