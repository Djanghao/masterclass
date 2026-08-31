# 1-2 lines Python/Ruby

**Author:** StefanPochmann
**Votes:** 141
**Link:** [https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/81262/](https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/81262/)

---

**Ruby**

    def reverse_vowels(s)
      vowels = s.scan(/[aeiou]/i)
      s.gsub(/[aeiou]/i) { vowels.pop }
    end

---

**Python**

    def reverseVowels(self, s):
        vowels = re.findall('(?i)[aeiou]', s)
        return re.sub('(?i)[aeiou]', lambda m: vowels.pop(), s)

---

It's possible in one line, but I don't really like it:

    def reverseVowels(self, s):
        return re.sub('(?i)[aeiou]', lambda m, v=re.findall('(?i)[aeiou]', s): v.pop(), s)

---

Another version, finding replacement vowels on the fly instead of collecting all in advance:

    def reverseVowels(self, s):
        vowels = (c for c in reversed(s) if c in 'aeiouAEIOU')
        return re.sub('(?i)[aeiou]', lambda m: next(vowels), s)