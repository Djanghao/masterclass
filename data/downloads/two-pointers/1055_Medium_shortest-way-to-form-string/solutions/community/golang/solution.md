# GO | fastest 100% | greedy two pointers with explaination

**Author:** xtreding
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-way-to-form-string/solutions/2169989/](https://leetcode.com/problems/shortest-way-to-form-string/solutions/2169989/)

---

The problem can be solved with greedy solution. It is clear after considering of 3rd example:

```
source = "xyz", target = "xzyxz"
The target string can be constructed as follows "xz" + "y" + "xz".
```

We can have two pointers **i,j** (i for source, j for target) and go through two strings, when **source** string ended, we should increment **result** var and iterate again from the start. But if **source** string ended and our target pointer hasn't moved, it means that **target[j]** symbol doesn't exist in the **source**, therefore return **-1**.

Let's think iteratively step by step about the algorithm. **^** is a pointer
```	
1. result = 0; i=0; j=0
    xyz   xzyxz   x == x then move both i and j.
    ^     ^
2. result=0;i=1;j=1
    xyz	   xzyxz    y != z then move only i
     ^      ^
3. result=0;i=2;j=1
    xyz	   xzyxz    z == z then move both i and j.
      ^     ^   
Note: after moving i is out of bound. We should increment result var and move i back to 0.	   

4. 	 result=1;i=0;j=2
    xyz	   xzyxz    x != y then move only i
    ^        ^   
5. 	 result=1;i=1;j=2
    xyz	   xzyxz    y == y then move both i and j.
     ^       ^   	
6. 	 result=1;i=2;j=3
    xyz	   xzyxz    z != x then move only i
      ^       ^   	  
Note: after moving i is out of bound. We should increment result var and move i back to 0.	   

7. result=2;i=0;j=3
    xyz	   xzyxz    x == x then move both i and j.
    ^         ^  
6. 	 result=2;i=1;j=4
    xyz	   xzyxz    y != z then move only i
     ^         ^   	 	
7. 	 result=2;i=2;j=4
    xyz	   xzyxz    z == z then move both i and j. Notice that j is out of bound => return result + 1.
      ^        ^   		 
```
Code:
```
func shortestWay(source,target string) int {
    result := 0
    //i for source, j for target
    i,j:=0,0
    //for check if j isn't changed after i go to 0 then return -1
    prevJ := 0
    for j < len(target) {
        if source[i] == target[j]{
            i++
            j++
        }else{
            i++
        }
        
        //handle if i out of bound
        if i > len(source) - 1 {
            if prevJ == j {
                //it means that j isn't changed
                return -1
            }
            
            i = 0
            result++
            prevJ = j
        }
    }
    
    //check if we found the result not at the last character in source.
    //in this case we haven't increased result yet, but we should since result started from 0
    // and doesn't take into account first pass
    if i > 0 {
        result++
    }
    
    return result
}
```