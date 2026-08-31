# [Python] Divide and Conquer, explained

**Author:** kcsquared
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-score-of-students-solving-math-expression/solutions/1486295/](https://leetcode.com/problems/the-score-of-students-solving-math-expression/solutions/1486295/)

---

**Idea**

* Use divide and conquer to recursively split the equation into two smaller equations.

* **Guess which operation will be performed last**. Evaluate all possible values from the equation to the left of this operand, and then to the right of the operand. Combine the two with either multiplication or addition.
* Store all combined values in a `set` to avoid duplication; since student answers are all `<= 1000`, filter out any 'too large' values as well. Cache all results.

The actual problem isn't that hard; IMO the hardest part is working out what the question is asking. 'Evaluated using any order of operations' really just means: choose any permutation of all the positions of ` + ` or ` * `  operators; apply the operations in that order.

**Complexity**
Let `n` be the number of operations (so there's `n+1` digits), and `M` be the max value allowed (1000 here). There are `~ n^2` subsegments of operations, and evaluating all values in a subsegment takes `n * M^2` time, for an `O(n^3 M^2)` time algorithm (and a linear term in `|students answers|`).

**Python**

```python
class Solution:

    def scoreOfStudents(self, s: str, answers: List[int]) -> int:
        correct_ans = eval(s)
        standard_form = []
        for x in s:
            if x == '+':
                standard_form.append(0)
            elif x == '*':
                standard_form.append(1)
            else:
                standard_form.append(int(x))

        @lru_cache(None)
        def divide_and_conquer(equation: Tuple[int]) -> Set[int]:
            if len(equation) == 1:
                return {equation[0]}

            if len(equation) == 3:
                if equation[1] == 0:  # Add
                    return {equation[0] + equation[-1]}
                else:  # Multiply
                    return {equation[0] * equation[-1]}

            my_answers = set()
            for split_point in range(1, len(equation), 2):
                left_answers = divide_and_conquer(equation[:split_point])
                right_answers = divide_and_conquer(equation[split_point + 1:])

                if equation[split_point] == 0:  # Add
                    my_answers |= {x + y for x in left_answers for y in right_answers if x + y <= 1000}
                else:  # Multiply
                    my_answers |= {x * y for x in left_answers for y in right_answers if x * y <= 1000}

            return my_answers

        incorrect_answers = divide_and_conquer(tuple(standard_form))
        total_grade = 0
        for x in answers:
            if x == correct_ans:
                total_grade += 5
            elif x in incorrect_answers:
                total_grade += 2
        return total_grade
```