# simple clean C++ code || O(N) solution || Bit-Manipulation

**Author:** bharat_bardiya
**Votes:** 68
**Link:** [https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/solutions/2589058/](https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/solutions/2589058/)

---

***Idea*** -*By looking at how OR works, we can see that bits can only be turned on with 1. So, start from the end and keep track of the minimum index that will keep the bit set. Then, take the maximum of all the indexes that contain set bits.*
for this purpose, we maintain an Array named nearest of 32 bits which indicate the index of the `nearest` array element which set the particular `jth` bit at that particular instance. then we find the farthest set bit we found so far.
let see an example -
`nums[] = {9,13,55,48,56};`
bit representation are as follow - 
```
i   j--> 5 4 3 2 1 0
--------------------
9  ->    0 0 1 0 0 1
13 ->    0 0 1 1 0 1
55 ->    1 1 0 1 1 1
48 ->    1 1 0 0 0 0
56 ->    1 1 1 0 0 0

let see how we get length for first element (for 9) let's find it manually.
at bit position 0 -> what is the nearest element who is set to 1. the answer is 9 itself so nearest[0] = 0 (i position of 9)
at bit position 1 ->  what is the nearest element who is set to 1. the answer is 55(2nd element) nearest[1] = 2 (i position of 55)
at bit position 2 ->  what is the nearest element who is set to 1. the answer is 13(1st element) nearest[2] = 1 (i position of 13)
at bit position 3 ->  what is the nearest element who is set to 1. the answer is 9 itself so nearest[3] = 0 (i position of 9)
at bit position 4 ->  what is the nearest element who is set to 1. the answer is 55(2nd element) nearest[4] = 2 (i position of 55)
at bit position 5 ->  what is the nearest element who is set to 1. the answer is 55(2st element) nearest[5] = 2 (i position of 55)

nearest[] = {0,2,1,0,2,2};
among them the fathest nearest[j] = 2;
so if we start OR operation from 0th index then first time we get our maximum value at 2nd index.
so the smallest subset is nums[0..2] => of size 3;

for maintaining the nearest array we have to triverse nums from right to left
and keep updating nearest[j] if current element have a set bit at jth position.
```
```
class Solution {
public:
    vector<int> smallestSubarrays(vector<int>& nums) {
        
        int n = nums.size();
        // for keeping track of last index of every bit till the ith index.
        // total bit in a data type int is 32.
        vector<int>nearest(32,-1);
        vector<int>ans(n);
        
        for(int i = n-1; i>=0; i--){
            for(int j = 0; j<32; j++){
                // 1<<j -> a number with only set bit at jth position.
                // nums[i]&(1<<j) checks whether jth bit is set or not of nums[i];
                
                // if jth bit of nums[i] is set then we update nearest[j] to i;
                if(nums[i]&(1<<j)){
                    nearest[j] = i;
                }
            }
            
            // initially set lastSetBit to i because we have to start our set with ith element.
            int lastSetBit = i;
			
            // now we have to find which one is the bit seted most farthest among all 32 bits. we need the index i for this bit.
            for(int j = 0; j<32; j++){
                // we keep updating lastSetBit if we get any greater "i" of set bit.
                lastSetBit = max(nearest[j],lastSetBit);
            }
            // from last set bit only we can get smallest subarray.
            // after this we get same value but our subarray size will increase.
            ans[i] = lastSetBit-i+1;
        }
        
        
        return ans;
    }
};
```
PLEASE UPVOTE IF YOU FOUND IT HELPFUL\uD83D\uDE22\uD83D\uDE36\u200D\uD83C\uDF2B\uFE0F\uD83D\uDE36\u200D\uD83C\uDF2B\uFE0F