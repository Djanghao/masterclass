# DFS + Trie | O(N * L) search, O(N * L) insertion | C++

**Author:** fergalicrizz
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/5843061/](https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/5843061/)

---


Instead of searching every string possible to see if its present and valid in the Trie, which takes O(N * L) time, we do DFS over the Trie. Lookup is still O(N * L) but we avoid visiting and revisiting many times commonly visited nodes by using DFS.


```cpp []
class Pt{
public:
    vector<Pt*> children;
    bool isEnd ;
    char val;
    Pt(): children(26, nullptr), isEnd(false) {}
    void insert(string word){
        Pt* curr = this;
        for(char c : word){
            if((curr->children)[c - 'a'] == nullptr){
                (curr->children)[c - 'a'] = new Pt();
                ((curr->children)[c - 'a'])->val = c;
            }
            curr = (curr->children)[c - 'a'];
        }
        curr->isEnd = true;
    }
    string longestWord(){
        
        string l = "";
        
        //strategy: ignore any nodes where the isEnd flag is not true. they cant contribute to our word :(
        for(Pt* c : this->children){
            if(c != nullptr && c->isEnd == true){
                string p = c->longestWord();
                if(p.size() >= l.size()) l = c->val + p;
            }
        }
        return l;
    }
};

class Solution {
public:
    string longestWord(vector<string>& words) {
        Pt* searchPt = new Pt();
        for(string word : words){
            searchPt->insert(word);
        }
        return searchPt->longestWord();
    }
};
```