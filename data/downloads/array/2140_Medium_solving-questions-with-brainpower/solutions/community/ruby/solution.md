# Ruby iterative DP solution

**Author:** koujiokada
**Votes:** 1
**Link:** [https://leetcode.com/problems/solving-questions-with-brainpower/solutions/3514213/](https://leetcode.com/problems/solving-questions-with-brainpower/solutions/3514213/)

---

```
def most_points(questions)
  dp = Array.new(questions.size+1, 0)
  (questions.size-1).downto(0) {|i|
    points, brainpower = questions[i]
    dp[i] = [points + (i + brainpower > questions.size-2 ? 0 : dp[i+brainpower+1]), dp[i+1]].max
  }
  dp[0]
end
```