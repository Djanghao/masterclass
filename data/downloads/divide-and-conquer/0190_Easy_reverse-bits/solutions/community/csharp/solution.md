# Easy To Understand Solution | Bitwise operation | C# solution

**Author:** akarsh0407
**Votes:** 11
**Link:** [https://leetcode.com/problems/reverse-bits/solutions/3032438/](https://leetcode.com/problems/reverse-bits/solutions/3032438/)

---

# Intuition
The intuition is play on bits using bit manipulation.

# Approach
So, for a 32 bit integer, we got 32 bits as 01010100.....
Now, since we need to reverse the given number, we have to do 32 operations(changing/shifting the bit).

So, first of all, we can consider number "1" whose binary value would be -"00000000000000000000000000000001" (32 bits)
now, since we need to reverse the given number n

Considering n's binary representation from test case -
00000010100101000001111010011100
We need to reverse it to ->
00111001011110000010100101000000

So, we need to start from least significant bit(lsb) and therefore to get the lsb, we perform bitwise And operation on n and 1 (n & 1)
this gives us, 0 in this case. Now, we need to store it at first place. So we left shift the result by (31-i) bits where i is the i-th time we are operating on bits.

now, to save result, we can perform bitwise OR operation on result (initially 0) and lsb_reverse.

Now, when we have stored lsb, we can now shift the n by 1 bit and operate for new lsb.

This we continue for 32 times and finally we get the number with reversed bits.  

Hope you liked the solution!! 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public uint reverseBits(uint n) {
        uint res=0;
        for(int i=0;i<32;i++)
        {
            uint lsb=n & 1;
            uint lsb_reverse=lsb<<(31-i);
            res= res | lsb_reverse;
            n=n>>1;
        }
        return res;
    }
}
```