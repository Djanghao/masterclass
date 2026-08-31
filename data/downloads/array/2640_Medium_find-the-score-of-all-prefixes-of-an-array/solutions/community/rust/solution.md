# Go Python Solution

**Author:** imparikalp17
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3480443/](https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3480443/)

---

# Rust Code
```
impl Solution {
    pub fn find_prefix_score(nums: Vec<i32>) -> Vec<i64> {
        let mut maxVal = 0;
        let mut v1: Vec<i64> = Vec::new();
        let mut sum = 0;
        for num in nums {
            maxVal = maxVal.max(num as i64);
            sum += num as i64  + maxVal;
            v1.push(sum);
        }
        return v1;
    }
}
```

# Go Code
```
func findPrefixScore(nums []int) []int64 {
	maxVal := math.Inf(-1)
	m := make([]int, 0)
	for _, x := range nums {
		maxVal = max(maxVal, float64(x))
		m = append(m, int(maxVal)+x)
	}
	sm := 0
	res := make([]int64, 0)
	for _, i := range m {
		sm += i
		res = append(res, int64(sm))
	}
	return res
}

func max(i, j float64) float64 {
	if i > j {
		return i
	}
	return j
}

```

# Python Code
```
class Solution:
    def findPrefixScore(self, nums: List[int]) -> List[int]:
        ls = [] 
        ans = []
        maxVal = float('-inf')
        for i in range(len(nums)):
            maxVal = max(maxVal, nums[i])
            ls.append(nums[i]+maxVal)

        sm=0
        for i in range(len(ls)):
            sm+=ls[i]            
            ans.append(sm)
            
        return ans
```