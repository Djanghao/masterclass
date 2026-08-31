# C++ | 100% fast | explanation with comments

**Author:** VAIBHAV_SHORAN
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/solutions/3328358/](https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/solutions/3328358/)

---

# Intuition
Try to play between left and right subarray in form of variables.

# Code
```
class Solution {
public:
    long long int getSum(vector<int> &nums){
        long long int temp = 0;
        for(auto &i : nums) temp += i;
        return temp;
    }

    bool check(unordered_map<long long int, pair<int, int>> &mp, long long int val, int pivot, bool flag){
        
        // If flag, then we need to change element from right subarray
        if(flag){
            if(mp[val].second >= pivot) return true;
            return false;
        }

        // Else we need to change element from left subarray
        else{
            if(mp[val].first < pivot) return true;
            return false;
        }
    }

    int waysToPartition(vector<int>& nums, int k) {
        unordered_map<long long int, pair<int, int>> mp;
        unordered_map<long long int, pair<int, int>> count;

        // mp stores first and last occurence of an element
        for(int i=0; i<nums.size(); i++){
            if(mp.find(nums[i]) == mp.end()){
                mp[nums[i]].first = i;
            }
            mp[nums[i]].second = i;
        }

        long long int totSum = getSum(nums);
        long long int left = nums[0];
        int ans = 0;

        for(int i=1; i<nums.size(); i++){
            long long int right = totSum - left;

            if(left == right){
                ans++;
            }
            else{
                long long int diff = left - right;

                // num is the value of element we need to change with k wo satisfy the condition
                long long int num = k - diff;

                if(mp.find(num) != mp.end()){
                    if(check(mp, num, i, 1)){

                        // count.second means we have got the element in right subarray with which we can replace our k
                        count[num].second++;
                    }
                }

                diff = right - left;
                num = k - diff;

                if(mp.find(num) != mp.end()){
                    if(check(mp, num, i, 0)){

                        // count.first means we got element in left subarray to get replaced 

                        count[num].first++; 
                    }
                }
            }

            left += nums[i];

            // Suppose there is an element which was on the right side earlier but now as we moving, it came to the left side, so update left usage with it
            count[nums[i]].first = max(count[nums[i]].first, count[nums[i]].second);
        }

        int maxi = INT_MIN;
        for(auto [i,j] : count){
            maxi = max(maxi, max(j.first, j.second));
        }

        return max(maxi, ans);
    }
};
```