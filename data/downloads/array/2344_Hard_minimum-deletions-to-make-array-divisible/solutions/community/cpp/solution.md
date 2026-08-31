# C++|GCD | very Short and Easy | O(nlogn)|✔

**Author:** Xahoor72
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/3177139/](https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/3177139/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Little bit of maths here we have to think how can we check whole numsDivide array is divisible by a number  without traversing whole numsDivide array and checking one by one each element is divisibel by nums[i] or not .  Becuase this will give tle --> O(n^2)
So we know a property is there by which a set of elemnts can be checked if they are divisible by some number or not and that is GCD.
Since gcd is common divisor of all the numbers in set if gcd is divible by a number it means all the numbers will be divisible by that number . So we can find the gcd of whole numsDivide array and check divisiblity by nums array in sorted way one by one .
# Approach
<!-- Describe your approach to solving the problem. -->
- So Take GCD of Whole numsDivide array 
- Sort nums array beacuse we have to check minimum number by which each element in numsDivide array is divisible.
- Check one by one if gcd is divisible by nums[i] and if yes break if not counter++ .
- Atlast check if our counter = n it means no element in nums can divide whole numsDivide array so return -1 else retrun counter (number of deletions).
# Complexity
- Time complexity:$$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int minOperations(vector<int>& nums, vector<int>& numsD) {
        sort(nums.begin(),nums.end());
        int n=nums.size(),m=numsD.size();
        int gcd_num=numsD[0];
        for(int i=1;i<m;i++){
          gcd_num=gcd(gcd_num,numsD[i]);
        }
        int c=0;
        for(int i=0;i<n;i++){
            if(gcd_num%nums[i])
             c++;
             else break;
        }

        return (c==n)?-1:c;
    }
};
```