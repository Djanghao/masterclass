# ✔ Java Solution || Faster than 100% || Simple

**Author:** PoeticIvy302543
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/2115470/](https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/2115470/)

---

Java Code:
```
    public int minimumBuckets(String street) {
        var list = street.split("");
        var count = 0;
        for (int i = 0; i < list.length; i++) {
            if (list[i] == "H") {
                if (i==0) {
                    if (list.length>1 && list[1] == ".") {
                        count++;
                        list[1] = "B";
                    }
                    if (list.length==1 || list[1]=="H") return -1;
                }
                else if (i==list.length-1) {
                    if (list[i-1] == ".") {
                        count++;
                        list[i-1] = "B";
                    }
                    if (list[i-1] == "H") return -1;
                }
                else {
                    if (list[i-1]=="H" && list[i+1]=="H") return -1;
                    if (list[i-1]!="B" && list[i+1]!="B") {
                        count++;
                        if (list[i+1]!="H") list[i+1] = "B";
                        else list[i-1] = "B";
                    }
                }
            }
        }
        return count;
    }
```