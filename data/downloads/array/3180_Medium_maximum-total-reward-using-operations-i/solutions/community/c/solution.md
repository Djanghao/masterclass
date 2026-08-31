# [Dynamic Programming Tutorial] Maximum Total Reward Using Operations I

**Author:** never_get_piped
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5282525/](https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5282525/)

---

**Topic** :  Dynamic Programming

### Dynamic Programming:
Dynamic Programming is a method used in mathematics and computer science to solve complex problems by breaking them down into simpler **subproblems**. By solving each subproblem only once and storing the results, it avoids redundant computations, leading to more efficient solutions for a wide range of problems. This article provides a detailed exploration of dynamic programming concepts, illustrated with examples. (GFG)

To solve dynamic programming problem, we need to answer 2 questions:
* How to represent each subproblem state.
* What is the transition from the subproblem to the current problem.


___

# **Solution**:
Let's firsr rephrase the problem as follow:

```
Given a sorted array of positive integers (non-zero), determine the maximum possible sum of a subsequence where each 
element in the subsequence is greater than the sum of all preceding elements.
```

If we aim to incorporate an element with index `j` into our subsequence, it must satisfy either of the following conditions:
* It is the initial element of the subsequence.
* It concatenates with any subsequence ending with index `i`  where `i` is less than `j`, and the value at index `j` (`rewardValues[j]`) is greater than the sum of the target subsequence."

***How to represent each subproblem stat:***
Let a boolean 2D array` dp[i][j]` be true if we can form a subsequence with the first `i` elements such that the sum is `j`. 
The size of `i` is constrained by `n`, where `n` represents the length of the array.
The size of j is constrained by `2 * m + 1`, where `m ` represents the greatest element of the array, as it ensures that we cannot form a subsequence with a sum greater than `2 * m`.

***What is the transition from the subproblem to the current problem.***
If we choose an element with index `i`, we can concatenate it with any subsequence by selecting any element preceding `i` with a sum less than `rewardValues[i]`.
It means that `rewardValues[i]` can concatenate with any subsequece that represent by our dp array as `dp[i - 1][ j < rewardValues[i]]`.
Finally, we can come up with the following relationship transition:
```
dp[i][rewardValues[i] + j] = dp[i][rewardValues[i] + j] | dp[i - 1][j].
```

`dp[i - 1][j]` signifies whether the first i numbers can be used to form a subsequence with a sum of `j`. If true, it indicates the possibility of forming such a subsequence; otherwise, it implies impossibility. Similarly, `dp[i][rewardValues[i] + j]` indicates whether adding `rewardValues[i]` to a subsequence with a sum of `j` is feasible. This action results in a new subsequence with a sum value of `rewardValues[i] + j` by using the first `i` elements.


**Optimization**:
From the above relationship, we can see that we only focus on `dp[i]` and `dp[i - 1] `at each step. We can optimize memory usage by employing only two dynamic programming arrays with a size of `max(rewardValues) * 2 + 1` and update them interchangeably.

**C++:**
```C++
class Solution {
public:
    int maxTotalReward(vector<int>& rewardValues) {
        int n = rewardValues.size();
        sort(rewardValues.begin(), rewardValues.end());
        int maxPossibleScove = rewardValues.back() * 2;
        
        vector<bool> preDP(maxPossibleScove + 1), curDP(maxPossibleScove + 1);
        preDP[0] = true;
        for(int i = 0; i < rewardValues.size(); i++) {
            for(int j = 0; j < rewardValues[i]; j++) {
                curDP[j + rewardValues[i]] = curDP[j + rewardValues[i]] | preDP[j];
            }
            for(int j = 0; j < curDP.size(); j++) {
                preDP[j] = preDP[j] | curDP[j];
                curDP[j] = false;
            }
        }
        
        int ans = 0;
        for(int i = 0; i < preDP.size(); i++) {
            if(preDP[i]) {
                ans = max(ans, i);
            }
        }
        return ans;
    }
};
```

**Java**:
```
class Solution {
    public int maxTotalReward(int[] rewardValues) {
        int n = rewardValues.length;
        Arrays.sort(rewardValues);
        int maxPossibleScove = rewardValues[n - 1] * 2;
        
        boolean[] preDP = new boolean[maxPossibleScove + 1];
        boolean[] curDP = new boolean[maxPossibleScove + 1];
        preDP[0] = true;
        for(int i = 0; i < rewardValues.length; i++) {
            for(int j = 0; j < rewardValues[i]; j++) {
                curDP[j + rewardValues[i]] = curDP[j + rewardValues[i]] | preDP[j];
            }
            for(int j = 0; j < curDP.length; j++) {
                preDP[j] = preDP[j] | curDP[j];
                curDP[j] = false;
            }
        }
        
        int ans = 0;
        for(int i = 0; i < preDP.length; i++) {
            if(preDP[i]) {
                ans = i;
            }
        }
        return ans;
    }
}
```

**Python**:
```
class Solution:
    def maxTotalReward(self, rewardValues: List[int]) -> int:
        rewardValues.sort()
        n = len(rewardValues)
        max_possible_score = 2 * rewardValues[n - 1]
        
        preDP = [False] * (max_possible_score + 1)
        curDP = [False] * (max_possible_score + 1)
        preDP[0] = True
        
        for i in range(n):
            for j in range(rewardValues[i]):
                curDP[j + rewardValues[i]] |= preDP[j]    
            for j in range(len(preDP)):
                preDP[j] |= curDP[j]
                curDP[j] = False

        ans = 0
        for i in range(len(preDP)):
            if preDP[i]:
                ans = i
        return ans
```

**Go:**
```
func maxTotalReward(rewardValues []int) int {
    slices.Sort(rewardValues)
    n := len(rewardValues)
    maxPossibleScore := rewardValues[n - 1] * 2
   
   preDP := make([]bool, maxPossibleScore + 1)
    curDP := make([]bool, maxPossibleScore + 1)
    preDP[0] = true
    for i := 0; i < n; i++ {
        for j := 0; j < rewardValues[i]; j++ {
            curDP[j + rewardValues[i]] = curDP[j + rewardValues[i]] || preDP[j]
        }
        
        for j := 0; j < len(preDP); j++ {
            preDP[j] = preDP[j] || curDP[j]
            curDP[j] = false
        }
    }
    
    ans := 0
    for i := 0; i < len(preDP); i++ {
        if preDP[i] {
            ans = i
        }
    }
    
    return ans
}

```

**PHP**:
```
class Solution {
    /**
     * @param Integer[] $rewardValues
     * @return Integer
     */
    function maxTotalReward($rewardValues) {
        sort($rewardValues);
        $n = count($rewardValues);
        $maximumPossibleScore = $rewardValues[$n - 1];
		
        $preDP = array_fill(0, $maximumPossibleScore * 2 + 1, false);
        $curDP = array_fill(0, $maximumPossibleScore * 2 + 1, false);
        $preDP[0] = true;
        for($i = 0; $i < $n; $i++) {
            for($j = 0; $j < $rewardValues[$i]; $j++) {
                $curDP[$j + $rewardValues[$i]] |= $preDP[$j];
            }
            
            for($j = 0; $j < count($preDP); $j++) {
                $preDP[$j] |= $curDP[$j];
                $curDP[$j] = false;
            }
        }
        
        $ans = 0;
        for($i = 0; $i < count($preDP); $i++) {
            if($preDP[$i]) {
                $ans = $i;
            }
        }
        return $ans;
    }
}
```
**Complexity:**
* Time Complexity : `O(n ^ 2)`.
* Space Complexity : `O(2 * m)`.

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**