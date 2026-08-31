# 7 lines simple Java, O(n)

**Author:** StefanPochmann
**Votes:** 492
**Link:** [https://leetcode.com/problems/repeated-dna-sequences/solutions/53855/](https://leetcode.com/problems/repeated-dna-sequences/solutions/53855/)

---

    public List<String> findRepeatedDnaSequences(String s) {
        Set seen = new HashSet(), repeated = new HashSet();
        for (int i = 0; i + 9 < s.length(); i++) {
            String ten = s.substring(i, i + 10);
            if (!seen.add(ten))
                repeated.add(ten);
        }
        return new ArrayList(repeated);
    }