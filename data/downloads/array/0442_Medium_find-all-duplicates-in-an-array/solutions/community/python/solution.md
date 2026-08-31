# Utilizing Integer Range for Duplicate Identification

**Author:** CS_MONKS
**Votes:** 281
**Link:** [https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/4921063/](https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/4921063/)

---


"Happy Holi to all my friends! Keep coding with colorful solutions!" \uD83C\uDFA8\uD83C\uDF1F
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve this problem in O(n) time and constant extra space, we can utilize the fact that all integers in the array are in the range [1, n] and each integer appears once or twice. We can iterate through the array and use each element as an index to mark the corresponding element as negative. If we encounter an element that is already negative, it means we have seen it before and it's a duplicate.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize an empty vector ans to store the duplicates.
2. Iterate through the array nums.
3. For each element nums[i], take its absolute value x.
4. Check if nums[x-1] is negative. 
5. If it is, then x is a  duplicate, so add it to ans.
6. Otherwise, mark nums[x-1] as negative.
7. Return ans.
# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(k)
       max value of k = n/2
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c++ []
class Solution {
public:
    vector<int> findDuplicates(vector<int>& nums) {
        vector<int>ans;
        int n=size(nums);
        for(int i=0;i<n;i++){
            int x=abs(nums[i]);
            if(nums[x-1]<0){
                
                ans.push_back(x);
            }
            nums[x-1]*=-1;
        }
        return ans;
    }
};
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const ans = [];
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        const x = Math.abs(nums[i]);
        if (nums[x - 1] < 0) {
            ans.push(x);
        }
        nums[x - 1] *= -1;
    }
    return ans;
};

```
```python3 []
class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        ans =[]
        n=len(nums)
        for x in nums:
            x = abs(x)
            if nums[x-1]<0:
                ans.append(x)
            nums[x-1] *= -1
        return ans

```
```java []

class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        List<Integer> ans = new ArrayList<>();
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            int x = Math.abs(nums[i]);
            if (nums[x - 1] < 0) {
                ans.add(x);
            }
            nums[x - 1] *= -1;
        }
        return ans;
    }
}

```

![upvote.jpg](./images/0.jpeg)


