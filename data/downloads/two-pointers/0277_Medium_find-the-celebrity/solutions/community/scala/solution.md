# scala code with detailed explanation

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-celebrity/solutions/4354480/](https://leetcode.com/problems/find-the-celebrity/solutions/4354480/)

---

# Approach

1. Finding a Candidate:
- Initialize a variable candidate to 0. This variable will potentially hold the index of the celebrity.
- Iterate over the people from 1 to n - 1. For each person i:
    - If the candidate knows i, then candidate cannot be a celebrity. Set candidate to i.

2. Verifying the Candidate:

- Check if the candidate really is a celebrity by ensuring two conditions:
    - All other people know the candidate.
    - The candidate does not know any other people.
- If any of these conditions is not met, return -1 indicating there is no celebrity.

3. Return the Candidate:
- If the candidate passes the verification, return the candidate's index. Otherwise, return -1.

# Code
```
/* The knows API is defined in the parent class Relation.
      def knows(a: Int, b: Int): Boolean = {} */

class Solution extends Relation {

  // Function to find the celebrity
  def findCelebrity(n: Int): Int = {
    var candidate = 0

    // Finding a candidate for celebrity
    for (i <- 1 until n) {
      if (knows(candidate, i)) {
        candidate = i
      }
    }

    // Verifying the candidate
    for (i <- 0 until n) {
      if (i != candidate && (knows(candidate, i) || !knows(i, candidate))) {
        return -1 // No celebrity found
      }
    }

    // Candidate is the celebrity
    candidate
  }
}




```