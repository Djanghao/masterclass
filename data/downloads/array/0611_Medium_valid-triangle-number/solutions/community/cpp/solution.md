# C++ || Detailed explanation || Two-pointer ||  Clear Intuitions

**Author:** KR_SK_01_In
**Votes:** 23
**Link:** [https://leetcode.com/problems/valid-triangle-number/solutions/1929541/](https://leetcode.com/problems/valid-triangle-number/solutions/1929541/)

---

# ****INTUITIONS:
## We will understand with an example [1 , 2 , 3 , 5 , 6 , 7, 9]
## After sorting , Take pointer left as 0 , take right as n-1 (intially as loop will be going for it from n-1 to 2) . Take mid as right-1 intially . 

## while(left<mid) , now check the nums[left] + nums[mid] > nums[right] , if this exists then for all ( p=left to p=mid-1) there exist possibility as all the values after the nums[left] are greater than nums[left] .

## Possibilities are as follows :
## {left , mid , right} , {left+1 , mid , right} , {left+2 , mid , right} , ..... {mid-1 , mid , right} .  ans +=(mid-left) and also decrese mid as all possible possibility of (  [] , mid , right) has been taken. so mid--;



## when nums[left]+nums[mid] > nums[right] , not exists in this case we increment the left as to see the possibility of existing the condition . U may think why would are not changing mid , as decresing mid will lead to decrementing the (nums[l]+nums[mid]) value , it does not leads to our required condition .

## [1 , 2 , 3 , 4 , 6 , 7, 9] right at 9 , left at 1 , mid at 7 . so sum = 1 + 7 > 9 : FALSE (left++)
## left at 2 , mid at 7 , right at 9 sum=2+7>9 :false
## left at 3, mid at 7 , right at 9 sum=3+7>9 :true ans+=(mid-left) {3,7,9} , {5,7,9} , {6,7,9}
# after taking it decrease mid-- . 
## left at 3 , mid at 6 , right at 9 . 3+6>9:false . so , left++
## left at 4 , mid at 6 , right at 9 , 4+6>9 : true ans+=(mid-left) { 4 , 6 , 9} .

## while loop will run till(left<mid) 

## for loop of right will ru from right=n-1 to 2.

# **IF U FIND IT HEPLFUL , PLEASE UPVOTE!!!**




```
 int triangleNumber(vector<int>& nums) {
        int n=nums.size();
        
        int ans=0;
        
        sort(nums.begin(),nums.end());
        
		/*taking left -> leftmost number  , mid -> middle element , right -> rightmost elemnt
        left is smallest one , mid -> middle element , right is largest one*/
        
        for(int right=n-1 ; right>=2 ;right--)
        {
            int left=0;
            int mid=right-1;
            while(left<mid)
            {
                
                 if(nums[left]+nums[mid]>nums[right])
                 {
                       ans+=(mid-left);
                       mid--;
                 }
                 else
                 {
                      left++;
                 }
            }
        }
        
        return ans;
        
        
    }
```