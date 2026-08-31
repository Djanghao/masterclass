# Two well explained BFS and DFS C++ solutions that pass all 35 test cases (17th Nov 21)

**Author:** vincible
**Votes:** 29
**Link:** [https://leetcode.com/problems/zuma-game/solutions/1226417/](https://leetcode.com/problems/zuma-game/solutions/1226417/)

---

### Solution 1: Using DFS with memoization - 

Key steps -
1. Use `vector<int>` to count frequencies of balls in `hand`. Use `unordered_map<string, int>` for memoization of `steps` needed to empty `board` using `hand`.
2. Use recursive DFS to try inserting every ball in hand at every suitable position on the board/table. Suitable here means that a combination that's worth exploring, see note 3 and 4 of bfs solution above. Same condition is used here.
3. Decrease freq of ball when inserting it on the board and increase it before trying a new combination.
4. Update the `board` after inserting a ball on the board and recursively call DFS on the new `board` with the new `hand`.
5. Serialize function is used to serialize frequency array to cache board, hand answers. 
6. Return the minimum steps after trying all combination.  

```
class Solution {
public:
int findMinStep(string board, string hand) {
	vector<int> freq(26, 0);
	for(char c: hand)
		freq[c - 'A']++;
	unordered_map<string, int> cache;
	return dfs(board, freq, cache);
}

int dfs(string board, vector<int>& freq, unordered_map<string, int>& cache) {
    string key = board + "#" + serialize(freq);
	if(cache.count(key)) {
        return cache[key];
    }
	int r = INT_MAX;
	if(board.length() == 0) {            // base case => we have removed all the balls from table
		r = 0;
	} else {
		for(int i = 0; i < board.length(); i++) {     // try inserting a ball from hand at every position on row of balls
			for(int j = 0; j < freq.size(); j++) {       // try all the balls at every position
                bool worthTrying = false;
                if(board[i] - 'A' == j)
                    worthTrying = true;
                else if(0 < i && board[i] == board[i - 1] && board[i] - 'A' != j) 
                    worthTrying = true;
                    
				if(freq[j] > 0 && worthTrying) {      // only if the frequency is more than 0, skipping this line will lead to runtime error
					board.insert(board.begin() + i, j + 'A');   // insert ball at ith index
					freq[j]--;    // update the frequency of ball

					string newStr = updateBoard(board);   // remove groups of 3 or more if possible
					int steps = dfs(newStr, freq, cache);   // recursively call the function for the new string board
					if(steps != -1) {    // steps will be -1 if we can't remove all the balls using this combination
						r = min(r, steps + 1);
					}

					freq[j]++;  // restore the frequency
					board.erase(board.begin() + i);   // remove the ball from this position to try next combination
				}
			}
		}
	}
	if(r == INT_MAX) r = -1;   // we can't remove all the balls
	cache[key] = r;
	return r;
}

string updateBoard(string board) {
	 int start = 0;
	 int end = 0; 
	 int boardLen = board.length();
	 while(start < boardLen) {
		 while(end < boardLen && board[start] == board[end]) {
			 end++;   // increment end pointer if consecutive balls are of same color
		 }
		 
		/* here, end will point to the ball next to consecutive balls of same color 
		such that  number of balls of same color = end - start */
		
		 if(end - start >= 3) {   // remove if 3 or more balls
			 string newBoard = board.substr(0, start) + board.substr(end); 
			 return updateBoard(newBoard);     // recursively check if there are more groups in the new string
		 } else {
			 start = end;
		 }
	 }
	 return board;
}

string serialize(vector<int>& freq) {
    string key = "";
    for(int i = 0; i < freq.size(); i++) {
        if(freq[i] > 0)
        key += to_string((char) i + 'A') + to_string(freq[i]);
    }
    return key;
}  
};
```
---
Inspired by @rocket_ggy's [JAVA solution](https://leetcode.com/problems/zuma-game/discuss/1011468/Classic-Java-DFS-with-Memo-that-passes-all-test-cases). 

### Solution 2: Using BFS with visited set - 

```
class Solution {
public:
    int findMinStep(string board, string hand) {
		sort(hand.begin(), hand.end()); // sort the hand so balls of same colour come together
        queue<string> bq; // queue for board
        queue<string> hq; // queue for hand
        queue<int> stepq; // queue for steps
        unordered_set<string> visited; // visited set for caching
        visited.insert(board + "#" + hand);
        bq.push(board);
        hq.push(hand);
        stepq.push(0); // start at step 0
        while(!hq.empty()) {
            string curBoard = bq.front();
            bq.pop();
            string curHand = hq.front();
            hq.pop();
            int curStep = stepq.front();
            stepq.pop();
			
			// try inserting each ball from hand at each unique position on board 
            for(int i = 0; i < curBoard.length(); i++) {
                for(int j = 0; j < curHand.length(); j++) {
				
					// the two ifs below ensures that only unique possibilities are tested, see Note 1,2
                    if(j > 0 && curHand[j] == curHand[j - 1]) continue;
                    if(i > 0 && curBoard[i - 1] == curHand[j]) continue;
					
                    bool worthTrying = false;
					
					// the if, else block below tests if this combination is worth exploring, see Note 3,4
                    if(curBoard[i] == curHand[j]) worthTrying = true;
                    else if(0 < i && curBoard[i] == curBoard[i - 1]
                      && curBoard[i] != curHand[j]) worthTrying = true;
                    
                    if(worthTrying) {
                        string newBoard = updateBoard(curBoard.substr(0, i)
                                                      + curHand[j] 
                                                      + curBoard.substr(i), i);
                        if(newBoard == "") return curStep + 1;
                        string newHand = curHand.substr(0, j) + curHand.substr(j + 1);
                        if(visited.find(newBoard + "#" + newHand) == visited.end()) {
                            bq.push(newBoard);
                            hq.push(newHand);
                            stepq.push(curStep + 1);
                            visited.insert(newBoard + "#" + newHand);
                        }
                    }
                }
            }
        }
        return -1;
    }
    string updateBoard(string board, int idx) {
        if(idx < 0) return board;
        int left = idx, right = idx;
        while(left > 0 && board[left] == board[left - 1]) left--;
        while(right < board.length() && board[right] == board[right + 1]) right++;
        
        int sameClrLen = right - left + 1;
        if(sameClrLen >= 3)
            return updateBoard(board.substr(0, left) + board.substr(right + 1), left - 1);
        else
            return board;
    }
};
```

Notes -
1. `if(j > 0 && curHand[j] == curHand[j - 1]) continue;`  - This is an optimisation which skips the balls of same colour in hand, as they will lead to same results. This is the reason why sorting hand is necessary in beginning. eg - board = "GRG", hand = "RRG", so skip the second R for each i as it will lead to same results as inserting the first R.
2. `if(i > 0 && curBoard[i - 1] == curHand[j]) continue;` - This is also an optimisation which ensures we only insert at the beginning of balls of same colour on board. eg - board = "BRRG", hand = "RG", so the if condition will be false for i = 1, j = 0 but true for i = 2, j = 0. These two ifs ensures we try only unique possibilities.
3. `if(curBoard[i] == curHand[j]) pick = true;` -  If current letter on hand and board are same, then it's worth inserting the ball in hand and exploring further reductions.
4. `else if(0 < i && curBoard[i] == curBoard[i - 1] && curBoard[i] != curHand[j]) pick = true;`  - If current ball is hand in different than two consecutive same coloured ones on board. In this case, we insert the ball in hand between the same coloured ones on board. This condition may also empty the board . eg - board = "RRWWRRBBRR", hand = "BW". Insert B after i = 1, board = "RBRWWRRBBRR". Then insert W after i = 2, board = "RBRWWWRRBBRR" -> "RBRRRBBRR" -> "RBBBRR" -> "RRR" -> "".

Inspired by @nightybear's [post](https://leetcode.com/problems/zuma-game/discuss/1568450/Python-Easy-BFS-solution-with-explain).

Please give an upvote if this post helped you.