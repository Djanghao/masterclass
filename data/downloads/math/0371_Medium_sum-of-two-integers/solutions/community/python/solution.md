# Read this if you want to learn about masks

**Author:** IKM98
**Votes:** 228
**Link:** [https://leetcode.com/problems/sum-of-two-integers/solutions/489210/](https://leetcode.com/problems/sum-of-two-integers/solutions/489210/)

---

In Python unlike other languages the range of bits for representing a value is not 32, its much much larger than that. This is great when dealing with non negative integers, however this becomes a big issue when dealing with negative numbers ( two's compliment) 

Why ?

Lets have a look, say we are adding -2 and 3, which = 1

In Python this would be ( showing only 3 bits for clarity ) 

1  1 0 +
0  1 1 

Using binary addition you would get

0 0 1 

That seems fine but what happended to the extra carry bit ? ( 1 0 0 0 ), if you were doing this by hand you would simply ignore it, but Python does not, instead it continues 'adding' that bit and continuing the sum. 

1 1 1 1 1 1 0 +
0 0 0 0 0 1 1 
0 0 0 1 0 0 0 + ( carry bit ) 

so this actually continues on forever unless ... 

Mask ! 

The logic behind a mask is really simple, you should know that x & 1 = x right, so using that simple principle,

if we create a series of 4 1's and & them to any larger size series, we will get just that part of the series we want, so 

1 1 1 1 1 0 0 1
0 0 0 0 1 1 1 1 &

0 0 0 0 1 0 0 1 ( Important to note that using a mask removes the two's compliment) 

For this question leetcode uses 32 bits, so you just need to create a 32 bit mask of 1's , the quickest way is to use hexadecimal and 0xffffffff, you can write the binary form if you prefer it will work the same. 

Here is my code ,

```
class Solution:
    def getSum(self, a: int, b: int) -> int:
        
        # 32 bit mask in hexadecimal
        mask = 0xffffffff
        
        # works both as while loop and single value check 
        while (b & mask) > 0:
            
            carry = ( a & b ) << 1
            a = (a ^ b) 
            b = carry
        
        # handles overflow
        return (a & mask) if b > 0 else a
```
Note the final check, if b = 0 that means the carry bit 'finished', but when there is a negative number ( like -1), the carry bit will continue until it exceeds our 32 bit mask ( to end while loop ) it wont be 0 so in that case we use the mask. 

Hope that helps, let me know if you have any further questions in comments.