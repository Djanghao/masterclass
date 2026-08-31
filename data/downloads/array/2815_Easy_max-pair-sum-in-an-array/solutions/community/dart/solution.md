# Simple approach....

**Author:** muhammedsinan8446
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/4637337/](https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/4637337/)

---



# Code
```
class Solution {
 int
   maxSum(List<int> nums) {

int temp=0;

for(int i=0;i<nums.length-1;i++){
int max1 =maxDigit(nums[i]);
  for(int j=i+1;j<nums.length;j++){
      int max2 =maxDigit(nums[j]);
    if(max1==max2){
      int sum = nums[i]+nums[j];

      if(sum> temp){
          temp=sum;
      }
    }
  }

}
return temp==0? -1:temp;

  }


int maxDigit(int x){
 List<int> val = x.toString().split('').map((e)=>int.parse(e)).toList();
 int value = val.reduce(max);
return value;
}


}
```