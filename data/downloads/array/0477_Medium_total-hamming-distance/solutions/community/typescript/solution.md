# Explained Solution👍 || TS || 💥

**Author:** anuShr73
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-hamming-distance/solutions/4554857/](https://leetcode.com/problems/total-hamming-distance/solutions/4554857/)

---


# Approach
Keep updating the items to half, after traversals [beacuse the current bit has been analyzed; give the focus to next bit].
 During traversals group items to LSB_1_Team and LSB_0_Team.
Sum up the possible combinations.
if all become items become zero then done.
# Complexity
- Time complexity:
O(n) 

- Space complexity:
O(n)
# Code
```
function totalHammingDistance(nums: number[]): number {
    
    if(nums.length<2) return 0;
    let ans = 0;

    while(true){
        let lsb0or1 = new Array<number>(2).fill(0);
        // means at index = 0, all the numbers with lsb as 0 will gather and vice-versa for the other

        let allZeroCount = 0;

        for(let i = 0; i<nums.length; i++){
            // did we reached the base case for index i, where the items turned 0.
            if(nums[i]==0) allZeroCount+=1;
            // if number is divisible by 2 then its LSB is 0. Congrats anyway!
            if(nums[i]%2 == 0) lsb0or1[0]+=1;
            else lsb0or1[1]+=1;
            // update the item at index i, as the current number is analyzed.
            nums[i] = Math.floor(nums[i] / 2);
        }
        // picture it as nC1 for lsb[0] and lsb[1]. Make pairs and totalNumber of psirs will be lsb0or1[0]C1 and lsb0or1[1]C1. These are different LSB pairs.
        ans += lsb0or1[0] * lsb0or1[1];

        // this means that each element has finally changed to 0. Thus no more changes.
        if(allZeroCount==nums.length) return ans;

    }
};
```