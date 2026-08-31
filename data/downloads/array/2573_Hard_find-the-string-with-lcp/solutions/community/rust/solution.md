# C++/Rust Brute Force

**Author:** xiaoping3418
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-string-with-lcp/solutions/3203739/](https://leetcode.com/problems/find-the-string-with-lcp/solutions/3203739/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O( N * N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
// Thanks https://leetcode.com/Rook_Lift/ for point out that 
//verification was actually O(N * N * N), instead of O(N & N).
//It was improved to achieve O(N * N).
// Rust solution was also included. 
class Solution {
public:
    string findTheString(vector<vector<int>>& lcp) {
        int n = lcp.size();
        vector<char> ret(n, ' ');
        
        char c = 'a';
        for (int i = 0; i < n; ++i) {
            if (ret[i] != ' ') continue;
                
            if (c > 'z') return "";
            ret[i] = c;
            c += 1;
            
            for (int k = i + 1; k < n; ++k) {
                if (lcp[i][k] != 0) ret[k] = ret[i];
            }
        }
        
        for (int k = 0; k < n; ++k) {
            for (int i = n - 1 - k; i >= 0; --i) {
                int a = 0;
                if (ret[i] == ret[i + k]) {
                    a = 1;
                    if (i + k + 1 < n) a += lcp[i + 1][i + k + 1]; 
                }
                if (lcp[i][i + k] != a or lcp[i + k][i] != a) return "";
            } 
        }
        
        string s;
        for (auto &c: ret) s += c;
        return s;
    }
};
```
~~~
// Rust
impl Solution {
    pub fn find_the_string(lcp: Vec<Vec<i32>>) -> String {
        let n = lcp.len();
        let mut data = vec![' '; n];

        let mut c = 'a';
        for i in 0 .. n {
            if data[i] != ' ' { continue }
            if c > 'z' { return String::new() }
            
            data[i] = c;
            c = (c as u8 + 1) as char;

            for k in i + 1 .. n {
                if lcp[i][k] != 0 { data[k] = data[i]; }
            } 
        }

        for k in 0 .. n {
            for i in (0 .. n - k).rev() {
                let mut a = 0;
                if data[i] == data[i + k] {
                    a = 1;
                    if i + k + 1 < n { a += lcp[i + 1][i + k + 1]; }
                }
                if lcp[i][i + k] != a || lcp[i + k][i] != a { return String::new() }
            }
        }

        data.into_iter().collect()
    }
}
~~~

