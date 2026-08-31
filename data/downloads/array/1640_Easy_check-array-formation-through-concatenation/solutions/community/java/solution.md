# JAVA | ~O(n) 0ms runtime | with Explanation

**Author:** suraj008
**Votes:** 29
**Link:** [https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/996434/](https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/996434/)

---

Idea:
Store the pieces in such a way that each array piece is linked and first element of each piece should be accessible in O(1) time. Hence using a HashMap. Then, traverse the arr and check if each value exits as a key (rest of the values in the arraylist of each key will be indexed over & checked in for loop)
eg: 
```
arr = [91,4,64,8,78,2], pieces = [[78,2],[4,64,8],[91]]
HashMap:
78-> [78,2]
4-> [4,64,8]
91-> [91]

[91,4,64,8,78,2] (91 exists as a key and [91] an array of values)
 ^ 
[91,4,64,8,78,2] (4 exists as a key and [4,64,8] an array of values)
    ^  * *
[91,4,64,8,78,2] (78 exists as a key and [78,2] an array of values )
		    ^ * 
```		   
```
class Solution {
    public boolean canFormArray(int[] arr, int[][] pieces) {
        HashMap<Integer,int[]> hm = new HashMap();
        for(int[] list:pieces)
            hm.put(list[0],list);
        
        int index = 0;
        while(index<arr.length){
            if(!hm.containsKey(arr[index]))
                return false;
            
            int[] list = hm.get(arr[index]);
            for(int val:list){
                if(index>=arr.length || val!=arr[index])
                    return false;
                index++;
            }
        }
        return true;
    }
}
```
