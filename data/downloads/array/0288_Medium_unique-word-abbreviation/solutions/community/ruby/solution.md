# A Ruby solution

**Author:** StefanPochmann
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-word-abbreviation/solutions/73183/](https://leetcode.com/problems/unique-word-abbreviation/solutions/73183/)

---

Remember the dictionary words grouped by their abbreviations.

    class ValidWordAbbr
      def initialize(dictionary)
        @words = dictionary.group_by(&method(:abbr))
      end
    
      def is_unique(word)
        words = @words[abbr(word)]
        !words || words == [word]
      end
      
      private
      
      def abbr(word)
        [word[0], word.size, word[-1]]
      end
    end