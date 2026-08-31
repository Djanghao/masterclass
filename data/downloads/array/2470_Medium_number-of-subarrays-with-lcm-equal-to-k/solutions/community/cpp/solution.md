# [C++] Euclidean Algorithm

**Author:** theomkumar
**Votes:** 15
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/2808824/](https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/2808824/)

---

# Time Complexity

- $$O(n^2 * log(n))$$


# With STL
```
int subarrayLCM(vector<int>& nums, int k) {
    int cnt = 0;
    for (int i = 0; i < size(nums); i++)
    {
        int currLcm = 1;
        for (int j = i; j < size(nums); j++)
        {
            currLcm = lcm(currLcm, nums[j]);
            if (currLcm == k) cnt++;
            if (currLcm > k) break;
        }
    }
    return cnt; 
}
```

---

# Without STL
Using Euclidean Algorithm to find GCD
- $$gcd(a,b) * lcm(a,b) = a * b$$
- $$lcm(a,b) = (a*b)/gcd(a,b)$$
```
int getGCD(int a, int b)
{
    return (a == 0) ? b : getGCD(b % a, a);
}

int subarrayLCM(vector<int>& nums, int k) {
    int cnt = 0;
    for (int i = 0; i < nums.size(); i++)
    {
        int currLcm = 1;
        for (int j = i; j < nums.size(); j++)
        {
            currLcm = (a * b) / getGCD(currLcm, nums[j]); 
            if (currLcm == k) cnt++;
            if (currLcm > k)  break;
        }
    }
    return cnt;
}
```
