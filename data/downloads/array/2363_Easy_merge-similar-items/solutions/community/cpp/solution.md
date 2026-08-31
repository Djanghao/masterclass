# Best 2 C++ Solution Ever || Sorting || Hash Table || Brute Force -> Optimize || One Stop Solution.

**Author:** its_vishal_7575
**Votes:** 21
**Link:** [https://leetcode.com/problems/merge-similar-items/solutions/3190948/](https://leetcode.com/problems/merge-similar-items/solutions/3190948/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can solve this question using Multiple Approaches. (Here I have explained all the possible solutions of this problem).

1. Solved using Array + Hash Table(Ordered map).
2. Solved using Array + Sorting.

# Approach
<!-- Describe your approach to solving the problem. -->
We can easily understand the All the approaches by seeing the code which is easy to understand with comments.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Time complexity is given in code comment.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Space complexity is given in code comment.

# Code
```
/*

    Time Complexity : O(NlogN + MlogM), Because we are doing N+M iteration for inserting elements in ordered map
    and Ordered map takes logrithmic time for insertion. where N is the size of items1 and M is the size of the
    items2.

    Space Complexity : O(N+M), Hash Table(Ordered map) space. In worst case if all the elements of both items1
    and items2 are different.

    Solved using Array + Hash Table(Ordered map).

*/


/***************************************** Approach 1 *****************************************/

class Solution {
public:
    vector<vector<int>> mergeSimilarItems(vector<vector<int>>& items1, vector<vector<int>>& items2) {
        vector<vector<int>> output;
        map<int, int> map;
        for(auto item : items1){
            map[item[0]] += item[1];
        }
        for(auto item : items2){
            map[item[0]] += item[1];
        }
        for(auto item : map){
            output.push_back({item.first, item.second});
        }
        return output;
    }
};






/*

    Time Complexity : O(NlogN + MlogM), Because sorting of items1 will cost NlogN and sorting of items2 will cost
    MlogM. where N is the size of items1 and M is the size of the items2.

    Space Complexity : O(1), Constant space. Extra space is only allocated for the Array(output), however the
    output does not count towards the space complexity.

    Solved using Array + Sorting. 

*/


/***************************************** Approach 2 *****************************************/

class Solution {
public:
    vector<vector<int>> mergeSimilarItems(vector<vector<int>>& items1, vector<vector<int>>& items2) {
        vector<vector<int>> output;
        sort(items1.begin(), items1.end());
        sort(items2.begin(), items2.end());
        int i=0, j=0;
        while(i < items1.size() && j < items2.size()){
            if(items1[i][0] == items2[j][0]){
                output.push_back({items1[i][0], items1[i][1] + items2[j][1]});
                i++; j++;
            }
            else if(items1[i][0] < items2[j][0]){
                output.push_back(items1[i]);
                i++;
            }
            else{
                output.push_back(items2[j]);
                j++;
            }
        }
        while(i < items1.size()){
            output.push_back(items1[i]);
            i++;
        }
        while(j < items2.size()){
            output.push_back(items2[j]);
            j++;
        }
        return output;
    }
};

```

***IF YOU LIKE THE SOLUTION THEN PLEASE UPVOTE MY SOLUTION BECAUSE IT GIVES ME MOTIVATION TO REGULARLY POST THE SOLUTION.***

![WhatsApp Image 2023-02-10 at 19.01.02.jpeg](./images/0.jpeg)