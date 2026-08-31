# Kotlin code has toLong() trick; using Reverse traverse && Stack approaches

**Author:** doct0rX
**Votes:** 0
**Link:** [https://leetcode.com/problems/decoded-string-at-index/solutions/4100135/](https://leetcode.com/problems/decoded-string-at-index/solutions/4100135/)

---

# Intuition
reverse traverse

# Approach
1. Initialize decodedLength to 0, representing the total length of the decoded string.
2. Iterate through each character in the input string.
    1. If the character is a digit, update decodedLength by multiplying it with the digit.
    2. If the character is a letter, increment decodedLength.

3. Traverse the input string in reverse order.
For each character:
    1. If it's a digit adjust decodedLength and k accordingly.
    1. If it's a letter Check if it's the kth character or if k is 0.
        1. If yes, return the character as a string.
        2. not, decrement decodedLength.

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun decodeAtIndex(s: String, k: Int): String {
        var decodedLength = 0.toLong()
        s.forEach {
            if (it.isDigit()) decodedLength *= it.digitToInt()
            else decodedLength++
        }

        var k = k.toLong()
        for (i in s.length - 1 downTo 0) {
            if (s[i].isDigit()) {
                // adjust the length & k accordingly
                decodedLength /= s[i].digitToInt()
                k = k % decodedLength
            } else {
                // if letter check if it's the kth element
                if (k == 0.toLong() || decodedLength == k) return s[i].toString()
                --decodedLength
            }
        }
        return ""
    }
}
```


# Intuition
Stack

it's uses the same mechanism as before but we store the length in a stack

# Code
```
class Solution {
    fun decodeAtIndex(s: String, k: Int): String {
        val charLength = Stack<Long>()
        charLength.push(0)  // start with length 0

        s.forEach {
            if (it.isDigit()) charLength.push(charLength.peek() * it.digitToInt())
            else charLength.push(charLength.peek() + 1)
        }

        // traverse s to find kth element
        var k = k.toLong()
        var ln = s.length
        var s = s
        while (!s.isEmpty()) {
            k %= charLength.peek()
            --ln
            if (k == 0.toLong() && s[ln].isLetter()) return s[ln].toString()
            charLength.pop()
        }
        return ""
    }
}
```

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N) since we use stack to store our length