# Sort and Match, O(n), O(n)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-matching-in-an-array/solutions/4998508/](https://leetcode.com/problems/string-matching-in-an-array/solutions/4998508/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {String[]} words
# @return {String[]}
def string_matching(words)
    ans = []
    words.sort!{|a,b| a.size <=> b.size}
    i = 0
    while i < words.size
        j = i + 1
        while j < words.size
            if words[j].include? words[i]
                ans << words[i]
                break
            end
            j += 1
        end

        i += 1
    end

    ans
end
```