# Readable, extendable, scalable and yet performant solution

**Author:** user7422BO
**Votes:** 1
**Link:** [https://leetcode.com/problems/regular-expression-matching/solutions/2094430/](https://leetcode.com/problems/regular-expression-matching/solutions/2094430/)

---

This a solution I believe is a well balance between performant, readability and extensibility. 

This solution "compiles" the regex into token streams, and foreach token perform its match;
 hence the compiled token stream itself in reusable in real life systems, you only pay the compilation cost once. 
 
One can easily extend this solution to support the entire regex specification by extending the `Token` trait

In fact, you can even take advantage of SMP by allocating a thread pool to perform branch matching whenever
branching is needed, for example encountering any zero or more and one or more tokens.

```

object Solution {
    
  import scala.annotation.tailrec

  sealed trait Token {
    def isMatch(s: List[Char]): Option[List[Char]]
  }

  object Token {
    def compile(sum: List[Token], p: List[Char]): List[Token] = {
      p match {
         /* this is cheating, the better way is ofc to parse the next token first, and make it a zero-or-more token*/
        case '.' :: '*' :: tail => Repeat(AnyToken, compile(Nil, tail).reverse) :: sum
        case h :: '*' :: tail => Repeat(Defined(h), compile(Nil, tail).reverse) :: sum
        case '.' :: tail => compile(AnyToken :: sum, tail)
        case h :: tail => compile(Defined(h) :: sum, tail)
        case Nil => sum
      }
    }
  }

  case object AnyToken extends Token {
    def isMatch(s: List[Char]): Option[List[Char]] = {
      s match {
        case Nil => None
        case _ :: tail => Some(tail)
      }
    }
  }

case class Repeat(token: Token, branch: List[Token]) extends Token {
    def isMatch(s: List[Char]): Option[List[Char]] = {
      /* recursive match */
      @tailrec
      def rMatch(ss: List[Char]): Option[List[Char]] = {

        matchList(ss, branch) match {
          case None => token.isMatch(ss) match {
            case None => None
            case Some(sss) => rMatch(sss)
          }
          case Some(Nil) => Some(Nil)
          case _ => None
        }
      }

      rMatch(s)
    }
  }

  case class Defined(c: Char) extends Token {
    def isMatch(s: List[Char]): Option[List[Char]] = {
      s match {
        case h :: t if h == c => Some(t)
        case _ => None
      }
    }
  }

  @tailrec
  def matchList(input: List[Char], tokens: List[Token]): Option[List[Char]] = {
        tokens match {
          case Nil => if (input.isEmpty) Some(Nil) else None
          case head :: tail =>
            haed.isMatch(input) match {
              case None => None
              case Some(next) =>
                matchList(next, tail)
            }
        }
  }
    
  def isMatch(s: String, p: String): Boolean = {
    val tokens = Token.compile(Nil, p.toList).reverse
    matchList(s.toList, tokens) == Some(List.empty)
  }
}
```