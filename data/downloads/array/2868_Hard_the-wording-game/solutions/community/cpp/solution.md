# Rust/C++ Simple Iteration

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-wording-game/solutions/4111084/](https://leetcode.com/problems/the-wording-game/solutions/4111084/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(M + N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
//Rust
impl Solution {
    pub fn can_alice_win(a: Vec<String>, b: Vec<String>) -> bool {
        let (m, n) = (a.len(), b.len());
        let (mut i, mut j) = (0, 0);

        while i < m {
            while j < n && b[j] <= a[i] { j += 1; }
            if j == n { return true }
            let c1 = a[i].chars().next().unwrap();
            let c2 = b[j].chars().next().unwrap();
            if c2 as i32 > c1 as i32 + 1 { return true }

            while i < m && a[i] <= b[j] { i += 1; }
            if i == m { break }
            let c1 = a[i].chars().next().unwrap();
            let c2 = b[j].chars().next().unwrap();
            if c1 as i32 > c2 as i32 + 1 { break }
        }

        false
    }
}
```
~~~
//C++
class Solution {
public:
    bool canAliceWin(vector<string>& a, vector<string>& b) {
        int m = a.size(), n = b.size();
        int i = 0, j = 0;

        while (i < m) {
            while (j < n and b[j] <= a[i]) j += 1;
            if (j == n or b[j][0] > a[i][0] + 1) return true;

            while (i < m and a[i] <= b[j]) i += 1;
            if (i == m or a[i][0] > b[j][0] + 1) break; 
        }
        
        return false;
    }
};
~~~