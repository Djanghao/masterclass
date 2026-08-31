# Solution using array

**Author:** kschiu
**Votes:** 0
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/4539326/](https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/4539326/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Since `read()` can be called multiple time, there may still be remaining items in your temporary buffer.

1. Clear the temporary buffer if there are residual chars from previous calls
2. Invoke `read4` as usual until we hit `n` characters.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) where n is the number of chars we wish to read

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(4) aka O(1) to keep the 4 characters from `read4`

# Code
```
var solution = function(read4: any) {
  const tmpBuff = [];
  
  return function(buf: string[], n: number): number {
    let counter = 0;

    // tmpBuff could be populated from a previous call, clear it.
    while (tmpBuff.length > 0) {
      if (counter >= n) { return counter; }
      buf.push(tmpBuff.shift());
      counter++
    }

    // tmpBuff should now be clear, read next lines
    let charsRead = read4(tmpBuff);
    while (charsRead !== 0) {
      // Clear tmpBuff
      while (tmpBuff.length > 0) {
        if (counter >= n) { return counter; }
        buf.push(tmpBuff.shift());
        counter++;
      }

      charsRead = read4(tmpBuff)
    }
    
    return counter;
  };
};
