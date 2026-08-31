# Ruby Solution

**Author:** woahlag
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-similarity-ii/solutions/619443/](https://leetcode.com/problems/sentence-similarity-ii/solutions/619443/)

---

```
def are_sentences_similar_two(words1, words2, pairs)
    return false if words1.length != words2.length
    
    @pairs = Hash.new 
    
    pairs.each do |pair|
       @pairs[pair[0]] ||= []
       @pairs[pair[1]] ||= []

       @pairs[pair[0]] << pair[1]
       @pairs[pair[1]] << pair[0]
    end

    index = 0
    while index < words1.length
        puts "#{words1[index]}:#{words2[index]}"
        return false unless same_words?(words1[index], words2[index], Set.new)  
        index += 1
    end
        
    true
end

def same_words?(word1, word2, used)
    return true if word1 == word2
    return false if used.include?(word1)
    
    used.add(word1)
    
    return unless @pairs[word1]
    
    @pairs[word1].map do |similar|
        same_words?(similar, word2, used)
    end.any?
end
```