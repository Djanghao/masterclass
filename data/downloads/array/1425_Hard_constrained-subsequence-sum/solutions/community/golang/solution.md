# Go/Python/JavaScript/Java O(n) time | O(n) space

**Author:** vtalantsev
**Votes:** 1
**Link:** [https://leetcode.com/problems/constrained-subsequence-sum/solutions/4193666/](https://leetcode.com/problems/constrained-subsequence-sum/solutions/4193666/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func constrainedSubsetSum(nums []int, k int) int {
    n := len(nums)
    que := [][]int{}
    answer := -math.MaxInt
    
    for i:=0;i<n;i++{
        for len(que)>0 && i - que[0][1] > k{
            que = que[1:]
        }
        
        value := nums[i]
        if len(que)>0{
            value = max(value,value+que[0][0])
        }

        for (len(que)>0 && que[len(que)-1][0] < value){
            que = que[:len(que)-1]
        }

        if value > 0{
            que = append(que,[]int{value,i})
        }

        answer = max(answer,value)
    }
            
    return answer
}

func max(a,b int) int{
    if a > b{
        return a
    }
    return b
}
```
```python []
class Solution:
    def constrainedSubsetSum(self, nums: List[int], k: int) -> int:
        n = len(nums)
        que = deque()
        answer = -inf
        
        for i in range(n):
            while que and i - que[0][1] > k:
                que.popleft()
            
            value = nums[i]
            if que:
                value = max(value,value+que[0][0])

            while que and que[-1][0] < value:
                que.pop()

            if value > 0:
                que.append((value,i))

            answer = max(answer,value)
                
        return answer
```
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
    let n = nums.length
    let que = []
    let answer = Number.MIN_SAFE_INTEGER
    
    for (let i=0;i<n;i++){
        while (que.length>0 && i - que[0][1] > k){
            que.shift()
        }
        
        let value = nums[i]
        if (que.length>0){
            value = Math.max(value,value+que[0][0])
        }

        while (que.length>0 && que[que.length-1][0] < value){
            que.pop()
        }

        if (value > 0){
            que.push([value,i])
        }

        answer = Math.max(answer,value)
    }
            
    return answer
};
```
```java []
class Solution {
    public int constrainedSubsetSum(int[] nums, int k) {
        int n = nums.length;
        Deque<int[]> que = new ArrayDeque<>();
        int answer = Integer.MIN_VALUE;
        
        for (int i=0;i<n;i++){
            while (!que.isEmpty() && i -  que.peek()[1] > k){
                que.poll();
            }
            
            int value = nums[i];
            if (!que.isEmpty()){
                value = Math.max(value,value+que.peek()[0]);
            }

            while (!que.isEmpty() && que.peekLast()[0] < value){
                que.pollLast();
            }

            if (value > 0){
                que.offer(new int[]{value,i});
            }

            answer = Math.max(answer,value);
        }
                
        return answer;
    }
}
```