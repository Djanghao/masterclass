# C++ Binary search

**Author:** bmourya
**Votes:** 13
**Link:** [https://leetcode.com/problems/friends-of-appropriate-ages/solutions/744947/](https://leetcode.com/problems/friends-of-appropriate-ages/solutions/744947/)

---

A will friend B only if: 

i) B's age is <= A and if, 
ii) B's age is > 0.5*age[A]+7.

Algorithm: 

1) Sort the ages. 
2) In the sorted array for any  j<sup>th</sup> index, we have to find all indexes which satisfy condition (i) and (ii). We do that using a binary search on the array to the left of the j<sup>th</sup> index. We terminate the search when we find the smallest index which satisfies the condition ages[mid] > 0.5*age[j]+7. Return the length of the array between j-1 and mid. 
3) Keep a hash-map to store age and calculated friend-requests. That way if we have already found the number of friend requests that can be sent for a particular age, we can re-use it (since the array has duplicate ages). 
4) **Traverse the age array from right to left** in the main function to compute step 2 for each index in the ages array.  

**There is an important benefit to traverse the array from right to left (from ages.size()-1 to 0). It lets us compute the number of people of the same age as the j<sup>th</sup> person and the ones less than the j<sup>th</sup> person satisfying condition (ii), in the same binary search function.**

```
class Solution {
public:
    unordered_map <int,int> map; // key: age, val: FriendRequestCount. 
    
    int findRequests (vector<int> & ages, int index) {
        
        if (map.find(ages[index]) != map.end()) {
            return map[ages[index]];
        }
        
        int left = 0;
        int right = index-1;
        double target = (double) (0.5*ages[index]) + 7; // find ages >= target.
        
        while (left <= right) {
            int mid = left + (right-left)/2;
            if (ages[mid] <= target) {
                left = mid+1;
            } else {
                right = mid-1;
            }
        }
        
        map[ages[index]] = index-left;
        return index-left; // len between index-1 and left. 
    }
    
    int numFriendRequests(vector<int>& ages) {
        
        sort (ages.begin(), ages.end());
        
        int count = 0;
        
        for (int i = ages.size()-1; i >= 0 ; i--) {
            count += findRequests (ages, i);
        }
        return count;
    }
};
```