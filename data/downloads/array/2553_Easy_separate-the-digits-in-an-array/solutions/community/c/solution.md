# Easy C++ Solution

**Author:** adityagarg217
**Votes:** 3
**Link:** [https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3600471/](https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3600471/)

---


    class Solution {
  
     public:

     vector<int> separateDigits(vector<int>& nums) {
       
	   vector<int> ans ; 
        
		vector<int> nums1 ;
      
	  for(int i=0; i<nums.size();i++){
           int numm = nums[i];
          
		  int rev = 0 ;
              
			  while(numm!=0){
                  int rem = numm%10;
                  rev = rev*10 + rem ;
                  numm = numm/10;
              }
            nums1.push_back(rev);
        }
       
	   for(int i=0 ; i<nums1.size() ;i++){
		
            while(nums1[i]!=0){
                int rem = nums1[i]%10;
                ans.push_back(rem);
                nums1[i] = nums1[i]/10 ; 
            }
            
			while(nums[i]%10==0){
                   ans.push_back(0);
                   nums[i] = nums[i]/10; }
		   }
		   return ans ;
       }
	
       };