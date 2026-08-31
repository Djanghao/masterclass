# +1/-1 trick | c++, python, javascript and extra segment tree/BIT solution

**Author:** BetoSCL
**Votes:** 27
**Link:** [https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/3738988/](https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/3738988/)

---

# Approach
Let's look for the first non-zero value from left to right, let's call the index $i$, since it is the first one if we use a window starting at a lower index than $i$ we will affect some zero values and transform them into negative which is not valid, and a window starting greater than $i$ cannot help either since they left $nums[i] \
eq 0$ so the only option is to apply exactly $nums[i]$ operations with a window starting at $i$, however when we apply these operations we will also affect the indices in the range $[i,(i+k)-1]$ so we need to update efficiently. 

After the updates we move to the next non-zero element and repeat the algorithm, checking for negative values. 

How to do this efficiently? For advanced users perhaps a segment tree may come to mind, but we can apply the +1,-1 trick. 

The trick is to take an array of prefix sums, in which we can apply updates in ranges, let's see an example to understand it well. 

$prefix = [0,0,0,0,0,0,0,0,0,0]$


first we start with an array of prefixes for each index in zeros,for a range update for example $l = 1,r = 4$ we will update the prefix array with $prefix[l]++$ and $prefix[r+1]--$ in our example the array would look like this.
$prefix = [0,1,0,0,0,0,-1,0]$ 

But how is this useful?, once we do all the updates (it is necessary to have all the updates before the queries) if we get the prefix sums for each index we can know for each one how much it increased/decreased taking into account all the updates that affected that index, leaving the example as follows. 
$prefix\\_sum = [0,1,1,1,1,1,0,0]$ 

We can see that the prefix sums perfectly describe the update $l = 1,r = 4$.

Now for our problem we can apply as we go along, note that we iterate from left to right and apply some update starting exactly at $i$ and affect only later elements so all possible updates affecting the index $i$ already happened so as we go along doing the checks we can know how much the previous updates modified the current element.

# Complexity
- Time complexity:
$O(n)$

```c++ []
class Solution {
public:
    bool checkArray(vector<int>& nums, int k) {
        int n = nums.size();
        
        vector<long long> pref(n+1,0);
        long long ac = 0;
        
        for(int i = 0;i<n;i++){
            ac-=pref[i];
            nums[i]-=ac;
            
            if(nums[i]<0) return false;
            if(i+k<=n){   
                ac+=nums[i];
                pref[i+k]+=nums[i];
                nums[i] = 0;
            }
            else if(nums[i]>0)return false;
        }
        return true;
    }
};
```

