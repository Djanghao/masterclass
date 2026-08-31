# Scala immutable solution with recursion

**Author:** dustin10
**Votes:** 1
**Link:** [https://leetcode.com/problems/brace-expansion-ii/solutions/346044/](https://leetcode.com/problems/brace-expansion-ii/solutions/346044/)

---

This solution might not be optimal but here was the thinking I was going with when coming up with this solution.

What we want to do is breakup the expression into a series of pipeline steps that we can combine together to get all the results. 

We will create each pipeline by grouping the "{...}" subexpressions into a single pipeline.
Within each pipeline we will break up the "," expressions as discrete unions within the pipeline step. If the union contains a subexpression we will recursively rerun the algorithm.

We will get the final concatinated strings by using each entry in the discrete union of the pipeline step added with the next pipeline step and so own until we get to the end.

For example "{a,b}f{c,{d,e}}gh" turns into five pipeline steps
1. {a,b} => a or b
2. f => f
3. {c,{d,e}} => c or d or e
4. g
5. h

For results of afcgh, afdgh, afegh, bfcgh, bfdgh, bfegh

```
  object Solution {
    def braceExpansionII(expression: String): List[String] = {
      def toPipelineSteps(index: Int, openBraceCount: Int, subExpression: String, returnValue: List[String]): List[String] = {
        if (index >= expression.length) {
          if (subExpression != "") returnValue :+ subExpression
          else returnValue
        }
        else {
          expression(index) match {
            case '{' =>
              toPipelineSteps(index + 1, openBraceCount + 1, subExpression + '{', returnValue)
            case '}' if openBraceCount == 1 => //everything up to this closing brace is a pipeline step
              toPipelineSteps(index + 1, openBraceCount - 1, "", returnValue :+ subExpression.drop(1))
            case '}' =>
              toPipelineSteps(index + 1, openBraceCount - 1, subExpression + '}', returnValue)
            case c if openBraceCount == 0 => //single character not in braces by itself is a pipeline step
              toPipelineSteps(index + 1, openBraceCount, "", returnValue :+ c.toString)
            case c =>
              toPipelineSteps(index + 1, openBraceCount, subExpression + c, returnValue)
          }
        }
      }

      def calculateUnions(expression: String, index: Int, openBraceCount: Int, subExpression: String, returnValue: List[String]): List[String] = {
        if (index >= expression.length) {
          if (subExpression == "") returnValue
          else if (subExpression.contains('{')) returnValue ++ braceExpansionII(subExpression)
          else returnValue :+ subExpression
        }
        else {
          expression(index) match {
            case ',' if openBraceCount == 0 =>
              val updatedReturnValue: List[String] = returnValue ++ {
                if (subExpression.contains('{')) braceExpansionII(subExpression)
                else List(subExpression)
              }
              calculateUnions(expression, index + 1, 0, "", updatedReturnValue)
            case c =>
              val updatedOpenBraceCount = openBraceCount + {
                if (c == '{') 1
                else if (c == '}') -1
                else 0
              }
              calculateUnions(expression, index + 1, updatedOpenBraceCount, subExpression + c, returnValue)
          }
        }
      }

      def fromPipelineSteps(pipelineSteps: List[Set[String]]): Set[String] = {
        pipelineSteps.headOption match {
          case Some(currentPipeline: Set[String]) =>
            for {
              current <- currentPipeline
              rest <- fromPipelineSteps(pipelineSteps.tail)
            } yield current + rest
          case None =>
            Set("")
        }
      }

      val pipelineSteps: List[Set[String]] = toPipelineSteps(0, 0, "", List.empty)
        .map((expression: String) => {
          calculateUnions(expression, 0, 0, "", List.empty).toSet
        })

      fromPipelineSteps(pipelineSteps).toList.sorted
    }
  }
```