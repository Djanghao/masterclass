# [Java/C++/Python/JavaScript/Kotlin/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 5
**Link:** [https://leetcode.com/problems/generate-parentheses/solutions/1984330/](https://leetcode.com/problems/generate-parentheses/solutions/1984330/)

---

***Hello it would be my pleasure to introduce myself Darian.***

***Java***
```
class Solution {
    public List<String> generateParenthesis(int N) {
        ans = new ArrayList<>();
        m = 2 * N;
        dfs(0, 0, 0);
        return ans;
    }
    
    private List<String> ans;
    private int m;
    
    private void dfs(int pos, int open, int seq) {
        if (pos == m) {
            StringBuilder res = new StringBuilder();
            for (int i = 0; i < m; i++)
                res.append((seq & 1 << i) > 0 ? "(" : ")");
            ans.add(res.toString());
            return;
        }
        if (open > 0) dfs(pos+1, open-1, seq);
        if (m - pos > open) dfs(pos+1, open+1, seq | 1 << pos);
    }
}
```

***C++***
```
class Solution {
public:
    vector<string> generateParenthesis(int N) {
        m = 2 * N;
        dfs(0, 0, 0);
        return ans;
    }
    
private:
    vector<string> ans;
    int m;
    
    void dfs(int pos, int open, int seq) {
        if (pos == m) {
            string res = "";
            for (int i = 0; i < m; i++)
                res += seq & 1 << i ? "(" : ")";
            ans.push_back(res);
            return;
        }
        if (open) dfs(pos+1, open-1, seq);
        if (m - pos > open) dfs(pos+1, open+1, seq | 1 << pos);
    }
};
```

***Python***
```
class Solution:
    def generateParenthesis(self, N: int) -> List[str]:
        ans, m = [], 2 * N
        
        def dfs(pos: int, opn: int, seq: int) -> None:
            if pos == m:
                res = [0] * m
                for i in range(m):
                    res[i] = "(" if seq & 1 << i else ")"
                ans.append("".join(res))
                return
            if opn: dfs(pos+1, opn-1, seq)
            if m - pos > opn: dfs(pos+1, opn+1, seq | 1 << pos)
            
        dfs(0, 0, 0)
        return ans
```

***JavaScript***
```
var generateParenthesis = function(N) {
    let ans = [], m = 2 * N
    
    const dfs = (pos, open, seq) => {
        if (pos === m) {
            let res = new Array(m)
            for (let i = 0; i < m; i++)
                res[i] = seq & 1 << i ? "(" : ")"
            ans.push(res.join(""))
            return
        }
        if (open) dfs(pos+1, open-1, seq)
        if (m - pos > open) dfs(pos+1, open+1, seq | 1 << pos)
    }
    
    dfs(0, 0, 0)
    return ans
};
```

***Kotlin***
```
class Solution {
    private val result = mutableListOf<String>()
    
    fun generateParenthesis(n: Int): List<String> {
        generateParenthesisRecursively("", n, n)
        return result
    }
    
    private fun generateParenthesisRecursively(text: String, left: Int, right: Int) {
        if (left > 0) {
            generateParenthesisRecursively("$text(", left-1, right)
        }
            
        if (right > 0 && right > left) {
            generateParenthesisRecursively("$text)", left, right-1)
        } else if (left + right == 0) {
            result.add(text)
        }
    }
}
```

***Swift***
```
class Solution {
    func generateParenthesis(_ n: Int) -> [String] {
        var res: [String] = []


        func backtrack(_ path: [String], _ target: Int) {
            var path = path
            var count = 0

            if path.count == n * 2 {
                var string = ""
                for s in path { string += s }
                res.append(string)
                return
            }

            for c in path where c == "(" { count += 1 }
            for c in ["(", ")"] {
                if (c == "(" && count >= n) || (c == ")" && path.count - count >= count)  { continue }
                path.append(c)
                backtrack(path, target - 1)
                path.remove(at: path.count - 1)
            }
        }

        backtrack([], n * 2)
        return res
    }

}
```

***Consider upvote if useful! Hopefully it can be used in your advantage!***
***Take care brother, peace, love!***