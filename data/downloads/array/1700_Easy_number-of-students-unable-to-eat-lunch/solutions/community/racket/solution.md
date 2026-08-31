# Racket ( recursive ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/4994548/](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/4994548/)

---

### Base Case
If the list of sandwiches is empty, return the total number of students left in the queue since no more sandwiches are available.

### Recursive Steps
Check the type of the top sandwich and the number of students with each preference in the queue.
If no student prefers the top sandwich, stop and return the count of all remaining students since they can't get their preferred sandwich.
Otherwise, remove one student who gets their preferred sandwich and the top sandwich from the stack, then recursively process the remaining students and sandwiches.
```
(define/contract (count-students students sandwiches)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer?)
  (if (empty? sandwiches)
      (length students)
      (let* ((available-sandwich (car sandwiches))
             (remaining-sandwiches (cdr sandwiches))
             (students-round (count zero? students))
             (students-square (- (length students)
                                 students-round)))
        (cond ((= available-sandwich 0)
               (if (zero? students-round)
                   (+ students-round students-square)
                   (count-students
                    (append (make-list (sub1 students-round) 0)
                            (make-list students-square 1))
                    remaining-sandwiches)))
              ((= available-sandwich 1)
               (if (zero? students-square)
                    (+ students-round students-square)
                    (count-students
                     (append (make-list students-round 0)
                             (make-list (sub1 students-square) 1))
                     remaining-sandwiches)))))))
```