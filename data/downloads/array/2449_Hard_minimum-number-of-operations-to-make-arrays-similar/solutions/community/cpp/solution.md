# Break Into Odd / Even

**Author:** megamind_
**Votes:** 27
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/solutions/2734100/](https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/solutions/2734100/)

---

# Intuition/Approach

Working on the whole set seems difficult as we don't know if we can even increase a number to a certain number. Intuition came that we can divide numbers in both nums and target into 2 groups of odd and even number. After that, we will know that for a set of odd(nums) we can definitely make any number in this set equal to any no. in odd(target). So we can just sort all the 4 arrays(target(odd),target(even),nums(odd),nums(even)). 
 **The problem now boils down to making nums(odd) equal to target(odd) and nums(even) equal to target(even)**.



# Complexity
- Time complexity:O(n log n)

- Space complexity:O(n)

# Code
```
    long long makeSimilar(vector<int>& nums, vector<int>& target) {
        
        long long count = 0;
        sort(nums.begin(),nums.end());
        sort(target.begin(),target.end());
        vector<int> odd1,odd2,even1,even2;
        
        for(int i:nums){
            if(i%2==0)even1.push_back(i);
            else
                odd1.push_back(i);
        }
         for(int i:target){
            if(i%2==0)even2.push_back(i);
            else
                odd2.push_back(i);
        }
        

        for(int i =0;i<odd1.size();i++){
            if(odd1[i]<odd2[i]){
                count+= ((odd2[i]-odd1[i])/2);
            }
        }
         for(int i =0;i<even1.size();i++){
            if(even1[i]<even2[i]){
                count+= ((even2[i]-even1[i])/2);
            }
        }
        
        return count;
        
    }
```