# [Javascript] Simple O(n) Explained

**Author:** George_Chrysochoou
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/754925/](https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/754925/)

---

**Intuition:** So boyos, when you see the word "subarrays" and "sum" in the same sentence you think of prefix sum. What is prefix sum? You essentially create a new array Prefix[0,s0,s1,s2,s3...] where si is the sum of the elements up to index i. 
**How does this help?** This can grant you EVERY possible sum of EVERY possible subarray in O(n^2) time by getting all the possible pairs of (i,j) where j>i : How? Notice the all Prefix[j]-Prefix[i] is the sum from all the elements of the interval [i+1,j] 
So an easy O(n^2) approach would create all possible sums in O(n^2) time and we would just increment a counter if a sum was odd.
**BUT** 
If you try this approach you re gonna get a TLE, sadly. This however will make you think how else can I get the total number of odd subarrays. Well, we can still utilize the prefix sum mechanic, just in a smarter way. Consider two numbers and their subtraction. The only case where their subtraction is odd is when one of them is odd and the other even. So given an array of n elements, If the total amount of the odd prefixSums is k and the total amount of evens is q, that means that I can create **kxq** pairs of odd sums utilizing the formula Prefix[j]-Prefix[i]
**However** this way we do not consider the subarrays that start on index 0. Therefore we just need to add the number of the odd PrefixSums which are essentially the sums from index 0 to index[i]. 

```
var numOfSubarrays = function(arr) {
    let mod=1e9+7,sum=0,odds=0,evens=0
	//Notice that I do not need to keep track of the prefixSums, I just need the total count of odd and even PrefixSums
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
        odds+=Number(sum%2==1)
        evens+=Number(sum%2==0)
    }
    return (odds*evens+odds)%mod
};
```