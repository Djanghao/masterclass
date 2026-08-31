# Go/C O(n) 0ms, 2.2MB/5.9MB (100%/100%), Swift 8 ms

**Author:** vashik
**Votes:** 13
**Link:** [https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/990678/](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/990678/)

---

Go:
```
func countStudents(students []int, sandwiches []int) int {
    var counters [2]int
	// count zeros and ones in students
    for i := 0; i < len(students); i++ {
        counters[students[i]]++
    }
	// go over the sandwiches queue
    for i := 0; i < len(sandwiches); i++ {
        if counters[sandwiches[i]] == 0 {
            break  // stop if there is no student of the kind left
        }
        counters[sandwiches[i]]--  // decrement number of students of the kind
    }
    // return number of students left
	return counters[0] + counters[1]
}
```
C:
```
int countStudents(int* students, int studentsSize, int* sandwiches, int sandwichesSize){
    int i, ctr[2] = {0, 0};
    // count zeros and ones in students
    for (i = 0; i < studentsSize; i++)
        ctr[students[i]]++;
    // go over the sandwiches queue
    for (i = 0; i < sandwichesSize; i++) {
        if (ctr[sandwiches[i]] == 0)
            break;  // stop if there is no student of the kind left
        ctr[sandwiches[i]]--;  // decrement number of students of the kind
    }
    // return number of students left
	return ctr[0] + ctr[1];
}
```
Swift:
```
class Solution {
    func countStudents(_ students: [Int], _ sandwiches: [Int]) -> Int {
        var ctrs: [Int] = [0, 0]
        // count zeros and ones in students
        ctrs[1] = students.reduce(0, +)
        ctrs[0] = students.count - ctrs[1]
        // go over the sandwiches queue
        for s in sandwiches {
            if ctrs[s] == 0 {
                break  // stop if there is no student of the kind left
            }
            ctrs[s] -= 1  // decrement number of students of the kind
        }
        // return number of students left
        return Int(max(ctrs[0], ctrs[1]))
    }
}
```