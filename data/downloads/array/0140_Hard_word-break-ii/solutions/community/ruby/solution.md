# Short and fast backtracking + caching solution

**Author:** andrei3
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-break-ii/solutions/44310/](https://leetcode.com/problems/word-break-ii/solutions/44310/)

---

    def word_break(s, word_dict, hash = nil)
        return [""] if s.to_s.empty?
        hash ||= {}
        return hash[s] if !hash[s].nil?
        hash[s] = word_dict
                  .select { |x| s.start_with?(x) }
                  .map { |x| 
                         word_break(s[x.size..-1], word_dict, hash)
                         .map { |y| "#{x} #{y}".strip }
                  }
                  .flatten
    end