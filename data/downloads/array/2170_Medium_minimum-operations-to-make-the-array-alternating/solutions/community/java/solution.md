# C++ | Java | 4 Lines | Frequency Table | Explanation

**Author:** kiranpalsingh1806
**Votes:** 60
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/1766928/](https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/1766928/)

---

- Store the frequencies of odd and even indexes. 
- Then, keep track of maximum frequency of element in j and k variable.
-  It will give us how many elements __we don't need to change__. In last just find how many elements __we have to change by subtracting from total number of elements__.
```cpp
class Solution {
    int freq[100005][2];
public:
    int minimumOperations(vector<int>& nums) {
        memset(freq, 0, sizeof(freq));
        int n=nums.size(), i, j, k, ans=0;
        for(i = 0; i < n; i++) {
			freq[nums[i]][i&1]++;
		}
        for(i = 1, j=k=0; i <= 100000; i++) {
		   // Add the maximum frequency of odd indexes to maximum frequency even indexes 
		   //and vice versa, it will give us how many elements we don't need to change. 
            ans = max(ans, max(freq[i][0] + k, freq[i][1] + j));
            j = max(j, freq[i][0]);
            k = max(k, freq[i][1]);
        }
        return n - ans;
    }
};
```
```java
class Solution {
    public int minimumOperations(int[] nums) {
        int freq[][] = new int[100005][2];
        int i, j, k, ans=0;
        for(i = 0; i < nums.length; i++) {
    			freq[nums[i]][i&1]++;
    		}
    		
    		for(i = 1, j=k=0; i <= 100000; i++) {
			// Add the maximum frequency of odd indexes to maximum frequency even indexes 
		    //and vice versa, it will give us how many elements we don't need to change. 
    		ans = Math.max(ans, Math.max(freq[i][0] + k, freq[i][1] + j));
            j = Math.max(j, freq[i][0]);
            k = Math.max(k, freq[i][1]);
        }
        return nums.length - ans;
    }
}
```