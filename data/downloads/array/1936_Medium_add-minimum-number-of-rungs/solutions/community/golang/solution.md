# C++ | Golang | Greedy

**Author:** pikachuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/3458818/](https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/3458818/)

---

# Code
```
// C++
class Solution {
public:
    int addRungs(vector<int>& rungs, int dist) {
        int ans = (rungs[0] - 1) / dist;
        for(int i = 1; i < rungs.size(); i++) {
            ans += (rungs[i] - rungs[i - 1] - 1) / dist;
        }
        return ans;
    }
};


// Golang
func addRungs(rungs []int, dist int) int {
    var ans int = (rungs[0] - 1) / dist
    for i := 1; i < len(rungs); i++ {
        ans += (rungs[i] - rungs[i - 1] - 1) / dist
    }
    return ans
}
```