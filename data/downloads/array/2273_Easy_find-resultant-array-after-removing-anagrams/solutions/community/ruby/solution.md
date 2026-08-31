# Beats 100%

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/4834476/](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/4834476/)

---


# Code
```
# @param {String[]} words
# @return {String[]}
def remove_anagrams(words)

    
    ans = []
    to_be_deleted = Hash.new
    l = 0
    r = 1
    prev_l = -1
    while r < words.size
        if prev_l != l
            word_hash1 = Hash.new(0)
            words[l].each_char do |c|
                word_hash1[c] += 1
            end
        end

        word_hash2 = Hash.new(0)
        words[r].each_char do |c|
            word_hash2[c] += 1
        end

        prev_l = l

        if word_hash1.size == word_hash2.size
            anagram = true
            chars = word_hash1.keys
            chars.each do |char|
                if word_hash1[char].to_i != word_hash2[char].to_i
                    anagram = false
                    break
                end
            end

            if !anagram
                l = r
                r += 1
            else
                to_be_deleted[r] = true
                r += 1
                
            end
        else
            l = r
            r += 1
        end

        
        
    end

    ans = []
    i = 0
    while i < words.size
        if !to_be_deleted[i]
            ans << words[i]
        end
        i += 1
    end
    ans
end
```