# Simple Map !!

**Author:** megamind_
**Votes:** 31
**Link:** [https://leetcode.com/problems/count-subarrays-with-median-k/solutions/2852005/](https://leetcode.com/problems/count-subarrays-with-median-k/solutions/2852005/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
Since we need to find the median and it depends only on the number of numbers less than k or greater than k. So we can change the array to 1 and -1 where nums[i]>k and nums[i]<k respectively. Now ,in order to get median ,we must include k in our subarray. So , starting form k (taking sum of elemnts), we will go left to find out the number of greater and smaller elements present till every index and store it in a hashmap.
 eg. 3 2 1 4 5 k=4  ->  -1 -1 -1 0 1
Now going left from k  summation wd be   -3 -2 -1 0 1;

Now we will go right taking sum from position of k to find the possible subarrays. If we have seen and entry in map (such that key i map + sum = 0 or 1 ) this means we found a possible subarray.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
for(int i =0;i<nums.size();i++){  //*** changing array to 0 1 and -1
            if(nums[i]>k)
            {
                nums[i]= 1;
            }
            else if(nums[i]<k){
                nums[i]= -1;
            }
            else{
                nums[i]=0;
            }
        }
                   
        int res = 0;
        int in = -1;
        for(int i =0;i<nums.size();i++){
            if(nums[i]==0){
                in = i;    //*** index of k in array 
                break;
            }
        }
        
        int sum = 0;
        unordered_map<int,int> hm;
        for(int i = in;i>=0;i--){ //*** going left 
            sum += nums[i];
            hm[sum]++;
        }
        sum = 0;
        for(int i = in;i<nums.size();i++){  //*** going right 
            sum += nums[i];
            int f = -1*sum;
            if(hm.count(f)!=0){
                res += (hm[f]);
            }
            f+=1;
             if(hm.count(f)!=0){
                res += (hm[f]);
            }
        }
        
        return res; 
```