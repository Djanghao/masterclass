# Simple and efficient approach O(n) | Count Moduli | C++

**Author:** Anuj_vanced
**Votes:** 15
**Link:** [https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/3315716/](https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/3315716/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
A simple intuition begins with thinking of addition and subtraction operation as shifting with a scale of value.
A shifted number only need 1 parameter i.e. it's modulus with value.

# Approach
<!-- Describe your approach to solving the problem. -->
As you must have already obsereved that a maximum possible MEX in an array of size N is N.

We will store the count of moduli in a vector.

Run a loop from 0 to N.
Here iterator will denote the MEX and we will if that MEX is possible or not.
we will check it by shifting it in the range of [0,value) (i.e. range of counted moduli). if its count > 0 then it is possible and we will move to next iteration after decreasing it's count.

if it is not possible to make this iterator by shifting then it is our maximum possible MEX and we will break the loop.



# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N) where N is the size of given array.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(Value) to store count of moduli.

# Code
```
class Solution {
public:
    int findSmallestInteger(vector<int>& nums, int value)
    {
        int n = nums.size();

        vector<int> hash(value,0);

        for(auto i : nums)
        {
            int md = i%value;

            if(md<0)
            {
                hash[md+value]++;
            }
            else
            {
                hash[md]++;
            }
        }

        int ans = 0;

        for(int i=0;i<=n;i++)
        {
            if(hash[i%value]>0) hash[i%value]--;
            else 
            {
                ans = i;
                break;
            }
        }

        return ans;
    }
};
```