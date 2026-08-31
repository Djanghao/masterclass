# Scala monadic solution

**Author:** Anamorphism
**Votes:** 2
**Link:** [https://leetcode.com/problems/basic-calculator/solutions/1462064/](https://leetcode.com/problems/basic-calculator/solutions/1462064/)

---

```scala
object Solution {
  def calculate(s: String): Int = {
    val trimmed = s.replace(" ","")
    calculator.runP(trimmed.toList) match {
      case Fail(remaining) => throw new RuntimeException(remaining.mkString)
      case Success(r, _) => r
    }
  }

  sealed abstract class ParseResult[+R]
  private case class Success[R](r: R, remaining: List[Char]) extends ParseResult[R]
  private case class Fail(remaining: List[Char]) extends ParseResult[Nothing]

  private case class Parser[+A](runP: List[Char] => ParseResult[A]) { self =>
    def map[B](f: A => B): Parser[B] = new Parser[B](l => self.runP(l) match {
      case f@Fail(_) => f
      case Success(r, remaining) => Success(f(r), remaining)
    })

    def flatMap[B](f: A => Parser[B]) = new Parser[B](l => self.runP(l) match {
      case f@Fail(_) => f
      case Success(r, remaining) => f(r).runP(remaining)
    })
  }

  private val fail: Parser[Nothing] = Parser(l => Fail(l))
  private def unit[A](a: A): Parser[A] = Parser(l => Success(a, l))
  private def or[A](p1: Parser[A], p2: Parser[A]): Parser[A] = Parser(l => p1.runP(l) match {
    case s@Success(_, _) => s
    case _ => p2.runP(l)
  })
  private val item: Parser[Char] = Parser {
    case Nil => Fail(Nil)
    case c :: cs => Success(c, cs)
  }
  private def sat(p: Char => Boolean): Parser[Char] = for {
    c <- item
    r <- if(p(c)) unit(c) else fail
  } yield r

  private val digit = sat(ch => '0' <= ch && ch <= '9')
  private val lp = sat(_ == '(')
  private val rp = sat(_ == ')')
  private val plus: Parser[(Int, Int) => Int] = sat(_ == '+').map(_ => (v1, v2) => v1 + v2)
  private val minus: Parser[(Int, Int) => Int] = sat(_ == '-').map(_ => (v1, v2) => v1 - v2)
  private def many[A](p: Parser[A]): Parser[List[A]] = or(many1(p), unit(Nil))
  private def many1[A](p: Parser[A]): Parser[List[A]] = for {
    a <- p
    as <- many(p)
  } yield a :: as
  private val number: Parser[Int] = many1(digit).map(_.mkString.toInt)
  private val factor: Parser[Int] = or(number, for {
    _ <- lp
    e <- expression
    _ <- rp
  } yield e)
  private val term: Parser[Int] = or(factor, for {
    _ <- sat(_ == '-')
    n <- factor
  } yield n * -1)
  private def chainl[A](p: Parser[A], ops: Parser[(A, A) => A]): Parser[A] = for {
    l <- p
    fs <- many(for {
      op <- ops
      r <- p
    } yield (op, r))
  } yield fs.foldLeft(l) {case (acc, (f, y)) => f(acc, y) }

  private val expression: Parser[Int] = chainl(term, or(plus, minus))
  private val eof: Parser[Unit] = Parser {
    case Nil => Success((), Nil)
    case _ => Fail(Nil)
  }
  private val calculator: Parser[Int] = for {
    n <- expression
    _ <- eof
  } yield n
}
```