# Faster solution about 95% faster and easy solution with comments

**Author:** akashkumar201
**Votes:** 97
**Link:** [https://leetcode.com/problems/3sum-closest/solutions/1042348/](https://leetcode.com/problems/3sum-closest/solutions/1042348/)

---

![image](./images/0.png)
```
class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        sort(nums.begin(),nums.end());//I am going to use Two pointer for that i'm sorting it if you want to use some other approch feel free to do that;
        int n=nums.size();

        int sum=nums[0]+nums[1]+nums[2];//Our Intial sum or assuption that intial three values are the closet sum
        for(int i=0;i<n-2;i++){ //n-2 Since we have taken n-1 in our point so no need to go beyond that
            //Implementing Two pointer technique
            int j=i+1;
            int k=n-1;
            while(j<k){
                int temp=nums[i]+nums[j]+nums[k];//Temparory sum for comaprison
                if(abs(temp-target) < abs(sum-target) ) sum=temp;//if we find batter or closer sum then we update the above sum value
                if(temp>target){
                    k--;                  // if value is greater than target one just come one point right to left
                } else if(temp<target){
                    j++;             //if value is lower than target just come one point left to right 
                    
                }else return target;// if value already found no need to go for other just return 
            }
            
        }
        return sum;
    }
};
```Hey Folk I'm using Two Pointer technique technique if you really want to appreciate and fount it batter*** please Up vote Thank You:)***