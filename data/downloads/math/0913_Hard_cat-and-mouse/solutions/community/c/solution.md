# C++ 96ms DP+Topological Sort with explanation by my words

**Author:** ccchan0109
**Votes:** 2
**Link:** [https://leetcode.com/problems/cat-and-mouse/solutions/2295680/](https://leetcode.com/problems/cat-and-mouse/solutions/2295680/)

---

OK, let me say that, what a hell-level problem!!

After looking others discussion, I finally cooked up my version.
Hope my explanation would be helpful for you.

Like other discussion thread, we need to define a 3-dimentional array for `dp[turn][mouse][cat]`
So, obviously from my naming, 
`dp[0][i][j]` means that mouse is on i and cat is on j and it is now mouse turn
`dp[0][i][j]` could be **1=mouse win**, **2=cat win**, **0=undefined/draw**

The game is that,
Assuming `dp[0][i][j]` is 1, which menas when mouse is on vertex i, cat is on vertex j, and now is mouse's turn, mouse will win by definition. Then for the previous step, ie. cat's turn, cat don't want it happen, and cat will not move from any vertex v (adjacent to j) to j. So the possible path from vertex v to j disappears. 

For example, if the graph be [[3],[3],[3],[0,1,2]

	0 -- 3 -- 2
	      \\ 
            1

We knew that `dp[0][0][3] = 1` (since mouse is already in hole), so if cat is on vertex 2 (adjacent to 3), it doesn't want to go to vertex 3, and thus the possible path go from vertex 2 (when cat is on 0) minus by 1. This fact will be represented by `outdegree` variable, where `outdegree[turn][mouse][cat]` means the remaining number of possbile path for cat to win when cat is on `cat` and mouse is on `mouse` and it is cat's turn (when `turn=1`). 

Therefore, if all possible path from vertex v to adjacent vertex u are disappeared, `dp[1][mouse][v]` should be marked 1 because there is no any chance for cats on vertex v to win if mouse is already on `mouse`.

Similarly, assuming `dp[0][i][j]` is 2, then for the previous step. ie. cat's turn, cat really wants to move from v to j because that leads to `dp[0][i][j]=2` which means cat wins. So for any vertex v adjacent to j, `dp[1][i][v]` could be marked 2.

For `dp[1][i][j]`, the logic is the same.

Obviously, initial conditions are `dp[*][0][j] = 1` and `dp[*][i][j] = 2 if i==j and i!=0`
Thus, the topologic sort process would begin from the firmed initial conditions. You can refer the code below.

```
class Solution {
public:
    int catMouseGame(vector<vector<int>>& graph) {
        int N = graph.size();
        vector<vector<int>> dp[2];
        vector<vector<int>> outdegree[2];
        queue<vector<int>> q; // q of {turn, mouse position, cat position} for topological sort

        dp[0] = vector<vector<int>>(N, vector<int>(N));
        dp[1] = vector<vector<int>>(N, vector<int>(N));
        outdegree[0] = vector<vector<int>>(N, vector<int>(N));
        outdegree[1] = vector<vector<int>>(N, vector<int>(N));

        // init dp and queue
        for (int j = 0; j < N; ++j) {
            dp[0][0][j] = dp[1][0][j] = 1;
            q.push({0, 0, j});
            q.push({1, 0, j});
        }
        for (int j = 1; j < N; ++j) {
            dp[0][j][j] = dp[1][j][j] = 2;
            q.push({0, j, j});
            q.push({1, j, j});
        }
        // init outdegree
        for (int i = 0; i < N; ++i) {
            for (int j = 1; j < N; ++j) {
                outdegree[0][i][j] = graph[i].size();
                outdegree[1][i][j] = graph[j].size();
            }
        }
        for (auto &v : graph[0]) {
            for (int i = 0; i < N; ++i) {
                outdegree[1][i][v]--;
            }
        }
        // run the topological sort from queue
        while (q.size()) {
            auto turn = q.front()[0];
            auto mouse = q.front()[1];
            auto cat = q.front()[2];
            q.pop();

            if (turn == 0 && mouse == 1 && cat == 2) {
                // the result has been inferenced
                break;
            }

            if (turn == 0) { // mouse's turn
                // v is the prev position of cat
                for (auto &v : graph[cat]) {
                    if (v == 0) {
                        continue;
                    }

                    if (dp[1][mouse][v] > 0) {
                        continue;
                    }

                    if (dp[turn][mouse][cat] == 2) {
                        // cat wants to move from v to `cat` position, and thus cat wins
                        dp[1][mouse][v] = 2;
                        q.push({1, mouse, v});
                        continue;
                    }

                    outdegree[1][mouse][v]--;
                    if (outdegree[1][mouse][v] == 0) {
                        dp[1][mouse][v] = 1;
                        q.push({1, mouse, v});
                    }
                }
            } else { // cat's turn
				// v is the prev position of mouse
                for (auto &v : graph[mouse]) {
                    if (dp[0][v][cat] > 0) {
                        continue;
                    }

                    if (dp[turn][mouse][cat] == 1) {
                        // mouse wants to move from v to `mouse` position and thus mouse wins
                        dp[0][v][cat] = 1;
                        q.push({0, v, cat});
                        continue;
                    }

                    outdegree[0][v][cat]--;
                    if (outdegree[0][v][cat] == 0) {
                        dp[0][v][cat] = 2;
                        q.push({0, v, cat});
                    }
                }
            }
        }

        return dp[0][1][2];
    }
};
```