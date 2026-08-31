# 🌟 100% Easy Explanation | Hashing: A Step-by-Step Guide 📝

**Author:** dev-shahadat
**Votes:** 6
**Link:** [https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5798149/](https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5798149/)

---

If you find this method useful, feel free to upvote! \uD83D\uDC4D

# \uD83E\uDDE0 Intuition 
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to identify words that appear exactly once in one sentence but not in the other. The key insight is tracking how often each word appears across both sentences. If a word appears only once in total, it's considered "uncommon." Therefore, the solution involves counting word occurrences and spotting those that appear exactly once.

# **\uD83D\uDD27 Approach**  
1. **\uD83D\uDCDD Split the sentences into words:** First, break each sentence into an array of words using the `split(" ")` method.
2. **\uD83D\uDCCA Count word frequencies:** Use a `HashMap` to track how often each word appears across both sentences.
3. **\uD83D\uDD0D Find uncommon words:** Once we have the word counts, iterate through the `HashMap` to find words that appear exactly once.
4. **\uD83D\uDCCB Return the result:** The uncommon words are collected into a list, converted into an array, and returned.

# **\uD83D\uDCDA Steps:**  
1. Split sentences `s1` and `s2` into word arrays.
2. Use a `HashMap<String, Integer>` to count the occurrences of each word from both sentences.
3. Iterate through the `HashMap` to select words with a count of exactly one.
4. Return the list of uncommon words.

# **\uD83D\uDCC8 Complexity**  
- **\u23F3 Time complexity:** O(n + m), where `n` is the number of words in sentence `s1` and `m` is the number of words in sentence `s2`. This is because we process each sentence to count words and then identify uncommon words.
- **\uD83D\uDCBE Space complexity:** O(n + m), as we store all words in a `HashMap` and a list to store the result.

# Code
```ruby []
# @param {String} s1
# @param {String} s2
# @return {String[]}
def uncommon_from_sentences(s1, s2)
    words_hash = Hash.new(0)
    s1.split.each do |word|
        words_hash[word] += 1
    end
    s2.split.each do |word|
        words_hash[word] += 1
    end
    words_hash.select { |_,count| count == 1}.keys
end
```
```javascript []
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let wordsHash = {};
    s1.split(" ").forEach(word => {
        wordsHash[word] = wordsHash[word] ? wordsHash[word] + 1 : 1;
    });
    
    s2.split(" ").forEach(word => {
        wordsHash[word] = wordsHash[word] ? wordsHash[word] + 1 : 1;
    });
    
    let result = [];
    for (let word in wordsHash) {
        if (wordsHash[word] === 1) {
            result.push(word);
        }
    }
    
    return result;
};
```