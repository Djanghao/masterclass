# C++ Segment Tree + Binary Search

**Author:** varkey98
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/solutions/764022/](https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/solutions/764022/)

---

The idea is that for any pair(l,r) you need to find the ***bitwise and*** value in optimum time. For that we use the concept of segment tree. 
Then for computing the min value, the ***bitwise and*** value  from any starting index makes a non increasing sequence because a&b<=a, so do a binary search for a least number which is greater than the target.
```
vector<int> tree;
int build(vector<int>& arr,int start,int end, int i)
{
    if(start>end)
        return INT_MAX;
    if(start==end)
        return tree[i]=arr[start];
    else
    {
        int q=start+(end-start)/2;
        return tree[i]=build(arr,start,q,2*i+1)&build(arr,q+1,end,2*i+2);
    }
}
int query(int start,int end,int low,int high,int i)
{
    if(start<=low&&end>=high)
        return tree[i];
    else  if(start>high||end<low)
        return INT_MAX;
    else
    {
        int q=low+(high-low)/2;
        return query(start,end,low,q,2*i+1)&query(start,end,q+1,high,2*i+2);
    }
}
int binarySearch(int start,int end,int target)
{
    int lo=start,hi=end;
    int val=INT_MAX,v2=0;
    while(lo<=hi)
    {
        int q=lo+(hi-lo)/2;
        if(val!=v2)
            val=query(start,q,0,end,0);
        if(val>=target)
            if(val==target)
                return val;
            else if(v2=query(start,q+1,0,end,0)<target)
                return val;
            else 
                {
                    lo=q+1;
                    val=v2;
                }
        else hi=q-1;
    }
    return query(start,lo,0,end,0);
}
int closestToTarget(vector<int>& arr, int target) 
{
    int n=arr.size();
    int x = (int)(ceil(log2(n)));
    int max_size = 2*(int)pow(2, x) - 1;  
    tree.resize(max_size,-1);    
    build(arr,0,n-1,0);
    int ret=INT_MAX;
    vector<int> temp;
    for(int i=0;i<n;++i)
        ret=min(ret,abs(binarySearch(i,n-1,target)-target));
    return ret;
}
```