# Kotlin, 2 ways

**Author:** easchner
**Votes:** 5
**Link:** [https://leetcode.com/problems/reverse-bits/solutions/1351072/](https://leetcode.com/problems/reverse-bits/solutions/1351072/)

---

I already knew the second way was doable, but would need to do math to get it working properly. So in an interview, I'd probably throw out the "easy" solution quickly while stating I know it's not as efficient as doing it the bit manipulation way, just to demonstrate both approaches and give myself a minute to think. The only hard part in the first solution is the result assignment in the for loop. Basically just need to move result left once and or it against just the next bit. Basically you're adding 1 if the next bit of n is a 1, and then dividing n by 2 and multiplying result by 2 each go.

```
class Solution {
    fun reverseBits(n:Int):Int {
        var result = 0
        
        for (i in 0..31)
            result = (result shl 1) or ((n ushr i) and 1)
            
        return result
    }
}
```

I knew the trick on this because I'd seen it before back in college, but I definitely didn't remember the specifics. I knew I'd be swapping by halves and then just had to figure out each half. I started from the bottom (1 bits) and then from there it was easy to work my way up to the whole 32 bits. Basically we're shifting and masking in groups.

8-bit mask is 00000000111111110000000011111111 = 0x00ff repeated
4-bit mask is 00001111000011110000111100001111 = 0x0f repeated
2-bit mask is 00110011001100110011001100110011 = 0011 = all 3's
1-bit mask is 01010101010101010101010101010101 = 0101 = all 5's

The 16 bit mask isn't required because since we're shifting by 16 each direction everything else is already zeros.

The only trip up was I had calculated different masks for the right side (ex: 0xff00ff00 for the first one) which gave me a compiler error saying they weren't valid integer literals, which I guess is a Kotlin thing. It was only the right side throwing so I figured out it was due to them all being "negative" numbers, since the first bit was always 1. I tried stripping off just the first bit and flipping them to negative but because of 2's complement this gave weird results. Then realized the 2's complement negative would just be the negative of the first mask which gives a nice symmetry.

```
class Solution {
    fun reverseBits(n: Int): Int {
        var result = (n ushr 16) or (n shl 16)
        result = ((result ushr 8) and 0x00ff00ff) or ((result shl 8) and -0x00ff00ff)
        result = ((result ushr 4) and 0x0f0f0f0f) or ((result shl 4) and -0x0f0f0f0f)
        result = ((result ushr 2) and 0x33333333) or ((result shl 2) and -0x33333333)
        return ((result ushr 1) and 0x55555555) or ((result shl 1) and -0x55555555)
    }
}
```