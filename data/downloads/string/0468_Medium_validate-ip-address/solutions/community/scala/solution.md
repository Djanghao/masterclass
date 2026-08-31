# scala FP solution with parser combinator

**Author:** Anamorphism
**Votes:** 3
**Link:** [https://leetcode.com/problems/validate-ip-address/solutions/690812/](https://leetcode.com/problems/validate-ip-address/solutions/690812/)

---

```
object Solution {
  def validIPAddress(IP: String): String = {
    parser
      .runP(IP.toList.map(_.toLower))
      .filter(x => x._2.isEmpty)
      .headOption match {
      case None => "Neither"
      case Some(x) =>
        x._1 match {
          case IPV4(_) => "IPv4"
          case IPV6(_) => "IPv6"
        }
    }
  }
  abstract class IP
  case class IPV4(v: String) extends IP
  case class IPV6(v: String) extends IP

  // a parser is a function that takes a list of characters as its argument, and returns a list of results. 
  case class Parser[+A](runP: List[Char] => List[(A, List[Char])]) {
    def map[B](f: A => B) =
      Parser(l =>
        runP(l) match {
          case Nil => Nil
          case xs  => xs.map(x => (f(x._1), x._2))
        }
      )

    def flatMap[B](f: A => Parser[B]) =
      Parser(l =>
        runP(l) match {
          case Nil => Nil
          case xs  => xs.flatMap(x => f(x._1).runP(x._2))
        }
      )
  }

 // The empty list of results denotes failure of a parser
  val fail = Parser(l => Nil)
  def succ[A](a: A): Parser[A] = Parser(l => List((a, l)))
  val item: Parser[Char] = Parser { l =>
    l match {
      case Nil     => Nil
      case x :: xs => List((x, xs))
    }
  }

  def isDigit(ch: Char): Boolean = ch >= '0' && ch <= '9'
  def isNoneZeroDigit(ch: Char): Boolean = ch >= '1' && ch <= '9'
  def isHex(ch: Char): Boolean = isDigit(ch) || ('a' <= ch && ch <= 'f')

  def sat(p: Char => Boolean): Parser[Char] =
    item.flatMap(x => if (p(x)) succ(x) else fail)
  def char(x: Char) = sat(ch => ch == x)

  def digit = sat(isDigit)
  def nonZero = sat(isNoneZeroDigit)
  def hex = sat(isHex)

  def or[A](p: Parser[A], q: Parser[A]): Parser[A] =
    Parser(l => {
      p.runP(l) ++ q.runP(l)
    })

  def repeat[A](p: Parser[A], n: Int): Parser[List[A]] =
    if (n == 1) {
      p.map(List(_))
    } else {
      for {
        x <- p
        xs <- repeat(p, n - 1)
      } yield x :: xs
    }

  def atMost[A](p: Parser[A], n: Int, l: Int): Parser[List[A]] =
    if (n > l) {
      or(repeat(p, n), atMost(p, n - 1, l))
    } else {
      if (n == 0) {
        succ(Nil)
      } else {
        repeat(p, l)
      }
    }

  def zero = char('0').map(_ => IPV4("0"))
  def nonZeroIpv4 =
    for {
      x <- nonZero
      xs <- atMost(digit, 2, 0)
      str = (x :: xs).mkString
      value = str.toInt
      s <- if (value >= 256) fail else succ(str)
    } yield IPV4(s)

  def ipv4Num = or(zero, nonZeroIpv4)
  def ipv6Num = atMost(hex, 4, 1).map(x => IPV6(x.mkString))

  val dot: Parser[(IPV4, IPV4) => IPV4] = for {
    _ <- char('.')
  } yield new Function2[IPV4, IPV4, IPV4] {
    override def apply(s1: IPV4, s2: IPV4): IPV4 = {
      IPV4(s1.v.concat(".").concat(s2.v))
    }
  }

  val colon: Parser[(IPV6, IPV6) => IPV6] = for {
    _ <- char(':')
  } yield {
    case (s1: IPV6, s2: IPV6) => {
      IPV6(s1.v.concat(":").concat(s2.v))
    }
  }

  def chainln[A](p: Parser[A], ops: Parser[(A, A) => A], n: Int): Parser[A] =
    for {
      x <- p
      fys <- repeat(for {
        f <- ops
        y <- p
      } yield (f, y), n)
    } yield fys.foldLeft(x) { case (acc, (g, i)) => g(acc, i) }

  val ipv4 = chainln(ipv4Num, dot, 3)
  val ipv6 = chainln(ipv6Num, colon, 7)
  val parser = or(ipv4, ipv6)
  
}

```