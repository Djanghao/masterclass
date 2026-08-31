# ✅ Divide and Modulo

**Author:** Rowque
**Votes:** 38
**Link:** [https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/2292669/](https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/2292669/)

---

**C++**

    vector<int> numberOfPairs(vector<int>& nums) {
        int cnt[101]{};
        for(auto i:nums) cnt[i]++;
        int pairs=0, leftover=0;
        for(int i:cnt){
            pairs+= i/2;
            leftover+= i%2;
        }
        return {pairs,leftover};
    }
	
 **Java**
    
	 public int[] numberOfPairs(int[] nums) {
        int cnt[]= new int[101];
        for(int i:nums) cnt[i]++;
        int pairs=0, leftover=0;
        for(int i:cnt){
            pairs+= i/2;
            leftover+= i%2;
        }
        return new int[]{pairs,leftover};
    }
	
**Worst Time** - O(100+100)
**Worst Space** - O(101)