# [C++] Simplest Intuitive Solution | Trie

**Author:** Mythri_Kaulwar
**Votes:** 22
**Link:** [https://leetcode.com/problems/replace-words/solutions/1704741/](https://leetcode.com/problems/replace-words/solutions/1704741/)

---

**APPROACH :**

* Insert all the words of the array ```dictionary``` into a "Trie".
* Create an empty string ```ans```.
* Extract each word from ```sentence``` & do the following :
         1. If any prefix of the wors is not present in the trie, add the entire word to the string ```ans```. 
         2. If a prefix of the word exists & ```isEnd``` of the last letter of the prefix is true, then that's the root & the remaining is the successor. So add the 'root' part to the ```ans```.
         3. After every word, add ```' '``` to ```ans```.

**Code :**
```
class TrieNode{
public:
    TrieNode *child[26];
    bool isEnd;
    
    TrieNode(){
        this->isEnd = false;
        for(int i=0; i<26; i++) this->child[i]= NULL;
    }
};

class Solution {
    TrieNode *newNode;
public:
    string check(string word){
        TrieNode *t = newNode;
        string s = "";
        
        for(auto i : word){
            if(!t->child[i-'a']) break;
            s += i;
            t = t->child[i-'a'];
            if(t->isEnd) return s;
        }
        return word;
    }
    
    void insert(string word){
        TrieNode *temp = newNode;
        
        for(auto l : word){
            if(!temp->child[l-'a']) temp->child[l-'a'] = new TrieNode();
            temp = temp->child[l-'a'];
        }
        
        temp->isEnd = true;
    }
    
    string replaceWords(vector<string>& dict, string sentence) {
        newNode = new TrieNode();
        for(auto s : dict) insert(s);
        istringstream ss(sentence);
        string word = "", ans="";
        
        for(; ss>>word; ){
            ans += check(word);
            ans += ' ';
        }
        ans.pop_back();
        
        return ans;
    }
};
```

**Do upvote if you like the solution :)**