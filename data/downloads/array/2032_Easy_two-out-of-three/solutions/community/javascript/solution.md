# 2032. Two Out of Three

**Author:** pgmreddy
**Votes:** 8
**Link:** [https://leetcode.com/problems/two-out-of-three/solutions/1514507/](https://leetcode.com/problems/two-out-of-three/solutions/1514507/)

---

---

Hope it is simple to understand.

---

    var twoOutOfThree = function (nums1, nums2, nums3) {
        let ans = new Set();

        let set1 = new Set();
        for (let n of nums1) {
            set1.add(n);
        }

        let set2 = new Set();
        for (let n of nums2) {
            set2.add(n);
            if (set1.has(n)) {
                ans.add(n);
            }
        }
        for (let n of nums3)
            if (set1.has(n) || set2.has(n)) {
                ans.add(n);
            }

        return [...ans];
    };

---
