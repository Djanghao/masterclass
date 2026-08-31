# ✅✅🔥 Beats 98.93% || Extra Easy Solution with Explanation.

**Author:** Umair__Saad
**Votes:** 132
**Link:** [https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/4990164/](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/4990164/)

---

**\uD83D\uDC4D Upvote if you enjoyed the solution! \uD83D\uDC4D**
# Intuition:
We have a queue of students with their sandwich preferences and a stack of sandwiches to be served. The goal is to serve sandwiches to students based on their preferences. If a student's preferred sandwich is available, serve it; otherwise, move to the next student. The process stops when all sandwiches are served or when there are no more students to serve.

# Approach:
Count the number of students preferring each type of sandwich.
Serve sandwiches to students based on their preferences.
Keep track of remaining sandwiches to be served.
Return the count of remaining sandwiches, representing the number of students unable to eat lunch.

# Complexity Analysis:
Time Complexity: O(n), where n is the number of students. We iterate through the students and sandwiches arrays once.
Space Complexity: O(1) in terms of auxiliary space as we use a constant amount of space to store counts.
# Code
``` java []
class Solution {
    public int countStudents(int[] students, int[] sandwiches) {
        int[] counts = new int[2];
        for (int student : students) counts[student]++;
        
        int remaining = sandwiches.length;
        for (int sandwich : sandwiches) {
            if (counts[sandwich] == 0) break;
            if (remaining-- == 0) break;
            counts[sandwich]--;
        }
        
        return remaining;
    }
}

```
``` C++ []
#include <vector>
using namespace std;

class Solution {
public:
    int countStudents(vector<int>& students, vector<int>& sandwiches) {
        vector<int> counts(2, 0);
        for (int student : students)
            counts[student]++;

        int remaining = sandwiches.size();
        for (int sandwich : sandwiches) {
            if (counts[sandwich] == 0)
                break;
            if (remaining == 0)
                break;
            counts[sandwich]--;
            remaining--;
        }

        return remaining;
    }
};
```
``` Python []
class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        counts = [0, 0]
        for student in students:
            counts[student] += 1

        remaining = len(sandwiches)
        for sandwich in sandwiches:
            if counts[sandwich] == 0:
                break
            if remaining == 0:
                break
            counts[sandwich] -= 1
            remaining -= 1
        
        return remaining

```
![upvoteee.PNG](./images/0.png)

**\uD83D\uDC4D Upvote if you enjoyed the solution! \uD83D\uDC4D**
