# C++ solution Sliding Window

**Author:** OleksaM
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/solutions/5847525/](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/solutions/5847525/)

---

```
// Please, upvote if you like it. Thanks :-)
class Solution {
public:
    set<char> vowels { 'a', 'e', 'i', 'o', 'u' };
    bool containsAllVowels(map<char, int>& freq) {
        for (const char& c : vowels)
            if (freq[c] == 0)
                return false;
        return true;
    }

    int countOfSubstrings(string word, int k) {
        int res = 0, n = word.size(), consCnt = 0, start = 0;
        map<char, int> freq;
        for (int i = 0, j = 0; i < n; i++) {
            if (vowels.contains(word[i]))
                freq[word[i]]++;
            else
                consCnt++;
            // Reduce consonants cnt to k
            while (consCnt > k) {
                if (vowels.contains(word[j]))
                    freq[word[j]]--;
                else
                    consCnt--;
                start = ++j;
            }
            // Minimize vowels cnt to match the condition
            while (vowels.contains(word[j]) && freq[word[j]] > 1)
                freq[word[j++]]--;
            if (containsAllVowels(freq) && consCnt == k) {
                res++;
                res += j - start;
            }
        }
        return res;
    }
};
```