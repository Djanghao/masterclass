# My Ruby backtracking solution - beats 100%

**Author:** tomtang2
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-pattern-ii/solutions/73684/](https://leetcode.com/problems/word-pattern-ii/solutions/73684/)

---

simple backtracking algorithm, uses a dictionary and a reverse dictionary to guarantee uniqueness of patter->str and str->pattern.
````
def word_pattern_match(pattern, str)
    is_match(str, {}, pattern, {})
end

def is_match(str, dict, pattern, rev_dict)
    # puts "str: #{str}, pattern: #{pattern}, dict: #{dict.to_s}"
    return true if str.length == 0 && pattern.length == 0
    return false if pattern.length == 0
    
    if s = dict[pattern[0]]
        return is_match(str[s.length..-1], dict, pattern[1..-1], rev_dict) if str.start_with?(s)
        return false
    else
        for i in (0..(str.length - pattern.length))
            next if rev_dict[str[0..i]]
            tmp_dict = dict.dup
            tmp_dict[pattern[0]] = str[0..i]
            tmp_rev_dict = rev_dict.dup
            tmp_rev_dict[str[0..i]] = pattern[0]
            return true if is_match(str[(i+1)..-1], tmp_dict, pattern[1..-1], tmp_rev_dict)
        end
    end
    return false
end
````