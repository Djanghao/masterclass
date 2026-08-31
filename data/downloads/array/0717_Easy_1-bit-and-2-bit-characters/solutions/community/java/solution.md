# ✅Beats 100.00% in Time⌚ and 98.06% in Memory📝 ,The basic and BEST logic with Simple Approach😎💯

**Author:** ArcuLus
**Votes:** 4
**Link:** [https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/5746295/](https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/5746295/)

---

# Intuition
The sequence is made up of 1 and 0 bits, and we need to figure out if the last bit is a "one-bit character" (represented by 0).
A 1 always pairs with the next bit to form a "two-bit character" (10 or 11).
A 0 stands alone as a "one-bit character."
So, the goal is to move through the array, treating each 1 as part of a pair and checking if the last bit can be a single 0.

# Approach
Iterate through the array:
Start from the beginning and look at each bit.
For every 1:
It forms a two-bit character, so we skip the next bit (i + 1).
For every 0:
If it's the last element in the array, return true since it's a one-bit character.
Handle the end of the array:
If we are at the second-to-last bit and it's a 1, return false because the 1 will form a two-bit character with the last bit.

# Complexity
- Time complexity:
O(n) because you loop through the array once, checking each bit.

- Space complexity:
O(1) because no extra space is used aside from a few variables.

# Code
```java []
class Solution {
    public boolean isOneBitCharacter(int[] bits) {
        int n = bits.length;
        for(int i=0;i<bits.length;i++){
            if(bits[i] == 1){
                if(i+2>n-1){
                    return false;
                }
                i = i+1;
            }else{
                if(i == n-1){
                    return true;
                }
            }
        }
        return false;
    }
}
```