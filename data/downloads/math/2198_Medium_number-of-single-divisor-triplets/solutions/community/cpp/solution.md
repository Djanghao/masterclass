# count frequency | O(100^3) | C++

**Author:** Vhalen_G
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-single-divisor-triplets/solutions/4979953/](https://leetcode.com/problems/number-of-single-divisor-triplets/solutions/4979953/)

---



# Code
```
class Solution {
public:
    long long singleDivisorTriplet(vector<int>& nums) {
        long long res = 0, freq[101] = {};
        for(int n : nums) ++freq[n];
        for(int i = 1; i <= 100; i++) 
            for(int j = i; freq[i] && j <= 100; j++) 
                for(int k = j + (i == j); freq[j] && k <= 100; k++) 
                    if(freq[k]) {
                        int sum = i + j + k;
                        int divisor = (sum % i == 0) + (sum % j == 0) + (sum % k == 0);
                        if(divisor == 1) {
                            cout << freq[i] << ' ' << freq[j] << ' ' << freq[k] << '\
';
                            if(i == j) res += (freq[i] * (freq[i] - 1) / 2 * freq[k]);
                            else if(j == k) res += (freq[j] * (freq[j] - 1) / 2 * freq[i]);
                            else res += freq[i] * freq[j] * freq[k];
                        }
                    }
        return res * 6;
    }
};
```