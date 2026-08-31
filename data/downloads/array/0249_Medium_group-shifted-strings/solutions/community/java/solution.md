# 1-4 lines in Java

**Author:** StefanPochmann
**Votes:** 68
**Link:** [https://leetcode.com/problems/group-shifted-strings/solutions/67459/](https://leetcode.com/problems/group-shifted-strings/solutions/67459/)

---

Not sure I did it as good as it can be, as I'm still a beginner at Java streaming. If you can improve this, I'll be happy to see how.

    public List<List<String>> groupStrings(String[] strings) {
        return new ArrayList(Stream.of(strings).collect(Collectors.groupingBy(
            s -> s.chars().mapToObj(c -> (c - s.charAt(0) + 26) % 26)
                  .collect(Collectors.toList())
        )).values());
    }