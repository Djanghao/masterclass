# [Scala] Built-in functions and recursion

**Author:** vscala
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5934555/](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5934555/)

---

# Complexity
- Time complexity: $$O(log(k))$$

- Space complexity: $$O(log(k))$$

# Code
```scala []
object Solution {
    private def flip(char: Char): Char = char match {
        case '0' => '1'
        case '1' => '0'
    }

    def findKthBit(n: Int, k: Int): Char = {
        if (Integer.bitCount(k) == 1) if (k == 1) '0' else '1'
        else flip(findKthBit(0, (Integer.highestOneBit(k) << 1) - k))
    }
}
```