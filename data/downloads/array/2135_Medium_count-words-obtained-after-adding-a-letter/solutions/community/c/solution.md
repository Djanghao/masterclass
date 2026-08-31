# [c++] Bitmask

**Author:** Castling
**Votes:** 38
**Link:** [https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/solutions/1677081/](https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/solutions/1677081/)

---

1. Generate a hash for each word in startWords using the following rule and add all generated hash into a set:
   For 'a', add 1 (i.e. 1 in binary) to the hash;
   For 'b', add 2 (i.e. 10 in binary) to the hash;
   For 'c', add 4 (i.e. 100 in binary) to the hash;
   For 'd', add 8 (i.e. 1000 in binary)to the hash;
   ...
   
   For example, if the word is "abdz", then the hash is 10000000000000000000001011 in binary.
2. For each word in targetWords, generate a hash a using the same rule but with one character removed.
    So, if the word is "abcd", we need to generate hashes for "abc", "abd", "acd", "bcd". If any of the hashes is in the set of hashes for startWords, the targetWord can be obtained.
	
Note: The order of characters in a word doesn't matter when generating the hash. i.e. "abc" and "cba" have the same hash 111. This avoids the sorting needed in some other solutions.


```
class Solution {
public:
    int wordCount(vector<string>& startWords, vector<string>& targetWords) {
	// generates hashes for startWords.
        unordered_set<int> vis;
        for (string s : startWords) {
            int hash = 0;
            for (int i = 0; i < s.size(); i++) {
                hash += (1 << (s[i] - 'a'));
            }
            vis.insert(hash);
        }
        
		// check each target Word
        int res = 0;
        for (string s : targetWords) {
            int hash = 0;
            // k is the index of character we remove
            for (int k = 0; k < s.size(); k++) {
                hash = 0;
                for (int i = 0; i < s.size(); i++) {
                    if (i == k) continue;
                    hash += (1 << (s[i] - 'a'));
                }
                if (vis.count(hash)) {
                    res++;
                    break;
                }
            }
        }
        
        return res;
    }
};
```