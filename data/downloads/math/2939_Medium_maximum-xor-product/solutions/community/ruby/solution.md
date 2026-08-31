# Bit Masking

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-xor-product/solutions/4318047/](https://leetcode.com/problems/maximum-xor-product/solutions/4318047/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to maximize the product by making both a and b close . 
For eg if a+b = 10 
a= 5 b = 5 a*b= 25
a = 6 b = 4 a*b = 24 
a = 7 b = 3 a*b = 21
a = 8 b = 2 a*b =16 

From this we can say that if both are close , product is maximum. 

Now there are 4 cases : 

1. bit at both a and b is 1 , in this case we need to keep the 1 as that will make product maximum.
2. bit in both a and b is 0 , in this case we need to do an or with the mask so that both becomes 1 .
3. bit in a is 1 and b is 0 , in this case we need to check if a > b then take a|bit and b ^bit so as to make a and b close else just skip. 
4. bit in b is 1 and a is 0 , in this case we need to check if b > a then take b|bit and a^bit so as to make a and b close else just skip. 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer} a
# @param {Integer} b
# @param {Integer} n
# @return {Integer}
def maximum_xor_product(a, b, n)
    mod = 10**9+7

    for i in (n-1).downto(0) do 
        bit = 1 << i        
        next if ((a & bit) != 0 and (b & bit) != 0)

        if (a & bit != 0)
            if (a > b)
                a ^= bit
                b |= bit
            end 
        elsif (b & bit != 0)
            if (b > a)
                b ^= bit
                a |= bit
            end 
        else
            a |= bit
            b |= bit
        end 
        
    end 
    
    (a*b)%mod
end
```