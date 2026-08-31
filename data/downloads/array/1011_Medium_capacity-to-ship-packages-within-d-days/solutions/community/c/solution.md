# C++| Binary Search on Answers (A very imp. Topic)| Easy explanation

**Author:** oye_kp
**Votes:** 89
**Link:** [https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/1576116/](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/1576116/)

---

**Intution:**
**->** **Binary search** can be applied **not only on sorted array but also on monotonic([https://en.wikipedia.org/wiki/Monotonic_function](http://)) search space in which our answer lies.**
**->** If you are able to find the **start** and **end** of your **search space which is monotonic in nature** , **you can start thinking of applying binary search on answers(search space) in a problem**.
**->** Here in this problem lets take the example of **2nd testcase:**

**Input: weights = [3,2,2,4,1,4], days = 3
Output: 6**

**->** **Find the search space:**
 1) Think of a **maximum weight** ship can carry - This is the case if it has to carry **all packages** in a **single day**. It comes out to be **total of all elements=16**.
 2) Think of a **minimum weight** ship can carry - This is the case if it has to carry **single package everyday.** So **minimum weight** comes out to be **maximum of all elements=4**. 
 3) So in `weights = [3,2,2,4,1,4]`  our search space is from **4 to 16**
 4) If ship has **capacity of 16** - **Days taken 1**
                      **capacity of 4** - **Days taken 5 ->  (2,2) can be taken in a single day as capacity is 4**
5) We can observe here that if we **decrease the capacity of ship from 16 to 4, days taken will increase from 1 to 5.**
6) Now here in the above case we have to **find minimum capacity such that days taken is 3.**

7) Apply simple **binary search with low=4 and high=16** with a **check functioin which tells us if it is possible to ship all the packages within given days with capacity=>mid= low+high/2.**
8) **Change low and high accordingly untill days =3 with minimum capacity.**
```
class Solution {
public:
    bool helper(int mid,vector<int>& weights,int days){
        int count = 1, sum = 0;
        
        for(int i = 0; i < weights.size(); i++) {
            sum += weights[i];
            if (sum > mid) {
                count++;
                sum = weights[i];
            }
        }
        if (count <= days)
            return true;
        return false;
    }
    
    int shipWithinDays(vector<int>& weights, int days) {
        int maxCapacity=0;
        int n = weights.size();
        
        for(int i = 0; i < n; i++)
            maxCapacity += weights[i];
        
        int low = *max_element(weights.begin(), weights.end()), high = maxCapacity;
        int result;
        
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (helper(mid, weights, days)) {
                result = mid;
                high = mid - 1;
            }
            else
                low = mid + 1;
        }
        return result;
    }
};
```