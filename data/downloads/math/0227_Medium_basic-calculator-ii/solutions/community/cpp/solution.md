# 17 lines C++, easy, 20 ms

**Author:** StefanPochmann
**Votes:** 319
**Link:** [https://leetcode.com/problems/basic-calculator-ii/solutions/63004/](https://leetcode.com/problems/basic-calculator-ii/solutions/63004/)

---

If you don't like the `44 - op` ASCII trick, you can use `op == '+' ? 1 : -1` instead. And wow, I didn't know C++ has `or`. I'm a Python guy and wrote that out of habit and only realized it after getting this accepted :-)

    int calculate(string s) {
        istringstream in('+' + s + '+');
        long long total = 0, term = 0, n;
        char op;
        while (in >> op) {
            if (op == '+' or op == '-') {
                total += term;
                in >> term;
                term *= 44 - op;
            } else {
                in >> n;
                if (op == '*')
                    term *= n;
                else
                    term /= n;
            }
        }
        return total;
    }