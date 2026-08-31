# BFS is Pretty Slow | C++ [Common Template Used to Travel in BFS]

**Author:** khud_gye_guru
**Votes:** 8
**Link:** [https://leetcode.com/problems/alphabet-board-path/solutions/3119821/](https://leetcode.com/problems/alphabet-board-path/solutions/3119821/)

---

**Here is a Common Template used for BFS when you want to travel in 4 directions** 
```
string move = "ULDR";
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, -1, 0, 1};
bool isValidDirection(int x, int y, int n, int m){
    return  (x >= 0 && y >= 0 && x < n && y < m);
}
```
> Using BFS in this question is not a optimal choice but it is possible
> BFS gives the shortest path as it traverse level-wise
---
> First Store the board in a vector of string or 2D vector
> Call BFS for every charater in target string for the shortest path
> We need a visited array for every BFS call because we need to travel the matrix / grid multiple times
> Make a queue of current location...i.e (x, y) and current path string
> If we find the target char then update the values of (x,y) with current location and add the path string to total path string
---
**We know how to traverse in 4 directions... after checking the validity of move and that it is not visited
add that move to the string and push it to the queue
after that we need to pop the last inserted move 
WHY... because we are on same level and some other moves can still be performed so that the original path change we need to pop the last char at same level** 


# C++ CODE

```
class Solution {
struct val{
    int x, y;
    string s;
};
private:
    string move = "ULDR";
    int dx[4] = {-1, 0, 1, 0};
    int dy[4] = {0, -1, 0, 1};
    bool isValidDirection(int X, int Y, int n, int m){
        return  (X >= 0 && Y >= 0 && X < n && Y < m);
    }
public:
    void bfs(char &ch,int &x, int &y, vector<vector<char>> &key, string &res){
        vector<vector<bool>> vis(6, vector<bool>(5, 0));
        queue<val> q1;
        q1.push({x, y, ""});
        vis[x][y] = 1;

        while(!q1.empty()){
            int X = q1.front().x;
            int Y = q1.front().y;
            string S = q1.front().s;
            q1.pop();

            if(key[X][Y]==ch){
                S += '!';
                res += S, x = X, y = Y;
                return;
            }

            for(int i = 0; i < 4; i++){
                int XD = dx[i] + X;
                int YD = dy[i] + Y;
                if(isValidDirection(XD, YD, 6, 5) and !vis[XD][YD] and key[XD][YD]!='#'){
                    vis[XD][YD] = 1;
                    S += move[i];
                    q1.push({XD,YD,S});
                    S.pop_back();
                }
            }
        }
    }
    string alphabetBoardPath(string &target) {
        string res = "";
        int x = 0, y = 0;
        vector<vector<char>> key = {
            {'a', 'b', 'c', 'd', 'e'},
            {'f', 'g', 'h', 'i', 'j'},
            {'k', 'l', 'm', 'n', 'o'},
            {'p', 'q', 'r', 's', 't'},
            {'u', 'v', 'w', 'x', 'y'},
            {'z', '#', '#', '#', '#'}   };
        for(char &ch: target){
            bfs(ch, x, y, key, res);
        }
        return res;
    }
};
```
# Any optimization in this approach is appreciated