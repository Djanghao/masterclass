# ✔️ [C++] Easy and Concise O(logn) Solution (W/ Explanation)

**Author:** Mythri_Kaulwar
**Votes:** 124
**Link:** [https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/1587251/](https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/1587251/)

---

Hello everyone, firstly thanks for refering to my solution in advance :)

**APPROACH :** 
* So, the array has all the elements repeating twice except for one element which appears only once and the array is sorted. 
* This means that in every number that's repeated, the first number is at an even index (index%2==0) and the 2nd number is at an odd index. 
* The idea is to peform a binary search over the entire array and find out if this pattern follows. If somewhere this pattern is broken, then we're going to know in which half of the array there is an element that appears only once. 
* We reduce the search space to that half an search again, until we're left with a single element, which is the final answer.

Let us look at the first example : 
                 
```
        0    1    2    3    4    5    6    7    8
nums = [1,   1,   2,   3,   3,   4,   4,   8,   8]

We start with left = 0, right = 8 => mid = 0+(8-0)/2 = 4
Now, 4 is an even index which means the first repeating number should be at 4 and the next at 5. 
But nums[4] != nums[5]. So on the left half the pattern's broken. 

Now, left = 0, right = 4 => mid = 0+(4-0)/2 = 2
Now again 2 is an even number so nums[2] should be equal to nums[3], but it is not. 

So again, left = 0, right = 2 => mid = 0+(2-0)/2 = 1
1 is an odd number and nums[1] == nums[0]. So, we do l = mid+1 (Since the left half has the pattern). 

Now l = r = 2. 
Hence stop the search and return nums[l] = 2.
```
Let us look at another example : 
                 
```
        0    1    2    3     4    5     6    
nums = [3,   3,   7,   7,   10,   11,   11]

We start with left = 0, right = 6 => mid = 0+(6-0)/2 = 3
Now, 3 is an odd index and nums[3] == nums[2]. So on the left half the pattern is followed. We move to the right half. 

Now, left = 4, right = 6 => mid = 4+(6-4)/2 = 5
Now 5 is an odd number so nums[5] should be equal to nums[4], but it is not. 

So now, left = 4, right = 5 => mid = 4+(5-4)/2 = 4
4 is an even number but nums[4] != nums[5]. So, the pattern is not followed on the left side.

Now l = r = 4. 
Hence stop the search and return nums[l] = 10.
```

**Time Complexity :** O(logn); where n=length of the array
**Space Complexity :** O(1) ; no extra space is required. 

**Code :**
```
class Solution {
public:
    int singleNonDuplicate(vector<int>& nums) {
        if(nums.size()==1) return nums[0];
        int l=0, r=nums.size()-1, mid, num;
        
        while(l < r){
            mid = l+(r-l)/2;
            num = (mid%2 == 0) ? mid+1 : mid-1;
            if(nums[mid]==nums[num]) l = mid+1;
            else r = mid;
        }
        return nums[l];
    }

};
``` 

If the question was to solve the problem in O(n) time complexity; we could use bit-manipulation.

**Code :**
```
class Solution {
public:
    int singleNonDuplicate(vector<int>& nums) {
        int xOR=0;  //a^a = 0. So all the elements repeating twice become '0' and we return the non-repeating element.
        for(int i=0;i<nums.size();i++) xOr ^= nums[i];
        
        return xOR;
    }

};
```
If you like my solution and explanation, **please UPVOTE!**