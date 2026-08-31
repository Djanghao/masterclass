# Recursive Racket Solution in O(n) Time

**Author:** user1969U
**Votes:** 0
**Link:** [https://leetcode.com/problems/student-attendance-record-i/solutions/6080325/](https://leetcode.com/problems/student-attendance-record-i/solutions/6080325/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is a recursive problem, and to reduce time and space complexity, I am using tail recursion here.
We notice that there are two key factors we need to keep track of:
1. the number of consecutive lates.
2. the number of total absences.

We therefore create a helper function with three arguements: 
1. A:  the total number of absences.
2. L: the current count of consecutive lates.
3. lst: the  string s converted to a list.

# Approach
<!-- Describe your approach to solving the problem. -->
We use a simple recursive approach on lists, proceeding as follows:

1. **Identify base case:** As with most recursive problems on lists, the base case here is when the list is empty.
2. **Handle the base case:** If the list is empty, we check whether the conditions are met: (and (< A 2) (< L 3)). If true, the student is eligible for the award, so we return true; otherwise, we return false.

3. **Recursive step:** We handle the first element and proceed with the rest of the list. We update the counters based on the current character:
- If it's 'A' (Absent), increment the total absences counter (A) and reset the consecutive lates counter (L) to 0.
- If it's 'L' (Late), increment the consecutive lates counter (L).
- If it's 'P' (Present), reset the consecutive lates counter (L) to 0 while keeping the absences counter (A) unchanged.

4.  **Early exit:** If the student has more than or equal to 2 absences or 3 consecutive lates at any point, we return false immediately to save computation time.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is O(n), where n is the number of characters in the string s. This is because we are processing each character exactly once.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1) since we are only maintaining a constant number of variables (A, L,lst), and the recursion is tail-recursive, not requiring additional stack space.

# Code
```racket []
(define/contract (check-record s)
  (-> string? boolean?)
  (helper 0 0 (string->list s)))

(define (helper A L lst)
  (cond
    [(empty? lst) (and (< A 2) (< L 3))]
    [(or (>= A 2) (>= L 3)) false] 
    [(equal? (first lst) #\\A) (helper (+ A 1) 0 (rest lst))] 
    [(equal? (first lst) #\\L) (helper A (+ L 1) (rest lst))]
    [(equal? (first lst) #\\P) (helper A 0 (rest lst))]))
```