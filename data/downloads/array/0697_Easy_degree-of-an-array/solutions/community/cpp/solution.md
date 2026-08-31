# EASY UNDERSTANDING [C++]

**Author:** rajat_gupta_
**Votes:** 20
**Link:** [https://leetcode.com/problems/degree-of-an-array/solutions/779166/](https://leetcode.com/problems/degree-of-an-array/solutions/779166/)

---


     class Elements{
         public:
           int freq;
           int leftindex;
           int rightindex;
         Elements(){
             freq=0;
             leftindex=0;
             rightindex=0;
         }
     };
     class Solution {
     public:
         int findShortestSubArray(vector<int>& nums) {
             unordered_map<int,Elements> map;
             for(int i=0;i<nums.size();i++){
                 if(map.count(nums[i])==0){
                     map[nums[i]].freq++;
                     map[nums[i]].leftindex=i;
                     map[nums[i]].rightindex=i;
                 }else{
                     map[nums[i]].freq++;
                     map[nums[i]].rightindex=i;
                 }
             }
             int index=INT_MIN;
             int deg=nums.size()-1;
             for(int i=0;i<nums.size();i++){
                 if(map[nums[i]].freq>index){
                     index=map[nums[i]].freq;
                     deg=map[nums[i]].rightindex-map[nums[i]].leftindex+1;
                 }
                 if(map[nums[i]].freq==index){
                     if(deg>(map[nums[i]].rightindex-map[nums[i]].leftindex+1)){
                         deg=map[nums[i]].rightindex-map[nums[i]].leftindex+1;
                     }
                 }
             }
             return deg;
         }
     };
	 
**Feel free to ask any question in the comment section.
If you like this solution, do UPVOTE.
Happy Coding :)**