# C++, dp with bit masking, easy to understand, beats 100%

**Author:** Uchiha_Shyman
**Votes:** 30
**Link:** [https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/solutions/1245422/](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/solutions/1245422/)

---

let's take the example of [1, 2, 3] & [4, 5, 6]
so how you are going to proceed:

step1 : for 1 you have 3 choices for xor 1^4 or 1^5 or 1^6 (let's suppose you took 1^4).
step2 : for 2 you have 2 choices (beacuse 4 is gone) so that is 2^5 or 2^6(let's suppose you took 2^5).
step3 : for 3 you have only 1 choice left(4,5 both are gone) so 3^6.

your answer for this particular combination is (1^4 + 2^5 + 3^6).

Now you have to make all other combinations as well and calculate xor sum for the same.
(1^4) + (2^6) + (3^5)
(1^5) + (2^4) + (3^6)
(1^5) + (2^6) + (3^4)
(1^6) + (2^4) + (3^5)
(1^6) + (2^5) + (3^4)

so minimum for all these will be your answer.
code for above approach.
```
int helper(vector<int> &nums1, vector<int>&nums2, int i) {
        if(i >= nums1.size()) {
            return 0;
        }
        
        int ans = INT_MAX;
        for(int j = 0; j < nums2.size(); j++) {
            if(nums2[j] != -1) {
                int t = nums2[j];
                int val = nums1[i]^nums2[j];
                nums2[j] = -1;
                ans = min(ans, helper(nums1, nums2, i+1) + val);
                nums2[j] = t;
            }
        }
        return ans;
    }
    
    int minimumXORSum(vector<int>& nums1, vector<int>& nums2) {
        return helper(nums1, nums2, 0);
    }
```
But the time complexity of this solution is O(n!).

In order to reduce time complexity we can use bit masking. We will make a mask, that identifies how many xor pairs are calculated. Whenever we make an xor pair we will set that particular mask bit.
Again take the example of [1, 2, 3] & [4, 5, 6]
we have a function that calculates our answer helper(i, mask), which represents the minimum value of xor when i elments are xored. We start calling from i = 0 and mask = 0.
```
												     h(0, 0)
											/             |                 \\
						1^4+h(1, 001)                1^5+h(1, 010)     1^6+h(1, 100)  [3 choices]
						/            \\                           /                        \\                             
			2^5+h(2, 011)	2^6+h(2, 101)    2^4+h(2, 011) 2^6+h(2, 110)  2^4+h(2,101)  2^5+h(2, 110)
```

so here you can see the duplicate calls so these repetitive calls can be handle if we store them.
```
int dp[15][17000];
    int helper(vector<int> &nums1, vector<int>&nums2, int i, int mask) {
        if(i >= nums1.size()) {
            return 0;
        }
        
        if(dp[i][mask] != -1) {
            return dp[i][mask];
        }
        
        int ans = INT_MAX;
        for(int j = 0; j < nums2.size(); j++) {
            if(mask&(1 << j)) {
                continue;
            }
            int val = nums1[i]^nums2[j];
            ans = min(ans, helper(nums1, nums2, i+1, mask|(1 << j)) + val);
        }
        return dp[i][mask] = ans;
    }
    
    int minimumXORSum(vector<int>& nums1, vector<int>& nums2) {
        memset(dp, -1, sizeof(dp));
        return helper(nums1, nums2, 0, 0);
    }
	```
	
	Time complexity of this solution is O(n*2^n)
			