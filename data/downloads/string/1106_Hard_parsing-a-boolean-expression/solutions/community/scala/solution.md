# Scala, simple left-to-right scan with recursive parsing, runtime 27ms / 100%

**Author:** VPuuska
**Votes:** 0
**Link:** [https://leetcode.com/problems/parsing-a-boolean-expression/solutions/5941301/](https://leetcode.com/problems/parsing-a-boolean-expression/solutions/5941301/)

---

# Intuition & Approach

Left-to-right scan with recursive parsing of subexpressions. The recursive parsing function needs to know what index to start parsing from, named `ind`. It needs to return not just the value of the subexpression, but also the index at which the subexpression ended / the index from which to keep parsing.

If the (sub)expression starts with `t`/`f`, then just return `true`/`false` and `ind+1`.

If the (sub)expression starts with `!`, then parse the following subexpression. Return _not_ it's value and the returned index + 1.

If the (sub)expression starts with `&`/`|`, then parse subexpressions until the next character to keep parsing from is not `,` or `(`. Return the `AND`/`OR` of all subexpressions and the last returned index + 1.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$ due to call stack

# Code
```scala []
object Solution {
  def parseBoolExpr(expression: String): Boolean = {
    // `parse` returns: (value of (sub)expression starting at `ind`, index to keep parsing from)
    def parse(ind: Int): (Boolean, Int) =
      expression(ind) match
        case 't' => (true, ind + 1)
        case 'f' => (false, ind + 1)
        case '!' =>
          val (res, parsed_to) = parse(ind + 2)
          (!res, parsed_to + 1)
        case '&' =>
          var parsed_to = ind + 1
          var res = true
          while expression(parsed_to) == ',' || expression(parsed_to) == '(' do
            val (subexpr, next_parsed_to) = parse(parsed_to + 1)
            res = res && subexpr
            parsed_to = next_parsed_to
          (res, parsed_to + 1)
        case '|' =>
          var parsed_to = ind + 1
          var res = false
          while expression(parsed_to) == ',' || expression(parsed_to) == '(' do
            val (subexpr, next_parsed_to) = parse(parsed_to + 1)
            res = res || subexpr
            parsed_to = next_parsed_to
          (res, parsed_to + 1)
        case _ => ???
    parse(0)._1
  }
}

```