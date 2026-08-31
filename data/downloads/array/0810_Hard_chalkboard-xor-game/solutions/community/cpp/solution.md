# Very easy to understand C++ solution for beginners ✔✔

**Author:** roshanraj
**Votes:** 6
**Link:** [https://leetcode.com/problems/chalkboard-xor-game/solutions/3154627/](https://leetcode.com/problems/chalkboard-xor-game/solutions/3154627/)

---

# Intuition
To check for the first few small sizes of vector and try to catch up with a pattern.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
If there is only 1 element then Alice will end up removing that and will lose(provided it is not zero, bcz zero's xor is 0).
If the xor of all the elements is already 0, then Alice will win.
If the size of the vector is odd, then Alice will lose (they remove one element on each turn, so eventually Alice will end up removing the last element and lose).
And if it is even then Alice will win(same logic will be applied as above).
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:    
    bool xorGame(vector<int>& nums) {
        int xorr=0;
        int n=nums.size();

        if(n==1 && nums[0]!=0)
        return false;

        else
        {
            for(int i=0; i<n; i++)
            {
                xorr = (xorr ^ nums[i]);
            }
            if(xorr==0)
            return true;
        }

        if(n % 2 == 1)
        return false;
        else
        return true;
    }
};
```
![4q0zf1.jpg](./images/0.jpeg)

