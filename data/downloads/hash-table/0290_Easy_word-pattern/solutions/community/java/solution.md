# 8 lines simple Java

**Author:** StefanPochmann
**Votes:** 419
**Link:** [https://leetcode.com/problems/word-pattern/solutions/73402/](https://leetcode.com/problems/word-pattern/solutions/73402/)

---

    public boolean wordPattern(String pattern, String str) {
        String[] words = str.split(" ");
        if (words.length != pattern.length())
            return false;
        Map index = new HashMap();
        for (Integer i=0; i<words.length; ++i)
            if (index.put(pattern.charAt(i), i) != index.put(words[i], i))
                return false;
        return true;
    }

I go through the pattern letters and words in parallel and compare the indexes where they last appeared.

**Edit 1:** Originally I compared the **first** indexes where they appeared, using `putIfAbsent` instead of `put`. That was based on [mathsam's solution](https://leetcode.com/discuss/36438/1-liner-in-python?show=39066#a39066) for the old [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) problem. But then [czonzhu's answer](https://leetcode.com/discuss/62374/9-lines-simple-java?show=62383#a62383) below made me realize that `put` works as well and why.

**Edit 2:** Switched from

        for (int i=0; i<words.length; ++i)
            if (!Objects.equals(index.put(pattern.charAt(i), i),
                                index.put(words[i], i)))
                return false;

to the current version with `i` being an `Integer` object, which allows to compare with just `!=` because there's no autoboxing-same-value-to-different-objects-problem anymore. Thanks to lap_218 for somewhat pointing that out in the comments.