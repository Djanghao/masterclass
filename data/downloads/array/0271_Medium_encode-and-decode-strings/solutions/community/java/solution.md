# Java with "escaping"

**Author:** StefanPochmann
**Votes:** 132
**Link:** [https://leetcode.com/problems/encode-and-decode-strings/solutions/70402/](https://leetcode.com/problems/encode-and-decode-strings/solutions/70402/)

---

Double any hashes inside the strings, then use standalone hashes (surrounded by spaces) to mark string endings. For example:

    {"abc", "def"}    =>  "abc # def # "
    {'abc', '#def'}   =>  "abc # ##def # "
    {'abc##', 'def'}  =>  "abc#### # def # "

For decoding, just do the reverse: First split at standalone hashes, then undo the doubling in each string.

    public String encode(List<String> strs) {
        StringBuffer out = new StringBuffer();
        for (String s : strs)
            out.append(s.replace("#", "##")).append(" # ");
        return out.toString();
    }

    public List<String> decode(String s) {
        List strs = new ArrayList();
        String[] array = s.split(" # ", -1);
        for (int i=0; i<array.length-1; ++i)
            strs.add(array[i].replace("##", "#"));
        return strs;
    }

Or with streaming:

    public String encode(List<String> strs) {
        return strs.stream()
                   .map(s -> s.replace("#", "##") + " # ")
                   .collect(Collectors.joining());
    }

    public List<String> decode(String s) {
        List strs = Stream.of(s.split(" # ", -1))
                          .map(t -> t.replace("##", "#"))
                          .collect(Collectors.toList());
        strs.remove(strs.size() - 1);
        return strs;
    }