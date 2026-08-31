# [C++] Simplest Solution | Optimization from Brute Force | One-Pass

**Author:** Mythri_Kaulwar
**Votes:** 524
**Link:** [https://leetcode.com/problems/contiguous-array/solutions/1743341/](https://leetcode.com/problems/contiguous-array/solutions/1743341/)

---

\u274C **APPROACH 1 : BRUTE FORCE**

* The brute force approach is simple.
* We traverse the array using 2 loops.
* We start at  ```i = 0``` & traverse till the last index using loop 1 & loop 2 traverses from ```i``` & traverses till the last index.
* We consider every possible subarray within the given array and count the number of zeros and ones in each subarray.
* Each time, the no. of zeroes & ones becomes equal we update the maxLength.

**Time Compelxity :** O(n^2)

**Space Complexity :** O(1)

**Code :**
```
class Solution {
public:
    int findMaxLength(vector<int>& nums) {
		int maxlen = 0;
        for (int i = 0; i < nums.size(); i++) {
            int zeroes = 0, ones = 0;
            for (int j = i; j < nums.size(); j++) {
                if (nums[j] == 0) {
                    zeroes++;
                } else {
                    ones++;
                }
                if (zeroes == ones) {
                    maxlen = max(maxlen, j - i + 1);
                }
            }
        }
        return maxlen;
    }
};
```

\u2714\uFE0F **APPROACH 2 : Using Array**

* We use a variable ```sum```, which is used to store the relative number of ones and zeros encountered so far.
*  ```sum``` is incremented by one whenever a ```1``` is encountered and decremented by one whenever a ```0``` is encountered.
*  We traverse the array ```nums``` from the beginning.
*  If at any index, ```sum``` becomes zero, it means that we've encountered equal number of zeros and ones from the beginning till the current index. 
*  And at any index, we encounter a ```sum``` that's already been encountered at some previous index, it means that the number of ```0```'s and ```1```'s are equal between the indices corresponding to the equal ```sum``` values.
*  We keep track of the indices that correspond to the same ```sum``` with maximum difference between the indices to find the maximum length of the subarrays with equal number of ```0```'s & ```1```'s.
* Now, ```sum``` can range between ```-n``` (When all elements are zeros) to ```+n``` (When all elements are ones).
* Thus, we make use of an array ```arr``` of size ```2n+1``` to keep a track of the all values of ```sum``` encountered so far.
*  We make an entry containing the current element's index in the arrarr for a new ```sum``` encountered everytime. 
*  Whenever, we encounter the same ```sum``` again, we determine the length of the subarray lying between the indices corresponding to the same ```sum``` values.

**Time Complexity :** O(n)

**Space Complexity :** O(n)

**Code :**
```
class Solution {
public:
    int findMaxLength(vector<int>& nums) {
		vector<int> arr(2*nums.size() + 1, INT_MIN);
		arr[nums.size()] = -1;
        int maxLen = 0, sum = 0;
        for (int i = 0; i < nums.size(); i++) {
            sum += (nums[i] == 0 ? -1 : 1);
			if (arr[sum + nums.size()] >= -1)  maxLen = max(maxLen, i - arr[sum + nums.size()]);
			else  arr[sum + nums.size()] = i; 
        }
        return maxLen;
    }
};
```

\u2714\uFE0F **APPROACH 3 : Using Hash Table**

* The appproach is same as that of the previous one.
* But here we use a ```map``` instead of an array of size ```2n+1```, because it's not necessary that we'll encounter all possible sums in between ```-n``` & ```+n```.
* The array will store the indices for each new ```sum``` encountered & if a sum is already encountered it will determine the difference between the 2 indices.
* At each index, it updates the ```maxLen``` of equal number of ```0```'s & ```1```'s.
* Finally, we return ```maxLen```.

**Time Complexity :** O(n)

**Space Complexity :** O(n)

**Code :**
```
class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        int sum=0, maxLen=0;
        unordered_map<int, int> seen{{0, -1}};
        
        for(int i=0; i<nums.size(); i++){
            sum += nums[i]==1 ? 1 : -1;
            if(seen.count(sum)) maxLen = max(maxLen, i-seen[sum]);
            else seen[sum] = i;
        }
        return maxLen;
    }
};
```

**Do upvote if you've found my solution useful :) 
Suggestions & doubts are welcome!**

**Note :** Guys, please recognise the effort put into explanaing & writing the code for all solutions possible. DO NOT downvote!
