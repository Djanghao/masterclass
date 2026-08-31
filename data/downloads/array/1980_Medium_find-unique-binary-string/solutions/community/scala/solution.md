# Cantor Diagonal Argument. 0 ms in C++, Java. One-liners for Scala, Kotlin, Python.

**Author:** sergei99
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-unique-binary-string/solutions/4294026/](https://leetcode.com/problems/find-unique-binary-string/solutions/4294026/)

---

# Intuition
We need to find a bit string not equal to any of input bit strings. There are $n$ bit strings on input, each of length $n$, and we have a guarantee that $n \\le 16$.

The problem can obvously be solved by converting all input strings to 16-bit numbers and placing them to a bit set, then finding the number corresponding to the first zero bit in that bit set. Since we never have more than 16 bit strings, 17 bits would be more than enough for that bit set. The bit search can be achieved in C++ with one intrinsic which translates to a single machine instruction, but the whole bunch of string conversion would take $O(n^2)$ time and formally $O(n)$ space though that space would fit one 32-bit integer.

This is not an interesting way then. How can we achieve the goal in $O(n)$ time?

We need to find such a bit sequence that differs from every element of the input list. We can form it like this:
* bit 0 should be different from bit 0 in element 0
* bit 1 should be different from bit 1 in element 1
* etc.

So it would differ from each of the input elements at least in one bit. This is similar to Cantor proof of real numbers' continuum not mapping to a countable set aka Cantor's diagonal argument (never thought that I would use this stuff to solve Leetcode daily problems when I was learning it decades ago).

# Approach
Allocate a result string of the length $n$ and fill it with inverted diagonal elements of the input matrix. Note that `0` and `1` differ just in one lowest bit both in ASCII and UTF-16, so all we need to do is toggle that one bit.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$ in languages with mutable strings,
  $$O(n)$$ in languages with immutable strings

# Micro-optimizations

C++ has mutable strings, which is generally pretty annoying because we can't give them a value semantic. But for this particular task we can use string mutability to avoid extra memory allocation and bash one of the input strings in place.

In Java we can use a preallocated `StringBuilder` to form the string.

In Scala we use one liners to build the string in a declarative way using either `for` comprehensions or a `map` approach. Both provide nearly same execution time, as well as an imperative Java-style solution with `StringBuilder`.

Same goes for Kotlin, apart from comprehensions, which are not available in the language.

# Measurements

| Language | Approach | Time | Beating | Memory | Beating |
|-|-|-|-|-|-|
| C++ | Mutating first string | 0 ms | 100% | 10.55 Mb | 75.23% |
| C | Mutating first string | 3 ms | 100% | 6.54 Mb | 100% |
| Java | `StringBuilder` | 0 ms | 100% | 40.1 Mb | 83.82% |
| Scala | `for` comprehension | 449 ms | 100% | 54.4 Mb | 100% |
| Scala | `map` | 441 ms | 100% | 54.7 Mb | 100% |
| Scala | `StringBuilder` | 461 ms | 100% | 54.9 Mb | 100% |
| Kotlin | `map` | 178 ms | 81.82% | 38.77 Mb | 27.27% |
| Kotlin | `StringBuilder` | 132 ms | 100% | 34.67 Mb | 100% |
| Python | preallocated list | 29 ms | 98.91% | 16.2 Mb | 66.27% |
| Python | appending to list | 37 ms | 82.15% | 16.3 Mb | 42.98% |
| Python | comprehension | 33 ms | 93.80% | 16.24 Mb | 66.27% |
| Python | `map` | 39 ms | 75.95% | 16.21 Mb | 66.27% |

Scala's 100% are due to low number of submissions existing to date - there seems to be just one 631 ms recursive code, so everything performing better than that gets 100% until today's solutions are included in the statistics.

And we see how foreign is functional approach to Kotlin - a simple one liner takes 33% more time to execute and 4 Mb more memory compared to an imperative solution.

Python has comprehensions, functional style `map` and imperative constructs with list modification in place. Either way, the resultant string should be constructed at the very end because strings are immutable. Comprehensions and imperative loops on preallocated structures seem to be the most native facilities of Python.

# Code
``` C++ []
class Solution {
public:
    string &findDifferentBinaryString(vector<string>& nums) {
        const unsigned short n = nums.size();
        string &r = nums.front();
        for (unsigned short i = 0; i < n; i++)
            r[i] = nums[i][i] ^ 1;
        return r;
    }
};
```
``` C []
char* findDifferentBinaryString(char** nums, const unsigned short n) {
    char *const r = *nums;
    for (unsigned short i = 0; i < n; i++)
        r[i] = nums[i][i] ^ 1;
    return r;
}
```
``` Java []
class Solution {
    public String findDifferentBinaryString(String[] nums) {
        final var r = new StringBuilder(nums.length);
        for (int i = 0; i < nums.length; i++)
            r.append((char)(nums[i].charAt(i) ^ 1));
        return r.toString();
    }
}
```
``` Scala []
// using for comprehensions
object Solution {
    def findDifferentBinaryString(nums: Array[String]): String =
        (for (i <- nums.indices) yield ((nums(i)(i) ^ 1)).toChar).mkString
}

// using map()
object Solution {
    def findDifferentBinaryString(nums: Array[String]): String =
        nums.indices.map(i => (nums(i)(i) ^ 1).toChar).mkString
}

// using StringBuilder
object Solution {
    def findDifferentBinaryString(nums: Array[String]): String = {
        val r = new StringBuilder(nums.length)
        for (i <- (0 until nums.length))
            r += ((nums(i)(i) ^ 1)).toChar
        r.toString
    }
}
```
``` Kotlin []
// using map()
class Solution {
    fun findDifferentBinaryString(nums: Array<String>): String =
        nums.indices.map{i -> (nums[i][i].toInt() xor 1).toChar()}.joinToString("")
}

// using StringBuilder
class Solution {
    fun findDifferentBinaryString(nums: Array<String>): String {
        val r = StringBuilder(nums.size)
        for (i in nums.indices)
            r.append((nums[i][i].toInt() xor 1).toChar())
        return r.toString()
    }
}
```
``` Python3 []
# using imperative loop with preallocated list
class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        r = [None] * len(nums)
        for i, s in enumerate(nums):
            r[i] = chr(ord(s[i]) ^ 1)
        return ''.join(r)

# using imperative loop appending to the list
class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        r = []
        for i, s in enumerate(nums):
            r += chr(ord(s[i]) ^ 1)
        return ''.join(r)

# using comprehensions (generators)
class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        return ''.join(chr(ord(nums[i][i]) ^ 1) for i in range(len(nums)))


# using map()
class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        return ''.join(map(lambda i: chr(ord(nums[i][i]) ^ 1), range(len(nums))))
```