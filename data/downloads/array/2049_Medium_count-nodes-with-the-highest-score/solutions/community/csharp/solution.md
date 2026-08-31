# c# recursive solution

**Author:** sree_lakshmi
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/4595298/](https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/4595298/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    Dictionary<int, int[]> parentDict = new();
    int result = 0;
    long maxScore = 0;
    
    public int CountHighestScoreNodes(int[] parents) {
        for(int i=0; i< parents.Length; i++){
            parentDict.TryAdd(i, new int[2]);
        }
        for(int i=1; i<parents.Length; i++){
            if(parentDict[parents[i]][0] == 0) parentDict[parents[i]][0] = i;
            else parentDict[parents[i]][1] = i;
        }

        CountScores(0, parents.Length);
        return result;
    }

    public int CountScores(int index, int totalSize){
        int left = 0, right = 0;
        long count =1;
        if(parentDict[index][0] != 0) left = CountScores(parentDict[index][0], totalSize);
        if(parentDict[index][1] != 0) right = CountScores(parentDict[index][1], totalSize);

        int subTree = left + right +1;
        int other = totalSize - subTree;
        if(left != 0) count *= (long)left;
        if(right != 0) count *= (long)right;
        if(other != 0) count *= (long)other;
        if(count == maxScore) result++;
        else if(count > maxScore){
            maxScore = count;
            result = 1;
        } 
        return subTree;

    }
}
```