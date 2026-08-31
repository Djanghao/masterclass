# Go DP recursive Memo

**Author:** hendraeffendi96
**Votes:** 1
**Link:** [https://leetcode.com/problems/solving-questions-with-brainpower/solutions/3515242/](https://leetcode.com/problems/solving-questions-with-brainpower/solutions/3515242/)

---

# Intuition
Try all posible answer using DP, skip already known answer with memo

# Approach
there are 2 posible answer in one index, first is get the point. and second is skip the point.
- if you **GET** the points then we will need to **skip** (**BrainPower** of index **+ 1**) and add the point to result.
- if you skip the points then we just get the result of **next index**
 
 
skip condition :
- an index of **memo** is **not empty**, then we will return the (**value + temp**) value
- **index** more than questions length return the **temp** value

# Code
```
func mostPoints(questions [][]int) int64 {
    memo := make([]int64, len(questions))
    return mostPointsHelper(questions,0,0, memo)
}

func mostPointsHelper(questions [][]int, index, temp int64, memo []int64)int64{
    if int(index) >= len(questions){
        return temp
    }
    if memo[index] != 0 {
        return memo[index]+temp
    }

    skipResult := mostPointsHelper(questions,index+int64(1),temp,memo)
    getResult := mostPointsHelper(questions,index+int64(questions[index][1]+1),temp+int64(questions[index][0]),memo)
    result := max(skipResult, getResult)
    memo[index] = result
    return result
}

func max(a, b int64)int64{
    if a > b {
        return a
    }
    return b
}
```