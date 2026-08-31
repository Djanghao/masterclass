# Java - Sliding Window + Bit Frequency Table

**Author:** Makubex74
**Votes:** 18
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4961902/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4961902/)

---

# Things to know 
`|` - Bitwise OR
`&` - Bitwise AND
`~` - Bitwise NOT
`<<` - Leftshift operator

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- To start things off, this problem is like any other sliding window question at its core. If you aren't familiar with the basic concept of a sliding window, there are plenty of tutorials that you can find on Leetcode.
- Essentially, when it comes to any sliding window, you are only bothered about performing some operation, let's say `\u03B1`, then expanding the current window size and then undoing the operation `\u03B1` while shrinking the window.
- Take this problem, for instance. 
https://leetcode.com/problems/subarray-product-less-than-k/description/. 
- In the problem mentioned above, the operation `\u03B1` that we're doing is multiplication. How can you undo/ reverse the multiplication operation? You can undo it by performing division. This is because multiplication and division are **non-destructive** operations i.e, you can get back the original numbers if you do the opposite operation (divide, if you had multiplied  originally or multiply if you had divided originally).
- However, that cannot be said for our current problem. The operation that we need to do is a **Bitwise OR**. It's not easy to undo the operation and retrieve the original number. There doesn't innately exist a way to reverse a **Bitwise OR** operation in any language. Why you ask? Here's why. 

`X` `Y` `X|Y`
 `0` `0` `0`
`0` `1` `1` <--- When X is 0 and Y is 1, we get X|Y = 1
`1` `0` `1`
`1` `1` `1` <--- When X is 1 and Y is 1, we also get X|Y = 1

You need this bit of information for what's about to come below.

Take two values `A = 5` which is`(0101)\u2082`and `B = 14` which is`(1110)\u2082`. Perform Bitwise OR operation on them. We get `15` which is `(1111)\u2082`.

`A = 5 = 0101`
`B =14 = 1110`
`A | B  = 1111`

Now let's keep the value of `B`, the same as above, and only change the value of `A` by setting `A = 7` which is `(0111)\u2082`. Perform Bitwise OR operation on them. What do we get? We get the same answer as before.

`A = 7 = 0111`
`B =14 = 1110`
`A | B  = 1111`

When `B`'s bit is set to 1 in a particular index, irrespective of whether `A`'s bit is set to 0 or 1, the BITWISE OR returns a 1. So normally, we would not be able to recalculate the value of `A` from just the `orVal` and `B` as there are multiple outcomes (for each of the 32 bits that are set in `B`).

**How can we overcome this?**

Let's keep track of the frequency of the bits set for both numbers `A` and `B`, for each index from 0 to 31, in a single Bit Frequency Table. 

If both `A` and `B` were set to 1 in a particular index, then our frequency table would store `2`. If only one number has the bit set at that index, our frequency table would store `1`, otherwise `0` if neither `A` nor `B` were set at that index. 

`A = 7 = 0111`
`B =14 = 1110`
`BitFreq=1221`

We can now accurately rebuild the value of the missing number. To do this, decrease the Bit Frequency Table in indices where B has set bits. Esssentially, it's just like subtraction. 

`1221 - 1110 = 0111` which gives `A = 7 = (0111)\u2082`

Using the approach above, whenever a number at `start` index goes out of the current sliding window, we would need to calculate the new `orValue` by excluding nums[start]. So, using the old `orValue`'s Bit Frequency Table and the 2nd number, i.e `nums[start]`, we would be able to ascertain the new `orValue`.
 
# Approach
<!-- Describe your approach to solving the problem. -->
- Do Bitwise OR on each `nums[end]`.
- Undo Bitwise OR on each `nums[start]` if the Bitwise OR Value `orValWrapper >= k`.
- Shrink window by incrementing `start`.
- Get minLength by calculating `end - start + 1`.
- Expand window by incrementing `end`.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
For a number `X`, time complexity for a single operation is `log(X)`, since there are `log(X)` number of bits to iterate.
We have an array of size `N` numbers so our total time is `O(Nlog(X))`.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
For an array of size `N` numbers, the space complexity is `Nlog(X)`, since there are `log(X)` bits to store for each number.
# Code
```
class Solution {
    //https://stackoverflow.com/questions/26727044/how-to-reverse-a-bitwise-or-operation

    public void doBitWiseOrOperation(int[] bitCount, int[] orValWrapper, int n) {
        orValWrapper[0] = (orValWrapper[0] | n);
        for(int i = 0; i < 32; i++) {
            bitCount[i] += ((n & (1 << i)) != 0 ? 1 : 0);
        }
    }

    public void undoBitWiseOrOperation(int[] bitCount, int[] orValWrapper, int n) {
        for(int i = 0; i < 32; i++) {
            bitCount[i] += ((n & (1 << i)) != 0 ? -1 : 0);
            if (bitCount[i] == 0) orValWrapper[0] = orValWrapper[0] & (~(1 << i));
        }
    }

    public int minimumSubarrayLength(int[] nums, int k) {
        int orVal = 0;
        int minLength = Integer.MAX_VALUE;
        int[] bitCount = new int[32];
        int[] orValWrapper = {orVal};
        for(int start = 0, end = 0; end < nums.length; end++) {
            doBitWiseOrOperation(bitCount, orValWrapper, nums[end]);
            if(orValWrapper[0] < k) continue;
            for(; start <= end && orValWrapper[0] >= k; start++) {
                undoBitWiseOrOperation(bitCount, orValWrapper, nums[start]);
                minLength = Math.min(minLength, end - start + 1);
            }
        }
        return (minLength == Integer.MAX_VALUE) ? -1 : minLength;
    }
}
```

# Credits
- https://stackoverflow.com/questions/26727044/how-to-reverse-a-bitwise-or-operation
- https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4947394/explained-two-pointer-optimal-solution-very-simple/

