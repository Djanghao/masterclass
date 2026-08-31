# ✔️[C++] Easy and Concise Solutions

**Author:** Mythri_Kaulwar
**Votes:** 57
**Link:** [https://leetcode.com/problems/total-hamming-distance/solutions/1585848/](https://leetcode.com/problems/total-hamming-distance/solutions/1585848/)

---

**Thanks for refering to my solution, in advance :)**

\u274C**APPROACH -1 :** Using XOR - Time limit exceeded

To understand this method, see : 461. Hamming Distance
(Solution link : https://leetcode.com/problems/hamming-distance/discuss/1585568/C%2B%2B-2-liner-Faster-than-100)

Traverse the array using 2 loops and form all the pairs possible. For each pair, compute XOR and count the no. of bits set and add them to the answer.

*   **Time Complexity :** O(n^2*x*k); where k is the no. of bits set in the XOR of each pair.
*   **Space Complexity :** O(1)

    **Code :**
```
class Solution {
public:
    int totalHammingDistance(vector<int>& nums) {
        int ans=0;
        for(int i=0;i<nums.size();i++){
            for(int j=i+1;j<nums.size();j++){
                int xOR = nums[i]^nums[j];
                ans += __builtin_popcount(xOR);
            }
        }
        return ans;
    }
};
```

\u2714\uFE0FAPPROACH - 2 : 
* For each bit position 1-32 in a 32-bit integer belonging to the array, we count the number of integers in the array which have that bit set. 
* Then, if there are n integers in the array and k of them have a particular bit set and (n-k) do not, then that bit contributes n*x*(n-k) to the hamming distance. (Because for each of the 'k' numbers, we have 1 of the (n-k) numbers, that have a different bit and the number of ways to select 1 from k and (n-k) numbers is (kC1)*x*((n-k)C1)

*   **Time Complexity :** O(n)
*   **Space Complexity :** O(1)
  
    **Code :**
```
class Solution {
public:
    int totalHammingDistance(vector<int>& nums) {
        int n=nums.size(), ans=0;
        for(int i=0;i<32;i++){
            int count=0; //Count of the no.of elements that have the 'i'th bit set
            for(int k=0;k<n;k++){
                count += (nums[k]>>i)&1;
            }
            ans += count*(n-count);
        }
        return ans;
    }
};
```

If you like my solution and explanation; **please UPVOTE!!**