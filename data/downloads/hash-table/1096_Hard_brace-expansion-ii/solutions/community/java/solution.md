# Java 10 ms

**Author:** Jainsahaab
**Votes:** 6
**Link:** [https://leetcode.com/problems/brace-expansion-ii/solutions/2583555/](https://leetcode.com/problems/brace-expansion-ii/solutions/2583555/)

---

```
class Solution {
    public List<String> braceExpansionII(String expression) {
        Set<String> s = new HashSet<>();
        Queue<String> q = new LinkedList<>();
        q.add(expression);

        while (!q.isEmpty()) {
            String temp = q.poll();
            int left = -1, right = 0;
            while (right < temp.length() && temp.charAt(right) != '}') {
                if (temp.charAt(right) == '{') {
                    left = right;
                }
                right++;
            }
            if (left == -1) {
                s.add(temp);
                continue;
            }
            String start = temp.substring(0, left);
            String end = temp.substring(right + 1, temp.length());

            String words[] = temp.substring(left + 1, right).split(",");
            for (String w : words) {
                q.add(new StringBuilder().append(start).append(w).append(end).toString());
            }
        }

        List<String> list = new ArrayList<>(s);
        Collections.sort(list);
        return list;
    }
}
```