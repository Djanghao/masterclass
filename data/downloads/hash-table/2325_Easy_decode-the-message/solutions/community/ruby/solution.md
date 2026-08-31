# RUBY 🔶 Easy one-liner using gsub and regex

**Author:** jolswlf
**Votes:** 2
**Link:** [https://leetcode.com/problems/decode-the-message/solutions/3218088/](https://leetcode.com/problems/decode-the-message/solutions/3218088/)

---

# Approach
Using $.tr$ we can "translate" the message according to our key. We clean the key by first getting the unique characters and then removing white spaces with $.gsub$. 
 
# Code
```
def decode_message(key, message)
    message.tr(key.chars.uniq.join.gsub(/\\s+/, ""), "a-z")
end
```