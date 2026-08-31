# [C++|Java|Python3] sweep line

**Author:** ye15
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-time-to-complete-all-tasks/solutions/3290450/](https://leetcode.com/problems/minimum-time-to-complete-all-tasks/solutions/3290450/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/15456f4294fa2d2de5e056fc441f28872a0c2a71) for solutions of weekly 336. 

**C++**
```
class Solution {
public:
    int findMinimumTime(vector<vector<int>>& tasks) {
        vector<int> line(2001); 
        sort(tasks.begin(), tasks.end(), [](auto& lhs, auto& rhs) {return lhs[1] < rhs[1];}); 
        for (auto& t : tasks) {
            int lo = t[0], hi = t[1], time = t[2], cnt = 0; 
            for (int x = lo; x <= hi && time; ++x) time -= line[x]; 
            for (int x = hi; x >= lo && time; --x) 
                if (!line[x]) {
                    line[x] = 1; 
                    --time; 
                }
        }
        return accumulate(line.begin(), line.end(), 0); 
    }
};
```
**Java**
```
class Solution {
    public int findMinimumTime(int[][] tasks) {
        int[] line = new int[2001]; 
        Arrays.sort(tasks, (a, b)->Integer.compare(a[1], b[1])); 
        for (var t : tasks) {
            int lo = t[0], hi = t[1], time = t[2]; 
            for (int x = lo; x <= hi && time > 0; ++x) time -= line[x]; 
            for (int x = hi; x >= lo && time > 0; --x) {
                if (line[x] == 0) {
                    line[x] = 1; 
                    --time; 
                }
            }
        }
        return Arrays.stream(line).sum(); 
    }
}
```
**Python3**
```
class Solution:
    def findMinimumTime(self, tasks: List[List[int]]) -> int:
        line = [0]*2001
        for i, (lo, hi, time) in enumerate(sorted(tasks, key=lambda x: x[1])): 
            cnt = sum(line[x] for x in range(lo, hi+1))
            time = max(0, time - cnt)
            for x in range(hi, lo-1, -1): 
                if time and not line[x]: 
                    line[x] = 1
                    time -= 1
        return sum(line)
```