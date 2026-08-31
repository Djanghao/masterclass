# [Java/C++/Python/JavaScript/Kotlin/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 3
**Link:** [https://leetcode.com/problems/n-queens/solutions/1984349/](https://leetcode.com/problems/n-queens/solutions/1984349/)

---

***Hello it would be my pleasure to introduce myself Darian.***

***Java***
```
public class Solution {
    public List<List<String>> solveNQueens(int n) {
        boolean[] 
            //ocp0 = new boolean[n], //whether there's a queen ocupying nth row, I don't need it
            ocp90 = new boolean[n], //whether there's a queen ocupying nth column
            ocp45 = new boolean[2 * n - 1], // mark 45 degree occupation
            ocp135 = new boolean[2 * n - 1]; // mark 135 degree occupation
        List<List<String>> ans = new ArrayList<List<String>>();
        char[][] map = new char[n][n];
        for (char[] tmp : map) Arrays.fill(tmp, '.'); //init
        
        solve(0, n, map, ans, ocp45, ocp90, ocp135);
        return ans;
    }
    
    private void solve(int depth, int n, char[][] map, List<List<String>> ans, 
    boolean[] ocp45, boolean[] ocp90, boolean[] ocp135) {
        if (depth == n) {
            addSolution(ans, map);
            return;
        }
        
        for (int j = 0; j < n; j++)
            if (!ocp90[j] && !ocp45[depth + j] && !ocp135[j - depth + n - 1]) {
                ocp90[j] = true;
                ocp45[depth + j] = true;
                ocp135[j - depth + n - 1] = true;
                map[depth][j] = 'Q';
                solve(depth + 1, n, map, ans, ocp45, ocp90, ocp135);
                ocp90[j] = false;
                ocp45[depth + j] = false;
                ocp135[j - depth + n - 1] = false;
                map[depth][j] = '.';
            }
    }
    
    private void addSolution(List<List<String>> ans, char[][] map) {
        List<String> cur = new ArrayList<String>();
        for (char[] i : map) cur.add(String.valueOf(i));
        ans.add(cur);
    }
}
```

***C++***
```
class Solution {
public:
    vector<vector<string>> solveNQueens(int N) {
        ans.clear();
        board.resize(N, string(N, '.'));
        place(0,0,0,0);
        return ans;
    }
    
private:
    vector<vector<string>> ans;
    vector<string> board;
    
    void place(int i, int vert, int ldiag, int rdiag) {
        int N = board.size();
        if (i == N) {
            vector<string> res;
            for (auto row : board) res.push_back(row);
            ans.push_back(res);
            return;
        }
        for (int j = 0; j < N; j++) {
            int vmask = 1 << j, lmask = 1 << (i+j), rmask = 1 << (N-i-1+j);
            if (vert & vmask || ldiag & lmask || rdiag & rmask) continue;
            board[i][j] = 'Q';
            place(i+1, vert | vmask, ldiag | lmask, rdiag | rmask);
            board[i][j] = '.';
        }
    }
};
```

***Python***
```
class Solution:
    def solveNQueens(self, N: int) -> List[List[str]]:
        ans = []
        board = [['.'] * N for _ in range(N)]
        
        def place(i: int, vert: int, ldiag: int, rdiag:int) -> None:
            if i == N:
                ans.append(["".join(row) for row in board])
                return
            for j in range(N):
                vmask, lmask, rmask = 1 << j, 1 << (i+j), 1 << (N-i-1+j)
                if vert & vmask or ldiag & lmask or rdiag & rmask: continue
                board[i][j] = 'Q'
                place(i+1, vert | vmask, ldiag | lmask, rdiag | rmask)
                board[i][j] = '.'
            
        place(0,0,0,0)
        return ans
```

***JavaScript***
```
var solveNQueens = function(N) {
    let ans = [],
        board = Array.from({length: N}, () => new Array(N).fill('.'))
    
    const place = (i, vert, ldiag, rdiag) => {
        if (i === N) {
            let res = new Array(N)
            for (let row = 0; row < N; row++)
                res[row] = board[row].join("")
            ans.push(res)
            return
        }
        for (let j = 0; j < N; j++) {
            let vmask = 1 << j, lmask = 1 << (i+j), rmask = 1 << (N-i-1+j)
            if (vert & vmask || ldiag & lmask || rdiag & rmask) continue
            board[i][j] = 'Q'
            place(i+1, vert | vmask, ldiag | lmask, rdiag | rmask)
            board[i][j] = '.'
        }
    }

    place(0,0,0,0)
    return ans
};
```

***Kotlin***
```
class Solution {
    fun solveNQueens(N: Int): List<List<String>> {
        val result = mutableListOf<List<String>>()
        val board = Array(N) { CharArray(N) { '.' } }

        fun isValid(row: Int, col: Int): Boolean { // check only top rows and cols
            for (i in 0 until row) {
                if (board[i][col] == 'Q')
                    return false
            }
            // top right 
            var (i, j) = row - 1 to col + 1
            while (i >= 0 && j < N) {
                if (board[i--][j++] == 'Q')
                    return false
            }
            // top left
            i = row - 1
            j = col - 1
            while (i >= 0 && j >= 0) {
                if (board[i--][j--] == 'Q')
                    return false
            }
            return true
        }

        fun construct() {
            val list = mutableListOf<String>()
            for (row in board) list.add(String(row))
            result.add(list)
        }

        fun backtrack(row: Int) {
            if (row == N) {
                construct()
                return
            }
            for (col in 0 until N) {
                if (isValid(row, col)) {
                    board[row][col] = 'Q'
                    backtrack(row + 1)
                    board[row][col] = '.'
                }
            }
        }
        
        backtrack(0)
        
        return result
    }
}
```

***Swift***
```
class Solution {
    func solveNQueens(_ n: Int) -> [[String]] {
        var res: [[Int]] = []
        
        
        func backtarck(_ path: [Int]) {
            if path.count == n { res.append(path)  }
            var path = path
            var available: [Int] = []
            for i in 0..<n { available.append(i) }
            
            for (i, val) in path.enumerated() {
                if let index = available.firstIndex(of: val - path.count + i) {
                    available.remove(at: index)
                }
                
                if let index = available.firstIndex(of: val) {
                    available.remove(at: index)
                }
                
                if let index = available.firstIndex(of: val + path.count - i) {
                    available.remove(at: index)
                }
            }
            
            for i in 0..<n {
                if available.contains(i) == false { continue }
                path.append(i)
                backtarck(path)
                path.remove(at: path.count - 1)
            }
        }
        
        backtarck([])
        
        return res.map({ (path: [Int]) -> [String] in
            var res: [String] = []
            for i in path {
                var string = ""
                for j in 0..<n { string += (i == j ? "Q" : ".") }
                res.append(string)
            }
            return res
        })
    }
    
}
```

***Consider upvote if useful! Hopefully it can be used in your advantage!***
***Take care brother, peace, love!***