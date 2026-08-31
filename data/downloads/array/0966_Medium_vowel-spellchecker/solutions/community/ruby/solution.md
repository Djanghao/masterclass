# Ruby solution with hash lookup

**Author:** gdomingu
**Votes:** 0
**Link:** [https://leetcode.com/problems/vowel-spellchecker/solutions/4274638/](https://leetcode.com/problems/vowel-spellchecker/solutions/4274638/)

---

# Code
```
# @param {String[]} wordlist
# @param {String[]} queries
# @return {String[]}
def spellchecker(wordlist, queries)
    dictionary = {}
    variation_dictionary = {}

    wordlist.each_with_index do |word, index|
        # add exact match
        dictionary[word] = index
        # add case-insensitive variation
        variation_dictionary[word.downcase] = index unless variation_dictionary[word.downcase]
        # add vowel-insensitive variation
        stripped_vowels = word.downcase.gsub(/[aeiou]/, "_")
        variation_dictionary[stripped_vowels] = index unless variation_dictionary[stripped_vowels]
    end

    queries.map do |word|
        index = fetch_index(word, dictionary, variation_dictionary)
        if index 
            wordlist[index]
        else
            ""
        end
    end
end

def fetch_index(word, dictionary, variation_dictionary)
    # or statements ordered by importance
    dictionary[word] || variation_dictionary[word.downcase] || variation_dictionary[word.downcase.gsub(/[aeiou]/, "_")]
end

```