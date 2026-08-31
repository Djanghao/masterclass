# ✅ [c++] || 2 Solutions || Prefix sum (Array), Segment Tree + bitset

**Author:** xor09
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/2239360/](https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/2239360/)

---

**Solution 1:** *Prefix sum(Array)*
```
class Solution {
public:
    vector<int> minDifference(vector<int>& nums, vector<vector<int>>& queries) {
        int n = nums.size();
        vector<vector<int>> arr;
        
        vector<int> v(101,0);
        arr.push_back(v);
        for(int i=0; i<n; ++i){
            v[nums[i]]++;
            arr.push_back(v);
        }
        
        vector<int> ans;
        for(auto &q : queries){
            int l = q[0]+1, r=q[1]+1;
            vector<int> left = arr[l-1], right = arr[r];
            int prev = INT_MAX, res = INT_MAX;
            for(int i=0; i<101; ++i){
                if(right[i]-left[i] > 0){
                    if(prev == INT_MAX) prev = i;
                    else {
                        res = min(res, i-prev);
                        prev=i;
                    }
                }
            }
            ans.push_back(res==INT_MAX ? -1 : res);
        }
        
        return ans;
    }
};
```
**Solution 2:** *Segment Tree + bitset*
```
class Solution {
public:
    class SegmentTree{
    public:
        int n;
        vector<bitset<101>> Tree;
        
        SegmentTree(int n){
            this->n = n;
            Tree.resize(4*(n+1)+1);
        }
        
        int left(int idx){ return 2*idx+1;}
        int right(int idx){ return 2*idx+2;}
    
		// build function
        void build(int cur, int s, int e, vector<int>& nums){
            if(s==e){
                bitset<101> b;
                b[nums[s]] = 1;
                Tree[cur] = b;
                return;
            }
            if(s>e) return;

            int mid = s + (e-s)/2;

            build(left(cur), s, mid, nums);
            build(right(cur), mid+1, e, nums);
            Tree[cur] = Tree[left(cur)] | Tree[right(cur)];
        }
		
		//query function
        bitset<101> query(int cur, int s, int e, int qs, int qe){
            if(s>e) return bitset<101>();
            if(e<qs || s>qe) return bitset<101>();

            if(s>=qs && e<=qe) return Tree[cur];

            int mid = s + (e-s)/2;

            bitset<101> l = query(left(cur), s, mid, qs, qe);
            bitset<101> r = query(right(cur), mid+1, e, qs, qe);
            return l | r;
        }
    };
    
    
    vector<int> minDifference(vector<int>& nums, vector<vector<int>>& queries) {
        int n = nums.size();
        SegmentTree *ST = new SegmentTree(n);
        ST->build(0,0,n-1,nums);
        
        vector<int> ans;
        for(auto& q : queries){
            bitset<101> sol = ST->query(0,0,n-1,q[0],q[1]);
            int prev = -1, res = INT_MAX;
            for(int i=0; i<101; ++i){
                if(sol[i] == 1){
                    if(prev != -1) res = min(res, i-prev);
                    prev = i;
                }
            }
            ans.push_back(res==INT_MAX ? -1 : res);
        }
        
        return ans;
    }
};
```
please **UPVOTE**