# [Graph + Greedy Tutorial] Maximum Total Importance of Roads

**Author:** never_get_piped
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-total-importance-of-roads/solutions/5380069/](https://leetcode.com/problems/maximum-total-importance-of-roads/solutions/5380069/)

---

**Topic** :  Graph, Greedy
___

## Solution
A node contributes an importance value proportional to its degree, which reflects the number of edges connecting it to other nodes.

To maximize the final importance value, we calculate the degree of each node and assign values based on their frequencies. The node with the highest degree is assigned the maximum value `n`, the node with the second-highest degree is assigned `n\u22121`, and so forth.



```c++ []
class Solution {
public:
    long long maximumImportance(int n, vector<vector<int>>& roads) {
        vector<int> deg(n);
        for(auto& e : roads) {
            deg[e[0]]++;
            deg[e[1]]++;
        }
        
        sort(deg.begin(), deg.end());
        long long ans = 0;
        for(int i = 0; i < n; i++) {
            ans += (i + 1ll) * deg[i];
        }
        return ans;
    }
};
```
```java []
class Solution {
    public long maximumImportance(int n, int[][] roads) {
        int[] deg = new int[n];
        for (int[] e : roads) {
            deg[e[0]]++;
            deg[e[1]]++;
        }
        
        Arrays.sort(deg);
        long ans = 0;
        for (int i = 0; i < n; i++) {
            ans += (i + 1L) * deg[i];
        }
        return ans;
    }
}
```
```python []
class Solution:
    def maximumImportance(self, n: int, roads: List[List[int]]) -> int:
        deg = [0] * n
        for e in roads:
            deg[e[0]] += 1
            deg[e[1]] += 1
        
        deg.sort()
        ans = 0
        for i in range(n):
            ans += (i + 1) * deg[i]
        
        return ans    
```
```Go []
func maximumImportance(n int, roads [][]int) int64 {
    deg := make([]int, n)
	for _, e := range roads {
		deg[e[0]]++
		deg[e[1]]++
	}
	
	sort.Ints(deg)
	var ans int64 = 0
	for i := 0; i < n; i++ {
		ans += int64(i+1) * int64(deg[i])
	}
	return ans
}
```
```PHP []
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $roads
     * @return Integer
     */
    function maximumImportance($n, $roads) {
        $deg = array_fill(0, $n, 0);
        foreach ($roads as $e) {
            $deg[$e[0]]++;
            $deg[$e[1]]++;
        }
        
        sort($deg);
        $ans = 0;
        foreach ($deg as $i => $value) {
            $ans += ($i + 1) * $value;
        }
        return $ans;
    }
}
```
```javascript []
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
    let deg = new Array(n).fill(0);
    for (let e of roads) {
        deg[e[0]]++;
        deg[e[1]]++;
    }
        
    deg.sort((a, b) => a - b);
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += (i + 1) * deg[i];
    }
    return ans;    
};
```

**Complexity**:
* Time Complexity : `O(n log n + m)`
* Space Complexity : `O(n)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**