# Rolling Hash with Collision Resolution

**Author:** sayanslc
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/5874028/](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/5874028/)

---

# Solution
Idea is to use a rolling hash like rabin karp, but use collision resolution. 
So, for every hash, I am storing the freq_map of characters in set. 
The reason to do it in freq map is simple, the string can be huge, but the freq map will take only 26*(int_size) space


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2 log(n))

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n^2)



# Code
```cpp []
const int m = 1e9+7;
const int p = 37;

class Solution {
public:
    int countDistinct(string s) {
        int n = s.size();
        unordered_map <int, set <vector<int>> > hash;
        int ans = 0;

        for( int i = 0 ; i < n ; i++ ){
            long curr = 0;
            vector <int> temp(26,0);
            for( int j = i ; j < n ; j++ ){
                temp[s[i]-'a']++;
                curr = ( (curr%m * p%m )%m + (s[j]-'a'+1)%m )%m;
                if( hash.count(curr) > 0 && hash[curr].count(temp) > 0 ){
                    continue;
                }
                ans++;
                hash[curr].insert(temp);
            }
        }
        return ans;
    }
};
```