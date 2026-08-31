# Go/Python/JavaScript/Java O(n^2) time | O(n^2) space

**Author:** vtalantsev
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-ii/solutions/4742920/](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-ii/solutions/4742920/)

---

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func maxOperations(nums []int) int {
    n := len(nums)
    memo := make(map[string]int)

    var dfs func(int,int,int) int

    dfs = func(left,right,val int) int{
        if left >= right{
            return 0
        }

        pos := strconv.Itoa(left)+"-"+strconv.Itoa(right)+"-"+strconv.Itoa(val)
        if val,ok := memo[pos]; ok{
            return val
        }
        
        ans := 0
        if nums[left]+nums[right] == val{
            ans = max(ans,dfs(left+1,right-1,val)+1)
        }
        if nums[left]+nums[left+1] == val{
            ans = max(ans,dfs(left+2,right,val)+1)
        }
        if nums[right]+nums[right-1] == val{
            ans = max(ans,dfs(left,right-2,val)+1)
        }
        
        memo[pos] = ans
        return ans
    }
    
    answer := 0
    answer = max(answer,dfs(2,n-1,nums[0]+nums[1]))
    answer = max(answer,dfs(1,n-2,nums[0]+nums[n-1]))
    answer = max(answer,dfs(0,n-3,nums[n-2]+nums[n-1]))
    
    return answer+1
}
```
```python []
class Solution:
    def maxOperations(self, nums: List[int]) -> int:
        n = len(nums)
        memo = {}

        def dfs(left,right,val):
            if left >= right:
                return 0

            pos = f"{left}-{right}-{val}"
            if pos in memo:
                return memo[pos]
            
            ans = 0
            if nums[left]+nums[right] == val:
                ans = max(ans,dfs(left+1,right-1,val)+1)
            if nums[left]+nums[left+1] == val:
                ans = max(ans,dfs(left+2,right,val)+1)
            if nums[right]+nums[right-1] == val:
                ans = max(ans,dfs(left,right-2,val)+1)
            
            memo[pos] = ans
            return ans
        
        answer = 0
        answer = max(answer,dfs(2,n-1,nums[0]+nums[1]))
        answer = max(answer,dfs(1,n-2,nums[0]+nums[-1]))
        answer = max(answer,dfs(0,n-3,nums[-2]+nums[-1]))
        
        return answer+1
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    let n = nums.length
    let memo = new Map()

    function dfs(left,right,val){
        if (left >= right){
            return 0
        }

        let pos = left+"-"+right+"-"+val
        if (memo.has(pos)){
            return memo.get(pos)
        }
        
        let ans = 0
        if (nums[left]+nums[right] == val){
            ans = Math.max(ans,dfs(left+1,right-1,val)+1)
        }
        if (nums[left]+nums[left+1] == val){
            ans = Math.max(ans,dfs(left+2,right,val)+1)
        }
        if (nums[right]+nums[right-1] == val){
            ans = Math.max(ans,dfs(left,right-2,val)+1)
        }
        
        memo.set(pos,ans)
        return ans
    }
    
    let answer = 0
    answer = Math.max(answer,dfs(2,n-1,nums[0]+nums[1]))
    answer = Math.max(answer,dfs(1,n-2,nums[0]+nums[n-1]))
    answer = Math.max(answer,dfs(0,n-3,nums[n-2]+nums[n-1]))
    
    return answer+1
};
```
```java []
class Solution {

    public int[] nums;
    public HashMap<String,Integer> memo;

    public int maxOperations(int[] nums) {
        int n = nums.length;
        this.nums = nums;
        this.memo = new HashMap<>();
        
        int answer = 0;
        answer = Math.max(answer,dfs(2,n-1,nums[0]+nums[1]));
        answer = Math.max(answer,dfs(1,n-2,nums[0]+nums[n-1]));
        answer = Math.max(answer,dfs(0,n-3,nums[n-2]+nums[n-1]));
        
        return answer+1;
    }

    public int dfs(int left,int right,int val){
        if (left >= right){
            return 0;
        }

        String pos = left+"-"+right+"-"+val;
        if (memo.containsKey(pos)){
            return memo.get(pos);
        }
        
        int ans = 0;
        if (nums[left]+nums[right] == val){
            ans = Math.max(ans,dfs(left+1,right-1,val)+1);
        }
        if (nums[left]+nums[left+1] == val){
            ans = Math.max(ans,dfs(left+2,right,val)+1);
        }
        if (nums[right]+nums[right-1] == val){
            ans = Math.max(ans,dfs(left,right-2,val)+1);
        }
        
        memo.put(pos,ans);
        return ans;
    }
}
```