```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkArray = function(nums, k) {
    let n = nums.length
    let pref = Array(n+1).fill(0)
    let ac = 0
    for(let [i, val] of nums.entries()){
        ac-=pref[i]
        val-=ac
        console.log(val,i)

        if(val<0)return false
        if(i+k<=n){
            ac+=val
            pref[i+k]+=val
            val = 0
        }
        else if(val>0)return false
    }

    return true
};
```
```python []
class Solution:
    def checkArray(self, nums: List[int], k: int) -> bool:
        n = len(nums)
        pref = [0]*(n+1)
        ac = 0
        for i in range(0,n):
            ac-=pref[i]
            nums[i]-=ac

            if nums[i]<0:
                return False
            if i+k<=n:
                ac+=nums[i]
                pref[i+k]+=nums[i]
                nums[i] = 0
            elif nums[i]>0:
                return False

        return True
            
```
Extra solution using segment tree for the updates in range
$O(nlog(n))$
# Code
```c++
  class Solution {
public:
    vector<long long> st,lazy;
    int n;
    void propagate(int v,int l,int r){
        if(lazy[v]==0)return ;
        st[v] += ((r-l)+1)*lazy[v];

        if(l!=r){
            lazy[v<<1]+=lazy[v];
            lazy[v<<1|1]+=lazy[v];
        }
        lazy[v] = 0;
    }

    void update(int l,int r,int val,int v ,int sl,int sr){
        propagate(v,sl,sr);
        if(sl>r || sr<l)return ;
        if(sl>=l && sr<=r){
            lazy[v]+=val;
            propagate(v,sl,sr);
            return ;
        }
        int m = (sl+sr)>>1;
        update(l,r,val,v<<1,sl,m);
        update(l,r,val,v<<1|1,m+1,sr);
    }

    long long query(int l,int r,int v,int sl,int sr ){
        propagate(v,sl,sr);
        if(sl>r || sr<l)return 0;
        if(sl>=l && sr<=r)return st[v];

        int m = (sl+sr)>>1;
        return query(l,r,v<<1,sl,m)+query(l,r,v<<1|1,m+1,sr);
    }

    void update(int l,int r,int val){
        update(l,r,val,1,0,n-1);
    }

    long long query(int l,int r){
        return query(l,r,1,0,n-1);
    }

    bool checkArray(vector<int>& nums, int k) {
        n=nums.size();
        st.resize(4*n);
        lazy.resize(4*n);
        
        for(int i = 0;i<n;i++)update(i,i,nums[i]);

        for(int i=0;i<n;i++){
            int x = query(i,i);
            if(x>0 && i+k<=n)
                update(i,(i+k)-1,-x);            
            if(query(i,i)!=0) return false;
        }
        return true;
    }
};
```
# Fenwick tree / BIT solution
And finally a solution with fenwick tree also called Binary Index Tree, this solution is interesting because the BIT is much easier to code, but the most important thing is that it also uses the trik +1/-1 \uD83E\uDD2F. 

Depending on where you learn the BIT structure you may not know that the fenwick tree can also deal with updates in ranges and not with a complex lazy propagation like the segment tree, in fact if you understand the structure well you can see the BIT as a prefix sum on steroids, basically it is a clever way to build ranges based on the binary representation of some index in such a way that those ranges help you to get the prefix sum up to an index, evidently with the ability to update when desired.

So since the BIT updates a particular values based on a particular index, at first the update in range is not possible ***(since the combination of the ranges needed for all the indexes in the range cannot be achieved in logarithmic time, so it will degenerate into an O(n) update in the worst case using the basic update)***, but since with that structure you can also get the prefix sums you can apply the trick and be able to update a range but sacrificing the query in range just make $update(l,val)$ and $update(r+1,-val)$.

Why if you want to have updates in ranges you can not get the query in range? ***(actually it is possible but I never learned it as it doesn't seem very useful, in that case I better use a segment tree)*** this is because the information in the indexes by itself no longer represents the prefix sums but represents a kind of accumulated change for each prefix. in a common BIT to get the query in range you have something like $query(r)-query(l-1)$ ,you subtract the prefix that you don't need, but when you use the update in range the information is not what we think, now we have some information from the end of the ranges that we need to subtract so you need the full prefix information to get the correct value, therefore if you subtract some prefix you will have incomplete information (like we do in the query in range) and the result will be wrong.

Although I will not explain in depth the BIT or the segment tree, I hope it will be useful or that you will learn something new, maybe in another problem I will write more in depth about these structures \uD83D\uDE09.

```c++
class Solution {
public:
    
    vector<int> bit;
    void add(int idx,int val){
        for(++idx;idx<bit.size();idx+= idx&-idx)bit[idx]+=val;
    }

    void add(int l,int r,int val){
        add(l,val);
        add(r+1,-val);
    }

    int sum(int idx){
        int res = 0;
        for(++idx;idx>0;idx-=idx&-idx)res+=bit[idx];
        return res;
    }

    bool checkArray(vector<int>& nums, int k) {
        int n=nums.size();
        bit.resize(n+1);
        
        for(int i = 0;i<n;i++)add(i,i,nums[i]);

        for(int i=0;i<n;i++){
            int x = sum(i);
            if(x>0 && i+k<=n)
                add(i,(i+k)-1,-x);            
            if(sum(i)!=0) return false;
        }
        return true;
    }
};
```
