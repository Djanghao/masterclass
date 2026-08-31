# C++ | EXPLAINED Solution with excessive comments and Concepts

**Author:** hg3994
**Votes:** 18
**Link:** [https://leetcode.com/problems/sentence-screen-fitting/solutions/1364333/](https://leetcode.com/problems/sentence-screen-fitting/solutions/1364333/)

---

Took help from the solution https://leetcode.com/problems/sentence-screen-fitting/discuss/90839/C%2B%2B-memorized-search by @xiong6

I've just tried to explain the above solution so that it can help others if they can't understand what @xiong6 did in his solution.

```

/*

Harshit Gupta | 26th July, 2021
---------------------------------

Problem Statement:

Given a rows x cols screen and a sentence represented as a list of strings, return the number of times the given sentence 
can be fitted on the screen.

The order of words in the sentence must remain unchanged, and a word cannot be split into two lines. A single space must 
separate two consecutive words in a line.

Example 1:
    Input: sentence = ["hello","world"], rows = 2, cols = 8
    Output: 1
    Explanation:
        hello---
        world---
            The character '-' signifies an empty space on the screen.

Example 2:
    Input: sentence = ["a", "bcd", "e"], rows = 3, cols = 6
    Output: 2
    Explanation:
        a-bcd- 
        e-a---
        bcd-e-
            The character '-' signifies an empty space on the screen.

Example 3:
    Input: sentence = ["i","had","apple","pie"], rows = 4, cols = 5
    Output: 1
    Explanation:
        i-had
        apple
        pie-i
        had--
            The character '-' signifies an empty space on the screen.

https://leetcode.com/problems/sentence-screen-fitting/
------

Solution: 
    1. We can calculate the number of times a sentence fits on the screen by calculating the 
        number of words that can be fit in the total space. If the words fit count is 24 and the sentence is
         of 5 words, then we can fit in the sentence 4 times. (words/n)
    2. So basically this problem has reduced to calculate the number of words that can fit in a space 
        of row*col with spaces in between words and without breaking words.
    3. Another point to see is if the line start with a word Wi and it fits in X words in that line
        Then all lines starting with Wi will have X words only. (We can memoize that in umap)
    4. To calculate the number of words that can be added in a line, we can iterate over the sentence and 
        keep trying to add words starting from seom index j. If len+sentence[j].size() < col, it means that we
        can fit in that word. We must also increase a cnt which would signify 1 word being added in the line.
        We must also keep checking len < cols && we must increase j=(j+1)%n since after adding the last word of the
        sentence we must try to add 0th word if possible.

    TC: O(row*col)
    SC: O(n) where n is the number of words in a sentence.

Paradigm:
---
    NOTE: 

*/


class Solution {
public:
    int wordsTyping(vector<string>& sentence, int rows, int cols) {
        int n = sentence.size();
        int words = 0;
        unordered_map<int, int> umap;
        for(int i=0; i<rows; i++){
            // start: Index of the word with which the line starts (init it starts with 0th word)
            int start = words % n;
            if(umap.count(start)){
                words += umap[start];
            }
            else{
                int addedWordCnt=0; 
                // addedWordCnt: number of words that can be added in the line starting with start index
                // len: represents the letters that we are adding in this line and should be <= cols
                // j: helps in iterating over words in the sentence
                // addedWordCnt increased by 1 after every iter since we can fit in 1 word each iteration
                // j=j+1%n since we want to access the 1st letter after n if we can fit it in same line.
                for(int j=start, len=0; len<=cols; j=(j+1)%n , addedWordCnt++){
                    if(len+sentence[j].size() > cols)
                        break;
                    else
                        // if the word can be added, add 1 for space as well.
                        // this may break the cols and there may not be space for the 'space' 
                        // but the word gets in safely & in that case, we wont add the space, simple!
                        len += sentence[j].size() + 1;
                }
                words += addedWordCnt;
                umap[start] = addedWordCnt;
            }
        }
        return words/n;
    }
};
```