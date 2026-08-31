# Simple solution in Java

**Author:** OPyrohov
**Votes:** 55
**Link:** [https://leetcode.com/problems/flip-game/solutions/73902/](https://leetcode.com/problems/flip-game/solutions/73902/)

---

We start from `i = 1` and check whether current and previous characters of the input string equals to `+`. If true, then add substring to a list: characters before previous one (concatenating with `--`) and characters after the current character.

    public List<String> generatePossibleNextMoves(String s) {
        List<String> list = new ArrayList<String>();
        for (int i = 1; i < s.length(); i++) {
            if (s.charAt(i) == '+' && s.charAt(i - 1) == '+') {
                list.add(s.substring(0, i - 1) + "--" + s.substring(i + 1, s.length()));
            }
        }
        return list;
    }