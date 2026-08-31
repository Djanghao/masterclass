# C++

**Author:** abhay5349singh
**Votes:** 5
**Link:** [https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/1495792/](https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/1495792/)

---

**Connect with me on LinkedIn**: https://www.linkedin.com/in/abhay5349singh/

**Approach:**
We can place the given word Horizontally (Left --> Right or Right --> Left) or Vertically (Top --> Bottom or Bottom --> Top).
We can pre compute all the valid cells according to constraints in question

```
class Solution {
public:
    bool placeWordInCrossword(vector<vector<char>>& grid, string word) {
        int n=grid.size(), m=grid[0].size();
        int len=word.length();
        
		// available spaces if we place our word from Left --> Right
        vector<vector<int>> ltr(n,vector<int>(m,0));
        for(int i=0;i<n;i++){
            int c=0;
            for(int j=m-1;j>=0;j--){
                if(grid[i][j]!='#'){
                    c++;
                }else{
                    c=0;
                }
                ltr[i][j]=c;
            }
        } 
        
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(ltr[i][j]==len){
                    if((j>0 && grid[i][j-1]!='#') || (j+len<m && grid[i][j+len]!='#')) continue;
                    int k=0, l=j;
                    while(k!=len){
                        if(grid[i][l]!=' ' && grid[i][l]!=word[k]) break;
                        l++, k++;
                    }
                    if(k==len) return true;
                }
            }
        }
        
		// available spaces if we place our word from Right  --> Left 
        vector<vector<int>> rtl(n,vector<int>(m,0));
        for(int i=0;i<n;i++){
            int c=0;
            for(int j=0;j<m;j++){
                if(grid[i][j]!='#'){
                    c++;
                }else{
                    c=0;
                }
                rtl[i][j]=c;
            }
        }
        
        for(int i=0;i<n;i++){
            for(int j=m-1;j>=0;j--){
                if(rtl[i][j]==len){
                    if((j<m-1 && grid[i][j+1]!='#') || (j-len>=0 && grid[i][j-len]!='#')) continue;
                    int k=0, l=j;
                    while(k!=len){
                        if(grid[i][l]!=' ' && grid[i][l]!=word[k]) break;
                        l--,k++;
                    }
                    if(k==len) return true;
                }  
            }
        }
        
		// available spaces if we place our word from Top --> Bottom
        vector<vector<int>> ttb(n,vector<int>(m,0));
        for(int j=0;j<m;j++){
            int c=0;
            for(int i=n-1;i>=0;i--){
                if(grid[i][j]!='#'){
                    c++;
                }else{
                    c=0;
                }
                ttb[i][j]=c;
            }
        }
        
        for(int j=0;j<m;j++){
            for(int i=0;i<n;i++){
                if(ttb[i][j]==len){
                    if((i>0 && grid[i-1][j]!='#') || (i+len<n && grid[i+len][j]!='#')) continue;
                    int k=0, l=i;
                    while(k!=len){
                        if(grid[l][j]!=' ' && grid[l][j]!=word[k]) break;
                        l++,k++;
                    }
                    if(k==len) return true;
                }
            }
        }
        
		// available spaces if we place our word from Bottom --> Top 
        vector<vector<int>> btt(n,vector<int>(m,0));
        for(int j=0;j<m;j++){
            int c=0;
            for(int i=0;i<n;i++){
                if(grid[i][j]!='#'){
                    c++;
                }else{
                    c=0;
                }
                btt[i][j]=c;
            }
        }
        
        for(int j=0;j<m;j++){
            for(int i=n-1;i>=0;i--){
                if(btt[i][j]==len){
                    if((i<n-1 && grid[i+1][j]!='#') || (i-len>=0 && grid[i-len][j]!='#')) continue;
                    int k=0, l=i;
                    while(k!=len){
                        if(grid[l][j]!=' ' && grid[l][j]!=word[k]) break;
                        l--,k++;
                    }
                    if(k==len) return true;
                }
            }
        }
        return false;
    }
};
```