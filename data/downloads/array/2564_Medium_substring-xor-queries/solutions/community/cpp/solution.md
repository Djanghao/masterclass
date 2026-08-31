# O(32*n) hash map solution

**Author:** Priyanshu_Chaudhary_
**Votes:** 49
**Link:** [https://leetcode.com/problems/substring-xor-queries/solutions/3174092/](https://leetcode.com/problems/substring-xor-queries/solutions/3174092/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
* Our numbers can be between $$ 0<=num<=2^{31} $$.
# Approach
<!-- Describe your approach to solving the problem. -->

* For this question, we are given the hint that $$lefti=10^9$$ and $$righti <=10^9$$

* So we can simply simulate the answer and for ith index we will check its next 31 values if we encounter a number .
* We will store it in the map only if it was not present in the map previously
this way we have found all possible substrings as per the conditions specified in the question

* now for $$query[i]$$, we know that ` val^lefti = righti `can be written as `val= lefti^righti`.
* So simply loop through the query and find whether that element is present in the map.
* If the `lefti^righti` of `query[i]` is present then push the map value in the answer array
else push `{-1,-1}` in the answer.

# Complexity
- Time complexity:`O(32*n)`
- Space complexity:`O(32*n)` (worst case)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


<!-- - Space complexity:`O(32*n)` (worst case) -->

# Code
```
#define ll long long 
#define pii pair<int,int>
#define f first
#define s second

class Solution {
public:
    vector<vector<int>> substringXorQueries(string s, vector<vector<int>>& qu) 
    {
        int n=s.size(),q=qu.size();
        vector<vector<int>>ans;  
        unordered_map<ll,pii>map;
        for(int i=0;i<n;i++){
            if(s[i]=='0'){
                if(!map.count(0)) map[0]=make_pair(i,i);
                continue;
            }
            long long num=0;
            for(int j=i;j<=min(i+32,n-1);j++){
                num = (num << 1) + (s[j] - '0');
                if(!map.count(num)) map[num] = make_pair(i,j);                
            }
        }
        for(int i=0;i<q;i++){
            int num=qu[i][0] ^ qu[i][1];
            if(map.count(num)) ans.push_back({map[num].f,map[num].s});
            else   ans.push_back({-1,-1});
        }
        return ans;
    }
};
```