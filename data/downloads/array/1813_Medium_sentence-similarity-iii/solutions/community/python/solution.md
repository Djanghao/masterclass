# 🌟 Step-by-Step Guide to Cracking Sentence Similarity 💯🔥

**Author:** withaarzoo
**Votes:** 141
**Link:** [https://leetcode.com/problems/sentence-similarity-iii/solutions/5875276/](https://leetcode.com/problems/sentence-similarity-iii/solutions/5875276/)

---

![Screenshot 2024-07-02 113653.png](./images/0.png)

Explore a collection of solutions to LeetCode problems in multiple programming languages. Each solution includes a detailed explanation and step-by-step approach to solving the problem efficiently. Whether you're a beginner looking to learn or an experienced coder seeking optimized solutions, this repository aims to provide clear and insightful approaches to tackling challenging LeetCode problems.

### **Access daily LeetCode Solutions Repo :** [click here](https://github.com/withaarzoo/LeetCode-Solutions)

---

![image.png](./images/1.png)

---

# Intuition
<!-- Describe your initial thoughts and strategy to solve this problem. -->
The problem asks us to determine if two sentences can be made identical by inserting words into one of them. This boils down to comparing words from both the beginning and end of each sentence. If we can match all words except for a "middle" part, then the sentences are considered similar. The idea is to check how much of the two sentences can match from the start and the end.

---

# Approach
<!-- Detail the specific method and steps you used to solve the problem. -->
1. **Split sentences into words**: We first break the sentences into words to facilitate comparison.
2. **Match from the start**: Compare words from the start of both sentences.
3. **Match from the end**: Similarly, compare words from the end of both sentences.
4. **Check the middle part**: If the remaining unmatched part of the longer sentence is completely in the middle, then it's possible to insert that part into the shorter sentence.

---

# Complexity

- **Time Complexity**:  
  The time complexity is **O(n)**, where `n` is the number of words in the longer sentence. This is because we are only scanning the words once from the start and the end.

- **Space Complexity**:  
  The space complexity is **O(n)** as well because we are storing the words of both sentences in lists.

---

# Code
```C++ []
class Solution {
public:
    bool areSentencesSimilar(string sentence1, string sentence2) {
        // Helper function to split the sentence into words
        auto splitWords = [](const string& sentence) {
            vector<string> words;
            string word = "";
            for (char c : sentence) {
                if (c == ' ') {
                    if (!word.empty()) {
                        words.push_back(word);
                        word = "";
                    }
                } else {
                    word += c;
                }
            }
            if (!word.empty()) words.push_back(word);
            return words;
        };

        // Split both sentences into words
        vector<string> words1 = splitWords(sentence1);
        vector<string> words2 = splitWords(sentence2);
        
        // Ensure words1 is the longer sentence
        if (words1.size() < words2.size()) swap(words1, words2);
        
        int start = 0, end = 0;
        int n1 = words1.size(), n2 = words2.size();
        
        // Compare from the start
        while (start < n2 && words1[start] == words2[start]) start++;
        
        // Compare from the end
        while (end < n2 && words1[n1 - end - 1] == words2[n2 - end - 1]) end++;
        
        // Check if the remaining unmatched part is in the middle
        return start + end >= n2;
    }
};

```
```Java []
class Solution {

    // Helper function to split a sentence into words
    private String[] splitWords(String sentence) {
        return sentence.split(" ");
    }

    public boolean areSentencesSimilar(String sentence1, String sentence2) {
        // Split both sentences into arrays of words
        String[] words1 = splitWords(sentence1);
        String[] words2 = splitWords(sentence2);

        // Ensure words1 is the longer sentence
        if (words1.length < words2.length) {
            String[] temp = words1;
            words1 = words2;
            words2 = temp;
        }

        int start = 0, end = 0;
        int n1 = words1.length, n2 = words2.length;

        // Compare from the start
        while (start < n2 && words1[start].equals(words2[start])) {
            start++;
        }

        // Compare from the end
        while (end < n2 && words1[n1 - end - 1].equals(words2[n2 - end - 1])) {
            end++;
        }

        // Check if the remaining unmatched part is in the middle
        return start + end >= n2;
    }
}

```
```JavaScript []
/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    // Helper function to split a sentence into words
    const splitWords = (sentence) => sentence.split(" ");

    // Split both sentences into arrays of words
    let words1 = splitWords(sentence1);
    let words2 = splitWords(sentence2);

    // Ensure words1 is the longer sentence
    if (words1.length < words2.length) [words1, words2] = [words2, words1];

    let start = 0, end = 0;
    let n1 = words1.length, n2 = words2.length;

    // Compare from the start
    while (start < n2 && words1[start] === words2[start]) start++;

    // Compare from the end
    while (end < n2 && words1[n1 - end - 1] === words2[n2 - end - 1]) end++;

    // Check if the remaining unmatched part is in the middle
    return start + end >= n2;
};

```
```Python []
class Solution:
    def areSentencesSimilar(self, sentence1: str, sentence2: str) -> bool:
        # Split the sentences into words
        words1 = sentence1.split()
        words2 = sentence2.split()

        # Ensure words1 is the longer sentence
        if len(words1) < len(words2):
            words1, words2 = words2, words1
        
        start, end = 0, 0
        n1, n2 = len(words1), len(words2)
        
        # Compare from the start
        while start < n2 and words1[start] == words2[start]:
            start += 1
        
        # Compare from the end
        while end < n2 and words1[n1 - end - 1] == words2[n2 - end - 1]:
            end += 1
        
        # Check if the remaining unmatched part is in the middle
        return start + end >= n2

```
```Go []
package main

import (
    "strings"
)

func areSentencesSimilar(sentence1 string, sentence2 string) bool {
    // Split sentences into words
    words1 := strings.Split(sentence1, " ")
    words2 := strings.Split(sentence2, " ")

    // Ensure words1 is the longer sentence
    if len(words1) < len(words2) {
        words1, words2 = words2, words1
    }

    start, end := 0, 0
    n1, n2 := len(words1), len(words2)

    // Compare from the start
    for start < n2 && words1[start] == words2[start] {
        start++
    }

    // Compare from the end
    for end < n2 && words1[n1-end-1] == words2[n2-end-1] {
        end++
    }

    // Check if the remaining unmatched part is in the middle
    return start+end >= n2
}

```

---

# Step-by-Step Detailed Explanation
1. **Split Words**: First, we break both sentences into lists of words for easy comparison.
2. **Start Comparison**: We iterate from the beginning of both sentences, checking if the words are the same. This is the "start" comparison.
3. **End Comparison**: We then iterate from the end of both sentences, comparing the words similarly. This is the "end" comparison.
4. **Middle Check**: After comparing the start and end, the remaining part of the longer sentence (if any) should be in the middle, and it should be possible to insert this part into the shorter sentence.
5. **Result**: If the total number of matched words (from start and end) is greater than or equal to the length of the smaller sentence, the sentences are considered similar.

---

# Visualization

Let's take two sentences as an example:

**Example Input:**
- `sentence1 = "My name is Haley"`
- `sentence2 = "My Haley"`

#### Step 1: Split into words

We split both sentences into words for visualization:

- **sentence1**: `"My"` `"name"` `"is"` `"Haley"`
- **sentence2**: `"My"` `"Haley"`

#### Step 2: Compare Prefix

We start comparing words from the beginning:

| Word Position | sentence1 | sentence2 | Match?   |
|---------------|-----------|-----------|----------|
| 1             | `"My"`    | `"My"`    | \u2705 Match |
| 2             | `"name"`  | `"Haley"` | \u274C No Match |

Here, we see the first word matches (`"My"`), but the second word doesn\u2019t.

#### Step 3: Compare Suffix

We now compare the words from the end:

| Word Position | sentence1 | sentence2 | Match?   |
|---------------|-----------|-----------|----------|
| Last          | `"Haley"` | `"Haley"` | \u2705 Match |

Both sentences end with the same word `"Haley"`.

#### Step 4: Find the Unmatched Part

The unmatched words in `sentence1` are `"name"` and `"is"`:

- Remaining part of **sentence1**: `"name is"`
- In **sentence2**, there\u2019s a gap between the prefix `"My"` and the suffix `"Haley"`.

#### Step 5: Inserting Words

Now we check if inserting the unmatched part `"name is"` between `"My"` and `"Haley"` in `sentence2` will make both sentences equal:

**Insert the unmatched words:**

- **sentence2 (after inserting)**: `"My name is Haley"`

Both sentences become the same, so they are **similar**.

---

![upvote cat.png](./images/2.png)
