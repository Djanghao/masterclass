# DOUBT ON TESTCASE - "0 1 0 0 1 0 0 1 1 0 1" -> How to solve ?

**Author:** sp27
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/1254706/](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/1254706/)

---


# Testcase : "0 1 0 0 1 0 0 1 1 0 1"
Current : "0 1 0 0 1 0 0 1 1 0 1"
shifting 1 character to the end : 0 1 0 (*0*) 1 0 0 1 1 0 1 -> 0 1 0 1 0 0 1 1 0 1 0 
Current : 0 1 0 1 0 0 1 1 0 1 0  
shifting	 :		   0 1 0 1 0 (*0*) 1 1 0 1 0 -> 0 1 0 1 0  1 1 0 1 0 0
Current : 0 1 0 1 0 1 1 0 1 0 0
Shifting : 0 1 0 1 0 1 (*1*) 0 1 0 0 -> 0 1 0 1 0 1 0 1 0 0 1
current : 0 1 0 1 0 1 0 1 0 0 1
Shifting : 0 1 0 1 0 1 0 1 0 (*0*) 1 -> 0 1 0 1 0 1 0 1 0 1 0 

The string has become alternating and total swaps are 0 
but the output says its 2 
How is it possible ? 


