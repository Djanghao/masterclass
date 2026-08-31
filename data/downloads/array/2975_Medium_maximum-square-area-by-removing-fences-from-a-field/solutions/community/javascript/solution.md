# ✅☑Can't Get Better Than This || [C++/Java/Python/JavaScript] || Easiest Approach || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/solutions/4449592/](https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/solutions/4449592/)

---

# PLEASE UPVOTE IF IT HELPED


---
![Screenshot 2023-12-24 190029.png](./images/0.png)

# Approaches
(Also explained in the code)

1. The code sorts the given horizontal and vertical fences and adds border fences to their boundaries.
1. It calculates all possible horizontal and vertical fence lengths and checks for matching lengths to maximize the square area.
1. Finally, it returns the maximum square area modulo $$10^9 +7$$ or -1 if there's no valid square area.


# Complexity
- Time complexity:
   $$O((m + n)^2 * log(m + n))$$
    

- Space complexity:
   $$O((m + n)^2)$$
    


# Code
```C++ []
class Solution {
public:
    // Function to maximize the square area in a rectangular field with given horizontal and vertical fences
    int maximizeSquareArea(int m, int n, vector<int>& hFences, vector<int>& vFences) {
        // Sorting the horizontal and vertical fences
        sort(hFences.begin(), hFences.end());
        sort(vFences.begin(), vFences.end());

        // Adding the borders (start and end) to the horizontal and vertical fences
        hFences.push_back(m);
        hFences.insert(hFences.begin(), 1);
        vFences.push_back(n);
        vFences.insert(vFences.begin(), 1);

        int ans = -1; // Initializing the answer variable with -1
        map<int, int> cnt; // Map to count the fence lengths

        // Loop to calculate horizontal fence lengths
        int len = hFences.size();
        for(int i = 0; i < len; i++){
            for(int j = i + 1; j < len; j++){
                cnt[hFences[j] - hFences[i]] = 1; // Store the horizontal fence lengths
            }
        }

        // Loop to calculate vertical fence lengths and maximize the square area
        len = vFences.size();
        for(int i = 0; i < len; i++){
            for(int j = i + 1; j < len; j++){
                if(cnt.count(vFences[j] - vFences[i])){
                    ans = max(ans, vFences[j] - vFences[i]); // Find the maximum square area
                }
            }
        }
        
        // If no valid square area exists, return -1
        if(ans == -1) return ans;
        
        const int mod = 1e9 + 7; // Modulo value
        // Return the maximum square area modulo 10^9 + 7
        return 1LL * ans * ans % mod;
    }
};





```
```Java []
import java.util.*;

class Solution {
    public int maximizeSquareArea(int m, int n, int[] hFences, int[] vFences) {
        Arrays.sort(hFences);
        Arrays.sort(vFences);

        List<Integer> horizontal = new ArrayList<>();
        for (int fence : hFences) {
            horizontal.add(fence);
        }
        horizontal.add(0, 1);
        horizontal.add(m);

        List<Integer> vertical = new ArrayList<>();
        for (int fence : vFences) {
            vertical.add(fence);
        }
        vertical.add(0, 1);
        vertical.add(n);

        int ans = -1;
        Map<Integer, Integer> cnt = new HashMap<>();

        for (int i = 0; i < horizontal.size(); i++) {
            for (int j = i + 1; j < horizontal.size(); j++) {
                cnt.put(horizontal.get(j) - horizontal.get(i), 1);
            }
        }

        for (int i = 0; i < vertical.size(); i++) {
            for (int j = i + 1; j < vertical.size(); j++) {
                if (cnt.containsKey(vertical.get(j) - vertical.get(i))) {
                    ans = Math.max(ans, vertical.get(j) - vertical.get(i));
                }
            }
        }

        if (ans == -1) return ans;

        int mod = 1000000007;
        return (int) ((1L * ans * ans) % mod);
    }
}


```

```python3 []
class Solution:
    def maximizeSquareArea(self, m, n, hFences, vFences):
        hFences.sort()
        vFences.sort()

        hFences = [1] + hFences + [m]
        vFences = [1] + vFences + [n]

        ans = -1
        cnt = {}

        for i in range(len(hFences)):
            for j in range(i + 1, len(hFences)):
                cnt[hFences[j] - hFences[i]] = 1

        for i in range(len(vFences)):
            for j in range(i + 1, len(vFences)):
                if (vFences[j] - vFences[i]) in cnt:
                    ans = max(ans, vFences[j] - vFences[i])

        if ans == -1:
            return ans

        mod = 10**9 + 7
        return (ans * ans) % mod



```
```javascript []
class Solution {
    maximizeSquareArea(m, n, hFences, vFences) {
        hFences.sort((a, b) => a - b);
        vFences.sort((a, b) => a - b);

        hFences.unshift(1);
        hFences.push(m);
        vFences.unshift(1);
        vFences.push(n);

        let ans = -1;
        const cnt = {};

        for (let i = 0; i < hFences.length; i++) {
            for (let j = i + 1; j < hFences.length; j++) {
                cnt[hFences[j] - hFences[i]] = 1;
            }
        }

        for (let i = 0; i < vFences.length; i++) {
            for (let j = i + 1; j < vFences.length; j++) {
                if (cnt.hasOwnProperty(vFences[j] - vFences[i])) {
                    ans = Math.max(ans, vFences[j] - vFences[i]);
                }
            }
        }

        if (ans === -1) return ans;

        const mod = 1e9 + 7;
        return (ans * ans) % mod;
    }
}



```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---