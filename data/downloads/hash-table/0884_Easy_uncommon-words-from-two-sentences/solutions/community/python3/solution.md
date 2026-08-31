# Python | Hashing & Frequency counting

**Author:** Khosiyat
**Votes:** 47
**Link:** [https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5797015/](https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5797015/)

---

[see the Successfully Accepted Submission](https://leetcode.com/problems/uncommon-words-from-two-sentences/submissions/1392712929/?envType=daily-question&envId=2024-09-17)

# Code
```python3 []
class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
        # Split the sentences into words
        words_s1 = s1.split()
        words_s2 = s2.split()
        
        # Combine all words into one list
        all_words = words_s1 + words_s2
        
        # Count the frequency of each word
        word_count = Counter(all_words)
        
        # Find words that occur exactly once
        return [word for word in word_count if word_count[word] == 1]

```
Steps:
Combine the words from both sentences: We will combine the words from both sentences into one list.
Count the frequency of each word: Using a dictionary or a Counter, we will count how many times each word appears in both sentences combined.
Filter uncommon words: Once we have the frequency of all the words, we can find the words that appear exactly once.
Return the uncommon words: These words will be our result.

Explanation:
Splitting the sentences: We split both sentences into lists of words using split().

`words_s1 = s1.split()` will convert the first sentence into a list of words.
`words_s2 = s2.split()` will convert the second sentence into a list of words.
Combining all words: We concatenate the two word lists (`words_s1` and `words_s2`) into a single list, `all_words`.

Counting the word frequency: We use `Counter` from the `collections` module to count how many times each word appears across both sentences.

Filtering uncommon words: We return a list of words that appear exactly once in the combined word list.

Example Walkthrough:
Example 1:
` s1 = "this apple is sweet" `
` s2 = "this apple is sour" `

After splitting, `words_s1 = ['this', 'apple', 'is', 'sweet']` and `words_s2 = ['this', 'apple', 'is', 'sour']`.
Combined, `all_words = ['this', 'apple', 'is', 'sweet', 'this', 'apple', 'is', 'sour']`.
The `Counter` will give us: `{'this': 2, 'apple': 2, 'is': 2, 'sweet': 1, 'sour': 1}`.
Words that appear exactly once are `['sweet', 'sour']`, which is the answer.

Example 2:
`s1 = "apple apple"`
`s2 = "banana"`

After splitting, `words_s1 = ['apple', 'apple']` and `words_s2 = ['banana']`.
Combined, `all_words = ['apple', 'apple', 'banana']`.
The `Counter` will give us: `{'apple': 2, 'banana': 1}`.
Words that appear exactly once are `['banana']`, which is the answer.

Time Complexity:
Splitting both sentences takes `O(n + m)`, where `n` is the length of `s1` and `m` is the length of `s2`.
Counting the frequency of words takes `O(n + m)` because we're processing each word once.
Filtering the uncommon words takes `O(n + m)` as well. Thus, the overall time complexity is `O(n + m)`.

Space Complexity:
We use extra space for the combined word list and the word count dictionary. Thus, the space complexity is `O(n + m)`.


![image](./images/0.jpeg)