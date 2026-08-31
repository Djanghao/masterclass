# ✅☑️ Best C++ Solution Ever || Hash Table || Counting || One Stop Solution.

**Author:** its_vishal_7575
**Votes:** 16
**Link:** [https://leetcode.com/problems/most-frequent-even-element/solutions/3177488/](https://leetcode.com/problems/most-frequent-even-element/solutions/3177488/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can solve this question using Array + Counting + Hash Table(Unordered map).

# Approach
<!-- Describe your approach to solving the problem. -->
We can easily understand the approach by seeing the code which is easy to understand with comments.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Time Complexity : O(N), We iterate over Array(nums) once and make a constant time HashMap(Unordered map) insertion on each iteration. Therefore, the algorithm runs in O(N) time. Where N is the size of the Array(nums).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Space Complexity : O(N), Unordered map space. 

# Code
```
/*

    Time Complexity : O(N), We iterate over Array(nums) once and make a constant time HashMap(Unordered map)
    insertion on each iteration. Therefore, the algorithm runs in O(N) time. Where N is the size of the Array
    (nums).

    Space Complexity : O(N), Unordered map space. 

    Solved using Array + Hash Table + Counting.

*/

class Solution {
public:
    int mostFrequentEven(vector<int>& nums) {
        unordered_map<int, int> map;
        for(auto num : nums){
            if(num%2 == 0){
                map[num]++;
            }
        }
        unordered_map<int, int>::iterator it;
        int maxFreqEvenNumber = -1;
        int maxFreq = 0;
        for(it = map.begin(); it != map.end(); it++){
            if(it->second > maxFreq){
                maxFreq = it->second;
                maxFreqEvenNumber = it->first;
            }
            else if(it->second == maxFreq){
                maxFreqEvenNumber = min(maxFreqEvenNumber, it->first);
            }
        }
        return maxFreqEvenNumber;
    }
};

```
***IF YOU LIKE THE SOLUTION THEN PLEASE UPVOTE MY SOLUTION BECAUSE IT GIVES ME MOTIVATION TO REGULARLY POST THE SOLUTION.***

![WhatsApp Image 2023-02-10 at 19.01.02.jpeg](./images/0.jpeg)