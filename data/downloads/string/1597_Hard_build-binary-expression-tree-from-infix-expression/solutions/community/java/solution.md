# Almost identical to 772. Basic Calculator III

**Author:** lcgod
**Votes:** 86
**Link:** [https://leetcode.com/problems/build-binary-expression-tree-from-infix-expression/solutions/867995/](https://leetcode.com/problems/build-binary-expression-tree-from-infix-expression/solutions/867995/)

---

[772. Basic Calculator III](https://leetcode.com/problems/basic-calculator-iii/)

```java
class Solution {
  public int calculate(final String s) {
    Stack<Integer> nums = new Stack<>(); // stores nums
    Stack<Character> ops = new Stack<>(); // stores operators and parentheses

    for (int i = 0; i < s.length(); ++i) {
      final char c = s.charAt(i);
      if (c == ' ')
        continue;
      if (Character.isDigit(c)) {
        int num = c - '0';
        while (i + 1 < s.length() && Character.isDigit(s.charAt(i + 1))) {
          num = num * 10 + (s.charAt(i + 1) - '0');
          ++i;
        }
        nums.push(num);
      } else if (c == '(') {
        ops.push(c);
      } else if (c == ')') {
        while (ops.peek() != '(')
          nums.push(calculate(ops.pop(), nums.pop(), nums.pop()));
        ops.pop(); // remove '('
      } else { // c == '+' || c == '-' || c == '*' || c == '/'
        while (!ops.isEmpty() && compare(ops.peek(), c))
          nums.push(calculate(ops.pop(), nums.pop(), nums.pop()));
        ops.push(c);
      }
    }
    while (!ops.isEmpty())
      nums.push(calculate(ops.pop(), nums.pop(), nums.pop()));

    return nums.peek();
  }

  private int calculate(char op, int b, int a) {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
    }
    throw new IllegalArgumentException();
  }

  // return true if op1 is a operator and priority(op1) >= priority(op2)
  boolean compare(char op1, char op2) {
    if (op1 == '(' || op1 == ')')
      return false;
    return op1 == '*' || op1 == '/' || op2 == '+' || op2 == '-';
  }
}
```

[1597. Build Binary Expression Tree From Infix Expression](https://leetcode.com/problems/build-binary-expression-tree-from-infix-expression/)

```java
class Solution {
  public Node expTree(String s) {
    Stack<Node> nodes = new Stack<>(); // stores nodes (new Node(ch))
    Stack<Character> ops = new Stack<>(); // stores operators and parentheses

    for (final char c : s.toCharArray())
      if (Character.isDigit(c)) {
        nodes.push(new Node(c));
      } else if (c == '(') {
        ops.push(c);
      } else if (c == ')') {
        while (ops.peek() != '(')
          nodes.push(buildNode(ops.pop(), nodes.pop(), nodes.pop()));
        ops.pop(); // remove '('
      } else { // c == '+' || c == '-' || c == '*' || c == '/'
        while (!ops.isEmpty() && compare(ops.peek(), c))
          nodes.push(buildNode(ops.pop(), nodes.pop(), nodes.pop()));
        ops.push(c);
      }

    while (!ops.isEmpty())
      nodes.push(buildNode(ops.pop(), nodes.pop(), nodes.pop()));

    return nodes.peek();
  }

  private Node buildNode(char op, Node right, Node left) {
    return new Node(op, left, right);
  }

  // return true if op1 is a operator and priority(op1) >= priority(op2)
  boolean compare(char op1, char op2) {
    if (op1 == '(' || op1 == ')')
      return false;
    return op1 == '*' || op1 == '/' || op2 == '+' || op2 == '-';
  }
}
```