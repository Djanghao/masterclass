# Segment Tree aprroach | Full Explanation | C++

**Author:** ayushjindal_23
**Votes:** 20
**Link:** [https://leetcode.com/problems/count-good-triplets-in-an-array/solutions/1783967/](https://leetcode.com/problems/count-good-triplets-in-an-array/solutions/1783967/)

---

1. Let us consider these two arrays [1,4,2,0,6,5,3,7]   [1,4,3,7,0,2,6,5]
2. Now the main observation of the question is-
Let's say if i am currently at 5th index in first array then we will find it's corresponding position in second array. In the above example it would be at second last position in second array.
Now for current index my answer would be (common elements in left part of first array and common elements in left part of second array) multiplied by (common elements in right part of first array and common elements in right part of second array).
In above case for 5th index [1,4,2,0] is common in left part and [5] is common in right part.
3. So, by traversing in this manner we can get our answer but this approach is (O(n^2)) which would not pass the constraints.
So now segment tree comes as our saviour here.
while traversing the array we can update the corresponding positions in segment tree of second array (Initially all nodes in segment tree has 0 value).
By this we can get common elements in left part in O(log n) time using range sum query on segment tree.
And now we have number of common elements in left part, we can easily get common elements in right part using simple maths.
```
#define ll long long
vector<ll> seg;
vector<ll> v;
int n;
void build(ll l,ll r,ll c=1)
{
    if(l==r)
    {
        seg[c]=v[l];
        return;
    }
    ll mid=(l+r)/2;
    build(l,mid,2*c); build(mid+1,r,2*c+1);
    seg[c]=seg[2*c]+seg[2*c+1];
    return;
}
ll query(ll l,ll r,ll a,ll b,ll c=1)
{
    if(l>b||r<a)
        return 0;
    if(l>=a&&r<=b)
        return seg[c];
    ll mid=(l+r)/2;
    return query(l,mid,a,b,2*c)+query(mid+1,r,a,b,2*c+1);
}
void update(ll l,ll r,ll ind,ll c=1)
{   
    if(ind<l||ind>r)
        return;
    if(l==r&&l==ind)
    {
        seg[c]=1;
        return;
    }
    ll mid=(l+r)/2;
    update(l,mid,ind,2*c);  update(mid+1,r,ind,2*c+1);
    seg[c]=seg[2*c]+seg[2*c+1];
}
class Solution {
public:
    long long goodTriplets(vector<int>& nums1, vector<int>& nums2)
    {
    int n=nums1.size();
    v.resize(n+1,0);
        ll ans=0;
    map<ll,ll> m;
        for(ll i=1;i<=n;i++)
        {
            m[nums2[i-1]+1]=i;
        }
        seg.clear();
        seg.resize(4*n+10,0);
        build(1,n);
        update(1,n,m[nums1[0]+1]);
        for(ll i=2;i<=n;i++)
        {
            ll r=m[nums1[i-1]+1];
            ll q=query(1,n,1,r);
            // cout<<q<<"\
";
            ll d=i-q-1;
            ll loc=(n-r)-d;
            ans+=loc*q;
            update(1,n,r);
        }
        return ans;
    }
};
```