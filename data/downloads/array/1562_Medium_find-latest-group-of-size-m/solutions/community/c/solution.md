# C++ || Easy to Understand Solution || Detailed solution

**Author:** Haidram
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-latest-group-of-size-m/solutions/1978163/](https://leetcode.com/problems/find-latest-group-of-size-m/solutions/1978163/)

---

At each step I am updating the number of subarrays in my array. For keeping track of number of subarrays of each length I have defined an array named countLen. I have explained in the code how I update that countLen array in each step as I traverse through the arr array.

```
class Solution {
public:
    int findLatestStep(vector<int>& arr, int m) {
        int n = arr.size(), ans = -1;
        
        // lenAtIndex - length of subarray of '1'
        // countLen - count of subarrays for each length
        vector<int> lenAtIndex(n + 2, 0);
        vector<int> countLen(n + 2, 0);
        
        for(int i=0; i<n; i++){
            // left part of our cur Index
            int leftLen = lenAtIndex[arr[i] - 1];
            
            // right part of our cur Index
            int rightLen = lenAtIndex[arr[i] + 1];
            
            // newLen - updated length of subarray of '1' at current Index
            int newLen = leftLen + rightLen + 1;
            
            // Updating in our array
            // And also updating the values at the left and right
            // border of the subarray because if this subarray get merged with
            // another subarray then we will be able to know about the length
            // of this subarray easily so we have updated length in the ends.
            lenAtIndex[arr[i]] = newLen;
            lenAtIndex[arr[i] - leftLen] = newLen;
            lenAtIndex[arr[i] + rightLen] = newLen;
            
            // updating countLen array
            countLen[leftLen]--;
            countLen[rightLen]--;
            countLen[newLen]++;
            
            // If we still have nonzero number of required subarray
            if(countLen[m] > 0)
                ans = i+1;
        }
        return ans;
    }
};
```
Upvote if you found my solution helpful :-)