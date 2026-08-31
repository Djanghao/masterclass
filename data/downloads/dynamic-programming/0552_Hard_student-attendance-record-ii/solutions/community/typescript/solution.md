# Easy-To-Understand JavaScript Recursive Solution

**Author:** ledtherebelight8
**Votes:** 7
**Link:** [https://leetcode.com/problems/student-attendance-record-ii/solutions/1618816/](https://leetcode.com/problems/student-attendance-record-ii/solutions/1618816/)

---

The idea here is that when writing any recursive solution, we write down everything we need to keep track of, and then we make each of those things inputs to the function. This is a simpler way to solve any recursive problem (which most problems are) than what is explained in the official solution.

In this case, each day can be one of three things: "late," "absent," or "present." The record is only valid if `lates <= 2` and `absences <= 1`, so we check each of those cases. 

The solution is:
	the answer if we add a `late` to the record 
	+ the answer if we add an `absent` to the record 
	+ the answer if we add a `present` to the record
And then we remember the solution to smaller inputs with the `memo` function.

The answer can be different depending on each input, so since there are 3 inputs, we essentially create a 3D map of the tuple `(n, totalAbsences, consecutiveLates)`. There is a constant amount of work for each of these input states, so the total runtime is:
```
\u0398(n * max(totalAbsences) * max(consecutiveLates))
= \u0398(n * 2 * 3)
= \u0398(n)
```

(If we didn't remember the solution to answers with smaller inputs, the runtime would be \u0398(3\u207F) because at each step, the code branches into three separate calls to the recursive function.)

And the space complexity is our 3D map:
`\u0398(n)`

```
const memo = (fn) => {
  const map = new Map()
  return (...args) => {
    const key = JSON.stringify(args)
    if (map.has(key)) return map.get(key)
    return map.set(key, fn(...args)).get(key)
  }
}

const checkCanBeAbsent = absences => absences < 1
const tooManyAbsences = absences => absences >= 2

const checkCanBeLate = lates => lates < 2
const tooManyLates = lates => lates >= 3

const checkRecord = memo((n, totalAbsences = 0, consecutiveLates = 0) => {
  const canBeAbsent = checkCanBeAbsent(totalAbsences)
  const canBeLate = checkCanBeLate(consecutiveLates)

  if (tooManyLates(consecutiveLates)) return 0
  if (tooManyAbsences(totalAbsences)) return 0
  if (n === 1) return canBeAbsent && canBeLate ? 3 
    : canBeAbsent || canBeLate ? 2
    : 1
  
  const withLate = checkRecord(n - 1, totalAbsences, consecutiveLates + 1)
  const withAbsent = checkRecord(n - 1, totalAbsences + 1, 0)
  const withPresent = checkRecord(n - 1, totalAbsences, 0)
  
  return (withLate + withAbsent + withPresent) % 1000000007
})
```