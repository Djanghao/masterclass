# ✔️[C++] Simplest Solution | W/ Easy Explanation | Intuitive

**Author:** Mythri_Kaulwar
**Votes:** 67
**Link:** [https://leetcode.com/problems/3sum-with-multiplicity/solutions/1918457/](https://leetcode.com/problems/3sum-with-multiplicity/solutions/1918457/)

---

**APPROACH :**
 
* We traverse the array using 2 loops & compute the sums of all possible pairs. 

* We store the sums of pairs in an ```unordered_map``` along with their frequency.

* While traversing, we also check if the ```target - current element``` is present in the map. If so, we add it's frequency to the result.

* Finally we return the result.

**Time Complexity :** O(n^2)

**Space Complexity :** O(n^2)

**Code :**
```
class Solution {
public:
    int threeSumMulti(vector<int>& arr, int X) {
        int n = arr.size(), mod = 1e9+7, ans = 0;
        unordered_map<int, int> m;
        
        for(int i=0; i<n; i++) {
            ans = (ans + m[X - arr[i]]) % mod;
            
            for(int j=0; j<i; j++) m[arr[i] + arr[j]]++;
        }
        return ans;
    }
};
```

**Do upvote if you like my solution & explanation :)**