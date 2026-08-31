# Easy 18 lines C++, 16 lines Python

**Author:** StefanPochmann
**Votes:** 246
**Link:** [https://leetcode.com/problems/basic-calculator/solutions/62344/](https://leetcode.com/problems/basic-calculator/solutions/62344/)

---

Keep a global running total and a stack of signs (+1 or -1), one for each open scope. The "global" outermost sign is +1.

- Each number consumes a sign.
- Each `+` and `-` causes a new sign.
- Each `(` duplicates the current sign so it can be used for the first term inside the new scope. That's also why I start with `[1, 1]` - the global sign 1 and a duplicate to be used for the first term, since expressions start like `3...` or `(...`, not like `+3...` or `+(...`.
- Each `)` closes the current scope and thus drops the current sign.

Also see the example trace below my programs.

**C++:**

    int calculate(string s) {
        int total = 0;
        vector<int> signs(2, 1);
        for (int i=0; i<s.size(); i++) {
            char c = s[i];
            if (c >= '0') {
                int number = 0;
                while (i < s.size()  &&  s[i] >= '0')
                    number = 10 * number + s[i++] - '0';
                total += signs.back() * number;
                signs.pop_back();
                i--;
            }
            else if (c == ')')
                signs.pop_back();
            else if (c != ' ')
                signs.push_back(signs.back() * (c == '-' ? -1 : 1));
        }
        return total;
    }

**Python:**

    def calculate(self, s):
        total = 0
        i, signs = 0, [1, 1]
        while i < len(s):
            c = s[i]
            if c.isdigit():
                start = i
                while i < len(s) and s[i].isdigit():
                    i += 1
                total += signs.pop() * int(s[start:i])
                continue
            if c in '+-(':
                signs += signs[-1] * (1, -1)[c == '-'],
            elif c == ')':
                signs.pop()
            i += 1
        return total

**Example trace:**

Here's an example trace for input `3-(2+(9-4))`.

      remaining   sign stack      total
    3-(2+(9-4))   [1, 1]            0
     -(2+(9-4))   [1]               3
      (2+(9-4))   [1, -1]           3
       2+(9-4))   [1, -1, -1]       3
        +(9-4))   [1, -1]           1
         (9-4))   [1, -1, -1]       1
          9-4))   [1, -1, -1, -1]   1
           -4))   [1, -1, -1]      -8
            4))   [1, -1, -1, 1]   -8
             ))   [1, -1, -1]      -4
              )   [1, -1]          -4
                  [1]              -4

If you want to see traces for other examples, you can add this at the start inside the loop and after the loop (that's for the Python solution, where it's all easier):

    print '%11s   %-16s %2d' % (s[i:], signs, total)