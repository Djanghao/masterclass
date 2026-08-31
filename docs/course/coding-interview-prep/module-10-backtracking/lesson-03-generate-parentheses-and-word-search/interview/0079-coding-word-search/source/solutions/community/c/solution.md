# C++ DFS Solution || TLE explanation

**Author:** poojabasker
**Votes:** 211
**Link:** [https://leetcode.com/problems/word-search/solutions/1507900/](https://leetcode.com/problems/word-search/solutions/1507900/)

---

For those of you who are getting TLE, eventhough the logic seems correct, make sure you **pass board by reference** instead of passing by value.
Use : 
```
bool DFS(vector<vector<char>>& board, string word, int i, int j, int n) 
```
Instead of :
```
bool DFS(vector<vector<char>> board, string word, int i, int j, int n) {
```

When it is passed by value, the function creates its own copy of the parameters passed as arguments. This means it makes a copy of board everytime the function is called.  
Took me a good 1 hour to figure this out!

Here's my code, 
```
class Solution {
public:
    //pass board by reference
    bool DFS(vector<vector<char>>& board, string word, int i, int j, int n) {
		//check if all the alphabets in the word is checked
        if(n == word.size()) return true; 
        
		//check if i and j are out of bound or if the characters aren't equal
        if(i < 0 || i >= board.size() || j < 0 || j >= board[i].size() || board[i][j] != word[n]) return false;
        
		//mark as visited 
        board[i][j] = '0';
        
		//branch out in all 4 directions
        bool status = DFS(board, word, i + 1, j, n + 1) ||  //down
                        DFS(board, word, i, j + 1, n + 1) ||  //right
                        DFS(board, word, i - 1, j, n + 1) ||  //up
                        DFS(board, word, i, j - 1, n + 1);  //left
        
		//change the character back for other searches
        board[i][j] = word[n];
		
        return status;
    }
    
    bool exist(vector<vector<char>>& board, string word) {
        if(word == "") return false;
        
        for(int i = 0; i < board.size(); i++) 
            for(int j = 0; j < board[i].size(); j++) 
				//check if the characters are equal then call DFS
                if(board[i][j] == word[0] && DFS(board, word, i, j, 0))
                    return true;
        
        return false;
    }
};
```

Happy coding :)