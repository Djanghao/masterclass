# C++ approach calculating back to front span

**Author:** michelusa
**Votes:** 1
**Link:** [https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/1171225/](https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/1171225/)

---

* We calculate the expected  delta using the first and last element of the array
* Then enumerate the array looking for the missing expected value
* finally return the missing expected value

```
    int missingNumber(const vector<int>& arr) {
        
        const int span = arr.back() - arr.front();

        const int intervals = arr.size() ;
        const int delta = span / intervals;
     
        
        for (auto idx = 1; idx < arr.size(); ++idx) {
            if (arr[idx] - arr[idx - 1] != delta)
                return arr[idx - 1] + delta;
        }
        return arr[0];
    }