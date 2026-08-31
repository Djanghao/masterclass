# ✅ Greedy || Intuition || O(1) Space  ||  (C++/Java)

**Author:** Rowque
**Votes:** 73
**Link:** [https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2061949/](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2061949/)

---

**Intuition**:
> Trick is to fill the bags with less remaining capacity, as these require less water and more number of bags will be be filled first.

If we sort in increasing order on the basis of difference between `current` and `orginal`, then our work will be to reduce difference to 0 with the help of `additionalRocks`.

# C++    
	int maximumBags(vector<int>& C, vector<int>& R, int add) {
        int n = size(R), cnt=0;
        for(int i = 0;i < n; i++) R[i] = C[i] - R[i];
        sort(begin(R), end(R));
        for(int i = 0;i < n && R[i] - add <= 0; i++) cnt++, add -= R[i];
        return cnt;
    }
	
# Java
    public int maximumBags(int[] C, int[] R, int add) {
       int n = R.length, cnt=0;
       for(int i = 0;i < n; i++) R[i] = C[i] - R[i];
       Arrays.sort(R);
       for(int i = 0;i < n && (R[i] - add) <= 0;i++) { 
	        cnt++;
		    add -= R[i];
	   }
       return cnt;
	}
**Time** - O(NlogN)
**Space** - O(1)


**Please Upvote if you like it! (\u25CF'\u25E1'\u25CF)**