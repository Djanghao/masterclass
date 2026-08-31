# Clean Java

**Author:** rexue70
**Votes:** 6
**Link:** [https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/2679201/](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/2679201/)

---

1. If there are some character \u201Ca\u201D \u2019 s in the string, they can be written on paper before anything else.
2. Every character in the string before the last \u201Ca\u201D should be written in reversed order.
3. After the robot writes every \u201Ca\u201D on paper, the same holds for other characters \u201Cb\u201D, \u201Dc\u201D, \u2026etc.

Be careful when we do a later character for example 'b', we should start after lastSeenOf \u2018a', due to all the character before a has already put into stack.
```
class Solution {
    public String robotWithString(String s) {
        Map<Character, Integer> lastSeen = new HashMap<>();
        for (int i = 0; i < s.length(); i++)
            lastSeen.put(s.charAt(i), i);
        Set<Integer> used = new HashSet<>();
        Stack<Character> stack = new Stack<>();
        StringBuilder sb = new StringBuilder();
        int preEnd = 0;
        for (char c = 'a'; c <= 'z'; c++) {
            while (!stack.isEmpty() && stack.peek() <= c) sb.append(stack.pop());
            if (!lastSeen.containsKey(c)) continue;
            int last = lastSeen.get(c);
            for (int i = preEnd; i <= last; i++) {
                char cur = s.charAt(i);
                if (used.add(i)) {
                    if (cur == c) sb.append(cur);
                    else stack.add(cur);
                }
            }
            preEnd = last + 1;
        }
        while (!stack.isEmpty()) {
            sb.append(stack.pop());
        }
        return sb.toString();
    }
}
```