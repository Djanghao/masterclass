# RUBY One-Liner

**Author:** jolswlf
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/3440850/](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/3440850/)

---

# Approach

More than 10 times slower than the fastest solution but *20* times shorter!!!! The code itself is pretty self explanatory. 
 
# Code
```
def max_vowels(s, k)
    (0..s.length-k).map { |i| s[i..i+k-1].count('aeiou') }.max
end
```