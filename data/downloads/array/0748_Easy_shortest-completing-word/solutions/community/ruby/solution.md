# Simple hash checking scheme. O(n), O(1)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-completing-word/solutions/4967272/](https://leetcode.com/problems/shortest-completing-word/solutions/4967272/)

---

hash can have a max of 26 char
# Code
```
# @param {String} license_plate
# @param {String[]} words
# @return {String}
def shortest_completing_word(license_plate, words)
    freq_license_plate_chars = {}
    skip = {}
    (0..9).each do |num|
        skip[num.to_s] = true
    end

    skip[" "] = true

    license_plate.each_char do |char|
        if !skip[char]
            if !freq_license_plate_chars[char.downcase]
                freq_license_plate_chars[char.downcase] = 1
            else
                freq_license_plate_chars[char.downcase] += 1
            end
        end
    end

    # We want to the shortest word first.
    words.sort!{|a,b| a.size <=> b.size}
    
    words.each do |word|
        dup_hash = freq_license_plate_chars.dup
        word.each_char do |char|
            if dup_hash[char]
                if dup_hash[char.downcase] == 1
                    dup_hash.delete char
                    if dup_hash.size == 0
                        return word
                    end
                else
                    dup_hash[char] -= 1
                end
            end
        end 
    end

    
end
```