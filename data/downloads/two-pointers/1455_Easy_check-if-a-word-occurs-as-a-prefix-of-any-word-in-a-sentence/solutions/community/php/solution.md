# 🎉 BEATS 100% 🚀 | O(n) 📈| Easiest Approach Explained! ✨ | PHP🌈💖

**Author:** webdevanjali
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/6105838/](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/6105838/)

---

### Intuition :

   - The problem requires checking if a given word `searchWord` is a **prefix** of any word in a sentence.
   - A **prefix** is a substring that starts from the beginning of the string and matches exactly up to the length of `searchWord`.
   - You need to find the **first word** in the sentence where `searchWord` is a prefix and return its 1-based index.
   - If no word starts with `searchWord`, return `-1`.

### Approach:
   - **Step 1:** Split the sentence into individual words. We can use PHP's ```explode(" ", $sentence)``` function to split the sentence by spaces.
   - **Step 2:** For each word in the sentence, check if `searchWord` is a **prefix** of that word.
   - **Step 3:** If a word matches, return its **1-based index** (because the problem specifies that indices are 1-based, not 0-based).
   - **Step 4:** If no match is found, return `-1`.

To check if a word starts with `searchWord`, we:
   - Ensure the word is at least as long as `searchWord` (so that the word can be a prefix).
   - Use `substr($word, 0, $searchWordLength)` to extract the prefix from the start of the word and compare it with `searchWord`.


### Complexity Analysis:

1. **Time Complexity:** $$ O(n)$$, where `n` is the length of the sentence.
   - **Splitting the sentence:** The `explode()` function splits the sentence into words, which takes **O(n)** time, where `n` is the length of the sentence.
   - **Iterating over words:** We loop through each word in the sentence. In the worst case, we have to check each word in the sentence, so this takes **O(m)** time, where `m` is the number of words in the sentence.
   - **Checking if the word is a prefix:** For each word, we compare a substring (`substr($word, 0, $searchWordLength)`) with `searchWord`. This operation takes **O(k)** time, where `k` is the length of `searchWord`.

   Thus, the total time complexity is:
   - **O(n + m * k)**, where `n` is the length of the sentence, `m` is the number of words, and `k` is the length of `searchWord`.
   
   However, in practice, the length of the sentence (`n`) is typically the dominant factor, so the time complexity is often simplified to **O(n)**.

2. **Space Complexity:** $$O(m)$$, where `m` is the number of words in the sentence.
   - The space complexity is determined by the storage required for the array of words. If the sentence has `m` words, the space complexity is **O(m)** for the `words` array.
   - There are also some temporary variables like `searchWordLength`, but they take constant space **O(1)**.

   So, the space complexity is **O(m)**, where `m` is the number of words in the sentence.



# Code
```php []
class Solution {

    /**
     * @param String $sentence
     * @param String $searchWord
     * @return Integer
     */
    function isPrefixOfWord($sentence, $searchWord) {
        $words= explode(" ",$sentence);
        $searchWordLength = strlen($searchWord);
        foreach($words as $index => $word){
            if(strlen($word)>= $searchWordLength && substr($word, 0, $searchWordLength)==$searchWord) return $index+1;
        }
        return -1;
    }
}
```




