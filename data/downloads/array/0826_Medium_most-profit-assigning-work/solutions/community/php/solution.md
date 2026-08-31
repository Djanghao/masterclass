# [Greedy + Tutorial] Most Profit Assigning Work

**Author:** never_get_piped
**Votes:** 19
**Link:** [https://leetcode.com/problems/most-profit-assigning-work/solutions/5329571/](https://leetcode.com/problems/most-profit-assigning-work/solutions/5329571/)

---

**Topic** :  Greedy
Greedy algorithms are a class of algorithms that make locally optimal choices at each step with the hope of finding a global optimum solution. In these algorithms, decisions are made based on the information available at the current moment without considering the consequences of these decisions in the future. The key idea is to select the best possible choice at each step, leading to a solution that may not always be the most optimal but is often good enough for many problems. (GFG Reference)

___

## Solution
The **greedy intuition** suggests that each worker should be assigned the project that offers the maximum profit within their capability.

Let's first sort projects based on their difficulty in ascending order. Worker `i` can complete all projects  `[0 : j]` such that the difficulty of `projects[j]` is less than or equal to `worker[i]`. We can select the project with the maximum profit from the subset of projects with indices ranging from `0` to `j`.

To improve efficiency, sorting the worker array allows us to implement a two-pointer algorithm efficiently. We maintain a variable `j` to indicate the index of the projects that are available to worker `i`, and `maxProfit` to denote the maximum profit that can be earned among these projects. 

Since all workers are sorted in ascending order `worker[i] <= worker[i + 1]`, variable `j` and` maxProfit` will only increase. Therefor,  we can efficiently apply a two-pointer approach with O(n) complexity.


```c++ []
class Solution {
public:
    int maxProfitAssignment(vector<int>& difficulty, vector<int>& profit, vector<int>& worker) {
        int ans = 0;
        vector<pair<int, int>> jobs;
        for(int i = 0; i < difficulty.size(); i++) {
            jobs.push_back({difficulty[i], profit[i]});
        }
        
        sort(jobs.begin(), jobs.end());
        sort(worker.begin(), worker.end());
        for(int i = 0, j = 0, maxProfit = 0; i < worker.size(); i++) {
            while(j < jobs.size() && jobs[j].first <= worker[i]) {
                maxProfit = max(maxProfit, jobs[j].second);
                j++;
            }
            ans += maxProfit;
        }
        return ans;
    }
};
```
```java []
class Solution {
    public int maxProfitAssignment(int[] difficulty, int[] profit, int[] worker) {
        int ans = 0;
        List<int[]> jobs = new ArrayList<>();
        
        for (int i = 0; i < difficulty.length; i++) {
            jobs.add(new int[]{difficulty[i], profit[i]});
        }
        
        Collections.sort(jobs, (a, b) -> Integer.compare(a[0], b[0]));
        Arrays.sort(worker);
        
        for (int i = 0, j = 0, maxProfit = 0; i < worker.length; i++) {
            while (j < jobs.size() && jobs.get(j)[0] <= worker[i]) {
                maxProfit = Math.max(maxProfit, jobs.get(j)[1]);
                j++;
            }
            ans += maxProfit;
        }
        
        return ans;
    }
}
```
```python []
class Solution:
    def maxProfitAssignment(self, difficulty: List[int], profit: List[int], worker: List[int]) -> int:
        ans = 0
        jobs = sorted(zip(difficulty, profit))
        worker.sort()
        
		j, maxProfit = 0, 0
        for i in range(len(worker)):
            while j < len(jobs) and jobs[j][0] <= worker[i]:
                maxProfit = max(maxProfit, jobs[j][1])
                j += 1
            ans += maxProfit
        
        return ans
```
```Go []
func maxProfitAssignment(difficulty []int, profit []int, worker []int) int {
    ans := 0
    jobs := make([][2]int, len(difficulty))
    
    for i := 0; i < len(difficulty); i++ {
        jobs[i] = [2]int{difficulty[i], profit[i]}
    }
    
    sort.Slice(jobs, func(i, j int) bool {
        return jobs[i][0] < jobs[j][0]
    })
    sort.Ints(worker)
    
    j := 0
    maxProfit := 0
    for i := 0; i < len(worker); i++ {
        for j < len(jobs) && jobs[j][0] <= worker[i] {
            maxProfit = max(maxProfit, jobs[j][1])
            j++
        }
        ans += maxProfit
    }
    
    return ans
}
```
```PHP []
class Solution {

    /**
     * @param Integer[] $difficulty
     * @param Integer[] $profit
     * @param Integer[] $worker
     * @return Integer
     */
    function maxProfitAssignment($difficulty, $profit, $worker) {
        $ans = 0;
        $jobs = array();
        
        for ($i = 0; $i < count($difficulty); $i++) {
            $jobs[] = array($difficulty[$i], $profit[$i]);
        }
        
        usort($jobs, function($a, $b) {
            return $a[0] - $b[0];
        });
        
        sort($worker);
        
        $j = 0;
        $maxProfit = 0;
        
        for ($i = 0; $i < count($worker); $i++) {
            while ($j < count($jobs) && $jobs[$j][0] <= $worker[$i]) {
                $maxProfit = max($maxProfit, $jobs[$j][1]);
                $j++;
            }
            $ans += $maxProfit;
        }
        
        return $ans;
    }
}
```
```javascript []
/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let ans = 0;
    let jobs = [];
    
    for (let i = 0; i < difficulty.length; i++) {
        jobs.push([difficulty[i], profit[i]]);
    }
    
    jobs.sort((a, b) => a[0] - b[0]);
    worker.sort((a, b) => a - b);
    
    let j = 0;
    let maxProfit = 0;
    
    for (let i = 0; i < worker.length; i++) {
        while (j < jobs.length && jobs[j][0] <= worker[i]) {
            maxProfit = Math.max(maxProfit, jobs[j][1]);
            j++;
        }
        ans += maxProfit;
    }
    
    return ans;
};
```


**Complexity**:
* Time Complexity : `O(max(n log n, m log m))`
* Space Complexity : `O(n)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**