# C++ | Divisors Counting and Binary Search | O(n * sqrt(MaxElement)) | Easy to understand

**Author:** Puneet7373
**Votes:** 51
**Link:** [https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5875685/](https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5875685/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
**Count Divisors for Each Element:**
We can first find the count how many elements in the array nums are divisible by each number g (from 1 to the maximum element in v, maxx) and lets store them in cntDivisors .
For each element x in nums, we check its divisors (by iterating up to sqrt(x)). For each divisor i, both i and x / i are valid divisors. We increment the divisor count for both.

**Count GCD Pairs:**
The array gcdCount[g] will store how many pairs in the array nums have GCD equal to g.
For each g starting from maxx and going down to 1, we calculate the number of pairs whose GCD is exactly g. This is done using:
The formula cntDivisors[g] * (cntDivisors[g] - 1) / 2, which gives the number of ways to choose two elements with GCD g.
**// Now, Removing duplicate countings...**
Then, we subtract the pairs that have a GCD of any multiple of g (to ensure only pairs with GCD exactly equal to g are counted). 
This is done using the loop for (int mult = 2 * g; mult <= maxx; mult += g).

**Prefix Sum Array:**
We create a prefix sum array pref where pref[g] stores the cumulative sum of all gcdCount[g] for g from 1 to g. This helps in efficiently answering the queries.
pref[g] will give the total number of pairs whose GCD is less than or equal to g.

**Answering Queries:**
For each query q, which represents a rank, we need to find the smallest g such that the number of GCD pairs less than or equal to g is greater than q.
We use binary search on the pref array to find this value. The binary search helps efficiently find the answer without explicitly sorting or storing all the GCD pairs.

# Complexity
- Time complexity:
O(n\u221Am + m log m + q log m) where m = MaxElement

- Space complexity:
O(MaxElement)

# Code
```cpp []
class Solution{
public:
    vector<int> gcdValues(vector<int>& v, vector<long long>& q){
        int n = v.size();
        int maxx = *max_element(v.begin(), v.end());
        vector<int> cntDivisors(maxx + 1, 0);
        for(auto x : v){
            for(int i = 1; i * i <= x; i++){
                if(x % i == 0){
                    cntDivisors[i]++;
                    if(i != x / i){
                        cntDivisors[x / i]++;
                    }
                }
            }
        }
        vector<long long int> gcdCount(maxx + 1, 0);
        for(int g = maxx; g >= 1; g--){
            long long int count = cntDivisors[g];
            gcdCount[g] = 1ll * count *(count - 1) / 2;
            for(int mult = 2 * g; mult <= maxx; mult += g){
                gcdCount[g] -= gcdCount[mult];
            }
        }
        
        vector<long long int> pref(maxx + 1, 0);
        for(int g = 1; g <= maxx; g++){
            pref[g] = pref[g - 1] + gcdCount[g];
        }
        vector<int> ans;
        for(auto q : q){
            long long int left = 1, right = maxx, answer = -1;
            while(left <= right){
                long long int mid =(left + right) / 2;
                if(pref[mid] > q){
                    answer = mid;
                    right = mid - 1;
                } else{
                    left = mid + 1;
                }
            }
            ans.push_back(answer);
        }

        return ans;
    }
};
```