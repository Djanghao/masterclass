# ✅Beats 100% | All approaches | Super Easy & Clean code | Made Coding Fun

**Author:** arib21
**Votes:** 97
**Link:** [https://leetcode.com/problems/relative-ranks/solutions/5128328/](https://leetcode.com/problems/relative-ranks/solutions/5128328/)

---

# Approach 1 : Reverse sort

# Intuition
Make an array of sorted pair where the first element is the index and the second one is the score value. Now sort the array in decreasing order of score value. Then iterate over all those elements. So now iterate over all those elements one by one from the start of sorted pair array and put the score to the corresponding index of the answer array.

# Complexity
- Time complexity:
$$O(nlogn)$$, where n is length of the score array.

- Space complexity:
$$O(n)$$, we need two array one for keeping sorted pairs and another is the answer array, both of which are of size n.

# Code
```
class Solution {
    public String[] findRelativeRanks(int[] score) {
        
        int n = score.length;
        
        int[][] sortedPairs = new int[n][2];
        for (int i = 0 ; i < n ; i++) sortedPairs[i] = new int[] {i, score[i]};
        
        Arrays.sort(sortedPairs, (x, y) -> (y[1] - x[1]));
        
        String[] ans = new String[n];
        
        for (int i = 0 ; i < n ; i++) {
            
            if (i == 0) {
                ans[sortedPairs[i][0]] = "Gold Medal";
            } else if (i == 1) {
                ans[sortedPairs[i][0]] = "Silver Medal";
            } else if (i == 2) {
                ans[sortedPairs[i][0]] = "Bronze Medal";
            } else {
                ans[sortedPairs[i][0]] = String.valueOf(i+1);
            }
        }
        
        return ans;
    }
}
```


# Approach 2 : Priority Queue (Max Heap)

# Intuition
Create a max heap with Pair, in the key we will be storing the index and in the value we will store score. Now keep a palce to hold the current rank and untill the max heap is empty fetch the top value and store to corresponding index in the answer.

# Complexity
n is lenght of the score.

- Time complexity:
$$O(nlogn)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    public String[] findRelativeRanks(int[] score) {
        
        int n = score.length;
        
        PriorityQueue<Pair<Integer, Integer>> maxheap = new PriorityQueue<>((p1, p2) -> (p2.getValue() - p1.getValue()));
        
        for (int i = 0 ; i < n ; i++) {
            maxheap.add(new Pair(i, score[i]));
        }
        
        String[] ans = new String[n];
        
        int place = 1;
        
        while (!maxheap.isEmpty()) {
            Pair<Integer, Integer> top = maxheap.poll();
            
            int curIndex = top.getKey();
            
            if (place == 1) {
                ans[curIndex] = "Gold Medal";
            } else if (place == 2) {
                ans[curIndex] = "Silver Medal";
            } else if (place == 3) {
                ans[curIndex] = "Bronze Medal";
            } else {
                ans[curIndex] = String.valueOf(place);
            }
            place++;
             
        }
        
        return ans;
    }
}
```

# Approach 3 : Hashing

# Intuition
Find the max score in the score araay, define an array of that size+1. Now store to the score th index the corresponding index + 1 (to maintain 1 based ranking). Then maintain a variable place for ranking and iterate from the last index and check the non zero index and fill out the answer array. 

# Complexity
n be the length of the score array and m be the max value.

- Time complexity:
$$O(n+m)$$

- Space complexity:
$$O(m)$$

# Code
```
class Solution {
    public String[] findRelativeRanks(int[] score) {
        
        int n = score.length;
        
        int maxScore = 0;
        for (int i = 0 ; i < n ; i++) {
            maxScore = Math.max(maxScore, score[i]);
        }
        
        int[]  score2Index = new int[maxScore+1];
        
        for (int i = 0 ; i < n ; i++) {
            score2Index[score[i]] = i+1;
        }
        
        String[] ans = new String[n];
        
        int place = 1;
        
        for (int i = maxScore ; i >= 0 ; i--) {
            
            if (score2Index[i] == 0) continue;
                
            int actualIndex = score2Index[i] - 1;
            if (place == 1) {
                ans[actualIndex] = "Gold Medal";
            } else if (place == 2) {
                ans[actualIndex] = "Silver Medal";
            } else if (place == 3) {
                ans[actualIndex] = "Bronze Medal";
            } else {
                ans[actualIndex] = String.valueOf(place);
            }
            place++; 
        }
        
        return ans;
    }
}
```

Submission Screenshot:

![image.png](./images/0.png)




![image](./images/1.jpeg)
