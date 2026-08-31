# Python Solution Without Using Any Special Library With Detailed Explanation

**Author:** a29161629
**Votes:** 21
**Link:** [https://leetcode.com/problems/expressive-words/solutions/393604/](https://leetcode.com/problems/expressive-words/solutions/393604/)

---

In this solution first, I use the process function to get the characters that appear without repeating in the string and also their frequencies. For example for the string "helloo", chars=['h','e','l','o'] and counts=[1,1,2,2]. 
If any of the strings in the words list has the same characters as S, then it worth further investigation. For further investigation, since the characters are the same, we need to figure out if the word can be extended to S based on the expansion rules or not. 
If the frequency of the characters are the same or if we need to expand the character in word to be equal in the frequency with the same character in S, the final frequency value of the character will be 3 or more, then it is expandable. If all of the characters in the word are expandable according to this rule, we have a word that can be changed to S, so we only need to return the number of these words. 
```
class Solution:
    def expressiveWords(self, S: str, words: List[str]) -> int:
        def process(st):
            if not st:
                return [], []
            chars, counts = [st[0]], [1]
            
            for i in range(1, len(st)):
                if st[i] == chars[-1]:
                    counts[-1] += 1
                else:
                    chars.append(st[i])
                    counts.append(1)
            return chars, counts
                

        ans = 0
        s_chars, s_counts = process(S)
        for word in words:
            w_chars, w_counts = process(word)
            
            if s_chars == w_chars:
                counter = 0
                for k in range(len(w_chars)):
                    if w_counts[k]==s_counts[k] or (w_counts[k]<s_counts[k] and s_counts[k]>=3):
                        counter += 1
                
                if counter ==len(w_chars):
                    ans += 1

        return ans