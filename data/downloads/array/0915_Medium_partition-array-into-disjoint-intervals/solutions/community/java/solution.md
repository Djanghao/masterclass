# JAVA || 2 Solutions

**Author:** HIMANSHUCHHIKARA
**Votes:** 44
**Link:** [https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/1122368/](https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/1122368/)

---

**GOAL:** We have to find length of left array so basically have to find idx such that if we make a partition at that idx .All values in left array are less than from values of right array.

**OBSERVATION:** If the maximum from left array is less than minimum from right array then we can make a split at that idx.

**CODE:**
```
public int partitionDisjoint(int[] A) {
        int[] lmax=new int[A.length]; //lmax :left maximum
        int[] rmin=new int[A.length]; //rmin : right minimum
        
        int max=Integer.MIN_VALUE;
        for(int i=0;i<A.length;i++){
            max=Math.max(max,A[i]);
            lmax[i]=max;
        }
        
        int min=Integer.MAX_VALUE;
        for(int i=A.length-1;i>=0;i--){
            min=Math.min(min,A[i]);
            rmin[i]=min;
        }
        
        for(int i=1;i<A.length;i++){
            if(lmax[i-1]<=rmin[i]) return i;
        }
        return A.length;
    }
```

**Dry Run:**
 arr  :     [5,0,3,8,6]
lmax: [5,5,**5**,8,8]
rMin: [0,0,3,**6**,6]
we will make a split at after index 2 . i.e length of left array is 3. we are handling that thing through code.

**Complexity :**
`Time : O(n) and Space:O(n)`

**Follow UP:** `Can you Optimise Space?`

**IDEA:**
while iterating if we keep comparing maximum from left to idx value . 
-> we will make a answer initial at 0. assuming that till 0 left array exist.
-> then we will iterate and compare idx  value to maximum from left. 
 -> if value is less than maximum of left means this value belong to left array . 
      So we need to make a next maximum variable also because now left array is till given idx at which we currently are. (value<leftmax) . So we need maximum of this new left array. which basically equal to nextMax. 
Code will clear all your doubts.

**CODE:**
```
 public int partitionDisjoint(int[] A) {
        int cmax=A[0]; //cmax:current maximum
        int nmax=A[0];//nmax: next maximum
        int ans=0;
        
        for(int i=1;i<A.length;i++){
            int val=A[i];
          nmax=Math.max(val,nmax); //next max for case if i exist in left Part
            
            if(val<cmax){
                ans=i;         //now left Part is till here
                cmax=nmax; //maximum of left array is nmax(as we are maintaining maximum for split Part)
            }
        }
        return ans+1; // we have to return length not idx so ans+1.
    }
```	

**COMPLEXITY:**
` TIME : O(N) and Space:O(1)`

Please **upvote** if found it helpful:)