# Go/Python O(n^2) time | O(n) space DP

**Author:** vtalantsev
**Votes:** 4
**Link:** [https://leetcode.com/problems/best-team-with-no-conflicts/solutions/3120736/](https://leetcode.com/problems/best-team-with-no-conflicts/solutions/3120736/)

---

# Complexity
- Time complexity: $$O(n^2)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func bestTeamScore(scores []int, ages []int) int {
    pairs := [][]int{}
    for i:=0;i<len(scores);i++{
        pairs = append(pairs,[]int{ages[i],scores[i]})
    }
    sort.Slice(pairs, func(i, j int) bool {
        if pairs[i][0] == pairs[j][0]{
            return pairs[i][1] < pairs[j][1]
        }
        return pairs[i][0] < pairs[j][0]
    })
    fmt.Println(pairs)
    dp := []int{}
    for i:=0;i<len(pairs);i++{
        dp = append(dp,pairs[i][1])
    }
    answer := dp[0]
    for i:=1;i<len(pairs);i++{
        score_i := pairs[i][1]
        for j:=0;j<i;j++{
            score_j := pairs[j][1]
            if score_j <= score_i{
                dp[i] = max(dp[i],score_i+dp[j])
                answer = max(answer,dp[i])
            }
        }
    }
    return answer
}

func max(a,b int) int{
    if a>b{
        return a
    }
    return b
}
```
```python []
class Solution:
    def bestTeamScore(self, scores: List[int], ages: List[int]) -> int:
        pairs = sorted(zip(ages, scores))
        dp = [pair[1] for pair in pairs]
        answer = dp[0]
        for i in range(1,len(pairs)):
            score_i = pairs[i][1]
            for j in range(i):
                score_j = pairs[j][1]
                if score_j <= score_i:
                    dp[i] = max(dp[i],score_i+dp[j])
                    answer = max(answer,dp[i])
        return answer
```

More optimal solution from [saijayavinoth](https://leetcode.com/huangx178/)
https://leetcode.com/problems/best-team-with-no-conflicts/solutions/2888062/range-query-nlogn/

- Time complexity: $$O(n*log(max(n,k)))$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(max(n,k))$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Here, `n` is the number of players, and `k` is the maximum age in the list.

```Golang []
func bestTeamScore(scores []int, ages []int) int {
    pairs := [][]int{}
    for i:=0;i<len(scores);i++{
        pairs = append(pairs,[]int{scores[i],ages[i]})
    }
    sort.Slice(pairs, func(i, j int) bool {
        if pairs[i][0] == pairs[j][0]{
            return pairs[i][1] < pairs[j][1]
        }
        return pairs[i][0] < pairs[j][0]
    })
    
    max_ages := 0
    for _,age := range(ages){
        max_ages = max(max_ages,age)
    }
    dp := make([]int,max_ages)
    answer := 0
    for _,pair := range(pairs){
        score:= pair[0]
        age:= pair[1]
        
        // query the max score
        m := 0
        i := age
        for i > 0{
            m = max(m, dp[i-1])
            i -= i&(-i)
        }
        dp[age-1] = m+score

        // update the tree
        i = age
        for i <= len(dp){
            dp[i-1] = max(dp[age-1], dp[i-1])
            i += i&(-i)
        }
        answer = max(answer,dp[age-1])
    }
    return answer
}

func max(a,b int) int{
    if a>b{
        return a
    }
    return b
}
```
```python []
class Solution:
    def bestTeamScore(self, scores: List[int], ages: List[int]) -> int:
        pairs = sorted(zip(scores, ages))
        
        dp = [0 for _ in range(max(ages))]
        answer = 0
        for score, age in pairs:
		
			#query the max score
            m = 0
            i = age
            while i > 0:
                m = max(m, dp[i-1])
                i -= i&(-i)
            dp[age-1] = m+score

			# update the tree
            i = age
            while i <= len(dp):
                dp[i-1] = max(dp[age-1], dp[i-1])
                i += i&(-i)

            answer = max(answer,dp[age-1])
        
        return answer
```
