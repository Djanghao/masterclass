# Video Solution [ Convert to (Binary-Python || Bitset-Java/C++) ]

**Author:** aryan_0077
**Votes:** 11
**Link:** [https://leetcode.com/problems/handling-sum-queries-after-update/solutions/3203087/](https://leetcode.com/problems/handling-sum-queries-after-update/solutions/3203087/)

---

# Video Solution
https://www.youtube.com/watch?v=rqM0IRhjHkQ

# Code in C++
```
#define ll long long int
#define N 100005

class Solution {
public:
     
    vector<long long> handleQuery(vector<int>& nums1, vector<int>& nums2, vector<vector<int>>& queries) {
        int n = nums1.size();
        vector<ll> ans;
        
        bitset<N> bset(0);
        ll sum = 0;
        bitset<N> binit(0);
        binit.flip();
        
        for(int i=0;i<n;i++){
            sum += nums2[i];
            if(nums1[i]==1) 
                bset[i] = 1;
        }
        
        for(auto q : queries){
            if(q[0] == 1){
                int sz = q[2] - q[1] + 1;
                bitset<N> btemp(binit<<sz);
                btemp = ~btemp;
                btemp <<= q[1];
                bset ^= btemp;
            }else if(q[0] == 2){
                sum += q[1] * bset.count();
            }else{
                ans.push_back(sum);
            }
        }
        
        return ans;
    }
};
```

# Code in Java [Got from one of the solutions on Discuss page]
```
class Solution {
    public long[] handleQuery(int[] nums1, int[] nums2, int[][] queries) {
        List<Long> ls = new ArrayList<>();
        int n = nums1.length;
        BitSet bs = new BitSet(n);
        long sum = 0;
        for(int i = 0;i < n;i++){
            sum += 1L * nums2[i];
            if(nums1[i] == 1) bs.set(i);
        }
        for(var q:queries){
            if(q[0] == 1){
                bs.flip(q[1],q[2] + 1);
            }
            else if(q[0] == 2){
                sum += 1L * q[1] * bs.cardinality();
            }
            else ls.add(sum);
        }
        long ans[] = new long[ls.size()];
        for(int i = 0;i < ans.length;i++){
            ans[i] = ls.get(i);
        }
        return ans;
    }
}
```

# Code in Python [Got from one of the solutions on Discuss page]
```
class Solution:
    def handleQuery(self, nums1: List[int], nums2: List[int], queries: List[List[int]]) -> List[int]:
        l = len(nums1)
        init = 1<<l
        nums1 = int("".join(map(str, nums1)), 2)
        cur= sum(nums2)
        ans =[]
        for f,s,t in queries:
            if f==1:
                a = (init>>s)-1
                b = (init>>(t+1))-1
                nums1 = nums1^a^b
            elif f==2:
                cnt =nums1.bit_count()
                cur+=s*cnt
            else:
                ans.append(cur)
        return ans
```