# ruby solution

**Author:** user0589f
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/2448672/](https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/2448672/)

---

```
# @param {String} word
# @return {Integer}
def count_vowel_substrings(word)
    count = 0
    vowel = {"a" => 0, "e" => 0, "i" => 0, "o" => 0, "u" => 0} 
    word.chars.each_with_index do |c, i|
        if vowel.keys.include?(c)
            vowel[c] += 1
            [*i+1...word.length].each do |j|
                if vowel.keys.include?(word[j])
                    vowel[word[j]] += 1
                    count += 1 if vowel.values.all?{|v| v > 0}
                else
                    break
                end
            end
            vowel = {"a" => 0, "e" => 0, "i" => 0, "o" => 0, "u" => 0}
        end
    end
    count
end