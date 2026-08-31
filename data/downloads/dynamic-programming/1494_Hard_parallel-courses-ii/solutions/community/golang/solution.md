# Golang bitmask + DP solution with explanation

**Author:** JieBai
**Votes:** 10
**Link:** [https://leetcode.com/problems/parallel-courses-ii/solutions/1134231/](https://leetcode.com/problems/parallel-courses-ii/solutions/1134231/)

---

As there are max 15 courses, we can use a bitmask to represent a state, for example : 
```
11100010
       0 - course 1 is not taken
      1 - course 2 is taken
1 - course 8 is taken
```

The start state is 000...000, all courses are not yet taken and end state is 111...111, all counrses are taken
For each state, maintain a dp[bitmask] to represent the min semesters to reach this state, and DP[111...111] is the result we are looking for

As one state might have multiple preStates, we would iterate all possible preStates to find out the preState with MIN semesters, + 1 on top of the number will be the semesters to reach state
```
DP[state] = min(DP[state], DP[preState] + 1)
```

Next question is : how to link preState to state? There are 3 criteria 
1. preState has to be the subset of state
preState 0 -> state 1, take un-taken course 
preState 1 -> state 1, taken course remains taken

2. preState contains all the prerequisite courses of state

3. the difference of number of taken courses (number of 1 bits) has to be <= k

with above 3 constains, we can iterate all states and find out the DP[111...111]

```

func minNumberOfSemesters(n int, dependencies [][]int, k int) int {
    //size of dp is 1<<n, start state is 000...000, end state is 111...111
    dp := make([]int, 1<<n)
    preReq := make(map[int]int) //dict of state : prerequisite
    preCourse := make(map[int]int) //dict of course : pre-courses
    
    
    //calculate pre-courses of each course and maintain it as bitmask
    for _, val := range dependencies {
        //convert idx starting from 1 to 0 
        //as the bitmask starts from 0
        preCourse[val[1] - 1] += 1<< (val[0] - 1) 
    } 
    
    //calculate prerequisite
    for state := 0; state < (1<<n); state++ {
        dp[state] = 2<<32
        preReq[state] = 0
        for i := 0; i < n; i++ {
            if (state>>i) & 1 == 1 { //the i-th digit is 1 means that course is taken in this state
                preReq[state] |= preCourse[i] //so this state's preRequisite should contain that course's pre-courses
            }
        }
    }
    dp[0] = 0 //need 0 semesters to complete 0 courses

    //iterate state from 000...001 to 111...111
    for state := 0; state < (1<<n); state++ {
        //preState possible values are from state to 0, however we don't have to iterate every single state
        //the reason is preState just need to be the subset of state
        //(preState - 1) & state is the logic to calculate state's subset
        preState := state
        for preState > 0 {
            preState = (preState - 1) & state 
            
            //criteria 2, preState is superset of state's prerequisite
            //criteria 3, calculate number of 1s and compare with k
            if preReq[state] == (preState & preReq[state]) && courseDiff(state, preState) <= k {  
                dp[state] = min(dp[state], dp[preState] + 1)
            }
        } 
    } 
    
    return dp[(1<<n) - 1] //return dp[111...111]
}

func courseDiff(a, b int) int {
    res := bits.OnesCount(uint(a)) - bits.OnesCount(uint(b))
    return res
}

func min(a, b int) int {
    if a < b {
        return a
    } else {
        return b
    }
}
```