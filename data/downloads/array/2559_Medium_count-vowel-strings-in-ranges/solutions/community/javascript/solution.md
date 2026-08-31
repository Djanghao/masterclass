# ❇ count-vowel-strings👌 🏆O(N)❤️ Javascript❤️ Memory👀91.30%🕕 Meaningful Vars✍️ 🔴🔥 ✅ 👉 💪🙏

**Author:** anurag-sindhu
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/4022567/](https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/4022567/)

---

Time Complexity: O(N)
Space Complexity: O(N)
```
const vowels = { a: true, e: true, i: true, o: true, u: true };
var vowelStrings = function(words, queries) {
    for (let index = 0; index < words.length; index++) {
        if (vowels[words[index][0]] && vowels[words[index][words[index].length - 1]]) {
            if (!index) {
                words[index] = 1;
            } else {
                words[index] = 1 + words[index - 1];
            }
        } else {
            if (!index) {
                words[index] = 0;
            } else {
                words[index] = words[index - 1];
            }
        }
    }
    const output = [];
    for (let index = 0; index < queries.length; index++) {
        const [startIndex, endIndex] = queries[index];
        let len = words[endIndex] - (words[startIndex - 1] || 0);
        output.push(len);
    }
    return output;
};
```