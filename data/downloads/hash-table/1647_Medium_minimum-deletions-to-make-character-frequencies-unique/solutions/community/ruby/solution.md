# Simple solution with hashmap and set

**Author:** user0984f
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/solutions/4041788/](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/solutions/4041788/)

---


# Code
```
require 'set'

# @param {String} s
# @return {Integer}
def min_deletions(s)
    return calculate_minimum_deletions(frequency_of_characters(s))
end

def calculate_minimum_deletions(frequencies)
    frequenciesSet = Set.new()
    deletions = 0
    
    frequencies.each do |key, frequency|
      while frequency > 0 && frequenciesSet.include?(frequency)
        frequency -= 1
        deletions += 1
      end
      if frequency > 0
        frequenciesSet << frequency
      end
    end

    return deletions
end

def frequency_of_characters(input)
    hash = {}
    input.each_char do |c|
        if hash[c].nil?
            hash[c] = 1
        else
            hash[c] += 1
        end
    end
    return hash
end
```