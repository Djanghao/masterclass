# Beats 100% for time and space | C++ | Segment tree | Bitset

**Author:** shourabhpayal
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/1284929/](https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/1284929/)

---

**Inspired by** [donaldong's solution](https://leetcode.com/problems/minimum-absolute-difference-queries/discuss/1284214/c%2B%2B-int128-segment-tree-O(q*log(n)))

**Algorithm**
1. We notice that a number can be from 1 to 100 only
2. We make a segment tree. The leaf represents a bitset with 1 at the position = value of the num
3. For a range we BITWISE OR the values from left and right to indicate that the places where 1 occurs after ORing means these numbers have occured in this range.
4. For each query once we have the final bitset representation (after performing step 3), we count the minimum gap there is and report it as the answer

**Code**
```
class Solution {
public:
    vector<bitset<101>> tree;
    vector<int> minDifference(vector<int>& nums, vector<vector<int>>& queries) {
        int n = nums.size();
        
        tree = vector<bitset<101>>(4*(n+1) + 1);
        buildtree(1, 0, n-1, nums);
        
        vector<int> ans;
        for(auto &e: queries){
            auto finalOnesRepresentations = query(1, 0, n-1, e[0], e[1]);
            
            // find the first 1
            int i = 0;
            while(i < 101 and finalOnesRepresentations[i] != 1){
                i++;
            }
            
            int gap = INT_MAX;
            int prev = i;
            i++;
            // find the minimum gap
            for(; i < 101; i++){
                if(finalOnesRepresentations[i] == 1){
                    gap = min(gap, i - prev);
                    prev = i;
                }
            }
            ans.push_back(gap == INT_MAX ? -1 : gap);            
        }
        return ans;
    }
    
    bitset<101> query(int index, int s, int e, int qs, int qe){
        
        if(s > e) return bitset<101>();
        if(e < qs || s > qe) return bitset<101>();
        if(qs <= s and e <= qe) return tree[index];
        
        int mid = (s+e)/2;
        auto left = query(index*2, s, mid, qs, qe);
        auto right = query(index*2+1, mid+1, e, qs , qe);
        return left | right;
    }
    
    void buildtree(int index, int s, int e, vector<int>& a){
        
        if(s > e)return;
        
        if(s==e){
            bitset<101> b;
            b[a[s]] = 1;
            tree[index] = b;
            return;
        }
        
        int mid = (s+e)/2;
        buildtree(index*2, s, mid, a);
        buildtree(index*2+1, mid+1, e, a);
        tree[index] = tree[index*2] | tree[index*2+1];
    }
};
```

**Complexity**
Time : ```O(Q * (100 + log(N)) )```
Space : ```O(N)```