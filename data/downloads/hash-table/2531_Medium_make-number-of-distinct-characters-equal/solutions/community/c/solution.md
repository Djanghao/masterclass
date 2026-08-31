# C++ - O(26*26) - Just Use Map & Swap - Learn Thought process!

**Author:** geekykant
**Votes:** 48
**Link:** [https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/3016886/](https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/3016886/)

---

**Thought process**:

Brute force - As the max `word.length` is `10^5`, doing a `word1 x word2` for each `i,j` would cost us `O(N^2`) which is very less likely to get accepted.

How can we improve this?
* Since we are talking about swapping, From previous problems we have learned that if we had unlimited swaps - we could do big things with the whole `word1 + word2` together as a word and apply some `greedy` logic.
* Tried few examples and it did not make much sense.
* But wait.. we are **swapping only once**, we could try something easy with `map`.

Thinking of using map?
Mmm well yes, since we have only `26 chars` and we could reduce it to `O(26 x 26)` complexity, and swap and check each time - which is well good to get accepted.

**Code**
```cpp
bool isItPossible(string word1, string word2) {
    unordered_map<char, int> mp1, mp2;
    //add all chars to the map
    for(char ch: word1) mp1[ch]++;
    for(char ch: word2) mp2[ch]++;

    for(int i=0; i < 26; i++){
        for(int j=0; j < 26; j++){
            char ch1 = i + 'a', ch2 = j + 'a';
            if(mp1.count(ch1) && mp2.count(ch2)){
                //remove one char from both to swap
                if(--mp1[ch1] == 0) mp1.erase(ch1);
                if(--mp2[ch2] == 0) mp2.erase(ch2);

                //add the new char
                mp1[ch2]++;
                mp2[ch1]++;

                //if distinct chars in both, return true
                if(mp1.size() == mp2.size())
                    return true;

                //add back the removed chars, also remove the new added chars
                if(--mp1[ch2] == 0) mp1.erase(ch2);
                if(--mp2[ch1] == 0) mp2.erase(ch1);
                mp1[ch1]++;
                mp2[ch2]++;
            }
        }
    }
    return false;
}
```
**Upvote and lets learn together :)**