# JavaScript Solution

**Author:** Deadication
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/1177779/](https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/1177779/)

---

```
var numTriplets = function(nums1, nums2) {
    const squaredFreq1 = countSquareFreq(nums1);
    const squaredFreq2 = countSquareFreq(nums2);
    
    return countProdFreq(nums1, squaredFreq2) + countProdFreq(nums2, squaredFreq1);
	
    
    function countSquareFreq(nums) {
        const freq = new Map();
        
        for (const num of nums) {
            const squared = num * num;
        
            if (!freq.has(squared)) freq.set(squared, 0);
            freq.set(squared, freq.get(squared) + 1);
         }
       
        return freq;
    }
    
    function countProdFreq(nums, freqMap) {
        let count = 0;
        
        for (let i = 0;  i < nums.length - 1; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                const prod = nums[i] * nums[j];
            
                if (freqMap.has(prod)) count += freqMap.get(prod);
            }
        }
        
        return count;
    }
};
```