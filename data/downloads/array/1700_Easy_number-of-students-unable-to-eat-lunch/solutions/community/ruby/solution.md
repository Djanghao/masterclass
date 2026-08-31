# Counting Approach ✅ | 99.85%🔥| DRY Run 🎯| Simple Easy to understand 💯Explained | Queue | Array

**Author:** Prathamesh18X
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/4991010/](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/4991010/)

---

# Code
```javascript []
var countStudents = function(students, sandwiches) {
    while (students.length > 0 && students.indexOf(sandwiches[0]) !== -1) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
        } else {
            students.push(students.shift());
        }
    }
    return students.length;
};

```
```python []
def countStudents(students, sandwiches):
    while students and sandwiches[0] in students:
        if students[0] == sandwiches[0]:
            students.pop(0)
            sandwiches.pop(0)
        else:
            students.append(students.pop(0))
    return len(students)
```
```java []
class Solution {
    public int countStudents(int[] students, int[] sandwiches) {
        int n = students.length;
        int m = sandwiches.length;
        while (n > 0 && contains(students, sandwiches[0])) {
            if (students[0] == sandwiches[0]) {
                removeFirstElement(students);
                removeFirstElement(sandwiches);
            } else {
                students = append(students, students[0]);
                removeFirstElement(students);
            }
            n--;
        }
        return n;
    }

    private boolean contains(int[] arr, int target) {
        for (int i : arr) {
            if (i == target) {
                return true;
            }
        }
        return false;
    }

    private void removeFirstElement(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
    }

    private int[] append(int[] arr, int element) {
        int[] newArr = new int[arr.length + 1];
        for (int i = 0; i < arr.length; i++) {
            newArr[i] = arr[i];
        }
        newArr[arr.length] = element;
        return newArr;
    }
}
```
```cpp []
#include <vector>
using namespace std;

int countStudents(vector<int>& students, vector<int>& sandwiches) {
    while (!students.empty() && find(students.begin(), students.end(), sandwiches[0]) != students.end()) {
        if (students[0] == sandwiches[0]) {
            students.erase(students.begin());
            sandwiches.erase(sandwiches.begin());
        } else {
            students.push_back(students[0]);
            students.erase(students.begin());
        }
    }
    return students.size();
}


```
```kotlin []
fun countStudents(students: MutableList<Int>, sandwiches: MutableList<Int>): Int {
    while (students.isNotEmpty() && students.contains(sandwiches[0])) {
        if (students[0] == sandwiches[0]) {
            students.removeAt(0)
            sandwiches.removeAt(0)
        } else {
            students.add(students[0])
            students.removeAt(0)
        }
    }
    return students.size
}

```
```ruby []
def count_students(students, sandwiches)
    while !students.empty? && students.include?(sandwiches[0])
        if students[0] == sandwiches[0]
            students.shift
            sandwiches.shift
        else
            students.push(students.shift)
        end
    end
    students.length
end

```
# \uD83D\uDD25DRY RUN 

| Iteration | Students       | Sandwiches      | Condition | Explanation                     |
|-----------|----------------|-----------------|-----------|---------------------------------|
| 0         | [1,1,1,0,0,1] | [1,0,0,0,1,1]   | true      | Sandwich found, shift both.    |
| 1         | [1,1,0,0,0,1] | [0,0,0,1,1]     | true      | Sandwich found, shift both.    |
| 2         | [1,0,0,0,1,1] | [0,0,1,1]       | true      | Sandwich found, shift both.    |
| 3         | [0,0,0,1,1]   | [0,1,1]         | true      | Sandwich found, shift both.    |
| 4         | [0,0,1,1]     | [1,1]           | true      | Sandwich found, shift both.    |
| 5         | [0,1,1]       | [1]             | true      | Sandwich found, shift both.    |
| 6         | [1,1]         | []              | true      | Sandwich found, shift both.    |
| 7         | [1]           | []              | true      | Sandwich found, shift both.    |
| 8         | []            | []              | false     | Loop ends, return students length. |

Output: 3


# Prerequisite\uD83C\uDFAF
For this problem, we are using an array as a queue.

## Array methods used inside problem :
1. #### Pop():
- The `pop()` method removes the *`last item of an array`*.
- The `pop()` method changes the original array.
- The `pop()` method returns the popped element.
2. #### IndexOf():

- The `indexOf()` method returns the position of the *`first occurrence of a value in an array`*.
- The `indexOf()` method returns -1 if the value is not found.
- The `indexOf()` method is used for searching an element in an array.
3. #### Append():
- The `append()` method adds an element at the end of the array.

# \u2600\uFE0FApproach\uD83D\uDCAF
1. While Loop:
   - Continue the loop as long as there are students in the queue `(students.length > 0)` and the first sandwich in the queue is available among the students `(students.indexOf(sandwiches[0]) !== -1)`.
   - This loop simulates serving sandwiches to students until there are no more sandwiches or no more students whose preferred sandwich is available.
2. If Condition:
   - If the first student's preferred sandwich matches the first sandwich in the queue, serve the sandwich to that student by removing them from both queues `(students.pop()` and `sandwiches.pop())`.
   - If not, move the student to the end of the queue `(students.append(students.pop()))` to wait for their preferred sandwich.
3. Return Length:
   - After the loop ends, return the length of the students queue, which indicates the number of students who couldn't get their preferred sandwiches.


# Complexity
- Time complexity: `O(m) + O(n)` ~ `O(m + n)` ~ `O(n)`

- Space complexity: `O(1)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


