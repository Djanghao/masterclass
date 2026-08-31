# Trie Hash

**Author:** Jared_S
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/4138384/](https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/4138384/)

---

# Approach
Use a Hash to count (tally) the occurrances of each word.


# Code
```
class Trie
    def initialize()
    end

    def insert(word)
      tally[word] += 1
    end

    def count_words_equal_to(word)
      tally[word]
    end

    def count_words_starting_with(prefix)
      tally.select do |k,v|
        k[0..prefix.size-1] == prefix
      end.values.sum
    end

    def erase(word)
      tally[word] -= 1
    end

    private

    def tally
      @tally ||= Hash.new(0)
    end
end

```