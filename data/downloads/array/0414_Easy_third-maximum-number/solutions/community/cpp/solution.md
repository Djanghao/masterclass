# ✅C++ 4 Different Approach Solution || In-Place Algorithm || Max heap || Set || Sorting || ✅

**Author:** ayushkr01
**Votes:** 89
**Link:** [https://leetcode.com/problems/third-maximum-number/solutions/3343654/](https://leetcode.com/problems/third-maximum-number/solutions/3343654/)

---

//---------------> \uD83D\uDC7B Pls Upvote if it is helpful for You \uD83D\uDC7B <-----------------//  
 # Intuition
- We can solve this Question Using Multiple Approach(Here I have Explained **4** Appraoch)
1. Sorting 
2. Ordered Set
3. Max heap
4. In Place 
 
 - **Pls see All the method for Clarity and the Last method is the**   **Best Optimal Solution** 
 - Time complexity O(n) 
 - Space Complexity O(1)

 #   Using Sorting 
  **Time Complexity --> Nlog(N)**
   **Space Complexity --> O(1)**
# Code
``` 
class Solution {
public:
    int thirdMax(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        int count=0;
        int third_maximun=0;
        for(int i=nums.size()-1 ;i>0;i--){
            if(nums[i]!=nums[i-1]){
                count++;
                third_maximum=nums[i];
            }
           else if(i==1 && nums[i]==nums[i-1]){
                count++;
                third_maximum=nums[i];
            }
            if(count>2){
                 return third_maximum;
           }
        }
        if(count+1==3 && nums[0]!=nums[1]){
           return nums[0]; //if first and second index element not same [1,2,2,3]
        }
        return nums[nums.size()-1];  // if 3rd maximum not exist return maximum
    }
};
```
   #   Using set  
  **Time Complexity --> O(N)**
  **Space Complexity --> O(N)**
# Code
``` 
class Solution {
public:
 int thirdMax(vector<int>& nums) {
           set<int>s;
        for(int i=0;i<nums.size();i++){
            s.insert(nums[i]);
        }
        if(s.size()>=3){   // when set size >=3 means 3rd Maximum exist(because set does not contain duplicate element)
            int Third_index_from_last=s.size()-3;
            auto third_maximum=next(s.begin(),Third_index_from_last);
            return *third_maximum;
        }
            return *--s.end(); // return maximum if 3rd maximum not exist
    }
};
```


 #   Using maxheap 
# Code
``` 
class Solution {
public:
 // build max heap 
    void maxhipify(vector<int>&nums,int n ,int i){
    int left=2*i+1;
    int right=2*i+2;
    int maximum=i;
    if(left<n && nums[left]>nums[i]){
        maximum=left;
    }
    if(right<n && nums[right]>nums[maximum] ){
        maximum=right;
    }
    if(maximum!=i){
        swap(nums[i],nums[maximum]);
        maxhipify(nums,n,maximum);
    }
}
// extract root element each time ( root is maximum element in maxheap  )
    void deleteRoot(vector<int>&nums,set<int>&s,int &n){
        int lastElement=nums[n-1];
        s.insert(nums[0]);
        nums[0]=lastElement;
        n=n-1;
        maxhipify(nums,n,0);
    }

 int thirdMax(vector<int>& nums) {
        if(nums.size()==1){            // when array size is 1
         return nums[0];   
        }
        if(nums.size()==2){               // when array size is 2
            return max(nums[0],nums[1]);
        }
        int n=nums.size();

        for(int i=nums.size()/2;i>=0;i--){    // build max heap 
            maxhipify(nums,n,i);
        }
        set<int>s;
        for(int i=0;i<nums.size();i++){   // extract root( maximum element each time )
            deleteRoot(nums,s,n);
        }
        if(s.size()<3){         //  3rd largest element does not exist 
            return *--s.end();
        }else{                 // set s size >=3 3rd largest element exist
                int index=s.size()-3; // 3rd maximum index (index start with 0 )
                // using next() function
                auto it = next(s.begin(), index);   
                return   *it;
        }
    }
};
```

# Best Solution In Place Algorithm
**Time Complexity O(n)
Space Complexity O(1)**
# Code
``` 
class Solution {
public:
 int thirdMax(vector<int>& nums) {
        if(nums.size()==1){           // when size of Array is 1
         return nums[0];   
        }
        if(nums.size()==2){           // When size of array is 2
            return max(nums[0],nums[1]);
        }
 // find First maximum element using *max_element() function
        int First_max=*max_element(nums.begin(),nums.end());   
	    int Second_max=INT_MIN;
        int Third_max=INT_MIN;
        int count1=0;
        for(int i=0;i<nums.size();i++){
            if(Second_max<nums[i] && nums[i]!=First_max){
                Second_max=nums[i];
                count1++;
            }
        }
// if Second maximum element does not exist return First maximum element
        if(count1==0) return First_max; 
        int count2=0;
        for(int i=0;i<nums.size();i++){
            if((Third_max<nums[i] || nums[i]==INT_MIN) && ( nums[i]!=First_max &&  nums[i]!=Second_max)){
                Third_max=nums[i];
                count2++;
            }
        }
        if(count2>0){
            return Third_max;
        }else{
            return First_max;
        }
    }
};
```
---

\uD83D\uDC7B IF YOU LIKE THE SOLUTION THEN PLEASE UPVOTE MY SOLUTION BECAUSE IT GIVES ME MOTIVATION TO REGULARLY POST THE SOLUTION\uD83D\uDC7B*
![image.png](./images/0.png)

