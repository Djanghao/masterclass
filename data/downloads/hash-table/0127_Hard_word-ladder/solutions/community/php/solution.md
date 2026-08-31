# BFS (with explanation)

**Author:** Angielf
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-ladder/solutions/5413469/](https://leetcode.com/problems/word-ladder/solutions/5413469/)

---

# Approach
The approach of the solution is a Breadth-First Search (BFS) algorithm. 

The wordList is treated as the graph, and the words in the list are the nodes. 
The algorithm starts with the beginWord and explores all possible transformations by changing one letter at a time. 
It keeps track of the distance from the beginWord and checks if the endWord is reached.

# Complexity
- Time complexity:
$$O(M^2 * N)$$, where M is the length of the words and N is the total number of words in the wordList. This is because for each word, we explore all possible intermediate words by changing one letter at a time, resulting in M^2 transformations. We do this for all N words in the wordList.

- Space complexity:
$$O(N)$$, where N is the total number of words in the wordList. This is due to the space used by the wordSet set and the queue.

# Code
``` python3 []
class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        if endWord not in wordList or not endWord or not beginWord or not wordList:
            return 0

        # Transform wordList into a set for faster lookup
        wordSet = set(wordList)
        # Create a queue to perform BFS
        # Each tuple contains a word and its distance from the beginning word
        queue = deque([(beginWord, 1)])

        while queue:
            word, length = queue.popleft()

            # If we find the target word, return its distance
            if word == endWord:
                return length

            # For each letter in the word, create a new word by changing one letter
            for i in range(len(word)):
                for char in string.ascii_lowercase:
                    next_word = word[:i] + char + word[i+1:]
                    # If the new word is in the wordList, add it to the queue
                    if next_word in wordSet:
                        wordSet.remove(next_word)
                        queue.append((next_word, length + 1))

        # If no transformation sequence exists, return 0
        return 0

```
``` javascript []
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!endWord || !beginWord || !wordList || !wordList.includes(endWord)) {
        return 0;
    }

    // Transform wordList into a set for faster lookup
    const wordSet = new Set(wordList);
    // Create a queue to perform BFS
    // Each tuple contains a word and its distance from the beginning word
    const queue = [];
    queue.push([beginWord, 1]);

    while (queue.length > 0) {
        const [word, length] = queue.shift();

        // If we find the target word, return its distance
        if (word === endWord) {
            return length;
        }

        // For each letter in the word, create a new word by changing one letter
        for (let i = 0; i < word.length; i++) {
            for (let j = 97; j <= 122; j++) {
                const nextWord = word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);
                // If the new word is in the wordList, add it to the queue
                if (wordSet.has(nextWord)) {
                    wordSet.delete(nextWord);
                    queue.push([nextWord, length + 1]);
                }
            }
        }
    }

    // If no transformation sequence exists, return 0
    return 0;
};
```
``` php []
class Solution {

    /**
     * @param String $beginWord
     * @param String $endWord
     * @param String[] $wordList
     * @return Integer
     */
    function ladderLength($beginWord, $endWord, $wordList) {
        if (!$endWord || !$beginWord || !$wordList || !in_array($endWord, $wordList)) {
            return 0;
        }

        // Transform wordList into an array for faster lookup
        $wordSet = array_flip($wordList);
        // Create a queue to perform BFS
        // Each array contains a word and its distance from the beginning word
        $queue = array(array($beginWord, 1));

        while (!empty($queue)) {
            list($word, $length) = array_shift($queue);

            // If we find the target word, return its distance
            if ($word === $endWord) {
                return $length;
            }

            // For each letter in the word, create a new word by changing one letter
            for ($i = 0; $i < strlen($word); $i++) {
                foreach (range(97, 122) as $char) {
                    $nextWord = substr($word, 0, $i) . chr($char) . substr($word, $i + 1);
                    // If the new word is in the wordList, add it to the queue
                    if (isset($wordSet[$nextWord])) {
                        unset($wordSet[$nextWord]);
                        array_push($queue, array($nextWord, $length + 1));
                    }
                }
            }
        }

        // If no transformation sequence exists, return 0
        return 0;
    }
}
```