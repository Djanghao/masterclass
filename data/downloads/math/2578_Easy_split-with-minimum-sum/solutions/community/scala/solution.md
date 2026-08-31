# Efficient Scala solution with 75% Compute

**Author:** mpractice
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-with-minimum-sum/solutions/5833368/](https://leetcode.com/problems/split-with-minimum-sum/solutions/5833368/)

---

# Intuition
I started with a Python strategy to solve the problem and then converted it to Scala. This approach allowed me to leverage the strengths of both languages and arrive at an efficient solution in Scala.

# Approach
1. **Convert the number to a string and then to a list of characters:**  This step helps in easily sorting and manipulating the digits.
2. **Sort the list of characters:** Sorting the digits ensures that we can create the smallest possible numbers
3. **Partition the list into two lists based on the index:** By altern alternating the digits between two lists, we can balance the numbers.
4. **Extract the characters from the lists and convert them back to integers:** This step reconstructs the numbers from the sorted digits
5. **Sum the two numbers:** Finally, we add the two numbers to get the result.
6. 
# Complexity
- Time complexity:
O(n) - We traverse and sort the string once.

- Space complexity:
 O(n) - We use additional space to store the characters and the two lists.

# Code
```scala []
object Solution {
    def splitNum(num: Int): Int = {
        val listNum = num.toString.toList.sorted

        val (listNum1, listNum2) = listNum.zipWithIndex.partition(_._2 % 2 == 0)

        val num1 = listNum1.map(_._1).mkString.toInt
        val num2 = listNum2.map(_._1).mkString.toInt

        num1 + num2
    }
}
```