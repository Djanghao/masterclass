# Unleashing the Power of JS..... Easiest Solution Without using Hash table or Trie..........

**Author:** hashcoderz
**Votes:** 4
**Link:** [https://leetcode.com/problems/replace-words/solutions/5272447/](https://leetcode.com/problems/replace-words/solutions/5272447/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires replacing words in a sentence with the shortest prefix from a given dictionary if such a prefix exists. This can be effectively tackled using nested loops: one to iterate over the words in the sentence and another to check for prefixes in the dictionary.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Split the Sentence**: Split the sentence into an array of words.
2. **Nested Loop**: Use nested loops to iterate through each word in the sentence and each prefix in the dictionary.
3. **Prefix Check**: For each word, check if it starts with any prefix from the dictionary.
4. **Track Shortest Prefix**: If a prefix match is found, update the word only if the current prefix is shorter than the previously found prefix.
5. **Join the Sentence**: After all replacements, join the array of words back into a single sentence.

# Complexity
- Time complexity: $$O(m.n.k)$$, where 
-- m is the number of words in the sentence 
-- n is the number of prefixes in the dictionary.
-- k is the average length of a word/prefix comparison.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(m)$$, where 
-- m is the number of words in the sentence. 
-- This space is used to store the split sentence array.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Explanation

1. **Split the Sentence**: sentence.split(" ") splits the sentence into words and stores them in an array arr.
2. **Nested Loop**: The outer loop iterates over each word in arr, while the inner loop iterates over each prefix in dictionary.
3. **Track Shortest Prefix**: shortestPrefix is used to keep track of the shortest matching prefix found. For each word, check if it starts with any prefix from the dictionary. If a match is found and it is shorter than the current shortestPrefix, update shortestPrefix.
4. **Update Word**: After checking all prefixes, replace the word with this prefix.
5. **Join the Sentence**: Finally, arr.join(" ") joins the words back into a single string to form the modified sentence.


# Code
``` typescript []
function replaceWords(dictionary: string[], sentence: string): string {
    let arr = sentence.split(" ");
    for(let i =0 ; i< arr.length; i++){
        for(let j=0; j< dictionary.length; j++){
            if(dictionary[j] && arr[i].startsWith(dictionary[j])){
                arr[i] = dictionary[j];
            }
        }
    }

    return arr.join(" ");
};
```
``` javascript []
const replaceWords = function(dictionary, sentence) {
     let arr  = sentence.split(" ");
    for(let i=0; i< arr.length; i++){
        for(let j=0; j< dictionary.length; j++){
            if(dictionary[j] && arr[i].startsWith(dictionary[j])){
                arr[i] = dictionary[j];
            }
        }
    }

    return arr.join(" ");
};
```

### If you like my content then please upvote me....

