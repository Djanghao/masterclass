# With Detailed Explanation |different approach | O(n)🔥

**Author:** pulkit31997
**Votes:** 29
**Link:** [https://leetcode.com/problems/minimize-or-of-remaining-elements-using-operations/solutions/4638224/](https://leetcode.com/problems/minimize-or-of-remaining-elements-using-operations/solutions/4638224/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To minimize the OR of numbers we try to unset the MSB first by performing some consecutive ANDs (i.e. change bits to 0, greedily left to right).

starting with leftmost bit, we check if it is possible to unset this bit in maximum k AND merges.
```
// logic checking for a particular bit
int mergeCount=0;
for(int i: nums){
    if(some condition)mergeCount++;
}
if(mergeCount>k)
    we can not make this bit 0 in max k merge, so mark this bit set in answer.
```

# Approach
<!-- Describe your approach to solving the problem. -->

we traverse for each bit from left to right, checking if this bit can be made 0 by consecutive ANDs.

**but the catch is**:
we have to perform operations on current bit in such a way that previous bit state is maintained.
meaning we can can consider only those numbers merging for current bit, that made the previous bit 0.(left to right)

so we perform AND operation on prefix of 1 bit, then prefix of 2 bits and so on... and we can consider this result only if it gives 0 at the positions where 0 is present in the answer till now.
(more in code comments).



# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->



# Code
```
class Solution {
    public int minOrAfterOperations(int[] nums, int k) {
        int ans=0;
        int mask=0; // used for performing operation on prefix of bits
        for(int j=30;j>=0;j--){ // builds answer bit by bit
            mask=mask | (1<<j);// mask changes(10000.. -> 11000..->11100..->11110..->111111..)

            int cosecutiveAnd=mask;
            int mergeCount=0;// no. of merges required to make current bit 0
            for(int i:nums){
                cosecutiveAnd = cosecutiveAnd & i; 
                if((cosecutiveAnd|ans)!=ans) // explained below
                    mergeCount++; //while above condition is not achieved keep merging
                else cosecutiveAnd=mask; // else reset cosecutiveAnd to mask(11111..0000...), no need to increase count
            }

            if(mergeCount>k)
                ans|=(1<<j);// if(count is more than k, make set curent bit of 1, else it stays 0)
        }
        return ans;
    }
}
```

**explanation:**
```(cosecutiveAnd|ans)!=ans```
say,
for 6th bit from left, answer looks like 11001000000000.. (meaning for 3rd and 4th bit count was less than k so we could make it 0).

now,
ans=11001000000000
cosecutiveAnd keeps changing with cosecutiveAnd=cosecutiveAnd & i
cosecutiveAnd should not be considered success until it contains 0 at the bits where ans contains 0.(=> implying.. (cosecutiveAnd|ans) should be equals to ans)



# Code without comments
```
class Solution {
    public int minOrAfterOperations(int[] nums, int k) {
        int ans=0;
        int mask=0;
        for(int j=30;j>=0;j--){
            mask=mask | (1<<j);
            int cosecutiveAnd=mask;
            int mergeCount=0;
            for(int i:nums){
                cosecutiveAnd = cosecutiveAnd & i;
                if((cosecutiveAnd|ans)!=ans)
                    mergeCount++;
                else cosecutiveAnd=mask;
            }
            if(mergeCount>k)
                ans|=(1<<j);
        }
        return ans;
    }
}
```
---
**C++**
```
int minOrAfterOperations(vector<int>& nums, int k) {
    int ans=0;
    int mask=0;
    for(int j=30;j>=0;j--){
        mask=mask | (1<<j);
        int cosecutiveAnd=mask;
        int mergeCount=0;
        for(int i:nums){
            cosecutiveAnd = cosecutiveAnd & i;
            if((cosecutiveAnd|ans)!=ans)
                mergeCount++;
            else cosecutiveAnd=mask;
        }
        if(mergeCount>k)
            ans|=(1<<j);
    }
    return ans;
}
```

plz consider upvoting...