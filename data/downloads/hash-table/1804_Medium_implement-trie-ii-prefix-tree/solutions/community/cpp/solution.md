# C++ | EXPLAINED | Start & End at every Level | O(word) time every query.

**Author:** hg3994
**Votes:** 4
**Link:** [https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/1325062/](https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/1325062/)

---

```
#define ALPHABET_SIZE 26
class TrieNode {
public:
    TrieNode* children[ALPHABET_SIZE];
    int end;
    int start;
    TrieNode() {
        for(int i=0;i<ALPHABET_SIZE; i++){
            this->children[i] = NULL;
        }
        this->end = 0; // to store the words ending at this node.
        this->start = 0; // to store the words going through this node.
		// may be the name start is bad, please use a more meaningful name.
    }
};

class Trie {
public:
    TrieNode* root;
    Trie() {
        root = new TrieNode();
    }
    
    // Update the start at every node insertion & end at the last node.
    void insert(string word) {
        TrieNode* current = root;
        for(int i=0; i<word.size(); i++){
            int index = word[i]-'a';
            if(current->children[index]){
                current = current->children[index];
                current->start = current->start+1;
            }
            else{
                current->children[index] = new TrieNode;
                current = current->children[index];
                current->start = current->start+1;
            }
        }
        current->end = current->end+1;
    }
    
    // Return the "end" by just traversing the word
    int countWordsEqualTo(string word) {
        TrieNode* current = root;
        for(int i=0; i<word.size(); i++){
            int index = word[i]-'a';
            if(current->children[index]){
                current = current->children[index];
            }
            else{
                return 0;
            }
        }
        return current->end;
    }
    
    // Return the "start" after traversing the word.
    int countWordsStartingWith(string prefix) {
        TrieNode* current = root;
        for(int i=0; i<prefix.size(); i++){
            int index = prefix[i]-'a';
            if(current->children[index]){
                current = current->children[index];
            }
            else{
                return 0;
            }
        }
        return current->start;
    }
    
    // Keep decreasing the 'start' at every node and 'end' for the final node.
    // TODO: Delete the node if start=0 & end=0 for the final node.
    void erase(string word) {
        TrieNode* current = root;
        for(int i=0; i<word.size(); i++){
            int index = word[i]-'a';
            current = current->children[index];
            current->start = current->start - 1;
        }
        current->end -= 1;
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * int param_2 = obj->countWordsEqualTo(word);
 * int param_3 = obj->countWordsStartingWith(prefix);
 * obj->erase(word);
 */
```