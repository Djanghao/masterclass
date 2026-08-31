# Key insights & approach (no code; just explanation)

**Author:** 206jko
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-ways-to-separate-numbers/solutions/2497196/](https://leetcode.com/problems/number-of-ways-to-separate-numbers/solutions/2497196/)

---

**Note** this note isn't perfect. I'm too tired to review this after spending days on this problem.

## Key insight (the "A-HA!" moment)

Given a set of comma-separated number lists in a solution, every number is at least as long as the previous number. So instead of trying to insert commas into a string, we can build the string up from length 1, and look back at the solutions to the substring leading up to the current digit.

Seconly, only if the previous number has the same length do we bother to compare the value.

Lastly, for any solution set, the lists end with numbers that are substring of the original string. For example, if you're given `12345`, whatever the solution is, they'll end with either `5`, `45`, `345`, `2345`, or `12345`.

Using these insights, we can build up the solution.

## The approach

Let's say we already have the solutions the digits `1`, `12`, `123`, and `1234` as follows:

```
**TABLE 1**
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
|   digits   | 1 | 12  | 123   |  1234    |
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
| solutions  | 1 | 12  | 123   |  1234    |
|            |   | 1,2 | 1,23  |  1,234   |
|            |   |     | 1,2,3 |  12,34   |
|            |   |     |       |  1,2,34  |
|            |   |     |       |  1,2,3,4 |
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
```

Now let's try to use the **TABLE 1** to build solution to `12345`.

As mentioned above, all the solutions will end in one of the 5 numbers:

- `5`
- `45`
- `345`
- `2345`
- `12345`

One of the key insights was that the previous item to any of these must be less than or equal in _length_ (never mind the values for now). That means for solution that ends in `5`, the previous numbers must all be length 1. When we look at **TABLE 1**, we see that of all the previously existing solutions, `1,2,3,4` ends in a number with length 1. Since `5` can come after it, we append it, and we have 1 solution that ends with `5`, which is `1,2,3,4,5`.

Now let's find solutions that end in `45`. For us to be able to append `45` at the end, the previous number be either 1 digit long, or 2 digits, which gives us `3` and `23`, respectively. That means we have `1,2,3`, and `1,23` to which we can append `45`. That gives us `1,2,3,45`, and `1,23,45`.

We follow the same pattern for `345`. Since no previous number can have length 3, we just look at lengths 2 and 1, which gives us `12`, and `2`, respectively. Appaneding `345` at the end gives us `12,345` and `1,2,345`.

The last two are trivial, so I'll just list them: `1,2345` and `12345`.

All together, we have 7 solutions:

- length 1 ending: `1,2,3,4,5`
- length 2 ending: `1,2,3,45`, `1,23,45`
- length 3 ending: `12,345`, `1,2,345`
- length 4 ending: `1,2345`
- length 5 ending: `12345`

With this information, we can update the above table to **TABLE 2**

```
**TABLE 2**
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
|   digits   | 1 | 12  | 123   |  1234    | 12345     |
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
| solutions  | 1 | 12  | 123   |  1234    | 12345     |
|            |   | 1,2 | 1,23  |  1,234   | 1,2345    |
|            |   |     | 1,2,3 |  12,34   | 12,345    |
|            |   |     |       |  1,2,34  | 1,2,345   |
|            |   |     |       |  1,2,3,4 | 1,23,45   |
|            |   |     |       |          | 1,2,3,45  |
|            |   |     |       |          | 1,2,3,4,5 |
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
```

## Devising the algorithm

We can see from **TABLE 2** that it's possible to come up with one column at a time for any given string of digits.

To shape this into an algorithm, we must employ one of the key insights above again, which is to recognize that each solution list has ends in a given number of digits. So if we organize **TABLE 2** by the number of digits the last item has, we get **TABLE 3**.

```
**TABLE 3**
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
| length | 1 | 12  | 123   |  1234    | 12345     |
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
|    1   | 1 | 1,2 | 1,2,3 |  1,2,3,4 | 1,2,3,4,5 |
|    2   |   | 12  | 1,23  |  12,34   | 1,23,45   |
|        |   |     | 123   |  1,2,34  | 1,2,3,45  |
|    3   |   |     |       |  1,234   | 1,2,345   |
|        |   |     |       |          | 12,345    |
|    4   |   |     |       |  1234    | 1,2345    |
|    5   |   |     |       |          | 12345     |
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
```

Let's try to reduce this table to just number of solutions for each substring of different lengths to produce **TABLE 4**.

```
**TABLE 4**
\u250C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2510
|   | 1 | 2 | 3 | 4 | 5 | << last digits
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2524
| 1 | 1 | 1 | 1 | 1 | 1 |
| 2 |   | 1 | 2 | 2 | 2 |
| 3 |   |   | 1 | 2 | 2 |
| 4 |   |   |   | 1 | 1 |
| 5 |   |   |   |   | 1 |
\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518
  ^ lengths of the last substring
```

Let's try to make some connections between **TABLE 3** and **TABLE 4**. In **TABLE 4**, if we look at the cell with column header 4, and row header 2, the value is 2. This means there are 2 solutions that end in `34` for string `1234`.

So if we look at the last column, the column values can be interpreted as follows. For substring that ends in 5, which is `12345`, the original string,

- there is 1 solution that ends in `5` (`1,2,3,4,5` )
- there are 2 solutions that ends in `45` (`1,23,45` and `1,2,3,45`)
- there are 2 solutions that ends in `345` (`1,2,345` and `12,345`)
- there is 1 solution that ends in `2345` (`1,2345` )
- there is 1 solution that ends in `12345` (`12345` )

By summing the count, we get a total of 7 solutions.

## Nuance & Notes

### On building next solution

Note that when you're building up on previous solutions, if the substring you're working on has length 2, then it'll build on previous solution that ended in with 2 digits _and_ 1 digit.

For example, if we look at the solutions that end in `45`, it builds on previous solution that ends in 2 digits, which is `23`, resulting in `1,23,45`. However it _also_ builds on solution that ends in 1 digit, `3`, giving us `1,2,3,45` as another solution.

So if the current substring

### Cases with "0"

As the problem states, any number that starts with `"0"` is invalid, so keep this in mind as you implement the algorithm.

### Transposed table

In my head, the table I used above makes sense, but I've seen some solutions in the discussion where the table colmn and row are switched. You can make this work. Do whatever makes more intuitive sense to you. In the end, the run time and space complexity are the same.

### When current substring is not greater than previous substring

Throughout this note, `12345` has been used for ease of understanding. However, if you have something like `789123`, then once you get to `123`, you'll find that it's not greater than `789`, so it won't count. Keep this in mind as you implement the algorithm.

## The algorithm

I'm not very good at pseudo algorithm, but it will look something like the following (asterisks with letters are notes that are explained after the algorithm):

```
let 'length' be the length of the string
let 'record' be a nested array of size 'length' x 'length' *A
  ...such that 'record[d][l]' stores the number of solutions
    for substring that ends in 'd' and has length 'l'

for each index 'i' of the string
  for each lengths 'l' of the string
    let 'd1' be the 'i'th digit of the string
    let 'd2' be the 'i - l'th digit of the string *B
    let 'n1' be string that ends with 'd1' and length 'l'
    let 'n2' be string that ends with 'd2' and length 'l'
    if 'n1' starst with "0"
      continue
    let 'count' be the sum of 'record[d2][m]',
      where 'm' is the numbers between 1 and 'l - 1', inclusive
    if 'n1' can come after 'n2',
      increment 'count' by 1
    store 'count' in 'record[d1][l]'

let 'count' be the sum of values in 'record[last digit][k]'
  where 'k' is the numbers between 1 and 'length', inclusive

return count

```

**Notes**

- \\*A: for simplicity's sake, let array have 1-based index
- \\*B: for example, if the string is '12345678', `'l'` is 3, and `'i'` is 7, then `'n1'` is `'567'`
  and `'d2'` is `'4'`.

## Tips

The problem doesn't specify that you can't turn the strings into numbers. Some languages, such as JavaScript (and TypeScript by extension) have arbitrary precision integers. In case of JavaScript the primitive type BigInt can practically unlimited digits, only limited by the hosting environment's memory. This means instead of comparing the substrings as strings, you can compare them as numbers, which is far faster.

For example, if we have `"1234567890123456789012345678901234567890"` (four repetitions of 1 through 0) and `"1234567890123456789012345678901234567891"` (previous number plus 1), comparing them as string would be O(n) time complexity. However, if we compare them as numbers, that's O(1) time complexity.

In JavaScript and TypeScript, you can get BigInt from string by simply running the following:

```javascript
const s = '1234567890123456789012345678901234567890'
const n = BigInt(s)

console.log(n) // 1234567890123456789012345678901234567890n << note the 'n' at the end; this denotes BigInt
```
