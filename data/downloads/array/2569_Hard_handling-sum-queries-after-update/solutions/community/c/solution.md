# LAZY SEGMENT TREE || C++

**Author:** yash___sharma_
**Votes:** 3
**Link:** [https://leetcode.com/problems/handling-sum-queries-after-update/solutions/3228170/](https://leetcode.com/problems/handling-sum-queries-after-update/solutions/3228170/)

---

```
class Solution {
public:
    void propriogate(int i,int j,int n,vector<long long int> &tree,vector<long long int> &lazy){
        if(!lazy[n])return;
        int len = j-i+1;
        if(lazy[n]&1){
            tree[n] = len-tree[n];
        }
        if(i!=j){
        lazy[2*n+1] += lazy[n];
        lazy[2*n+2] += lazy[n];}
        lazy[n] = 0;
    }
    void update(int s,int e,int i,int j,vector<long long int> &tree,int n,vector<long long int> &lazy){
        propriogate(i,j,n,tree,lazy);
        if(s>j||e<i||i>j)return;
        if(s<=i&&e>=j){
            lazy[n]++;
            propriogate(i,j,n,tree,lazy);
            return;
        }
        int mid = (j-i)/2+i;
        update(s,e,i,mid,tree,2*n+1,lazy);
        update(s,e,mid+1,j,tree,2*n+2,lazy);
        tree[n] = tree[n*2+1]+tree[2*n+2];
    }
    long long query(int l,int r,int i,int j,vector<long long int> &tree,int n,vector<long long int> &lazy){
        propriogate(i,j,n,tree,lazy);
        if(r<i||l>j)return 0;
        if(l>=i&&j<=r)return tree[n];
        int mid = (j-i)/2+i;
        return query(l,r,i,mid,tree,2*n+1,lazy)+query(l,r,mid+1,j,tree,2*n+2,lazy);
    }
    vector<long long> handleQuery(vector<int>& nums1, vector<int>& nums2, vector<vector<int>>& queries) {
        vector<long long> v;
        long long sum = 0;
        int n = nums1.size(),i;
        for(auto &i: nums2){
            sum += i;
        }
        vector<long long int> tree(5*n),lazy(5*n);
        for(i = 0; i < n; i++){
            if(nums1[i]){
                update(i,i,0,n-1,tree,0,lazy);
            }
        }
        for(auto &i: queries){
            if(i[0]==1){
                update(i[1],i[2],0,n-1,tree,0,lazy);
            }else if(i[0]==2){
                sum += query(0,n-1,0,n-1,tree,0,lazy)*i[1];
                // sum += tree[0]*i[1];
            }else{
                v.push_back(sum);
            }
        }
        return v;
    }
};
```