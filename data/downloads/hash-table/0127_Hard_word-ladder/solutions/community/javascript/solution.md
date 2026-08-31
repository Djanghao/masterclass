# JavaScript Heavily Commented BFS Solution

**Author:** control_the_narrative
**Votes:** 46
**Link:** [https://leetcode.com/problems/word-ladder/solutions/659447/](https://leetcode.com/problems/word-ladder/solutions/659447/)

---

This post is a more detailed explanation for a [solution](https://leetcode.com/problems/word-ladder/discuss/400673/Clean-JavaScript-BSF-solution) by Hongbo-Miao.

The time complexity is O(N * M * 26) where 
N = number of words, 
M = length of each word
technically you can drop the 26 since its a constant
```javascript
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList)
    let queue = [beginWord];
    let steps = 1;
    
    while(queue.length) {
        const next = [];
        
        // loop over each word in the queue
        for(let word of queue) {
            if(word === endWord) return steps;
            
            // loop over each char of the word 
            for(let i = 0; i < word.length; i++) {
                
                // and replace the char with letters from [a - z]
                for(let j = 0; j < 26; j++) {
                    const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i+1);
                    
                    // if the new word exist in the word list add it to the queue
                    if(wordSet.has(newWord)) {
                        next.push(newWord);
                        wordSet.delete(newWord);
                    }
                }
            }
        }
        queue = next
        steps++;
    }
    return 0;    
};
```