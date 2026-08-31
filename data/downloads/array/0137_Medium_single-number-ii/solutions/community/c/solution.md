# [C++] 5 solutions: Time: O(n^2) --> O(n.logn) --> O(n)

**Author:** piyushsharmaleetcode
**Votes:** 41
**Link:** [https://leetcode.com/problems/single-number-ii/solutions/1296437/](https://leetcode.com/problems/single-number-ii/solutions/1296437/)

---

```
// Brute Force Algo
// Time: O(n^2)
// Space: O(1)

class Solution {
public:
    int singleNumber(vector<int>& nums) 
    {
        for ( int i = 0; i < nums.size(); i++) {
            bool found = false;
            for ( int j = 0; j < nums.size(); j++) {
                if ( nums[i] == nums[j] && i != j) {
                    found = true;
                }
            }
            if ( !found ) {
                return nums[i];
            }
        }
        return -1;
    }
};
```

```
// Sorting Algo
// Time: O(n.logn)
// Space: O(1)

class Solution {
public:
    int singleNumber(vector<int>& nums) 
    {
        int n = nums.size();
        if ( n == 1)
            return nums[0];

        sort(nums.begin(), nums.end());
        
        if ( nums[0] != nums[1])
            return nums[0];
        if ( nums[n-1] != nums[n-2])
            return nums[n-1];
        for ( int i = 1; i < n - 1; i++) 
            if ( nums[i] != nums[i+1] && nums[i] != nums[i-1]) 
                return nums[i];
        return -1;
    }
};
```

```
// Hash Table Algo
// Time: O(n)
// Space: O(n)

class Solution {
public:
    int singleNumber(vector<int>& nums) 
    {
        unordered_map<int,int> freq;
        for (int i : nums) {
            freq[i]++;
        }
        for (auto kv : freq) {
            if (kv.second == 1) {
                return kv.first;
            }
        }
        return -1;
    }
};
```

```
// Bit Manipulation Algo
// Time: O(n)
// Space: O(1)

class Solution {
public:
    int singleNumber(vector<int>& nums) 
    {        
        unsigned int shift = 1;
        unsigned int ans = 0;
        
        for (int i = 0; i < 32; ++i) {
            int count = 0;
            for (int i : nums) 
                if (i & shift)
                    count += 1;
            if ((count % 3) != 0)
                ans = ans + shift;
            shift <<= 1;
        }
        
        return ans;
    }
};
```

```
// XOR Bit Manipulation Algo
// Time: O(n)
// Space: O(1)

class Solution {
public:
    int singleNumber(vector<int>& nums) 
    {       
        int ones = 0;
        int twos = 0;
        
        for ( int i : nums ) {
            ones = (ones ^ i) & (~twos);
            twos = (twos ^ i) & (~ones);
        }
        
        return ones;
    }
};
```