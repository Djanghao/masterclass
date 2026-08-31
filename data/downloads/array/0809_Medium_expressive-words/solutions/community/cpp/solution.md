# [C++] 8ms Different Solution

**Author:** applefanboi
**Votes:** 9
**Link:** [https://leetcode.com/problems/expressive-words/solutions/766592/](https://leetcode.com/problems/expressive-words/solutions/766592/)

---

**Edit:** Approach is called as Modified Run Length Encoding. Found it after reading solution.
**Status:** Accepted (**8ms** Code)

**Idea (Run Length Encoding) :**
* For the given string, store the frequency of continuous characters. (eg. heeellooo -> h1 e3 l2 o3)
* Now do it same for the word in the word and validate it.
* Key Validations: Break if the character differs, if the count is less than the actual count & if the count is less than 3.

**Complexity Analysis:**
1. Time: O(k + nk) k is the string length and n is the number of strings.
2. Space: O(k) 

Upvote. If it helps :) Thanks.
```
int expressiveWords(string s, vector<string>& words) {
        vector<pair<char,int>> v;
        char cache = s[0]; int cacheCount = 1;
        for(int i = 1; i < s.length(); i++){
            if(s[i] != cache){
                v.push_back({cache, cacheCount});
                cache = s[i];
                cacheCount = 1;
            }
            else cacheCount++;
        }
        v.push_back({cache, cacheCount});
        
        int res = 0;
        for(auto word : words){
            int k = 0;
            word = word + 'X';
            char cache = word[0]; int cacheCount = 1;
            for(int i = 1; i < word.length(); i++){
                if(k == v.size()){
                    res--;
                    break;
                }
                if(word[i] != cache){
                    auto p = v[k];
                    if((p.first != cache) || (p.second < cacheCount) || (p.second > cacheCount && p.second < 3)) break;
                    k++;
                    cache = word[i];
                    cacheCount = 1;
                }
                else cacheCount++;
            }
            if(k == v.size()) res++;
        }
        return res;
    }
```