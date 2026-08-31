# Ruby one approach

**Author:** surferbv
**Votes:** 0
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4/solutions/2899067/](https://leetcode.com/problems/read-n-characters-given-read4/solutions/2899067/)

---

```
# 157. Read N Characters Given Read4 (easy)
#
# TIL:
# Read the problem out loud?
#
# https://leetcode.com/problems/read-n-characters-given-read4/
# The read4 API is already defined for you.
# Below is an example of how the read4 API can be called.
# file = File.new("abcdefghijk") File is "abcdefghijk", initially file pointer (fp) points to 'a'
# buf4 = [' '] * 4 Create buffer with enough space to store characters
# read4(buf4) # read4 returns 4. Now buf = ['a','b','c','d'], fp points to 'e'
# read4(buf4) # read4 returns 4. Now buf = ['e','f','g','h'], fp points to 'i'
# read4(buf4) # read4 returns 3. Now buf = ['i','j','k',...], fp points to end of file

# @param {List[str]} buf
# @param {int} n
# @return {int}
=begin

    buf approach

    time: O(n)
        to copy n characters.

    space: O(1)
        to keep a buf4 of at most four elements. 

    note:
        Could not solve this the problem was difficult to understand. Redo

=end
def read(buf, n)
    copied_chars    = 0
    read_chars      = 4
    buf4            = [''] * 4
    
    
    while copied_chars < n && read_chars == 4
        read_chars = read4(buf4)

        for i in (0..read_chars-1)
            return copied_chars if copied_chars == n
            buf[copied_chars] = buf4[i]
            copied_chars += 1
        end

    end

    return copied_chars
end
```