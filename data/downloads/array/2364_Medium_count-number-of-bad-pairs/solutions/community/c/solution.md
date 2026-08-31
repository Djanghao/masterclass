# [ n*(n-1)/2 - Valid ]    ||   (C++/Java)

**Author:** Rowque
**Votes:** 114
**Link:** [https://leetcode.com/problems/count-number-of-bad-pairs/solutions/2388183/](https://leetcode.com/problems/count-number-of-bad-pairs/solutions/2388183/)

---

When I first saw the question 2 different ways striked my mind:
1. Merge sort
2. Segment tree

After sometimes I realised that none of them fits :(

**Trick to this problem**: 
        `Total`= `Valid` + `Invalid`
        `Invalid` = `Total`- `Valid`
    
 **The real Equation**:   `( j - i )` != `( A[j] - A[i] )`
 **The simple and more intuitive form of above equation**:    `( j - A[j] )` != `( i - A[i] )`
    
 The above equation is exactly similar to problem:
 - **[1814. Count Nice Pairs in an Array](https://leetcode.com/contest/biweekly-contest-49/problems/count-nice-pairs-in-an-array/)**
 
For faster access to valid count, we just need a hashmap.
  
 **Time** - O(`n`)
 **Space** - O(`n`)
 
 **Solution 1**:
 
 During runtime we keep counting `valid` and just extract `invalid` from `total` till every index.
 
# C++
     long long countBadPairs(vector<int>& a,long cnt=0) {
        unordered_map<int,int> mp;
        for(int i=0;i<size(a);i++)
            cnt+= i- mp[i-a[i]]++;
        return cnt;
    }
	
# Java
    public long countBadPairs(int[] a) {
        long cnt=0;
        HashMap<Integer,Integer> mp= new HashMap<>();
        for(int i=0;i<a.length;i++){
            int prev= mp.getOrDefault(i-a[i],0);
            cnt+= i- prev;
            mp.put(i-a[i],prev+1);
        }
        return cnt;
    }
	
**Solution 2**:

Lets say array is **[1,2,3,4]**.
For 1 , it will make pair with all previous elements i.e **0 pairs**.
For 2 , it will make pair with all previous elements i.e [1] which **1 pair**.
For 3 , it will make pair with all previous elements i.e [1,2] which is **2 pairs**.
For 4 , it will make pair with all previous elements i.e [1,2,3] which is **3 pairs**.

Now the total count of pair is = **0 + 1 + 2 + 3**  which is **sum of whole numbers** i.e **n * (n-1)/2** .


We simply count the `valid pairs`  from above equation and `subtract` it from total pairs in array i.e `n* (n-1)/2`.  

`Invalid`= `n*(n-1)/2` - `valid`

# C++
    long long countBadPairs(vector<int>& a,long cnt=0) {
        unordered_map<int,int> mp;
        int n=size(a);
        for(int i=0;i<n;i++)
            cnt+= mp[i-a[i]]++;
        return 1L*n*(n-1)/2 - cnt;
    }
# Java
    public long countBadPairs(int[] a) {
        long cnt=0;
        int n= a.length;
        HashMap<Integer,Integer> mp= new HashMap<>();
        for(int i=0;i<n;i++){
            int prev= mp.getOrDefault(i-a[i],0);
            cnt+= prev;
            mp.put(i-a[i],prev+1);
        }
        return 1L*n*(n-1)/2-cnt;
    }