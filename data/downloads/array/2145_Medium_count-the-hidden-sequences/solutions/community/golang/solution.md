# C++ | Golang | Prefix Sum

**Author:** pikachuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-hidden-sequences/solutions/3370911/](https://leetcode.com/problems/count-the-hidden-sequences/solutions/3370911/)

---

# Code
```
// C++
class Solution {
public:
    int numberOfArrays(vector<int>& differences, int lower, int upper) {
        long long sum = 0, minimum = 1e12, maximum = -1e12;
        for(int i = 0; i < differences.size(); i++) {
            sum += differences[i];
            minimum = min(minimum, sum);
            maximum = max(maximum, sum);
        }
        return max(0, min(upper, upper - (int)maximum) - max(lower, lower - (int)minimum) + 1);
    }
};


// Golang
func min(a, b int64) int64 {
    if a < b {return a}
    return b
}

func max(a, b int64) int64 {
    if a > b {return a}
    return b
}

func numberOfArrays(differences []int, lower int, upper int) int {
    var sum, minimum, maximum int64 = 0, 1e12, -1e12
    for i := 0; i < len(differences); i++ {
        sum += int64(differences[i])
        minimum = min(minimum, sum)
        maximum = max(maximum, sum)
    }
    return int(max(0, min(int64(upper), int64(upper) - maximum) - max(int64(lower), int64(lower) - minimum) + 1))
}
```