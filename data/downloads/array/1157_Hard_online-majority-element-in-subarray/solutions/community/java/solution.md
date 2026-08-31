# Java O(logN) for each query with bit manipulation and binary search

**Author:** hihihi_hihihi
**Votes:** 20
**Link:** [https://leetcode.com/problems/online-majority-element-in-subarray/solutions/617295/](https://leetcode.com/problems/online-majority-element-in-subarray/solutions/617295/)

---

Observation: If there is a majority element, then each bit of its binary number must also be majority. For example, [3,3,4,7,3]. In binary, it's 
[**011**,
**011**,  
100, 
1**11**, 
**011**]. 
Then collect the majority of each bit, we have 011, which is the answer 3.

We can maintain an array presum[i][j], denoting the total number of 1's on bit j for the first i numbers. This can be done in initialization. With this, when query, we can get all majority bits in O(1) time (since there are at most 15 bits). If there exists a bit for which we cannot find a majority, return -1. Otherwise, we get a candidate.

However, be careful here. This candidate may not be the final answer. For example, [1,2,3]. In binary, it's [01, 10, 11]. Bit-majority is 11, candidate=3. But clearly, we shouldn't have a majority here. In order to get rid of the false positive, we need to know exactly how many times this candidate appears in the subarray. This can be achieved in O(logN)-time binary search if we have a list of occurrences of this number.

Overall, O(logN) for each query, and O(N) for initialization, where N is the size of the given array.

Any comment or counter-example is welcome.
```
class MajorityChecker {
    
    private final int digits=15;
    private int[][]presum;
    private ArrayList<Integer>[]pos;
    
    public MajorityChecker(int[] arr) {
        int len=arr.length;
        presum=new int[len+1][digits];
        pos=new ArrayList[20001];
        
        for(int i=0;i<len;i++){
            int n=arr[i];
            if(pos[n]==null)pos[n]=new ArrayList();
            pos[n].add(i);
            
            for(int j=0;j<digits;j++){
                presum[i+1][j]=presum[i][j]+(n&1);
                n>>=1;
            }
        }
    }
    
    public int query(int left, int right, int threshold) {
        int ans=0;
        for(int i=digits-1;i>=0;i--){
            int cnt=presum[right+1][i]-presum[left][i];
            int b=1;
            if(cnt>=threshold)b=1;
            else if(right-left+1-cnt>=threshold)b=0;
            else return -1;
            ans=(ans<<1)+b;
        }
        
        // check
        ArrayList<Integer>list=pos[ans];
        if(list==null)return -1;
        int L=floor(list,left-1);
        int R=floor(list,right);
        if(R-L>=threshold)return ans;
        return -1;
    }
    
    private int floor(ArrayList<Integer>list,int n){
        int left=0, right=list.size()-1, mid;
        while(left<=right){
            mid=left+(right-left)/2;
            int index=list.get(mid);
            if(index==n)return mid;
            else if(index<n)left=mid+1;
            else right=mid-1;
        }
        return right;
    }
    
}
```
