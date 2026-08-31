# Java Solution 100% with Explanation

**Author:** qvissak
**Votes:** 9
**Link:** [https://leetcode.com/problems/binary-gap/solutions/613498/](https://leetcode.com/problems/binary-gap/solutions/613498/)

---

The answer key to this problem uses bitwise from the start -- which is not where my mind immediately went; nor did my mind think to use linear space in the naive implementation (since we only care about space between consecutive 1's). Hopefully this solution will help you think through the problem logically.

The first time I did the problem, I came up with a linear time solution that used linear space.

Runtime: 1 ms, faster than 42.91% of Java online submissions for Binary Gap.
Memory Usage: 36 MB, less than 7.14% of Java online submissions for Binary Gap.
```java
class Solution {
    public int binaryGap(int N) {
        String binaryRepresentation = Integer.toBinaryString(N); // O(n) space
        int longestDistance = 0;
        int indexOne = binaryRepresentation.indexOf('1');
        for (int i = 1; i < binaryRepresentation.length(); ++i) { // O(n) time
            if (binaryRepresentation.charAt(i) == '1') {
                longestDistance = Math.max(longestDistance, i - indexOne); // greedy
                indexOne = i; // update the index of the most recently seen '1'
            }
        }
        
        return longestDistance;
    }
}
```

I then realized this can be done faster since numbers are already stored as their binary representations. We can use bitwise operators, specifically, the bitwise right shift operator. All this means is take the rightmost bit off the binary representation during each iteration. This results in a solution with logarithmic time and constant space.

Runtime: 0 ms, faster than 100.00% of Java online submissions for Binary Gap.
Memory Usage: 36.1 MB, less than 7.14% of Java online submissions for Binary Gap.

```java
class Solution {
    public int binaryGap(int N) {
        int indexOne = -1, longestDistance = 0;
        for (int i = 0; i < 32; ++i) { // 32 bit number so 32 iterations, could also use Integer.toBinaryString(N).length() but the time it takes to convert to binary string is longer than just doing extra iterations for numbers smaller than 32 bits in size
            if (((N >> i) & 1) == 1) { // take the right most bit, use the bitwise 'AND' operator, if result is 1 then bit was a 1
                if (indexOne != -1) // only the first 1 will not trigger this conditional
                    longestDistance = Math.max(longestDistance, i - indexOne); // greedy
                indexOne = i; // update the index of the most recently seen '1'
            }
        }

        return longestDistance;
    }
}
```