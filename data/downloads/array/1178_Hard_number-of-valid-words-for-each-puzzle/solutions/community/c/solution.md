# C++ Simple and Clean Solution, Easy Explanation

**Author:** YehudisK
**Votes:** 116
**Link:** [https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/1567291/](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/1567291/)

---

**Explanation:**

To easily find if a word contains all the letters of another word, we can use bit masking.
We set all the bits of the corresponding indices of each letter, then we easily see if it's a submask.

So first, we create a hashmap to keep the frequency of each mask, so that if we have two words with the same letter we will count both.

Now, we iterate through the `puzzles`:
We need to find all combinations of submasks to check. This is the faster than iterating through all the words because each puzzle is only 7 letters. 
For that we just do `(submask-1) & mask` - we are turning off a bit by subtracting one which sets the lowest 1 to 0 and all 0s in the right to 1s, and then we do & with the original mask to get only the desired bits.

We need two conditions: 
1. The word should contain the first letter of the puzzle - we check that with `submask & first`.
2. The hashmap saves how many words match this submask, so we just add `mask_freq[submask]`. if it's not in the map it will add zero.

```
class Solution {
public:
    int maskWord(string word) {
        int mask = 0;
        for (auto c : word) mask |= (1 << c-'a');
        return mask;
    }
    
    vector<int> findNumOfValidWords(vector<string>& words, vector<string>& puzzles) {
        unordered_map<int, int> mask_freq;
        for (auto word : words) mask_freq[(maskWord(word))]++;
        
        vector<int> res;
        
        for (auto p : puzzles) {
            int mask = maskWord(p), submask = mask, first = (1 << p[0]-'a'), curr = 0;
            
            while (submask) {
                if (submask & first) curr += mask_freq[submask];
                
                submask = (submask-1) & mask;
            }
            
            res.push_back(curr);
        }
        return res;
    }
};
```
**Like it? please upvote!**