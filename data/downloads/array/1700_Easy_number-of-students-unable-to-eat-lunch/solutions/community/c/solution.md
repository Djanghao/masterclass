# C++ | Simple Queue Approach Explanation | 0ms , 100% Faster

**Author:** cyber-venom003
**Votes:** 70
**Link:** [https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/1438018/](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/1438018/)

---

## Logic Discussion:

From the problem description, we can clearly say we have to use queue data structure to simulate the given situation.
Our answer would be the size of queue in end. The main challenge is, **How to find when we have stop for iterations of queue**.

The logical comes here in our mind is, to keep track of rotations, i.e. how many front elements of queue have been popped and pushed again and again. Once our rotations would be equal to size of queue, that means, now there are the students in queue, which won't be able to have lunch.

Also, when a student gets the sandwich of his choice, we have to set rotations to 0. Because that means size of queue has been changed and we have to re-count the rotations.

## Approach:

- Declare a queue and push all the student choices in it.
- Initialize a rotations variable with 0 and a counter variable (i) with 0.
- Traverse the queue until it is empty and rotations is less than size of queue.
	- If front value of queue == sandwiches at i index
		- Pop it from queue, increase the counter variable i and set rotations = 0.
	- Else take it from queue, push it back and pop it from front. Increase the number of rotations.
- Return size of queue. 

My submission:

```
class Solution {
public:
    int countStudents(vector<int>& students, vector<int>& sandwiches) {
        int size = students.size();
        queue<int> student_choice;
        for(int i = 0 ; i < size ; ++i){
            student_choice.push(students[i]);
        }
        int rotations = 0 , i = 0;
        while(student_choice.size() && rotations < student_choice.size()){
            if(student_choice.front() == sandwiches[i]){
                student_choice.pop();
                i++;
                rotations = 0;
            } else {
                int choice = student_choice.front();
                student_choice.pop();
                student_choice.push(choice);
                rotations++;
            }
        }
        return student_choice.size();
    }
};
```
**PLEASE UPVOTE IF YOU LIKED IT, IT REALLY MOTIVATES :)**