# C++ solution with explanation|98.64% Runtime| Constant Space | O(n) Time Complexity

**Author:** __LOGAN__
**Votes:** 165
**Link:** [https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/776248/](https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/776248/)

---

Before explaining the algo, we should always keep in mind that every element will be in range of (1,n) where n is the size of input array. 

**Algorithm:**
1) Scan every element in array.
2) Negate the value at index of ((absolute value of scanned element) - 1)). 
3) Now check if the value a the index is +ve or not. If positive its a duplicate element . 

**Sample array :**
[4,2,4,3,1]

***1st Pass:***
Element Scanned = 4
Index to negate = 3
Array => [4,2,4,-3,1]
n[3] = -3 which is -ve so this is distinct till now

***2nd Pass:***
Element Scanned = 2
Index to negate = 1
Array => [4,-2,4,-3,1]
n[1] = -2 which is -ve so this is distinct till now

***3rd Pass:***
Element Scanned = 4
Index to negate = 3
Array => [4,-2,4,3,1]
n[3] = 3 which is +ve , means its duplicate. Add to duplicates vector.

***4th Pass:***
Element Scanned = 3
Index to negate = 2
Array => [4,-2,-4,3,1]
n[2] = -4 which is -ve so this is distinct till now.

***5th Pass:***
Element Scanned = 1
Index to negate = 0
Array = [-4,-2,-4,3,1]
n[0] = -4 which is -ve so this is distinct till now

**[-4] was the duplicate element found .**

**Time Complexity: O(n)** where n is size of input array
**Space Complexity: O(1)** 

##### **Code:**

```
class Solution {
    std::vector<int> numCount;
public:

    vector<int> findDuplicates(vector<int>& n)
    {
        vector<int> duplicates;
        
        for(int i=0;i<n.size();i++)
        { 
            // evaluate index of selected element if array would have been sorted..
            int indexOfElem = abs(n[i]) - 1;
            
            // negate the element
            n[indexOfElem] = - n[indexOfElem];
            
            // if this element is positive means double negation had happened which 
            // means we editied this element twice.
            if(n[indexOfElem]>0)
                duplicates.push_back(indexOfElem+1);
            
        }
        return duplicates;
    }
};
```

Upvote if you like the explaination and solution!
Please comment if you have any suggestions or questions :)