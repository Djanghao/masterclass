# Bits are preserved, let them fall  | python short and easy

**Author:** BetoSCL
**Votes:** 45
**Link:** [https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/solutions/4143919/](https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/solutions/4143919/)

---

# Approach
First, let's analyze the operation. For two numbers, we can count the occurrence of each bit before and after the operation:

Before operation
`10101110`
`10111001`

After
`10101000`
`10111111`

Count the total bits that are 'on' before and after, they are the same. So, if we can preserve the number of bits, the idea is to accumulate them in order to form the $k$ greatest possible numbers. The question is how to move the bits around. The answer is quite greedy. If we have two numbers, $a$ and $b$, where $a < b$, and $a$ can give some extra bits to $b$, it's always worth it to give it. since the bits are preserved, and only the bits that are present in one of the numbers are moved. It's better to 'move' those bits to the larger number.

But exactly how to code this and how to determine who will give some bits to whom can be difficult. However, when you work with binary, you can visualize it as if the bits are just falling down. They continue falling until they reach a $1$, and then they stack up.

So, if the bits are conserved, and with a little paper imagination and some cases we can assume that the bits just fall out and that is exactly what we are going to coding. 


Just as an example let's look at what we are going to coding. 

Imagine a tower of stones where gravity is off. The initial state is:

`101001111011`
`101110111011`
`101110101010`
`101101000010`
`100100110011`
`001010110000`

If we turn on gravity and let the stones fall, we get:

`000000000000`
`101000100010`
`101100110010`
`101110111011`
`101111111011`
`101111111011`

We can then take the decimal representation for the first $k$ 'floors', and that will be the answer.


The way to code this is to simply keep track of how many 'floors' (or however you want to call it) are already filled by the $b_i$ bit and then put that bit in the next 'floor'
# Complexity
- Time complexity: $O(n \	imes \\log(MAX))$


```python
class Solution:
    def maxSum(self, nums: List[int], k: int) -> int:
        n = len(nums)
        IDX = [0] * 32
        ans = [0] * n
        
        for x in nums:
            for i in range(32):
                if (x >> i) & 1:
                    ans[IDX[i]] += 1 << i
                    IDX[i] += 1
    
        res = 0 
        mod = 10**9 + 7
        
        for i in range(k):
            res += ans[i] ** 2
            res %= mod 
            
        return res

                
