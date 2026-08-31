# The Swift 🍕 Solution!, Beats 100%

**Author:** ingax
**Votes:** 5
**Link:** [https://leetcode.com/problems/encode-and-decode-strings/solutions/2885598/](https://leetcode.com/problems/encode-and-decode-strings/solutions/2885598/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I know this solution is silly. Why so serious!?

But hear me out... In an interview, we score extra points for out-of-the-box solutions. In this case, Swift is a rather unqiue programming language in that every Character is a Unicode value at its core. This means that an emoji is a valid Character.

And if certain Unicode values are outside of the given range of values expected in the input string, we can safely use it as a delimiter.

# Approach
<!-- Describe your approach to solving the problem. -->
We concatenate the strings and use a \uD83C\uDF55 as the delimiter to encode. Then we can reverse this to decode.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n + \uD83C\uDF55)$$

# Code
```
class Codec {
    /*
    - When char repeats, mark char * # repeats
    - Delimiter to mark end/start of string
    - String can contain 256 ascii values
    */
    func encode(_ strs: [String]) -> String {
        var encoding = ""
        for str in strs {
            encoding.append(str + "\\U0001f355")
        }
        return encoding
    }
    
    func decode(_ s: String) -> [String] {
        var decoding: [String] = []
        var word = ""
        for char in s {
            if char == "\\U0001f355" {
                decoding.append(word)
                word = ""
            } else {
                word.append(char)
            }
        }
        return decoding
    }
}

/**
 * Your Codec object will be instantiated and called as such:
 * let obj = Codec()
 * val s = obj.encode(strs)
 * let ans = obj.decode(s)
*/
```