# 😎BEST EXPLANATION || ✅100% ON RUNTIME 🔥|| 🤤EASY SOLUTION😎

**Author:** IamHazra
**Votes:** 13
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/4893937/](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/4893937/)

---

# Intuition \uD83E\uDD14
The initial thought is to iterate through the array and count the number of operations based on consecutive pairs of numbers.

# Approach \uD83D\uDCA1
We start by initializing variables `prev` to store the sum of the first two elements and `count` to track the number of consecutive pairs that sum up to `prev`. Then, we iterate through the array starting from the third element. For every pair of consecutive elements, if their sum equals `prev`, we increment `count`, otherwise, we break out of the loop. Finally, we return the count.

# Complexity \uD83D\uDCCA
- Time complexity: O(n), where n is the length of the input array `nums`.
- Space complexity: O(1), as we use only a constant amount of extra space.

# Code
```Java []
class Solution {
    public int maxOperations(int[] nums) {
        int prev = nums[0] + nums[1],count = 1;
        for(int i=2;i<nums.length-1;i+=2){
            if(nums[i] + nums[i+1] == prev) count++;
            else break;
        }
        return count;
    }
}
```
```Javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    const prev = nums[0] + nums[1];
    let count = 1;
    for(let i=2;i<nums.length-1;i+=2){
        if(nums[i] + nums[i+1] == prev) count++;
        else break;
    }
    return count;
};
```
```C++ []
class Solution {
public:
    int maxOperations(vector<int>& nums) {
        int i=0,j=1,count=0;
        int prev = nums[i]+nums[j];
        while(j<nums.size()){
            int sum = nums[i]+nums[j];
            if(sum==prev) count++;
            else break;
            i+=2;
            j+=2;
        }
        return count;
    }
};
```
```Python []
class Solution:
    def maxOperations(self, nums: List[int]) -> int:
        prev=nums[0]+nums[1]
        count=1
        i=2
        while i<=len(nums)-2:
            if nums[i]+nums[i+1]==prev:
                count+=1
                i+=2
            else:
                break
        return count
                    
```

\uD83D\uDC4D UPVOTE PLEASE \uD83D\uDC4D  
![image.png](./images/0.png)

\uD83C\uDF89 HAPPY CODING \uD83C\uDF89