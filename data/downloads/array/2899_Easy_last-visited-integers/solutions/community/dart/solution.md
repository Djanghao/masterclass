# Read and get an idea

**Author:** f4rhhaan
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-visited-integers/solutions/4498100/](https://leetcode.com/problems/last-visited-integers/solutions/4498100/)

---

# Intuition
in this code there declare two Lists named visited,res.we declare a variable for counting the prev,and use a loop for itreating the List,and there is a if coundition for check the List element is Integer or prev,if the value is not prev we adding the value in visited List and seting count is 0,if the value is prev ,first we checking the continues count of prev and asign to count,if count is Greater the visited list length and added to list ,we adding -1 ,if it less,we take value from visited list in the position length of the visited list substract with count of prev ,and return the res list

# Approach
Simple Approach

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
  List<int> lastVisitedIntegers(List<String> words) {
     List<int> visited=[];
     List<int> res=[];
     int count=0;
        for(int i=0;i<words.length;i++)
        {
           if(words[i]=="prev")
           {
              (count < visited.length) ? res.add(visited[visited.length-1-count]):res.add(-1);
                count++;
           }else {  
            visited.add(int.parse(words[i]));
            count = 0;
        }                 
        }
        return res;
  }
}
```