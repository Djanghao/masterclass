# O(n), O(1)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/odd-string-difference/solutions/5125755/](https://leetcode.com/problems/odd-string-difference/solutions/5125755/)

---


# Code
```
# @param {String[]} words
# @return {String}
def odd_string(words)
    @s_to_i = {}
    ("a".."z").each_with_index do |char, i|
        @s_to_i[char] = i
    end

    ans_hash = Hash.new(0)
    i = 0
    ans_1 = nil
    ans_2 = nil
    while i < words.size
        diff = diff_array words[i]
        ans_hash[diff] += 1
        if ans_hash[diff] == 1 
            if ans_1 == nil
                ans_1 = [words[i], diff]
            elsif ans_2 == nil
                ans_2 = [words[i], diff]
            end
        end

        i += 1
    end

    if ans_hash[ans_1[1]] == 1
        return ans_1[0]
    else
        return ans_2[0]
    end
end

def diff_array word
    ans = []
    j = 1
    while j < word.size
        ans << @s_to_i[word[j]] - @s_to_i[word[j - 1]]
        j += 1
    end 
    ans
end
```