# C++ | EXPLAINED | LTR + RTL | O(n)

**Author:** hg3994
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/1328289/](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/1328289/)

---

```

/*

Harshit Gupta | 10th July, 2021
--------------------------------

Minimum Number of Operations to Move All Balls to Each Box

You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, 
    and '1' if it contains one ball.
In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. 
    Note that after doing so, there may be more than one ball in some boxes.
Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls 
    to the ith box.

Each answer[i] is calculated considering the initial state of the boxes.

Example 1:
    Input: boxes = "110"
    Output: [1,1,3]
    Explanation: The answer for each box is as follows:
    1) First box: you will have to move one ball from the second box to the first box in one operation.
    2) Second box: you will have to move one ball from the first box to the second box in one operation.
    3) Third box: you will have to move one ball from the first box to the third box in two operations, 
        and move one ball from the second box to the third box in one operation.

Example 2:
    Input: boxes = "001011"
    Output: [11,8,5,4,3,4]

https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
------

Solution: For each element in the array, we have to find the distance with all the 1s in the array.

    1. Brute Force:
        For each element in the array, check for all 1s in the array and add the dist of all 1s.

        TC: O(n2)
        SC: O(1)

    2. LeftToRight + RightToLeft Traversal:
        - For each element, calculate the number of 1s on its left and 1s on its right
        - For each element, calculate the cost of 1s from the elements on its left & similarly calcualate cost 
            of 1s from the elements on its right
        - Add the leftCost & rightCost for each i
    
        Example:
        boxes      11010
        leftCount  01223 (How many 1s are to the left of your index)
        leftCost   01358 (What is the cost of 1s to the left of your index)
        rightCount 21100 (How many 1s are to the right of your index)
        rightCost  42100 (What is the cost of 1s to the right of your index)
        ans        43458 (Total cost of 1s to the left + right)

        TC: O(n)
        SC: O(n)

Paradigm:
---
  NOTE: 

*/


class Solution {
public:
    vector<int> minOperations(string boxes) {
        int n = boxes.size();
        vector<int> leftCost(n), leftCount(n);
        vector<int> rightCost(n), rightCount(n);
        vector<int> res;
        
        for(int i=1; i<n; i++){
            if(boxes[i-1] == '1')
                leftCount[i] = leftCount[i-1]+1;
            else 
                leftCount[i] = leftCount[i-1];
            leftCost[i] = leftCost[i-1]+leftCount[i];
        }
        
        for(int i=n-2; i>=0; i--){
            if(boxes[i+1] == '1')
                rightCount[i] = rightCount[i+1]+1;
            else 
                rightCount[i] = rightCount[i+1];
            rightCost[i] = rightCost[i+1]+rightCount[i];
        }
        
        for(int i=0; i<n; i++){
            res.push_back(leftCost[i]+rightCost[i]);
        }
        
        return res;
    }
};
```