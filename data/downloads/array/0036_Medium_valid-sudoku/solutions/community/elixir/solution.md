# Elixir input is malformed

**Author:** j4p3
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-sudoku/solutions/1530682/](https://leetcode.com/problems/valid-sudoku/solutions/1530682/)

---

Elixir can represent text as Strings, Charlists, Binaries, or Bitstrings. In the text of the Elixir example, it appears it's being represented as a String - and if you copy that example text to your machine, it will be read as lists of strings.

This means comparisons like `current_square == "."` will evaluate to `true`.

However, the inputs being passed to the Leetcode solution are different. They're being passed as code points - the decimal representation of a unicode character - so that you need to use comparisons like `current_square == 46`.