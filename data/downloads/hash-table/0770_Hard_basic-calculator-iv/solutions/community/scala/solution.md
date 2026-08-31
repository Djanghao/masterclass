# Scala FP: state machine (per input char) with tailrecs

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/basic-calculator-iv/solutions/5247439/](https://leetcode.com/problems/basic-calculator-iv/solutions/5247439/)

---

# Code
```
object Solution {
  type Symbol = String
  case class Term(coefficient: Int = 1, vars: List[String] = Nil, isEmpty: Boolean = false) {
    def *(symbol: Symbol): Term = copy(vars = symbol :: vars, isEmpty = false)
    def *(int: Int): Term = copy(coefficient = coefficient * int, isEmpty = false)
    def +(term: Term): Term = copy(coefficient = coefficient + term.coefficient)
    def *(polynom: Polynom): Polynom = simplify(polynom.map(pt => Term(pt.coefficient * coefficient, pt.vars ++ vars)))
    def sorted: Term = copy(vars = vars.sorted)
    val degree = vars.length
  }
  val EmptyTerm = Term(isEmpty = true)
  type Polynom = List[Term]

  case class State(input: List[Char], result: Polynom = Nil, polynom: Polynom = List(), term: Term = EmptyTerm, symbol: Symbol = "") {
    def empty: State = State(input)

    def dropInputChar: State = copy(input = input.tail)

    def addCharToSymbol(ch: Char): State = copy(symbol = s"$symbol$ch")

    def closeSymbol(implicit ints: Map[Symbol, Int]): State =
      if (symbol == "") this else copy(term = ints.get(symbol).orElse(symbol.toIntOption).fold(term * symbol)(term * _), symbol = "")

    def closeTerm(implicit ints: Map[Symbol, Int]): State = {
      val cs = closeSymbol
      if (cs.term.isEmpty) cs else cs.copy(polynom = if (cs.polynom.isEmpty) List(cs.term) else cs.term * cs.polynom, term = EmptyTerm)
    }

    def closePolynom(implicit ints: Map[Symbol, Int]): State = {
      val ct = closeTerm
      ct.copy(result = simplify(ct.result ++ ct.polynom), polynom = List())
    }

    def negateTerm: State = copy(term = term * -1)

    def *(state: State): State = copy(input = state.input, polynom = if (polynom.isEmpty) state.result else state.result.flatMap(_ * polynom))

    def output: List[String] = result.filterNot(_.coefficient == 0).map(term => (term.coefficient +: term.vars).mkString("*"))
  }

  @annotation.tailrec def lsLT(ls1: List[String], ls2: List[String]): Boolean =
    if (ls1.isEmpty) ls2.nonEmpty else if (ls2.isEmpty) false else ls1.head < ls2.head || ls1.head == ls2.head && lsLT(ls1.tail, ls2.tail)
  
  implicit val listOfStringsOrdering: Ordering[List[String]] = Ordering.fromLessThan[List[String]](lsLT)

  def simplify(polynom: Polynom): Polynom =
    polynom.map(_.sorted).groupMapReduce(_.vars)(identity)(_ + _).values.toList.sortBy(_.vars).sortBy(-_.degree)

  def basicCalculatorIV(expression: String, evalVars: Array[String], evalInts: Array[Int]): List[String] = {
    implicit val ints: Map[Symbol, Int] = evalVars.zip(evalInts).toMap

    def nextParseState(state: State): State =
      if (state.input.head == ')')
        state.closePolynom
      else {
        val nextState = state.input.head match {
          case ' ' => state
          case '(' => state.closeTerm * nextParseState(state.dropInputChar.empty)
          case '+' => state.closePolynom
          case '-' => state.closePolynom.negateTerm
          case '*' => state.closeTerm
          case ch => state.addCharToSymbol(ch)
        }
        nextParseState(nextState.dropInputChar)
      }

    nextParseState(State(expression.toList :+ ')')).output
  }
}

```