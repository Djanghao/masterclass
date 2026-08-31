# Go/Python O(n) time | O(n) space

**Author:** vtalantsev
**Votes:** 1
**Link:** [https://leetcode.com/problems/decremental-string-concatenation/solutions/3681105/](https://leetcode.com/problems/decremental-string-concatenation/solutions/3681105/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
type group struct{
    idx int
    left byte
    right byte
}

func minimizeConcatenatedLength(words []string) int {
    memo := make(map[group]int)
    fmt.Println(words[0][len(words[0])-1])
    answer := dfs(words,1,words[0][0],words[0][len(words[0])-1],memo)
    return answer+len(words[0])
    return 2
}

func dfs(words []string,idx int,left,right byte,memo map[group]int) int{
    if idx == len(words){
        return 0
    }
    if value,ok := memo[group{idx,left,right}]; ok{
        return value
    }
    
    length := 500001
    if words[idx][len(words[idx])-1] == left{
        length = min(length,dfs(words,idx+1,words[idx][0],right,memo)+(len(words[idx])-1))
    }else{
        length = min(length,dfs(words,idx+1,words[idx][0],right,memo)+len(words[idx]))
    }
    if words[idx][0] == right{
        length = min(length,dfs(words,idx+1,left,words[idx][len(words[idx])-1],memo)+(len(words[idx])-1))
    }else{
        length = min(length,dfs(words,idx+1,left,words[idx][len(words[idx])-1],memo)+len(words[idx]))
    }
    memo[group{idx,left,right}] = length
    return length
}

func min(a,b int) int{
    if a < b{
        return a
    }
    return b
}
```
```python []
class Solution:
    def minimizeConcatenatedLength(self, words: List[str]) -> int:
        memo = {}
        answer = dfs(words,1,words[0][0],words[0][-1],memo)
        return answer+len(words[0])

def dfs(words,idx,left,right,memo):
    if idx == len(words):
        return 0
    if (idx,left,right) in memo:
        return memo[(idx,left,right)]
    
    length = float("inf")
    if words[idx][-1] == left:
        length = min(length,dfs(words,idx+1,words[idx][0],right,memo)+(len(words[idx])-1))
    else:
        length = min(length,dfs(words,idx+1,words[idx][0],right,memo)+len(words[idx]))
    if words[idx][0] == right:
        length = min(length,dfs(words,idx+1,left,words[idx][-1],memo)+(len(words[idx])-1))
    else:
        length = min(length,dfs(words,idx+1,left,words[idx][-1],memo)+len(words[idx]))
    memo[(idx,left,right)] = length
    return length
```