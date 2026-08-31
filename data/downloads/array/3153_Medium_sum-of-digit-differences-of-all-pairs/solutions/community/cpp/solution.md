# Summation of freq*(total - freq)

**Author:** kreakEmp
**Votes:** 42
**Link:** [https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5177096/](https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5177096/)

---




# Approach
- We need to count the freq of each digit at each of the positions and store it.
- Iterate over each frequency and then we need to check how many frequency we can make from this digit. This is equal to frequency of the current digit * total digits other than current digit. So the ansewer will be summation of (freq * (total item - freq))
- Finally return ans/2, as we are counting each pair two times


# Code
```
long long sumDigitDifferences(vector<int>& nums) {
    long long ans = 0;
    vector<vector<int>> freq(10, vector<int>(10, 0));
    for(auto n: nums){
        for(int i = 0; n > 0; n = n/10, i++) freq[i][n%10]++;
    }
    for(int i = 0; i < freq.size(); ++i){
        for(int j = 0; j < freq[0].size(); ++j) ans += freq[i][j] * ( nums.size() - freq[i][j]);
    }
    return ans/2;
}
```



---

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---