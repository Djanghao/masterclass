# Official Solution

**Link:** [https://leetcode.com/problems/word-pattern/solution/](https://leetcode.com/problems/word-pattern/solution/)

---

[TOC]

## Solution

This problem is similar to [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/).

---

### Approach 1: Two Hash Maps

**Intuition**

The most naive way to start thinking about this problem is to have a single hash map, tracking which character (in `pattern`) maps to what word (in `s`). As you scan each character-word pair, update this hash map for characters which are not in the mapping. If you see a character which already is one of the keys in mapping, check whether the current word matches with the word the character maps to. If they do not match, you can immediately return `False`, otherwise, just keep on scanning until the end.

This type of check will work well for cases such as:

* "abba" and "dog cat cat dog"  -> Returns `True`.
* "abba" and "dog cat cat fish" -> Returns `False`.

But it will fail for:

* "abba" and "dog dog dog dog"  -> Returns `True` (Expected `False`).

A fix for this is to have two hash maps, one for mapping characters to words and the other for mapping words to characters. While scanning each character-word pair,

* If the character is **NOT** in the character to word mapping, you additionally check whether that word is also in the word to character mapping.
    * If that word is already in the word to character mapping, then you can return `False` immediately since it has been mapped with some other character before.
    * Else, update both mappings.
* If the character **IS IN** in the character to word mapping, you just need to check whether the current word matches with the word which the character maps to in the character to word mapping. If not, you can return `False` immediately.

**Implementation**

<iframe src="https://leetcode.com/playground/YsT4vceg/shared" frameBorder="0" width="100%" height="500" name="YsT4vceg"></iframe>

**Complexity Analysis**

* Time complexity : $$O(N + M)$$ where $$N$$ represents the length of `s` and $$M$$ represents the length of `pattern`. All operations in the algorithm are linear with the length of the inputs.

* Space complexity : $$O(N)$$ where $$N$$ represents the length of `s`. No more than 26 bijections will be added to each hashmap since they are limited by the number of letters in the alphabet. The character to word hash map stores a word for each entry, which are substrings of `s`, so their combined lengths equal `s`. Therefore, this hashmap requires $O(26 + N)$ space. The other hashmap requires the same amount of space, so the overall space complexity is $$O(N)$$.

*Addendum:* Rather than keeping two hash maps, we can only keep character to word mapping and whenever we find a character that is not in the mapping, you can check whether the word in current character-word pair is already **one of the values** in the character to word mapping. However, this is trading time off for better space since checking for values in a hash map is a $$O(K)$$ operation where $$K$$ is the number of key value pairs in the hash map. Thus, if we decide to go this way, our time complexity will be $$O(N \cdot K)$$ where $$N$$ is the number of unique characters in `pattern`.

Another similar approach to Approach 1 would be using hash set to keep track of words which have been encountered. Instead of checking whether the word is already in the word to character mapping, you just need to check whether the word is in the encountered word hash set. And, rather than updating the word to character mapping, you just need to add the word to the encountered word hash set. Hash set would have a better practical space complexity even though the big-O space complexity for hash set and hash map is the same.

---

### Approach 2: Single Index Hash Map

**Intuition**

Rather than having two hash maps, we can have a single index hash map which keeps track of the first occurrences of each character in `pattern` and each word in `s`. As we go through each character-word pair, we insert unseen characters from `pattern` and unseen words from `s`.

The goal is to make sure that the indices of each character and word match up. As soon as we find a mismatch, we can return `False`.

Let's go through some examples.

- `pattern`: 'abba'
- `s`: 'dog cat cat dog'

1. 'a' and 'dog' -> map_index = `{'a': 0, 'dog': 0}`
    * Index of 'a' and index of 'dog' are the same.
2. 'b' and 'cat' -> map_index = `{'a': 0, 'dog': 0, 'b': 1, 'cat': 1}`
    * Index of 'b' and index of 'cat' are the same.
3. 'b' and 'cat' -> map_index = `{'a': 0, 'dog': 0, 'b': 1, 'cat': 1}`
    * 'b' is already in the mapping, no need to update.
    * 'cat' is already in the mapping, no need to update.
    * Index of 'b' and index of 'cat' are the same.
4. 'a' and 'dog' -> map_index = `{'a': 0, 'dog': 0, 'b': 1,  'cat': 1}`
    * 'a' is already in the mapping, no need to update.
    * 'dog' is already in the mapping, no need to update.
    * Index of 'a' and index of 'dog' are the same.


- `pattern`: 'abba'
- `s`: 'dog cat fish dog'

1. 'a' and 'dog' -> map_index = `{'a': 0, 'dog': 0}`
    * Index of 'a' and index of 'dog' are the same.
2. 'b' and 'cat' -> map_index = `{'a': 0, 'dog': 0, 'b': 1, 'cat': 1}`
    * Index of 'b' and index of 'cat' are the same.
3. 'b' and 'fish' -> map_index = `{'a': 0, 'dog': 0, 'b': 1, 'cat': 1, 'fish': 2}`
    * 'b' is already in the mapping, no need to update.
    * Index of 'b' and index of 'fish' are NOT the same. Returns `False`.

**Implementation**

*Differentiating between character and string:* In Python there is no separate `char` type. And for cases such as:

- `pattern`: 'abba'
- `s`: 'b a a b'

Using the same hash map will not work properly. A workaround is to prefix each character in `pattern` with "char_" and each word in `s` with "word_".

<iframe src="https://leetcode.com/playground/npBGytix/shared" frameBorder="0" width="100%" height="480" name="npBGytix"></iframe>

**Complexity Analysis**

* Time complexity : $$O(N + M)$$ where $$N$$ represents the length of `s` and $$M$$ represents the length of `pattern`. All operations in the algorithm are linear with the length of the inputs.

* Space complexity : $$O(N)$$ where $$N$$ represents the length of `s`. An entry will be made in the hashmap for each unique character of the pattern and each word in `s`. No more than 26 of each will be added to the hashmap since the number of bijections is limited to the number of letters in the alphabet. The words are substrings of `s`, so their combined lengths equal `s`. Therefore, this hashmap requires $O(N)$ space.