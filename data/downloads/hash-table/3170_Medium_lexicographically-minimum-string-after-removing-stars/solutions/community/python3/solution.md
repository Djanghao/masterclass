# O(n) - min heap with indices vector || with DRY RUN

**Author:** SubBuffer
**Votes:** 48
**Link:** [https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5243299/](https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5243299/)

---

## Intuition 
Once we reduce the string, all the indices of the string **will get messed up**! So **DON'T reduce** the original string initially.
*Instead*, replace the elements with something other than English letters. I replaced them with __!__. 

## Needed Data Structures
I) save the characters in a _heap_, i.e. ```priority_queue<char>``` in C++, ```PriorityQueue<Character>``` in Java, ```PriorityQueue()``` in Python.

II) save the character indices in a _vector_ of _vector_, i.e. ```vector<vector<int>>``` in C++, ```ArrayList<ArrayList<Integer>>``` in Java, or ```[[]]``` in Python.

## Approach
Define a **priority queue (min heap)** to memorize what is *the smallest character*; save the indices of the characters in a different vector. This is to remove the highest index of the smallest character first. Otherwise, lexiographically, we will have a bigger string. Thus, build the priority_queue **comparison** rule and check the indices vector to make sure it is not empty. If index is empty, then pop from the heap as well.

## Complexity:
```
Time: O(n*log(26)) = O(n)  // O(log(26)) maintaining heap; O(n) to iterate the string
Space: O(26) + O(2*n) = O(n)  // O(26) heap; O(n) for indices vector and O(n) for result
```
## Code
<iframe src="https://leetcode.com/playground/F7mknzZA/shared" frameBorder="0" width="500" height="700"></iframe>

## Dry run `(skip if you understand the code)`
The dryrun below is valid for above __C++__ code. But for __Java__ and __Python__, I use a _HashSet_ instead of in-place string change, so for those two, the below dryrun is only good to an extent. For C++, it is accurate. If you have any problems, ask in the comments.

Suppose `s = "a   a   b  *   d   *  z   d  *"` , then the iterations according to the code is like the following: 
```
heap state initially: `{}`
indices vector state initially: `{{}, {} , {}, ....., {} , {}}`
```
**Iteration 1:**
```
    \uD83D\uDC47
s = "a   a   b   *   d   *  z   d  *"
```
```
heap: `{a\uD83D\uDC48}`                          
indices vector: `{{0\uD83D\uDC48}, {} , {} , {}, {}, ....., {} , {}}`
```
**Iteration 2:**
```
        \uD83D\uDC47
s = "a   a   b   *   d   *  z   d  *"
```
```
heap: `{a\uD83D\uDC48}`                          
indices vector: `{{0,1\uD83D\uDC48}, {} , {} , {}, {}, ....., {} , {}}`
```
**Iteration 3:**
```
            \uD83D\uDC47
s = "a   a   b   *   d   *  z   d  *"       
```
```
heap: `{a\uD83D\uDC48,b}`                          
indices vector: `{{0,1\uD83D\uDC48}, {2} , {} , {}, {}, ....., {} , {}}`
```
**Iteration 4 (star change):**
```
                \uD83D\uDC47
s = "a   a   b   *   d   *  z   d  *"
         \uD83D\uDC46(top of the min heap, remove "1" from iv)
```
Now, `s = "a ! b * d * z d *" `
```
heap: `{a\uD83D\uDC48, b}`                          
indices vector: `{{0\uD83D\uDC48}, {2} , {} , {}, {}, ....., {} , {}}`
```
**Iteration 5:**
```
                    \uD83D\uDC47
s = "a   !   b   *   d   *  z   d  *"
```
```
heap: `{a\uD83D\uDC48, b, d}`                          
indices vector: `{{0\uD83D\uDC48}, {2} , {} , {4}, {}, ....., {} , {}}`
```
**Iteration 6 (star change):**
```
                        \uD83D\uDC47
s = "a   !   b   *   d   *  z   d  *"
     \uD83D\uDC46(top of the min heap, remove "0" from iv, remove "a" from heap)
```
Now, `s = "! ! b * d * z d *" `
```
heap: `{b\uD83D\uDC48, d}`                          
indices vector: `{{}, {2\uD83D\uDC48} , {} , {4}, {}, ....., {} , {}}`
```
**Iteration 7:**
```
                           \uD83D\uDC47
s = "!   !   b   *   d   *  z   d  *"
```
```
heap: `{b\uD83D\uDC48, d, z}`                          
indices vector: `{{}, {2\uD83D\uDC48} , {} , {4}, {}, ....., {} , {6}}`
```
**Iteration 8:**
```
                              \uD83D\uDC47
s = "!   !   b  *   d   *  z   d  *"
```
```
heap: `{b\uD83D\uDC48, d, z}`                        
indices vector: `{{}, {2\uD83D\uDC48} , {} , {4,7}, {}, ....., {} , {6}}`
```
**Iteration 9 (star change):**
```
                                 \uD83D\uDC47
s = "!   !   b  *   d   *  z   d  *"
             \uD83D\uDC46(top of the min heap, remove "2" from iv, remove "b" from heap)
```
Now, `s = "! ! ! * d * z d *"`
```
heap: `{d\uD83D\uDC48, z}`                                           
indices vector: `{{}, {} , {} , {4,7\uD83D\uDC48}, {}, ....., {} , {6}}`
```
**Iteration Complete:**
```
s = "!   !   !  *   d   *  z   d  *"
                               \uD83D\uDC46(top of the min heap and indices vector, when we finish)
```
Now that we finished iterating thru the charachters, filter __!__ and __*__, the resultant string is `d z d`.

Final __states__ are:
```
heap: `{d\uD83D\uDC48, z}`                                           
indices vector: `{{}, {} , {} , {4,7\uD83D\uDC48}, {}, ....., {} , {6}}`
```