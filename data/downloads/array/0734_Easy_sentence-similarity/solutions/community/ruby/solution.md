# Easy to Understand Via Ruby | Breaking Stack ✅😃

**Author:** mr3abd
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-similarity/solutions/3151422/](https://leetcode.com/problems/sentence-similarity/solutions/3151422/)

---



# Code
```
# @param {String[]} sentence1
# @param {String[]} sentence2
# @param {String[][]} similar_pairs
# @return {Boolean}
def are_sentences_similar(sentence1, sentence2, similar_pairs)
    return false unless sentence1.size == sentence2.size
    sentence1.each_with_index do |e , idx|
        found = false 
        similar_pairs.each do |pair|
            found = true and break if valid_sentence?(pair ,e , idx , sentence2)
        end
        return false unless found or (e == sentence2[idx])
    end
    true
end

  def valid_sentence?(pair ,e , idx , sentence2)
     pair.include?(e) && pair.include?(sentence2[idx])
  end
```