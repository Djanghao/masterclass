# C++ | TRIE+DFS | O(M×N×4^(length_of_largest_word)) TIME COMPLEXITY

**Author:** gaurav972001
**Votes:** 55
**Link:** [https://leetcode.com/problems/word-search-ii/solutions/1512202/](https://leetcode.com/problems/word-search-ii/solutions/1512202/)

---

**TIME COMPLEXITY EXPLANATION**
For single word search in a 2d matrix in [WORD SEARCH 1](https://leetcode.com/problems/word-search/discuss/1512539/c-dfs-backtracking-nm4size_of_word-time) problem we apply dfs at every point of matrix for that we run 2 for loops and their time complexity is m\xD7n and in each dfs we visit 4^(sizeofword) because we are applying dfs calls to 4 directions for each character of the given word , so the time complexity for that will be m\xD7n\xD74^(sizeofword).Now coming to this problem, if we dont use Trie we will use the code of word search 1 problem but we will run 1 more for loop for each word in words array , so the time complexity of that would be no_of_word\xD7(m\xD7n\xD74^(sum_of_lengths_of_all_words)) .Here, we are using trie because of that we dont need to run the extra for loop for each word due to which time complexity drops to m\xD7n\xD74^(length_of_largest_word) where length_of_largest_word is the height of the trie.
link to [WORD SEARCH 1 PROBLEM SOLUTION](https://leetcode.com/problems/word-search/discuss/1512539/c-dfs-backtracking-nm4size_of_word-time) 

**CODE-**
```
class Trie{
public:
    string word;
    bool is_word=false;
    Trie* children[26]={NULL};
};

class Solution {
private:   
    Trie* root=NULL;
    
    void insert(string &s){
        Trie* temp=root;
        for(auto &i:s){
            int k=i-'a';
            if(temp->children[k]==NULL){
                temp->children[k]=new Trie;
            }
            temp=temp->children[k];
        }
        temp->word=s;
        temp->is_word=true;
    }
    
    void dfs(vector<vector<char>>&board, vector<string>&res, Trie* temp, int i, int j){

        if(i<0 || i>=board.size() || j<0 || j>=board[0].size() || board[i][j]=='*' || !(temp->children[board[i][j]-'a']))
            return;
        
        temp=temp->children[board[i][j]-'a'];
        
        if(temp->is_word){
            res.push_back(temp->word);
            temp->is_word=false;
        }
        
        char temp_char = board[i][j];
        board[i][j]='*';
        
        dfs(board, res, temp, i+1, j);
        dfs(board, res, temp, i, j+1);
        dfs(board, res, temp, i-1, j);
        dfs(board, res, temp, i, j-1);
        
        board[i][j]=temp_char;
        
        return;
    }
    
public:
    Solution(){
        root=new Trie;
    }
    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
        for(auto &s:words)
            insert(s);
        vector<string>res;
        Trie* temp=root;
        
        for(int i=0;i<board.size();i++)
            for(int j=0;j<board[0].size();j++)
                dfs(board, res, temp, i, j);
        
        return res;
    }
    
/*--------destructor not neccesary-----------
    ~Solution(){                      
        clear_nodes(root);
    }
    
    void clear_nodes(Trie* root) //
    {
        for(int i = 0; i<26; i++)
            if(root->children[i] != NULL)
                clear_nodes(root->children[i]);
        delete root;
    }
-------------------------------------------*/
};
```