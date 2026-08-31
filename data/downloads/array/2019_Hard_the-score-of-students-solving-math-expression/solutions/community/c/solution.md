# 312. Burst Balloons

**Author:** votrubac
**Votes:** 51
**Link:** [https://leetcode.com/problems/the-score-of-students-solving-math-expression/solutions/1486991/](https://leetcode.com/problems/the-score-of-students-solving-math-expression/solutions/1486991/)

---

This one could be very hard if you haven't solved similar problems before. 

The idea is similar to [312. Burst Balloons](https://leetcode.com/problems/burst-balloons/). The difference is that we need to track all possible answers.

We go left to right, and pick an operator we will execute **last**. Then, we recursively compute all possible answers from the left and right substrings.

The resulting set of answers will be cartesian product/sum of those answers. 

> Note that we can prune interim answers exceeding 1000. 

For example, `"1+2*3+4"` yields **11**, 13, 15, and 21 as possible answers:
1. `(1)` + `(2*3+4)` = 15 (1 + 14), 11 (1 + 10)
	- `(2)` * `(3+4)` = 14
	- `(2*3)` + `(4)` = 10
2. `(1+2)` * `(3+4)` = 21
3. `(1+2*3)` + `(4)` = 11 (7 + 4), 13 (9 + 4)
	- `(1)` + `(2*3)` = 7
	- `(1+2)` * `(3)` = 9

We memoise the results for substrings defined by starting (`st`) and finishing (`fin`, excluding) points in `memo`.

**C++**
```cpp
unordered_set<int> memo[32][32];
void dfs(string &s, int st, int fin) {
    if (memo[st][fin].empty()) {
        if (fin - st == 1)
            memo[st][fin].insert(s[st] - '0');
        for (int i = st + 1; i < fin; i += 2) {
                dfs(s, st, i);
                dfs(s, i + 1, fin);
                for (int n1 : memo[st][i]) {
                    for (int n2 : memo[i + 1][fin]) {
                            int n = s[i] == '*' ? n1 * n2 : n1 + n2;
                            if (n <= 1000)
                                memo[st][fin].insert(n);
                     }
                }
        }
    }
}
int scoreOfStudents(string s, vector<int>& answers) {
    int correct = 0;
    for (int i = 1, j = 0; i <= s.size(); i += 2) 
        if (i == s.size() || s[i] == '+') {
            int mul = 1;
            for (; j < i; j += 2)
                mul *= s[j] - '0';
            correct += mul;
        }
    dfs(s, 0, s.size());
    return accumulate(begin(answers), end(answers), 0, [&](int sum, int ans){
        return sum + (ans == correct ? 5 :  memo[0][s.size()].count(ans) ? 2 : 0);
    });
}
```
**Complexity Analysis**
##### Time
O(o3 p2), where `o` is the number of operations, and `p` - number of possible answers. Based on this problem constraints, we can potentially have up to 15^ 3 * 1000 ^ 2 = 3,375 * 1,000,000, or 3,3B operations, which is too much. With my experiments, OJ will TLE when we approach 100M operations.

What happens is that our sub-expressions are too small to generate 1,000 possible answers. In the worst case, I found we need to process ~6,000 possible aswers (before trimming it to 1,000). So, in reality, we need to perform like 1M operations instead of 3.3B. Note that this will not hold true if we increase the expression size.

> That's why we are using a hash set (instead of a [0 ... 1000] boolean array) to enumerate possible answers.

##### Memory
O(o2 p) for `memo`.