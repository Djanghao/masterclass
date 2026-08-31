# Easy unordered_set solution | | O(n) time complexity

**Author:** suhani_29
**Votes:** 6
**Link:** [https://leetcode.com/problems/distribute-candies/solutions/3459892/](https://leetcode.com/problems/distribute-candies/solutions/3459892/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
Store elements of given vector in an unordered_set. Since the unordered_set stores only unique elements the occurence of each element will be 1 only.
Now we know she can eat only n/2 candies of different types so if the number of distinct elements is greater or equal to n/2 then she can have only n/2 candies irrespectiv of the distinct elements.
But if the number is less than n/2 then the option is the number of distinct cnadies only.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)


# Code
```
class Solution {
public:
    int distributeCandies(vector<int>& candyType) {
        int n = candyType.size();
        unordered_set<int> s(candyType.begin(), candyType.end());
        if(s.size() >= n/2){
            return n/2;
        }
        return s.size();
    }
};
```