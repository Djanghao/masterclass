# A recursive Java solution (284 ms)

**Author:** 2guotou
**Votes:** 562
**Link:** [https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/66328/](https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/66328/)

---

    public class Solution {
        public List<Integer> diffWaysToCompute(String input) {
            List<Integer> ret = new LinkedList<Integer>();
            for (int i=0; i<input.length(); i++) {
                if (input.charAt(i) == '-' ||
                    input.charAt(i) == '*' ||
                    input.charAt(i) == '+' ) {
                    String part1 = input.substring(0, i);
                    String part2 = input.substring(i+1);
                    List<Integer> part1Ret = diffWaysToCompute(part1);
                    List<Integer> part2Ret = diffWaysToCompute(part2);
                    for (Integer p1 :   part1Ret) {
                        for (Integer p2 :   part2Ret) {
                            int c = 0;
                            switch (input.charAt(i)) {
                                case '+': c = p1+p2;
                                    break;
                                case '-': c = p1-p2;
                                    break;
                                case '*': c = p1*p2;
                                    break;
                            }
                            ret.add(c);
                        }
                    }
                }
            }
            if (ret.size() == 0) {
                ret.add(Integer.valueOf(input));
            }
            return ret;
        }
    }