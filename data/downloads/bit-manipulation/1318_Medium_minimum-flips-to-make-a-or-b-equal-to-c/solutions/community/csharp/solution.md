# C# | Kernighan’s Algorithm | Super Fast

**Author:** AloofSage
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/3609608/](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/3609608/)

---

# Intuition
Kernighan\u2019s Algorithm is a quick way to count how many bits are on in a given number. The explanation of this algorithm is in the comments of the BitCount function. 

Some simple bitwise operations on our inputs will give us numbers whose bits we can count to give us our answer. Doing it this way will require use to loop over two numbers, however we will save numerous if checks and bitshifts, and so it should be faster than the brute force methods.

# Approach
First implement Kernighan's Algorithm to count bits.

In order to find bits where a flip of some kind is needed we can simply XOR c with the target (a or b). An XOR is on only if the bit is on in one number but not the other. All of the bits that are on after the XOR will require at least one flip. 

Now we just need to find the bits that are on in our XOR result and BOTH a AND b. These are the bits that need double counted.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code
```
public class Solution {
    public int MinFlips(int a, int b, int c) {
        int flips = 0;
        int or = a | b;
        //xor'ing will tell us places where 
        //  1) c is on but neither a or b is
        //  2) c is off but a or b or both is on
        int xor = c ^ or;
        //at least one bit needs flipped for each bit that is on
        flips = this.BitCount(xor);
        //now we just need to count once more
        //the places where both a and b need flipped
        int dblcount = xor & a & b;
        flips += this.BitCount(dblcount);

        return flips;
    }

    public int BitCount(int x) {
        /*
        Brian Kernighan\u2019s Algorithm
        ---------------------------
        Relies on the following observation about what happens 
        when you subtract 1 from a number in binary.
        E.g.
        52: 0011 0100
        51: 0011 0011

        Notice we could describe subtracting 1 in the 
        following way:
        Find the first bit from the right that is set (==1).
        That bit and all the bits to its right will flip.
        Any set bits to the left stay.

        Now, if we AND those two numbers (x AND x-1) together 
        we are left with
        0011 0000

        So we went from 3 set bits to 2. 
        If we repeat this procedure and count how many times we 
        do it before we reach zero, we will have our answer.
        */
        int count = 0;
        while (x > 0){
            count++;
            x &= (x - 1);
        }
        return count;
    }
}
```
Would greatly appreciate an upvote if you found this useful or interesting.