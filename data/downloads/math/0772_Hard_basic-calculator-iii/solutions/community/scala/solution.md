# Scala ASTTree solution

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/basic-calculator-iii/solutions/3631069/](https://leetcode.com/problems/basic-calculator-iii/solutions/3631069/)

---

# Intuition
TBA

# Approach
TBA

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```
  import scala.collection.mutable
  import scala.util.chaining._

  // AST TREE WITH TOKENIZER, PARSER and INTERPRETER
  object Solution {

    def calculate(s: String): Int = {
      (new Parser(s))
        .parse()
        .evaluate()
    }
    
    sealed trait ASTExp {
      def evaluate(): Int
    }
    
    case class ASTConstantNode(value: Int) extends ASTExp {
      override def evaluate(): Int = value
    }

    case class ASTNode(left: ASTExp, right: ASTExp, operator: Char) extends ASTExp {
      override def evaluate(): Int = operator match {
        case '+' => left.evaluate() + right.evaluate()
        case '-' => left.evaluate() - right.evaluate()
        case '*' => left.evaluate() * right.evaluate()
        case '/' => left.evaluate() / right.evaluate()
      }
    }

    sealed trait Token

    case class Unary(token: Token) extends Token

    case class Numeric(value: Int) extends Token

    case class Operator(value: Char) extends Token

    case class ScopedExpression(value: String) extends Token

    class Tokenizer(s: String) {
      var pointer = 0

      private def eof(): Boolean = {
        pointer == s.length
      }

      def getNextToken: Option[Token] = {
        if (eof()) {
          return None
        }

        // empty spaces
        while (!eof() && s(pointer) == ' ') {
          pointer += 1
        }

        val buffer = new mutable.StringBuilder()

        // read numbers
        while (!eof() && s(pointer) >= '0' && s(pointer) <= '9') {
          buffer.append(s(pointer))
          pointer += 1
        }
        if (buffer.nonEmpty) {
          return Some(Numeric(buffer.toString.toInt))
        }

        // read operators
        if (!eof() && (s(pointer) == '+' || s(pointer) == '-' || s(pointer) == '*' || s(pointer) == '/')) {
          return Some(Operator(s(pointer))).tap { _ =>
            pointer += 1
          }
        }

        // read expressions
        if (!eof() && s(pointer) == '(') {
          pointer += 1
          var opens = 1
          var closed = 0
          while (closed < opens) {
            if (s(pointer) == '(') {
              opens += 1
            }
            if (s(pointer) == ')') {
              closed += 1
            }
            if (closed != opens) {
              buffer.append(s(pointer))
            }
            pointer += 1
          }
        }
        if (buffer.nonEmpty) {
          return Some(ScopedExpression(buffer.toString))
        }

        None
      }
    }

    class Parser(s: String) {
      val tokenizer = new Tokenizer(s)
      var lookAhead: Option[Token] = tokenizer.getNextToken

      def eat(): Option[Token] = {
        lookAhead.tap { _ =>
          lookAhead = tokenizer.getNextToken
        }
      }

      def tokenToASTExp(token: Token): ASTExp = {
        token match {
          case Unary(token) => ASTNode(tokenToASTExp(token), ASTConstantNode(-1), '*')
          case Numeric(value) => ASTConstantNode(value)
          case ScopedExpression(value) => (new Parser(value)).parse()
          case _ => throw new Exception("invalid")
        }
      }

      def parse(): ASTExp = {
        var left = eat()
        var operator = eat()
        var astNode: ASTExp = null

        (left, operator) match {
          // unary
          case (Some(Operator(op)), Some(token)) if op == '-' =>
            left = Some(Unary(token))
            operator = eat()
            // unary with single number
            if (operator.isEmpty) {
              return tokenToASTExp(Unary(token))
            }
          // normal case
          case (Some(_), Some(Operator(_))) =>
          // single number
          case (Some(token1), None) => return tokenToASTExp(token1)
          case _ => throw new Exception("invalid")
        }

        // look for next operator
        while (operator.nonEmpty) {
          val right = eat()
          (left, right, operator, astNode) match {
            // the first operation
            case (Some(l), Some(r), Some(Operator(op)), _) =>
              astNode = ASTNode(tokenToASTExp(l), tokenToASTExp(r), op)
              left = None
            // all other operations
            // prioritized operators
            case (None, Some(r), Some(Operator(op)), n: ASTNode) if (n.operator == '+' || n.operator == '-') && (op == '/' || op == '*')  =>
              astNode = ASTNode(n.left, ASTNode(n.right, tokenToASTExp(r), op), n.operator)
            // regular operators
            case (None, Some(r), Some(Operator(op)), n: ASTNode)  =>
              astNode = ASTNode(n, tokenToASTExp(r), op)
            case _ => throw new Exception("invalid")
          }
          operator = eat()
        }
        astNode
      }
    }
  }
```