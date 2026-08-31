# Explained || Product of all non zero - O(N) || Very simple & easy to understand solution

**Author:** kreakEmp
**Votes:** 56
**Link:** [https://leetcode.com/problems/maximum-strength-of-a-group/solutions/3568549/](https://leetcode.com/problems/maximum-strength-of-a-group/solutions/3568549/)

---

<b>Up vote if you like the solution </b>

# Approach
2. 1. We just need to take product of all numbers & also keep tracking the largest negative number.
2. Check if the product is negative then devide it by the largest negative number. ( Basically we want to remove the largest negative number or you can say smallest abs valued negative number)
3. Above is the case when there is no 0 or the case when only one negative number. So to handle the edge cases :
    i) check the largest number is equal to zero and no of negative count is less than 2 then return 0.
    ii) check if the largest number is negative and if the negative number count is less than 2 then return the largest negative number.
 If we have case non of the above then two then go with first two steps conditions.

# Code
```
long long maxStrength(vector<int>& nums) {
    long long prod = 1;
    int largestNegative = INT_MIN, largest = INT_MIN, negCount = 0;
    for(auto n: nums){
        if(n) prod *= n;
        if(n < 0 ) { largestNegative = max(largestNegative, n); negCount++; }
        largest = max(largest, n);
    }
    if(largest == 0 && negCount < 2) return 0;
    if(largest < 0 && negCount == 1) return largestNegative;
    if(prod > 0 ) return prod;
    return prod/largestNegative;
}
```

<b> Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted