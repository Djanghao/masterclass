# Simple PHP Solution with O(n) Complexity

**Author:** JeanOmar
**Votes:** 0
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4/solutions/5056159/](https://leetcode.com/problems/read-n-characters-given-read4/solutions/5056159/)

---

# Intuition
The initial thought is to leverage the read4() method, which reads up to 4 characters from a file, to incrementally fill a buffer until either the file ends or we've read the requested number of characters, n.

# Approach
To solve the problem, I used a simple and direct method. The read4() function, provided by a parent class, reads up to 4 characters from a file at a time. My solution involves using this function within a loop to repeatedly read chunks of the file until we've either read the desired number of characters, n, or until there are no more characters to read (indicated by read4() returning fewer than 4 characters).

1. **Loop Through Chunks**: I loop through the file, reading up to 4 characters in each iteration, until I've read n characters or the file ends.
2. **Copy Characters**: Within each loop, I copy the characters returned by read4() into the destination buffer, making sure not to exceed the total required, n.
3. **Check for End of File**: The loop breaks early if read4() returns fewer than 4 characters, signaling the end of the file.

This approach is straightforward and utilizes the provided read4() function efficiently to achieve the goal without any complex logic or optimizations.
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/* The read4 API is defined in the parent class Reader4.
      public function read4(&$buf4){} */

class Solution extends Reader4 {
    /**
     * @param  Char[]   &$buf	Destination buffer
     * @param  Integer  $n		Number of characters to read
     * @return Integer 			The number of actual characters read
     */
    function read(&$buf, $n) {
        $readFileCount = ceil($n/4);
        $i = 0;

        for($r=0;$r<$readFileCount;$r++) {
            $tmp4Chars = [];
            $charReadedCount = $this->read4($tmp4Chars);
            for ($k=0;$k<$charReadedCount && $i<$n;$i++,$k++) {
                $buf[$i] = $tmp4Chars[$k];
            }

            if ($charReadedCount < 1) {
                break;
            }
        }

        return $i;
    }
}
```