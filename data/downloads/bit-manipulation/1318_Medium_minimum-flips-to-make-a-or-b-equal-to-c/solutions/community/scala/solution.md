# 🔥 Why my solution is UNIQUE & SIMPLE beats 100%? With Intuition & Approach

**Author:** himanshujainpro
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/5544455/](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/5544455/)

---

# Intuition
I found this solution using hint , first we will calcualte a or b;

then we will compare with c , bit by bit 

To solve the problem, we want to make (a | b) == c with the fewest bit flips. We calculate a | b and compare it to c bit by bit. The goal is to count how many bits need to be flipped in a or b to make the OR result match c.


# Approach
<!-- Describe your approach to solving the problem. -->

1. **Calculate OR:** Compute `a | b` to get the combined bit pattern.
2. **Compare Bits:** 
   - If a bit in `c` is `1` but the corresponding bit in `a | b` is `0`, we need one flip.
   - If a bit in `c` is `0`, we check `a` and `b`:
     - Flip each `1` bit in `a` or `b` to `0`.
3. **Bit Shift:** Shift `a`, `b`, `c`, and `a | b` to the right by one bit to process the next bit.
4. **Count Flips:** The total number of flips is counted to match the bits.

# Complexity
- Time complexity: O(logn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int minFlips(int a, int b, int c) {
        int aOrB=a | b;
        
        int count=0;

        while(true){
            if(aOrB==0 && c==0) return count;

            if((c & 1)==1){
                if((aOrB & 1)!=1) count++;
            }else{
                if((a & 1)==1) count++;
                if((b & 1)==1) count++;
            }

            aOrB>>=1;
            a>>=1;
            b>>=1;
            c>>=1;
        }
    }
}
```