# Ruby || DP, XOR

**Author:** alecn2002
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5090818/](https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5090818/)

---

\r
# Code\r
```ruby\r
class Integer\r
    def two_pow = (1 << self)\r
end\r
\r
class String\r
    def aord\r
        ord - 'a'.ord\r
    end\r
\r
    LAST_C = 'j'\r
    CCNT = LAST_C.aord + 1\r
\r
    def ws_cnt\r
        sum, freq = 0, Array.new(CCNT.two_pow, 0)\r
        freq[0] = 1\r
        each_char.inject(0) {|res, c|\r
            CCNT.times.inject(res + (freq[sum ^= c.aord.two_pow] += 1) - 1) {|res1, i| res1 + freq[sum ^ i.two_pow] }\r
        }\r
    end\r
end\r
\r
def wonderful_substrings(word) = word.ws_cnt\r
```