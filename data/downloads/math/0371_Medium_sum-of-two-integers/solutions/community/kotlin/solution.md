# Kotlin - Purely bit manipulation using Full Adders

**Author:** deleted_user
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-of-two-integers/solutions/1362020/](https://leetcode.com/problems/sum-of-two-integers/solutions/1362020/)

---

This solution is based on how an actual computer processor does addition using Full Adders in an Arithmetic Logic Unit (ALU).
As such, it purely uses bit manipulation.
The loop repeats 32 times, for each bit from an integer (32 bits) and a mask is calculated by doing shift left of 1 *i* times.
Each time, it calculates the count using the **exclusive-or (xor)** operation, which is the logic operation that makes it possible for two bits to be added (disregarding carry).
It "adds": 
* the *current count*;
* the current bit from **a** obtained using previously calculated *mask*;
* the current bit from **b** (just like **a**, obtained using mask).
* previous *carry*.

The carry is calculated by doing the **and** operation on different pairs of values and doing the **or** operation between them:
* bit from a and bit from b;
* previous carry and bit from a;
* previous carry and bit from b.

Lastly, carry has to shift left once in order to act like a carry for the next operation.

***For more information on how this works, search for processor's ALU, logic gates and everything that comes linked to those, like how a processor works in its entirety (which will then lead you to learn Assembly and more). It's very useful information if you want to take programming seriously.***

```
class Solution {
    fun getSum(a: Int, b: Int): Int {
        var count = 0
        var carry = 0
        
        for(i in 0..31){
            val mask = 1 shl i
            val bitA = (a and mask)
            val bitB = (b and mask)
            
            count = count xor bitA xor bitB xor carry
            
            carry = (bitA and bitB) or (carry and bitA) or (carry and bitB)
            carry = carry shl 1
        }
        
        return count
    }
}
```