# Easy Explanation

**Author:** Riddler_9
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-k-digits/solutions/1780337/](https://leetcode.com/problems/remove-k-digits/solutions/1780337/)

---

****
/*
    Exapmle : 
    I/P : 
    num = 1432219
    k=3
    total=n-k=7-3=4
    what is total ?
    total-> final result `MAX` length
    Why Max??
    because result may have leading Zero's :
    e.g-> [0,2,0,0]
    
    arr[]=1 4 3 2 2 1 9
          1 - - - 2 1 9
    o/p ->1 2 1 9 
    
    Explanation -->
    
    result = |?|?|?|?|
    index's   0 1 2 3
    
    
    for 0th index ->
    
    min(1 4 3 2) = 1
    result = |1|?|?|?|
    index's   0 1 2 3
              ^
    for 1st index ->
    
    min(4 3 2 2) = 2
    result = |1|2|?|?|
    index's   0 1 2 3
                ^
    for 2nd index ->
    
    min(2 1) = 1
    result = |1|2|1|?|
    index's   0 1 2 3
                  ^
    for 2nd index ->
    
    min(9) = 9
    result = |1|2|1|9|
    index's   0 1 2 3
                    ^
    hence Final result --> 1 2 1 9
        
    Another Example - :
    
    num = 4536034
    k=3
    total=7-3=4
    4 5 3 6 0 3 4
    min(4 5 3 6)=3
    min(6 0)=0
    min(3)=3
    min(4)=4
    final result = | 3 | 0 | 3 | 4 |
                     0   1   2   3
	
	Now for the code ... you can do that after understanding the Problem statment..
*/**