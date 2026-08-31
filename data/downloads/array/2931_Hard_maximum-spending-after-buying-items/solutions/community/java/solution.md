# simple Java solution by sorting

**Author:** Akaza_
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/4276855/](https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/4276855/)

---

* UPVOTE IF YOU LIKE IT.
* first get all the elements from matrix into Arraylist
* Next step is sort the array. 
* we sort the array(ascending order) to get maximum value. To get maximum value multiply small (small values)* small(day 1...) initially. Later on to high * high.

# Code
```
class Solution {
    public long maxSpending(int[][] values) {
        
        ArrayList<Integer> al = new ArrayList<Integer>();
        for(int i=0;i<values.length;i++){
            for(int j=0; j<values[0].length;j++)
                 al.add(values[i][j]);     
        }
        
        Collections.sort(al);
        long k=1, result=0;
        for(int a: al) result+=a*(k++);
        return result;   
        
    }
}
```