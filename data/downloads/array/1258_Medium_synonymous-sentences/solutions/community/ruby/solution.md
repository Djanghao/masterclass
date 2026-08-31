# Ruby solution

**Author:** hirens20
**Votes:** 0
**Link:** [https://leetcode.com/problems/synonymous-sentences/solutions/4058518/](https://leetcode.com/problems/synonymous-sentences/solutions/4058518/)

---

# Code
```
# @param {String[][]} synonyms
# @param {String} text
# @return {String[]}
require 'set'
def generate_sentences(synonyms, text)
    synonym_groups = {}
    synonyms.each do |synonym|
        synonym_groups[synonym[0]] ||= []
        synonym_groups[synonym[0]] << synonym[1]
        synonym_groups[synonym[1]] ||= []
        synonym_groups[synonym[1]] << synonym[0]
    end

    result = Set.new
    queue = []
    queue.push(text)
    while !queue.empty?
        sentence = queue.pop
        result.add(sentence)
        words = sentence.split(' ')
        for i in 0...words.length do
            if synonym_groups.key?(words[i])
                synonyms = synonym_groups[words[i]]
                synonyms.each do |synonym|
                    words[i] = synonym # Replace words[i] with its synonym
                    new_sentence = words.join(' ')
                    queue.push(new_sentence) if !result.include?(new_sentence)
                end
            end 
        end
    end
    result.to_a.sort!
end
```