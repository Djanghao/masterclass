# 2578: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 5
**Link:** [https://leetcode.com/problems/split-with-minimum-sum/solutions/3256224/](https://leetcode.com/problems/split-with-minimum-sum/solutions/3256224/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. a = [int(x) for x in str(num)]: This converts the input integer num into a list of integers a where each element of the list represents a digit of the number num.

2. pq = PriorityQueue(): This creates an instance of the PriorityQueue class from the queue module. This class represents a priority queue data structure that stores elements in a sorted order based on their priority. In this case, the priority is given by the value of the digits.

3. num1 = "" and num2 = "": These create two empty strings to store the digits of the number after they have been sorted.

4. for i in a: pq.put(i): This adds each digit in the list a to the priority queue pq.

5. while not pq.empty():: This starts a loop that continues until the priority queue pq is empty.

6. num1 += str(pq.get()): This appends the smallest digit in the priority queue pq to the string num1.

7. if not pq.empty(): num2 += str(pq.get()): This checks if the priority queue pq is still not empty. If it is not empty, it appends the next smallest digit to the string num2.

8. if num2: return int(num1) + int(num2): This checks if the string num2 is not empty. If it is not empty, it converts both num1 and num2 to integers and returns their sum. Otherwise, it returns the integer value of num1.

In summary, the splitNum function sorts the digits of the input integer in ascending order and then splits them into two numbers by alternating digits. Finally, it returns the sum of the two numbers if they are both non-empty, otherwise, it returns the integer value of the first number.


# Complexity
- Time complexity:
100%

- Space complexity:
100%

# Code
```
from queue import PriorityQueue

class Solution:
    def splitNum(self, num: int) -> int:
        a = [int(x) for x in str(num)]
        pq = PriorityQueue()
        num1 = ""
        num2 = ""
        for i in a:
            pq.put(i)

        while not pq.empty():
            num1 += str(pq.get())
            if not pq.empty():
                num2 += str(pq.get())

        if num2:
            return int(num1) + int(num2)
        else:
            return int(num1)

```