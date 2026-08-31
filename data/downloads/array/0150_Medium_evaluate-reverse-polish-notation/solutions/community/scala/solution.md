# Scala pure FP

**Author:** squadgazzz
**Votes:** 3
**Link:** [https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/981844/](https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/981844/)

---

```
  def evalRPN(tokens: Array[String]): Int = {
    tokens
      .foldLeft(List.empty[Int]) {
        case (stack, str) =>
          str match {
            case "+" => (stack(1) + stack.head) :: stack.drop(2)
            case "*" => (stack(1) * stack.head) :: stack.drop(2)
            case "-" => (stack(1) - stack.head) :: stack.drop(2)
            case "/" => (stack(1) / stack.head) :: stack.drop(2)
            case num => Integer.parseInt(num) :: stack
          }
      }
      .head
  }
```