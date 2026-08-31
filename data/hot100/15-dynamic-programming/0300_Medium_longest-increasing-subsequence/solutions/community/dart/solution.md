# Binary search or recrussion

**Author:** anshd258
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-increasing-subsequence/solutions/5747944/](https://leetcode.com/problems/longest-increasing-subsequence/solutions/5747944/)

---

# Intuition
panick\uD83E\uDD72 well i Thought of using 2 loops but after a lot of thinkig i found 2 ways to do it 



# Approach
#### DP recrussion 
in this i take the recrussive approch to generate subarrays wither i take the new value ` int notTake = 0+ getLength(nums, inds+1, prevInds, dp);`
 or i check for `if(prevInds == -1 || nums[inds] >nums[prevInds])` and then do the recursive call as similar but adding 1 to the length and taking previous indes as indes 
#### Binary search
this is a simple one make a list add the first element of array to it ittrage over array from 1 - n and `if nums[i]> mylist[-1]:`
add nums[i] to the mylist array and increase the length else 
do a minary search in mylist for the value nums[i] and add the nums[i] to the left of that position


# Complexity
- Time complexity:
  for the recrusive approch its $$O(n*n)$$ binary search approch $$O(n * log n)$$


- Space complexity:
   for binary search method $$O(n)$$ recursive method $$O(n^2)$$


# Code
```java []
class Solution {
    public static int bisectLeft(List<Integer> list, int value) {
        int pos = Collections.binarySearch(list, value);
        if (pos < 0) {
            return -(pos + 1);  
        }
        
        while (pos > 0 && list.get(pos - 1) == value) {
            pos--;
        }
        return pos;
    }
    public int lengthOfLIS(int[] nums) {
        List<Integer> myList = new ArrayList<>();
        int length = 1;
        myList.add(nums[0]);
        for (int i =0 ; i < nums.length ; i++){
            if(nums[i] > myList.get(myList.size() - 1) ){
                myList.add(nums[i]);
                length++;
            }else{
                int index = bisectLeft(myList, nums[i]);
                myList.set(index, nums[i]);
            }
        }
        return length;
    }
}
```
```python []
class Solution(object):
    def lengthOfLIS(self, nums):
        mylist = [nums[0]]
        length = 1
        for i in range(1,len(nums)):
            if nums[i]> mylist[-1]:
                mylist.append(nums[i])
                length+=1
                
            else:
                index = bisect_left(mylist, nums[i])
                mylist[index] = nums[i]
        return length


        
```
```dart []
class Solution {
  int lengthOfLIS(List<int> nums) {
    List<List<int>> dp =List.generate(
  nums.length,
  (i) => List.filled(nums.length + 1, -1),
);
    return getLength(nums, 0, -1, dp);
  }
}

int getLength(List<int> nums, int inds, int prevInds, List<List<int>> dp){
    if(inds == nums.length){
        return 0;
    }

    if(dp[inds][prevInds+1] != -1){
       return  dp[inds][prevInds+1];
    }

    int notTake = 0+ getLength(nums, inds+1, prevInds, dp);
    int take = 0;
    if(prevInds == -1 || nums[inds] >nums[prevInds]){
        take = 1+ getLength(nums, inds+1, inds, dp);
    }
    dp[inds][prevInds + 1] = max(notTake, take);
    return dp[inds][prevInds + 1];

}
```
