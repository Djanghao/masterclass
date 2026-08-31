# Easy 1ms 99.29% ***Solution*** WITH EXPLANATION

**Author:** shumakhmanazarov
**Votes:** 15
**Link:** [https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/1812301/](https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/1812301/)

---

**Hashing Approach for Find Lucky Integer in an Array**

We can count the occurrences of each number in one go even without sorting with the help of hashing. 

We will follow these steps:
**Create a frequency array of size 501 as the value of the element could be a maximum of 500.**
Traverse the given array complete and store the count of each element in the frequency array.
Now **traverse** the frequency array from the end and if any element satisfies the condition then **return it**.
 In the end, if no element satisfies the condition then **return -1.**
 
 **Java code:**
```
class Solution {
    public int findLucky(int[] arr) {
        int[] numbers = new int[501];
        
        for (int j : arr) { 
			numbers[j]++; 
		}
        
        for (int i = 500; i > 0; i--) { 
			if (i == numbers[i]) return i; 
		}
        return -1;
    }
}
```
# Please ***UPVOTE*** if you find this solution helpful ***:D***