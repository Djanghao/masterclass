# Ruby solution - two methods

**Author:** josh-works
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/361099/](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/361099/)

---

This is the first passing solution I came up with. It's readable, I suppose, but I'm not particularly pleased with it.

```

def count_characters(words, chars)
    found_words = []
    words.each do |w|
        if word_chars_in_approve_list?(w, chars)
            found_words << w 
        end
    end
    p found_words
    return found_words.join.length
end

def word_chars_in_approve_list?(word, chars)
    list = chars.split("")
    word.split("").each do |c|
        if list.include?(c)
            index = list.index(c)
            list.delete_at(index)
        else
            return false
        end
    end
    return true
end
```