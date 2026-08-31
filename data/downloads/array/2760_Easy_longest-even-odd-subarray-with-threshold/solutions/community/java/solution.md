# 💯Sliding Window [C++,JAVA,🐍] || 🌟Clean & Easy to Understand🔥

**Author:** aDish_21
**Votes:** 30
**Link:** [https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/3706650/](https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/3706650/)

---

### Connect with me on LinkedIn : https://www.linkedin.com/in/aditya-jhunjhunwala-51b586195/
# Complexity
```
- Time complexity:
O(n)

- Space complexity:
O(1)
```

# Code
# Please Upvote if u found it useful\uD83E\uDD17
# *C++ Code:-*
```
class Solution {
public:
    int longestAlternatingSubarray(vector<int>& nums, int th) {
        int n = nums.size(),maxi = 0,i = 0,j = 0,flag = 0;
        while(j < n){
            if(flag == 0){
               if(nums[j] % 2 == 0 && nums[j] <= th){
                    i = j;
                    maxi = max(maxi,j - i + 1);
                    flag = 1;
                } 
            }
            else if(flag == 1){
                int x = nums[j-1],y = nums[j],c = x + y;
                if(c % 2 && nums[j] <= th) //if we add 2 even nos or add 2 odd nos then we will always get an even number whereas if we add an odd no with an even no then we will always get an odd number
                    maxi = max(maxi,j - i + 1);
                else{
                    flag = 0;
                    j--; 
                }
            }
            j++;
        }
        return maxi;
    }
};
```
# *JAVA Code :-*
```
class Solution {
    public int longestAlternatingSubarray(int[] nums, int th) {
        int n = nums.length,maxi = 0,i = 0,j = 0,flag = 0;
        while(j < n){
            if(flag == 0){
               if(nums[j] % 2 == 0 && nums[j] <= th){
                    i = j;
                    maxi = Math.max(maxi,j - i + 1);
                    flag = 1;
                } 
            }
            else if(flag == 1){
                int x = nums[j-1],y = nums[j],c = x + y;
                if(c % 2 != 0 && nums[j] <= th)
                    maxi = Math.max(maxi,j - i + 1);
                else{
                    flag = 0;
                    j--;
                }
            }
            j++;
        }
        return maxi;
    }
}
```
# *Python3 Code:-*
```
class Solution:
    def longestAlternatingSubarray(self, nums, th):
        n = len(nums)
        maxi = 0
        i = 0
        j = 0
        flag = 0

        while j < n:
            if flag == 0:
                if nums[j] % 2 == 0 and nums[j] <= th:
                    i = j
                    maxi = max(maxi, j - i + 1)
                    flag = 1
            elif flag == 1:
                x = nums[j - 1]
                y = nums[j]
                c = x + y
                if c % 2 and nums[j] <= th:
                    maxi = max(maxi, j - i + 1)
                else:
                    flag = 0
                    j -= 1
            j += 1

        return maxi
```
![e2515d84-99cf-4499-80fb-fe458e1bbae2_1678932606.8004954.png](./images/0.png)

