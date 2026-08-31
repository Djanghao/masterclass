# Simple Kotlin Solution with neat explanation

**Author:** Humblefool97
**Votes:** 0
**Link:** [https://leetcode.com/problems/rle-iterator/solutions/5152861/](https://leetcode.com/problems/rle-iterator/solutions/5152861/)

---

# Intuition
1. If we try to to use the Naive approach, by building the actual array
from the encoded array, this might consume huge amount of memory as the the constraints are of the order of 10^9.
2. Hence, just build a cursor, that navigates through the encoded array, calculates its next position based on the next n position


# Approach
1. Take a `cursor` that is nothing but a pointer to the encoded array. This always points to the even position (The one that always denotes the frequency of the next character). This is initially at 0.
2. Track the number of positions to be moved using a variable called `remaining`, which is initially equal to n
3. Keep iterating till `cursor` reaches the end of the array
i.Check if the current frequency >= remaining. If yes, that means, the frequency of element can be returned
ii.else, move to the next position that denotes frequency (cursor += 2) & reduce the remaining by current remaining frequency

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)

# Code
```
class RLEIterator(encoding: IntArray) {
    private val encodingArr = encoding.copyOf()
    private var cursor = 0

//encoding = [3 8 0 9 2 5]
    fun next(n: Int): Int {
        var remaining = n //2
        while (cursor < encodingArr.size) {
            if (encodingArr[cursor] >= remaining) {
                encodingArr[cursor] -= remaining
                return encodingArr[cursor + 1]
            } else {
                remaining -= encodingArr[cursor]
                cursor += 2
            }
        }
        return -1
    }
}

```